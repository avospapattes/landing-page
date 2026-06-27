export function StatsSection() {
  return (
    <section className="w-full bg-foreground py-12 text-white ">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 text-xl md:text-2xl">
          <div className="text-center">
            <strong className="text-3xl md:text-4xl block mb-2">10+</strong>
            Clients satisfaits
          </div>
          <div className="text-center">
            <strong className="text-3xl md:text-4xl block mb-2">2+</strong>
            Labels
          </div>
          <div className="text-center">
            <strong className="text-3xl md:text-4xl block mb-2">5+</strong>
            Services
          </div>
          <div className="text-center">
            <strong className="text-3xl md:text-4xl block mb-2">
              Strasbourg
            </strong>
            Lieu de travail
          </div>
        </div>
      </div>
    </section>
  );
}
