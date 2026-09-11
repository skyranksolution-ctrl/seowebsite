"use client";

import React, { useRef, useState } from "react";

interface GlowingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: string; // e.g. "rgba(0, 95, 255, 0.15)"
}

export default function GlowingCard({
  children,
  glowColor = "rgba(0, 95, 255, 0.15)",
  className = "",
  ...props
}: GlowingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl border border-[#051A41]/10 bg-white/90 shadow-lg backdrop-blur-md transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Glow Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl transition duration-300"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 40%)`,
          }}
        />
      )}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}

