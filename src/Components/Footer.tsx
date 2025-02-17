import arrowIcon from "../assets/images/icon-arrow-up.svg";
import StarRatedReview from "./starRatedReview";
import blueSkyIcon from "../assets/images/logo-bluesky.svg";
import linkedinIcon from "../assets/images/logo-linkedin.svg";

function Footer() {
  return (
    <footer className="bg-Neutral900-062630 w-full rounded-t-2xl px-4 pt-12 md:px-8 md:pt-16">
      <h3 className="text-Neutral100-FAF5F3 text-center text-[2.13rem] leading-[1.3] font-semibold tracking-[-2px] md:text-[3.13rem]">
        Ready to debug your reading list?
      </h3>
      <button className="text-Neutral0-FFF linearGradientBlack bg-Neutral900-062630 border-Neutral0-FFF inset-0.5 mx-auto mt-8 flex w-full items-center justify-center gap-4 rounded-lg border-2 py-5 text-base leading-[1.3] font-semibold tracking-[-1px] uppercase active:ring-2 active:ring-offset-2 md:mt-10 md:max-w-96">
        <span>Review membership options </span>

        <img src={arrowIcon} alt="Arrow up icon" />
      </button>

      <StarRatedReview textWhite={true} />
      <div className="mt-16 border-t-[1px] pt-6 md:flex md:items-center md:justify-between">
        <p className="text-Neutral0-FFF border-Neutral700-385159 text-center text-sm leading-[1.2] font-normal tracking-[-1px]">
          © 2024 - Tech Book Club
        </p>
        <div className="mt-4 flex justify-center gap-6 pb-6">
          <img src={blueSkyIcon} alt="Bluesky Icon" />
          <img src={linkedinIcon} alt="Linkedin Icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
