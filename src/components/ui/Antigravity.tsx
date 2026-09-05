import React, { useRef, useEffect } from 'react';

interface AntigravityProps {
  count?: number;
  magnetRadius?: number;
  ringRadius?: number;
  waveSpeed?: number;
  waveAmplitude?: number;
  particleSize?: number;
  lerpSpeed?: number;
  color?: string;
  autoAnimate?: boolean;
  particleVariance?: number;
  rotationSpeed?: number;
  pulseSpeed?: number;
  particleShape?: 'capsule' | 'sphere' | 'box' | 'tetrahedron';
  fieldStrength?: number;
}

export const Antigravity: React.FC<AntigravityProps> = ({
  count = 300,
  magnetRadius = 200, 
  ringRadius = 100, 
  waveSpeed = 0.4,
  waveAmplitude = 20,
  particleSize = 2,
  lerpSpeed = 0.1,
  color = '#D7E2EA', // Matches portfolio theme
  autoAnimate = false,
  particleVariance = 1,
  rotationSpeed = 0.5,
  pulseSpeed = 3,
  particleShape = 'sphere',
  fieldStrength = 10
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const mouse = { x: width / 2, y: height / 2 };
    const virtualMouse = { x: width / 2, y: height / 2 };
    let lastMouseMove = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      lastMouseMove = Date.now();
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: count }).map(() => {
      return {
        t: Math.random() * 100,
        speed: 0.01 + Math.random() * 0.02,
        baseX: (Math.random() - 0.5) * width * 1.5 + width / 2,
        baseY: (Math.random() - 0.5) * height * 1.5 + height / 2,
        x: Math.random() * width,
        y: Math.random() * height,
        randomRadiusOffset: (Math.random() - 0.5) * 60,
        sizeOffset: Math.random()
      };
    });

    const startTime = Date.now();

    const render = () => {
      const now = Date.now();
      const elapsed = (now - startTime) / 1000;

      ctx.clearRect(0, 0, width, height);

      if (autoAnimate && now - lastMouseMove > 2000) {
        // Ponytail style: pure math pseudo-random wander (no heavy noise libraries)
        mouse.x = width / 2 + (Math.sin(elapsed * 0.3) + Math.sin(elapsed * 0.43)) * (width / 6);
        mouse.y = height / 2 + (Math.cos(elapsed * 0.25) + Math.sin(elapsed * 0.37)) * (height / 6);
      }

      virtualMouse.x += (mouse.x - virtualMouse.x) * 0.1;
      virtualMouse.y += (mouse.y - virtualMouse.y) * 0.1;

      const globalRotation = elapsed * rotationSpeed;

      ctx.fillStyle = color;

      particles.forEach(p => {
        p.t += p.speed;

        const dx = p.baseX - virtualMouse.x;
        const dy = p.baseY - virtualMouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = p.baseX;
        let targetY = p.baseY;
        let currentSize = particleSize;

        if (dist < magnetRadius) {
          const angle = Math.atan2(dy, dx) + globalRotation;
          const wave = Math.sin(p.t * waveSpeed + angle) * (waveAmplitude);
          const deviation = p.randomRadiusOffset * (10 / (fieldStrength + 0.1));
          const currentRingRadius = ringRadius + wave + deviation;

          targetX = virtualMouse.x + currentRingRadius * Math.cos(angle);
          targetY = virtualMouse.y + currentRingRadius * Math.sin(angle);
          
          const distFromRing = Math.abs(dist - ringRadius);
          let scaleFactor = 1 - (distFromRing / 100);
          scaleFactor = Math.max(0, Math.min(1, scaleFactor));
          currentSize = scaleFactor * (0.8 + Math.sin(p.t * pulseSpeed) * 0.2 * particleVariance) * particleSize * 2;
        }

        p.x += (targetX - p.x) * lerpSpeed;
        p.y += (targetY - p.y) * lerpSpeed;

        ctx.beginPath();
        if (particleShape === 'sphere' || particleShape === 'capsule') {
          ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        } else {
          ctx.rect(p.x - currentSize, p.y - currentSize, currentSize * 2, currentSize * 2);
        }
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, magnetRadius, ringRadius, waveSpeed, waveAmplitude, particleSize, lerpSpeed, color, autoAnimate, particleVariance, rotationSpeed, pulseSpeed, particleShape, fieldStrength]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        pointerEvents: 'none',
        zIndex: 1
      }} 
    />
  );
};
