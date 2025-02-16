import heroMobileImg from "../assets/images/image-hero-mobile.webp";
import StarRatedReview from "./starRatedReview";

function Hero() {
  return (
    <section className="mt-12">
      <div>
        <h1 className="textGradient text-[2.375rem] leading-[1.20] font-bold tracking-[-2px]">
          Join the ultimate tech book club
        </h1>
        <p className="text-Neutral700-385159 font-Inter mt-6 text-xl leading-[1.4] font-normal tracking-[-0.5px]">
          Turn your reading time into learning time with fellow tech
          enthusiasts. Get curated recommendations, join vibrant discussions,
          and level up your skills one chapter at a time.
        </p>
        <a
          className="border-Neutral900-062630 text-Neutral900-062630 mt-8 inline-block w-full rounded-lg border-2 px-5 py-5 leading-[1.3] font-semibold tracking-[-1px] uppercase"
          href="#"
        >
          Review membership options <span>&darr;</span>
        </a>

        <StarRatedReview />
      </div>
      <img
        className="mt-16 rounded-md"
        src={heroMobileImg}
        alt="One man and two women are finding interesting things in a book in a library"
      />
    </section>
  );
}

export default Hero;
