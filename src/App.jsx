import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import JourneySection from './components/JourneySection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Toast from './components/Toast';
import AdminMessagesModal from './components/AdminMessagesModal';
import { useReveal } from './hooks/useReveal';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  const showToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2400);
  };

  useReveal([portfolioData]);

  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Ticker />
        <WorkSection projects={portfolioData.projects} />
        <AboutSection
          skills={portfolioData.skills}
          certifications={portfolioData.certifications}
        />
        <JourneySection timeline={portfolioData.timeline} />
        <ResumeSection
          resumeData={portfolioData.resume}
          profile={portfolioData.profile}
          showToast={showToast}
        />
        <ContactSection showToast={showToast} />
      </main>
      <Footer onOpenAdmin={() => setAdminOpen(true)} />
      <Toast message={toastMessage} visible={toastVisible} />
      <AdminMessagesModal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        showToast={showToast}
      />
    </>
  );
}
