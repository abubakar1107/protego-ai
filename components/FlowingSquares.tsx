import React, { useRef, useEffect } from 'react';

const FlowingSquares: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    let w = window.innerWidth;
    let h = window.innerHeight;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    window.addEventListener('resize', resize);
    resize();

    const size = 5.5;
    const gap = 6;
    const displaceAmt = 4;
    const tiltAmt = 0.3;
    const bandWidth = 280;
    const waveDuration = 5.5;
    const spawnInterval = 3.0;

    interface Wave {
      cx: number; cy: number;
      dirX: number; dirY: number;
      age: number;
    }

    const spawnWave = (): Wave => {
      const a = (Math.random() * 0.7 - 0.35) * Math.PI;
      return {
        cx: w * (0.1 + Math.random() * 0.4),
        cy: h * (0.2 + Math.random() * 0.4),
        dirX: Math.cos(a), dirY: Math.sin(a),
        age: 0,
      };
    };

    let waves: Wave[] = [spawnWave()];
    let timeSinceSpawn = 0;
    let lastStamp = performance.now();

    const draw = (stamp: number) => {
      const dt = (stamp - lastStamp) / 1000;
      lastStamp = stamp;
      timeSinceSpawn += dt;

      for (const wv of waves) wv.age += dt;

      if (timeSinceSpawn >= spawnInterval) {
        waves.push(spawnWave());
        timeSinceSpawn = 0;
      }

      waves = waves.filter(wv => wv.age < waveDuration + 0.5);

      ctx.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const scrollFade = Math.max(0.03, 1 - scrollRef.current / (h * 4));

      const cols = Math.ceil(w / gap) + 1;
      const rows = Math.ceil(h / gap) + 1;
      const maxDim = Math.max(w, h) * 1.3;

      ctx.fillStyle = '#E07A5F';

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const baseX = col * gap;
          const baseY = row * gap;

          let intensity = 0;
          let bestAge = 0;
          for (const wv of waves) {
            const progress = wv.age / waveDuration;
            const travel = progress * maxDim;
            const frontX = wv.cx + wv.dirX * travel;
            const frontY = wv.cy + wv.dirY * travel;

            const projDist = wv.dirX * (baseX - wv.cx) + wv.dirY * (baseY - wv.cy);
            const frontDist = wv.dirX * (frontX - wv.cx) + wv.dirY * (frontY - wv.cy);
            const behind = frontDist - projDist;

            const edgeNoise = Math.sin(col * 0.09 + row * 0.14 + wv.age * 0.6) * 50
                            + Math.sin(col * 0.19 - row * 0.08 + wv.age * 0.4) * 35
                            + Math.sin(col * 0.05 + row * 0.22 - wv.age * 0.5) * 25;
            const adj = behind + edgeNoise;
            if (adj > 0 && adj < bandWidth) {
              const waveIntensity = Math.sin((adj / bandWidth) * Math.PI);
              if (waveIntensity > intensity) {
                intensity = waveIntensity;
                bestAge = wv.age;
              }
            }
          }

          const ripple = Math.sin(col * 0.25 + row * 0.15 + bestAge * 6);
          const dx = ripple * displaceAmt * intensity * 0.5;
          const dy = ripple * displaceAmt * intensity;
          const tilt = Math.cos(col * 0.25 + row * 0.15 + bestAge * 6) * tiltAmt * intensity;

          const x = baseX + dx;
          const y = baseY + dy;

          const baseAlpha = 0.12;
          const alpha = (baseAlpha + intensity * 0.20) * scrollFade;

          ctx.globalAlpha = alpha;
          ctx.save();
          ctx.translate(x, y);
          ctx.transform(1, tilt * 0.5, tilt, 1, 0, 0);
          ctx.fillRect(-size / 2, -size / 2, size, size);
          ctx.restore();
        }
      }

      let btnIntensity = 0;
      let btnDirX = 0;
      let btnDirY = 0;
      const btnX = w * 0.88;
      const btnY = 35;
      for (const wv of waves) {
        const progress = wv.age / waveDuration;
        const travel = progress * maxDim;
        const frontX = wv.cx + wv.dirX * travel;
        const frontY = wv.cy + wv.dirY * travel;
        const projDist = wv.dirX * (btnX - wv.cx) + wv.dirY * (btnY - wv.cy);
        const frontDist = wv.dirX * (frontX - wv.cx) + wv.dirY * (frontY - wv.cy);
        const behind = frontDist - projDist;
        if (behind > 0 && behind < bandWidth) {
          const wi = Math.sin((behind / bandWidth) * Math.PI);
          if (wi > btnIntensity) {
            btnIntensity = wi;
            btnDirX = wv.dirX;
            btnDirY = wv.dirY;
          }
        }
      }
      (window as any).__seerWaveBtn = { intensity: btnIntensity, dirX: btnDirX, dirY: btnDirY };

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default FlowingSquares;
