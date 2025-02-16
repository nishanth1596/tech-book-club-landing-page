import arrowIcon from "../assets/images/icon-arrow-up.svg";
import StarRatedReview from "./starRatedReview";
import blueSkyIcon from "../assets/images/logo-bluesky.svg";
import linkedinIcon from "../assets/images/logo-linkedin.svg";

function Footer() {
  return (
    <footer className="bg-Neutral900-062630 mt16 w-full px-4 pt-12">
      <h3 className="text-Neutral100-FAF5F3 text-center text-[2.13rem] leading-[1.3] font-semibold tracking-[-2px]">
        Ready to debug your reading list?
      </h3>
      <button className="text-Neutral0-FFF bg-Neutral900-062630 border-Neutral0-FFF inset-0.5 mt-8 flex w-full items-center justify-center gap-4 rounded-lg border-2 py-5 text-base leading-[1.3] font-semibold tracking-[-1px] uppercase">
        <span>Review membership options </span>

        <img src={arrowIcon} alt="Arrow up icon" />
      </button>

      <StarRatedReview textWhite={true} />
      <p className="text-Neutral0-FFF text-center text-sm leading-[1.2] font-normal tracking-[-1px]">
        © 2024 - Tech Book Club
      </p>
      <div className="mt-4 flex justify-center gap-6">
        <img src={blueSkyIcon} alt="Bluesky Icon" />
        <img src={linkedinIcon} alt="Linkedin Icon" />
      </div>
    </footer>
  );
}

export default Footer;
