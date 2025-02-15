import imageMobile from "../assets/images/image-not-average-mobile.webp";
import icon from "../assets/images/pattern-circle.png";

function Info2() {
  return (
    <section className="mt-16 mr-4">
      <h2 className="text-Neutral900-062630 text-[2.13rem] leading-[1.3] font-semibold tracking-[-2px]">
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

      <p className="text-Neutral700-385159 font-Inter mt-6 text-xl font-normal tracking-[-0.5px]">
        Connect with a community that speaks your language - from{" "}
        <span className="font-semibold">Python</span> to{" "}
        <span className="font-semibold">TypeScript</span> and everything in
        between. Our discussions blend technical depth with practical
        applications.
      </p>

      <img
        className="mt-10 rounded-xl"
        src={imageMobile}
        alt="One old man and two women are reading books in a library and discussing something regarding it"
      />
    </section>
  );
}

export default Info2;
