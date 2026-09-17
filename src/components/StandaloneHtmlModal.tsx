import React, { useState } from 'react';
import { X, Copy, Check, Download, Code, ExternalLink } from 'lucide-react';

interface StandaloneHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneHtmlModal: React.FC<StandaloneHtmlModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/locgician-standalone.html';
    link.download = 'locgician.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyCode = async () => {
    try {
      const response = await fetch('/locgician-standalone.html');
      const text = await response.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy code', err);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#111827] text-white rounded-3xl border border-gray-700 p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-800 pb-4">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-[#FFD166]" />
            <h3 className="font-heading font-black text-lg text-white">
              Single-File HTML5 Document
            </h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-gray-300">
          <p>
            As requested, we generated a <strong>complete, self-contained single-file HTML5 document</strong> featuring standalone Tailwind CSS (via CDN) and vanilla JavaScript.
          </p>
          <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 space-y-1 font-mono text-xs">
            <div className="text-[#FFD166]">✓ Standalone Tailwind CSS CDN embedded</div>
            <div className="text-[#FFD166]">✓ Google Fonts (Syne, Outfit, Inter) pre-linked</div>
            <div className="text-[#FFD166]">✓ Interactive Booking Modal & Category Filters in Vanilla JS</div>
            <div className="text-[#FFD166]">✓ Zero Node.js build dependencies required to open</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={handleDownload}
            className="flex-1 bg-[#FFD166] hover:bg-[#E5A93C] text-[#111827] font-black text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>Download locgician.html</span>
          </button>

          <button
            onClick={handleCopyCode}
            className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all border border-gray-700"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#FFD166]" />}
            <span>{copied ? 'Copied HTML Code!' : 'Copy Entire Code'}</span>
          </button>

          <a
            href="/locgician-standalone.html"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white px-4 py-3.5 rounded-xl border border-gray-700 flex items-center justify-center"
            title="Open in new tab"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
