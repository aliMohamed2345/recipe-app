import { Reveal } from "./Reveal";
import { cuisines } from "@/app/utils/data";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
const CuisineHighLightSection = () => {
  return (
    <section className="bg-secondary/10">
      <div className="container mx-auto px-4 py-20">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-destructive font-mono text-xs tracking-widest uppercase mb-2">
              Around the world
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Explore Cuisines
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              From rustic Italian pastas to fiery Mexican street food — travel
              the globe without leaving your kitchen.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cuisines.map((c, i) => (
            <Reveal key={c.title} delay={`delay-[${i * 150}ms]`}>
              <Link
                href={c.link}
                className="group relative h-72 rounded-2xl overflow-hidden block"
              >
                <Image
                  width={c.image.width}
                  height={c.image.height}
                  src={c.image.src}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{c.title}</h3>
                  <BsArrowRight className="h-5 w-5 text-white/70 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuisineHighLightSection;
