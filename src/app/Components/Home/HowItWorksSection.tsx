import { howItWorks } from "@/app/utils/data";
import { Reveal } from "./Reveal";
const HowItWorksSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <Reveal>
        <div className="text-center mb-14">
          <p className="text-green font-mono text-xs tracking-widest uppercase mb-2">
            Simple as 1-2-3
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How it works
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {howItWorks.map((item, i) => (
          <Reveal key={item.step} delay={`delay-[${i * 150}ms]`}>
            <div className="text-center">
              <span className="text-5xl font-bold text-green">
                {item.step}
              </span>
              <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
