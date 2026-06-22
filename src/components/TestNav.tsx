import React from "react";

function TestNav() {
  return (
    <aside className="w-64 h-screen bg-[#07070A] border-r border-[#1E1B4B] flex flex-col justify-between p-4 font-sans select-none">
      {/* Top Section: App Identity */}
      <div>
        <div className="flex items-center gap-3 px-3 py-4 mb-6">
          {/* Decorative Velvet Theme Logo Mark */}
          <div className="w-8 h-8 rounded-lg bg-[#A855F7] flex items-center justify-center text-black font-bold text-lg shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            V
          </div>
          <span className="text-[#F3F4F6] font-semibold tracking-wide text-md">
            TaskTracker
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5">
          {/* Active Item */}
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all bg-[#A855F7]/[0.08] text-[#A855F7] border border-[#A855F7]/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3m8 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
              />
            </svg>
            <span>Dashboard</span>
          </button>

          {/* Inactive Item */}
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-[#9CA3AF] border border-transparent hover:text-[#F3F4F6] hover:bg-white/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6h12v12H6V6Z"
              />
            </svg>
            <span>My Tasks</span>
          </button>

          {/* Inactive Item */}
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-[#9CA3AF] border border-transparent hover:text-[#F3F4F6] hover:bg-white/[0.03]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            <span>Settings</span>
          </button>
        </nav>
      </div>

      {/* Bottom Section: User Profile Context */}
      <div className="pt-4 border-t border-[#1E1B4B]/50 flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          {/* Subtle placeholder avatar box */}
          <div className="w-8 h-8 rounded-full bg-[#1E1B4B] border border-[#A855F7]/30 flex items-center justify-center text-xs text-[#D1D5DB] font-semibold">
            U
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-[#F3F4F6]">Alex Dev</span>
            <span className="text-[10px] text-[#6B7280]">Pro Account</span>
          </div>
        </div>
        {/* Imperial Gold crown element for that luxury flare */}
        <span className="text-[#EAB308] opacity-80 hover:opacity-100 cursor-pointer transition-opacity duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M10 2.5a.5.5 0 0 0-1 0v1.106a4.482 4.482 0 0 0-2.31 1.488l-.782-.782a.5.5 0 1 0-.707.707l.782.782A4.482 4.482 0 0 0 4.5 8.106V9.25a.5.5 0 0 0 1 0V8.106A3.482 3.482 0 0 1 8.394 4.5h1.212A3.482 3.482 0 0 1 13.5 8.106V9.25a.5.5 0 0 0 1 0V8.106a4.482 4.482 0 0 0-1.488-2.31l.782-.782a.5.5 0 1 0-.707-.707l-.782.782A4.482 4.482 0 0 0 10 3.606V2.5Z" />
            <path d="M3.5 11a.5.5 0 0 0-.5.5v1a3.5 3.5 0 0 0 3.162 3.473l-.6 1.8A.5.5 0 0 0 6.037 18h7.926a.5.5 0 0 0 .475-.658l-.6-1.8A3.5 3.5 0 0 0 17 12.5v-1a.5.5 0 0 0-.5-.5h-13Z" />
          </svg>
        </span>
      </div>
    </aside>
  );
}

export default TestNav;
