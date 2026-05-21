'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-ivory-100">
      <div className="text-center px-6">
        <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-ivory-200 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-walnut-400">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" />
            <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
        <h1 className="font-serif text-2xl text-walnut-600 mb-4">
          Something quiet went wrong.
        </h1>
        <p className="font-sans text-sm text-charcoal-400 max-w-sm mx-auto mb-8 leading-relaxed">
          A small error occurred. It happens — even to handcrafted things. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center px-8 py-3 rounded-full bg-walnut-500 text-ivory-50 font-sans text-sm font-medium tracking-wide hover:bg-walnut-600 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 rounded-full border border-walnut-500/30 text-walnut-600 font-sans text-sm font-medium tracking-wide hover:bg-walnut-50 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
