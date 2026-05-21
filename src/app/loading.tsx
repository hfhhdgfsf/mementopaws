export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory-100">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-walnut-300 animate-pulse-soft"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
        <p className="font-serif text-lg text-walnut-400">Quietly preparing...</p>
      </div>
    </div>
  );
}
