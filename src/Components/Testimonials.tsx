import FiveStarsIcon from "./fiveStarsIcon";

function Testimonials() {
  return (
    <section className="mt-16 mb-16">
      <FiveStarsIcon />

      <h4 className="text-Neutral900-062630 mt-8 text-2xl leading-[1.1] font-semibold tracking-[-1px]">
        "This book club transformed my technical reading from a solitary
        activity into an enriching community experience. The discussions are
        gold!"
      </h4>
      <p className="text-Neutral700-385159 font-Inter mt-8 text-xl leading-[1.4] font-normal tracking-[-0.5px]">
        Sarah Chen, Software Architect
      </p>
    </section>
  );
}

export default Testimonials;
