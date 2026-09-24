"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  return (
    <>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/cargo-ship-at-sea.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={togglePlayback}
        className="hero-motion-toggle absolute bottom-5 left-5 z-20 inline-flex items-center gap-2 rounded-full border border-white/25 bg-navy-deep/70 px-3 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-navy-deep md:bottom-7 md:left-[max(2.5rem,calc((100vw-80rem)/2))]"
        aria-label={isPlaying ? "Pause hero video" : "Play hero video"}
      >
        {isPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
        {isPlaying ? "Pause motion" : "Play motion"}
      </button>
    </>
  );
}
