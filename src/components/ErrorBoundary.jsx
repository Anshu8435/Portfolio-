import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    const errorPayload = {
      timestamp: new Date().toISOString(),
      message: error?.message,
      stack: error?.stack,
      componentStack: errorInfo?.componentStack,
    };

    try {
      const logs = JSON.parse(localStorage.getItem('anshu_error_logs') || '[]');
      localStorage.setItem(
        'anshu_error_logs',
        JSON.stringify([errorPayload, ...logs.slice(0, 9)])
      );
    } catch {}

    console.error('Application error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-20 px-5 text-center text-[#efefe5] max-w-[600px] mx-auto font-sans">
          <span className="text-3xl">⚠️</span>
          <h2 className="text-xl font-semibold mt-4 mb-2">
            Something went wrong
          </h2>
          <p className="text-sm text-[#9b9c91] leading-relaxed">
            {this.state.error?.message || 'An unexpected error occurred.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="button button-lime mt-5 cursor-pointer px-5 py-2.5"
          >
            Reload page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
