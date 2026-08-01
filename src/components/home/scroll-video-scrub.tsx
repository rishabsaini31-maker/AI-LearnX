'use client';

import React, { useEffect, useRef } from 'react';

export function ScrollVideoScrub({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current || !videoRef.current) return;
      const container = containerRef.current;
      const v = videoRef.current;

      if (!v.duration || Number.isNaN(v.duration) || !isFinite(v.duration)) return;

      const { top, height } = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableDistance = height - viewportHeight;

      if (scrollableDistance <= 0) return;

      const scrolled = -top;
      const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);
      const targetTime = progress * v.duration;

      if (isFinite(targetTime) && !v.seeking && Math.abs(v.currentTime - targetTime) > 0.02) {
        v.currentTime = targetTime;
      }
    };

    const loop = () => {
      handleScroll();
      animationFrameId = requestAnimationFrame(loop);
    };

    const onLoadedMetadata = () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      handleScroll();
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    if (video.readyState >= 1) {
      handleScroll();
    }

    loop();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (video) {
        video.removeEventListener('loadedmetadata', onLoadedMetadata);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full z-10 bg-background" style={{ height: '300vh' }}>
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        />
        
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col justify-start pt-56 px-6 md:px-10 lg:px-24 pointer-events-none z-20">
          <div className="max-w-3xl">
            <h1 className="font-display-lg text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight drop-shadow-lg">
              Learn. Build. <span className="text-primary drop-shadow-lg">Earn.</span>
            </h1>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce pointer-events-none flex flex-col items-center gap-2">
          <span className="text-sm tracking-widest uppercase">Scroll down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </div>
    </div>
  );
}
