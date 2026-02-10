import { Reveal } from "./Reveal";
import { stats } from "@/app/utils/data";
const StatsBarSection = () => {
  return (
    <section className="border-y border-border bg-secondary/20">
      <div className="container mx-auto px-4 py-10">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-bold text-sage-DEFAULT">
                  {s.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default StatsBarSection;
