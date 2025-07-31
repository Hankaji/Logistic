'use client'

import clsx from "clsx";
import { ComponentProps, ReactNode, useRef, useState } from "react";

export interface Props extends ComponentProps<'div'> {
  title: string,
  points: ReactNode[],
  direction?: 'U' | 'D'
}

function Popup({ title, points, direction = 'U', className, ...props }: Props) {
  const [hovered, setHovered] = useState(false);

  // Duck Quack audio
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const handleMouseEnter = () => {
    setHovered(true);

    // Lazy-load audio if not already loaded
    if (!audioRef.current) {
      audioRef.current = new Audio('/sounds/DuckQuackSoundEffectHD.mp3');
    }

    // Play sound
    audioRef.current.currentTime = 0; // rewind to start
    audioRef.current.play().catch((err) => {
      // Chrome may block it if not user-initiated
      console.error('Audio play error:', err);
    });
  };

  return (
    <div
      {...props}
      className={clsx("relative inline-block", hovered ? "z-50" : "z-10", className)}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Map Pin Shape */}
      <div className="relative z-10 size-6 bg-[#1800ad] rounded-full cursor-pointer shadow-xl shadow-black">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-4 bg-white rounded-full cursor-pointer" />
      </div>

      {/* Popup */}
      <div
        className={clsx(`absolute  left-1/2 mt-2 -translate-x-1/2 rounded-lg border border-gray-300 bg-white p-3 text-sm shadow-md transition-all duration-300 ease-out`,
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none',
          direction === 'U' ? 'bottom-full' : 'top-full',
          'w-[512px] z-[60]')}
      >
        <p className="text-xl text-black font-bold">{title}</p>
        {points.map((p, idx) => <li className="ml-2 text-black" key={idx}>{p}</li>)}
      </div>
    </div>
  )
}

export default Popup
