import imageMobile from "../assets/images/image-not-average-mobile.webp";
import imageTablet from "../assets/images/image-not-average-tablet.webp";
import imageDesktop from "../assets/images/image-not-average-desktop.webp";
import icon from "../assets/images/pattern-circle.png";

function Info2() {
  return (
    <section className="mt-16 mr-4 md:mt-20 xl:mr-0 xl:flex xl:items-center xl:gap-20">
      <div>
        <h2 className="text-Neutral900-062630 text-[2.13rem] leading-[1.3] font-semibold tracking-[-2px] md:pr-20 md:text-[3.125rem] xl:pr-0">
          Not your average book{" "}
          <span className="relative inline-block">
            club
            <img
              src={icon}
              alt="highlight icon"
              className="absolute top-0 left-0 h-full"
            />
          </span>
        </h2>

        <p className="text-Neutral700-385159 font-Inter mt-6 text-xl font-normal tracking-[-0.5px] xl:pr-4">
          Connect with a community that speaks your language - from{" "}
          <span className="font-semibold">Python</span> to{" "}
          <span className="font-semibold">TypeScript</span> and everything in
          between. Our discussions blend technical depth with practical
          applications.
        </p>
      </div>

      <picture>
        <source srcSet={imageMobile} media="(max-width: 767px)" />
        <source
          srcSet={imageTablet}
          media="(min-width: 768px) and (max-width:1279px)"
        />
        <source srcSet={imageDesktop} media="(min-width: 1280px)" />
        <img
          className="mt-10 rounded-xl md:rounded-3xl xl:mt-0 xl:max-w-[35rem]"
          src={imageMobile}
          alt="One old man and two women are reading books in a library and discussing something regarding it"
        />
      </picture>
    </section>
  );
}

export default Info2;
