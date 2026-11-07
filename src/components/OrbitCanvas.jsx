import React, { useEffect, useRef } from 'react';

export default function OrbitCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = document.getElementById('scene');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reducedMotion) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let animId;

    const points = [];
    const pointCount = 220;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < pointCount; i += 1) {
      const y = 1 - (i / (pointCount - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      points.push({
        x: Math.cos(theta) * radius,
        y,
        z: Math.sin(theta) * radius,
        seed: (i * 17) % 19,
      });
    }

    function resizeCanvas() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.7);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function drawOrbit() {
      if (!ctx || !canvas || document.hidden) {
        animId = requestAnimationFrame(drawOrbit);
        return;
      }
      frame += 0.0036;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.455;
      const rotY = frame + pointerX * 0.21;
      const rotX = 0.28 + pointerY * 0.14;

      const projected = points.map((point) => {
        const rx = point.x * Math.cos(rotY) - point.z * Math.sin(rotY);
        const rz = point.x * Math.sin(rotY) + point.z * Math.cos(rotY);
        const ry = point.y * Math.cos(rotX) - rz * Math.sin(rotX);
        const depth = point.y * Math.sin(rotX) + rz * Math.cos(rotX);
        const perspective = 1.2 / (1.85 - depth * 0.48);
        return {
          x: cx + rx * radius * perspective,
          y: cy + ry * radius * perspective,
          depth,
          scale: perspective,
          seed: point.seed,
        };
      });

      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i += 1) {
        const a = projected[i];
        if (a.depth < -0.05 || i % 2) continue;
        let neighbors = 0;
        for (
          let j = i + 1;
          j < Math.min(i + 12, projected.length) && neighbors < 3;
          j += 1
        ) {
          const b = projected[j];
          if (b.depth < 0.03) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < radius * 0.2) {
            ctx.strokeStyle = `rgba(203, 239, 139, ${0.07 + (a.depth + b.depth) * 0.07})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            neighbors += 1;
          }
        }
      }

      for (const point of projected) {
        const front = Math.max(0, (point.depth + 1) / 2);
        const dot = 0.55 + front * 1.15;
        const alpha = 0.17 + front * 0.56;
        ctx.beginPath();
        ctx.fillStyle =
          point.seed === 0
            ? `rgba(232, 241, 183, ${alpha})`
            : `rgba(200, 241, 105, ${alpha})`;
        ctx.arc(point.x, point.y, dot * point.scale, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = 'rgba(255, 248, 213, .86)';
      ctx.beginPath();
      ctx.arc(cx - radius * 0.79, cy - radius * 0.48, 1.8, 0, Math.PI * 2);
      ctx.fill();

      animId = requestAnimationFrame(drawOrbit);
    }

    resizeCanvas();
    drawOrbit();

    const handlePointerMove = (event) => {
      if (event.pointerType === 'touch' || !scene) return;
      const rect = scene.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      scene.style.setProperty('--tilt-x', `${-pointerY * 2.5}deg`);
      scene.style.setProperty('--tilt-y', `${pointerX * 3}deg`);
    };

    const handlePointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
      if (scene) {
        scene.style.setProperty('--tilt-x', '0deg');
        scene.style.setProperty('--tilt-y', '0deg');
      }
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    scene?.addEventListener('pointermove', handlePointerMove);
    scene?.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeCanvas);
      scene?.removeEventListener('pointermove', handlePointerMove);
      scene?.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return <canvas id="orbit-canvas" ref={canvasRef} aria-hidden="true" />;
}
