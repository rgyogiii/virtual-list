import { ArrowRight } from "../../components/assets/Icons";

export default function Hero() {
  return (
    <section className="text-center pt-20 laptop:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight sm_tablet:text-7xl">
        Discover NexGenMarket <br /> Where Shopping Meets the Future!
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-tertiary">
        Embark on a Futuristic Shopping Journey with NexGenMarket, Where
        Convenience, Innovation, and Style Converge!
      </p>
      <div className="mt-8 flex items-center justify-center gap-x-6">
        <a
          href="/product"
          className="group text-lg uppercase font-semibold leading-6 text-secondary flex items-center"
        >
          <span className="relative group-hover:pr-4 pr-2 transition-all duration-500 p-0.5">
            Shop Now
            <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 group-hover:bg-secondary transition-all duration-500" />
          </span>
          <ArrowRight className="h-6 w-auto" />
        </a>
      </div>
    </section>
  );
}
