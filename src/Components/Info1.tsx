import CheckLists from "./CheckLists";
import imageMobile from "../assets/images/image-read-together-mobile.webp";
import imageTablet from "../assets/images/image-read-together-tablet.webp";
import imageDesktop from "../assets/images/image-read-together-desktop.webp";

const infoLists = [
  "Monthly curated tech reads selected by industry experts",
  "Virtual and in-person meetups for deep-dive discussions",
  "Early access to new tech book releases",
  "Author Q&A sessions with tech thought leaders",
];

function Info1() {
  return (
    <section className="mt-16 md:mt-20 xl:mt-[7.5rem] xl:flex xl:flex-row-reverse xl:items-center xl:gap-20">
      <div>
        <h2 className="text-Neutral900-062630 text-[2.13rem] leading-[1.3] font-semibold tracking-[-2px] md:pr-20 md:text-[3.125rem] xl:pr-0">
          Read together, grow together
        </h2>

        <div className="mt-6 space-y-4 md:mt-[2.125rem] xl:pr-36">
          {infoLists.map((item, i) => (
            <CheckLists item={item} key={i} />
          ))}
        </div>
      </div>

      <picture>
        <source srcSet={imageMobile} media="(max-width: 767px)" />
        <source
          srcSet={imageTablet}
          media="(min-width: 768px) and (max-width:1279px)"
        />
        <source srcSet={imageDesktop} media="(min-width: 1280px)" />

        <img
          className="mt-9 rounded-xl md:mt-10 md:rounded-3xl lg:mt-0 xl:max-w-[32.5rem]"
          src={imageMobile}
          alt="One man and two women and two more people whose faces are not visible are reading together individually a book"
        />
      </picture>
    </section>
  );
}

export default Info1;
