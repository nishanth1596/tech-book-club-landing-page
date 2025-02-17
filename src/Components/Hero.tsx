import heroMobileImg from "../assets/images/image-hero-mobile.webp";
import heroTabletImg from "../assets/images/image-hero-tablet.webp";
import StarRatedReview from "./starRatedReview";
import downArrowIcon from "../assets/images/icon-arrow-down.svg";

function Hero() {
  return (
    <section className="mt-12 md:mt-16 md:pb-20 xl:mt-20 xl:flex xl:items-center xl:gap-16 xl:pb-[4.13rem]">
      <div>
        <h1 className="textGradient text-[2.375rem] leading-[1.20] font-bold tracking-[-2px] md:pr-10 md:text-[3.875rem] xl:mt-[3.6rem] xl:pr-0">
          Join the ultimate tech book club
        </h1>
        <p className="text-Neutral700-385159 font-Inter mt-6 text-xl leading-[1.4] font-normal tracking-[-0.5px] md:pr-5">
          Turn your reading time into learning time with fellow tech
          enthusiasts. Get curated recommendations, join vibrant discussions,
          and level up your skills one chapter at a time.
        </p>
        <a
          className="border-Neutral900-062630 text-Neutral900-062630 linearGradientSalmon active:ring-Neutral900-062630 mt-8 flex w-full items-center gap-4 rounded-lg border-2 px-5 py-5 leading-[1.3] font-semibold tracking-[-1px] uppercase hover:cursor-pointer active:ring-2 active:ring-offset-1 md:mb-5 md:max-w-[23.75rem] md:pl-6 md:text-lg"
          href="#"
        >
          <span>Review membership options</span>
          <img src={downArrowIcon} alt="Down arrow Icon" />
        </a>

        <StarRatedReview />
      </div>
      <picture>
        <source srcSet={heroMobileImg} media="(max-width: 767px)" />
        <source srcSet={heroTabletImg} media="(min-width: 767px)" />

        <img
          className="mt-16 rounded-md md:rounded-3xl xl:mt-0 xl:max-w-[33.75rem]"
          src={heroMobileImg}
          alt="One man and two women are finding interesting things in a book in a library"
        />
      </picture>
    </section>
  );
}

export default Hero;
