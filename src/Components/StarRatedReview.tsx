import avatarImg from "../assets/images/image-avatars.webp";
import FiveStarsIcon from "./fiveStarsIcon";

type StarRatedReviewProps = {
  textWhite?: boolean;
};

function StarRatedReview({ textWhite }: StarRatedReviewProps) {
  return (
    <div
      className="mt-5 flex items-center gap-3 md:mt-6"
      style={{ justifyContent: textWhite ? "Center" : undefined }}
    >
      <img className="w-[110px]" src={avatarImg} alt="Avatar of three men" />

      <div className="flex flex-col gap-1">
        <FiveStarsIcon />
        <p
          className="text-Neutral700-385159 text-sm leading-[1.2] font-normal tracking-[-1px]"
          style={{
            color: textWhite ? "#fff" : undefined,
            fontWeight: textWhite ? "normal" : undefined,
          }}
        >
          200+ developers joined already
        </p>
      </div>
    </div>
  );
}

export default StarRatedReview;
