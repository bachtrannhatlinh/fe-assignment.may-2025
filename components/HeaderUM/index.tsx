import React from "react";

const HeaderUM = () => (
  <header className="w-full h-12 bg-[#2C3A5B] flex items-center px-2 justify-between border border-white/10">
    <div className="flex items-center gap-2">
      <span className="text-green-400 font-bold text-xs tracking-wide ml-2">COMPANY LOGO XXX</span>
      <button className="ml-4 flex items-center justify-center w-6 h-6">
        <svg width="18" height="18" fill="white" viewBox="0 0 20 20">
          <path d="M10 3L3 9h2v7h3v-4h2v4h3V9h2L10 3z"/>
        </svg>
      </button>
      <div className="ml-2 flex items-center bg-[#e6f1fd] rounded px-2 py-1 h-7">
        <span className="text-[#234075] text-[10px] mr-2">Module</span>
        <span className="text-[#234075] text-xs font-bold tracking-wide">USER MANAGEMENT</span>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <div className="relative flex items-center">
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
          <path d="M10 2a6 6 0 016 6v2.586l.707.707A1 1 0 0116.586 13H3.414a1 1 0 01-.707-1.707L3.414 10.586V8a6 6 0 016-6z" stroke="#fff" strokeWidth="1.5"/>
        </svg>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full px-1 leading-none border-2 border-[#2C3A5B]">1</span>
      </div>
      <button className="flex items-center justify-center w-8 h-8">
        <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
          <path d="M10 13a3 3 0 100-6 3 3 0 000 6z" stroke="#fff" strokeWidth="1.5"/>
          <path d="M17 17a7 7 0 10-14 0" stroke="#fff" strokeWidth="1.5"/>
        </svg>
      </button>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#fff2] flex items-center justify-center">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <circle cx="10" cy="7" r="4" stroke="#fff" strokeWidth="1.5"/>
            <path d="M17 17a7 7 0 10-14 0" stroke="#fff" strokeWidth="1.5"/>
          </svg>
        </div>
        <div className="flex flex-col items-end leading-tight">
          <span className="text-white text-xs font-semibold">Mr. David Nguyen</span>
          <span className="text-[10px] text-gray-200">Home Company</span>
        </div>
        <button className="text-white text-xs ml-1">
          <svg width="12" height="12" fill="none" viewBox="0 0 20 20">
            <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
);

export default HeaderUM;