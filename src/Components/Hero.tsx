import heroMobileImg from "../assets/images/image-hero-mobile.webp";
import avatarImg from "../assets/images/image-avatars.webp";
import starIcons from "../assets/images/icon-star.svg";

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

        <div className="mt-5 flex items-center">
          <img
            className="w-[110px]"
            src={avatarImg}
            alt="Avatar of three men"
          />
          <div>
            <img src={starIcons} alt="5 Star Icons" />
            <p>200+ developers joined already</p>
          </div>
        </div>
      </div>
      <img src={heroMobileImg} alt="" />
    </section>
  );
}

export default Hero;
