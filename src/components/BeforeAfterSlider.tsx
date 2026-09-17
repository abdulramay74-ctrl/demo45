import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before Maintenance',
  afterLabel = 'Crown Magic After',
  title = 'Interactive Retwist & Crown Restoration',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Interactive Slider Container */}
      <div
        ref={containerRef}
        id="before-after-slider-container"
        className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-gray-800 shadow-2xl bg-gray-950"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER IMAGE (Background / Full view) */}
        <img
          src={afterImage}
          alt="After loc magic retwist"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* AFTER LABEL */}
        <div className="absolute top-4 right-4 z-10 bg-[#FFD166] text-[#111827] text-xs font-black uppercase px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{afterLabel}</span>
        </div>

        {/* BEFORE IMAGE (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="Before loc maintenance"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current?.clientWidth || '100%' }}
          />

          {/* BEFORE LABEL */}
          <div className="absolute top-4 left-4 z-10 bg-[#111827]/90 text-white text-xs font-black uppercase px-3 py-1 rounded-full border border-gray-700 shadow-lg">
            <span>{beforeLabel}</span>
          </div>
        </div>

        {/* DIVIDER HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#FFD166] shadow-[0_0_12px_rgba(255,209,102,0.8)] cursor-ew-resize pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111827] border-2 border-[#FFD166] flex items-center justify-center text-[#FFD166] shadow-xl">
            <MoveHorizontal className="w-5 h-5" />
          </div>
        </div>

        {/* Bottom Hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#111827]/80 backdrop-blur-sm text-gray-300 px-3 py-1 rounded-full text-[11px] font-semibold border border-gray-700 flex items-center gap-1.5 pointer-events-none">
          <MoveHorizontal className="w-3.5 h-3.5 text-[#FFD166]" />
          <span>Slide to reveal crown transformation</span>
        </div>
      </div>
    </div>
  );
};
