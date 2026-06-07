import { useEffect, useState } from "react";

const scenes = [
  {
    title: "Cloud POS Dashboard",
    subtitle: "Real-time sales & inventory overview",
    stats: [
      { label: "Today's Sales", value: "Rs 284,500" },
      { label: "Orders", value: "156" },
      { label: "Stock Alerts", value: "3" },
    ],
    color: "from-brand-800 to-brand-600",
  },
  {
    title: "Quick Checkout",
    subtitle: "Fast billing for retail & restaurants",
    stats: [
      { label: "Bill #", value: "TK-2048" },
      { label: "Items", value: "8" },
      { label: "Total", value: "Rs 4,250" },
    ],
    color: "from-indigo-800 to-blue-600",
  },
  {
    title: "FBR Integration",
    subtitle: "Compliant invoices with QR code",
    stats: [
      { label: "FBR Status", value: "Synced" },
      { label: "Tax", value: "Rs 680" },
      { label: "Invoice", value: "Verified" },
    ],
    color: "from-brand-900 to-cyan-600",
  },
  {
    title: "ERP & Reports",
    subtitle: "Analytics for smarter decisions",
    stats: [
      { label: "Profit", value: "+18%" },
      { label: "Branches", value: "4" },
      { label: "Reports", value: "12" },
    ],
    color: "from-violet-900 to-brand-600",
  },
];

function TeachKaamDemoVideo() {
  const [playing, setPlaying] = useState(true);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const scene = scenes[sceneIndex];
  const duration = 4000;

  useEffect(() => {
    if (!playing) return;

    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);

      if (elapsed >= duration) {
        setSceneIndex((i) => (i + 1) % scenes.length);
        setProgress(0);
      }
    }, 50);

    return () => clearInterval(tick);
  }, [playing, sceneIndex]);

  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-black">
      <div
        className={`relative aspect-video bg-gradient-to-br ${scene.color} transition-all duration-700`}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 p-6 md:p-10 h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <span className="text-white/90 font-bold text-lg">TeachKaam</span>
            <span className="text-xs text-white/70 bg-white/20 px-3 py-1 rounded-full">
              DEMO
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {scene.title}
            </h3>
            <p className="text-blue-100 mb-8">{scene.subtitle}</p>

            <div className="grid grid-cols-3 gap-3 max-w-lg">
              {scene.stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/15 backdrop-blur rounded-lg p-3 border border-white/20"
                >
                  <p className="text-[10px] text-blue-100 uppercase tracking-wide">
                    {s.label}
                  </p>
                  <p className="text-white font-bold text-sm md:text-base mt-1">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {!playing && (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 group"
            aria-label="Play demo"
          >
            <span className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-xl group-hover:scale-110 transition">
              <span className="ml-1 text-brand-700 text-2xl">▶</span>
            </span>
          </button>
        )}
      </div>

      <div className="bg-slate-900 px-4 py-3 flex items-center gap-4">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="text-white hover:text-cyan-300 transition text-sm font-medium"
        >
          {playing ? "Pause" : "Play"}
        </button>
        <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan-400 transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-slate-400 text-xs">
          {sceneIndex + 1} / {scenes.length}
        </span>
      </div>
    </div>
  );
}

export default TeachKaamDemoVideo;
