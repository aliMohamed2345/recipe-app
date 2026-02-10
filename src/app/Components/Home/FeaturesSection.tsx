import Link from "next/link";
import { Reveal } from "./Reveal";
import { features } from "@/app/utils/data";

const FeaturesSection = () => {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-20">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-green font-mono text-xs tracking-widest uppercase mb-2">
              Everything you need
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Built for home cooks
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <Reveal key={feat.title} delay={`delay-[${i * 80}ms]`}>
              <Link
                href={feat.link}
                className="group p-6 rounded-xl border border-border bg-card hover:border-sage-DEFAULT/40 hover:shadow-lg hover:shadow-sage-DEFAULT/5 transition-all duration-300 block h-full"
              >
                <feat.icon className="h-8 w-8 text-green mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feat.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
