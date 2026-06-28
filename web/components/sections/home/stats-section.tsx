import { Heart, Award, PawPrint, MapPin } from "lucide-react";

export function StatsSection() {
  return (
    <section className="w-full bg-secondary py-8 text-white border-y-2 border-secondary/30 relative overflow-hidden">
      {/* Subtle abstract background shape */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Stat 1 */}
          <div className="flex flex-row items-center justify-center gap-3.5 group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform duration-300 shrink-0">
              <Heart className="w-5 h-5 text-primary" strokeWidth={2} />
            </div>
            <div className="text-left">
              <strong className="font-serif text-2xl md:text-3xl block font-bold leading-none text-primary mb-1">
                10+
              </strong>
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-white/80">
                Clients satisfaits
              </span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-row items-center justify-center gap-3.5 group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform duration-300 shrink-0">
              <Award className="w-5 h-5 text-primary" strokeWidth={2} />
            </div>
            <div className="text-left">
              <strong className="font-serif text-2xl md:text-3xl block font-bold leading-none text-primary mb-1">
                2+
              </strong>
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-white/80">
                Labels
              </span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-row items-center justify-center gap-3.5 group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform duration-300 shrink-0">
              <PawPrint className="w-5 h-5 text-primary" strokeWidth={2} />
            </div>
            <div className="text-left">
              <strong className="font-serif text-2xl md:text-3xl block font-bold leading-none text-primary mb-1">
                5+
              </strong>
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-white/80">
                Services
              </span>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-row items-center justify-center gap-3.5 group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform duration-300 shrink-0">
              <MapPin className="w-5 h-5 text-primary" strokeWidth={2} />
            </div>
            <div className="text-left">
              <strong className="font-serif text-xl md:text-2xl block font-bold leading-none text-primary mb-1">
                Strasbourg
              </strong>
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-white/80">
                Lieu de travail
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
