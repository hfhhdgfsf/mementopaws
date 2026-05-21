import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory-100">
      <div className="text-center px-6">
        <p className="font-serif text-8xl md:text-9xl text-walnut-200 mb-8">404</p>
        <h1 className="font-serif text-2xl md:text-3xl text-walnut-600 mb-4">
          This page has found its peace.
        </h1>
        <p className="font-sans text-base text-charcoal-400 max-w-md mx-auto mb-10 leading-relaxed">
          The page you are looking for has been laid to rest — or perhaps it never existed.
          Let us guide you somewhere warm.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-sm text-walnut-500 hover:text-walnut-600 transition-colors"
        >
          &larr; Return Home
        </Link>
      </div>
    </div>
  );
}
