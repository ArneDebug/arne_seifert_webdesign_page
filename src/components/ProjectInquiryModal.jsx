"use client";

export default function ProjectInquiryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-zinc-900 p-10 text-white shadow-2xl">

        <div className="flex items-center justify-between">

          <h2 className="text-4xl font-bold">
            Start your Project
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-zinc-500 hover:text-white transition"
          >
            ✕
          </button>

        </div>

        <p className="mt-5 text-zinc-400">
          Congratulations! Your modal is connected successfully.
        </p>

        <button
          onClick={onClose}
          className="mt-10 rounded-full bg-white px-8 py-3 font-semibold text-black hover:scale-105 transition"
        >
          Close
        </button>

      </div>
    </div>
  );
}