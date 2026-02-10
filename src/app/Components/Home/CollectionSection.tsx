import { Reveal } from "./Reveal";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { categories } from "@/app/utils/data";
import Image from "next/image";
const CollectionSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <Reveal>
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-green font-mono text-xs tracking-widest uppercase mb-2">
              Browse by
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Collections
            </h2>
          </div>
          <Link href="/recipes" className="hidden md:block">
            <button className="hover:bg-accent p-2 hover:text-accent-foreground inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-muted-foreground ">
              View all <BiChevronRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((cat, i) => (
          <Reveal key={cat.title} delay={`delay-[${i * 100}ms]`}>
            <Link
              href={cat.link}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden block hover-scale"
            >
              <Image
                width={cat.image.width}
                height={cat.image.height}
                src={cat.image.src}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${cat.accent}`}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {cat.title}
                </h3>
                <p className="text-white/80 text-sm">{cat.description}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 md:hidden text-center">
        <Link href="/recipes">
          <button className="border p-2 border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ">
            View all collections <BiChevronRight className="h-4 w-4" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CollectionSection;
