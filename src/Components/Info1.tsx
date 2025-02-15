import CheckLists from "./CheckLists";
import image from "../assets/images/image-read-together-mobile.webp";

const infoLists = [
  "Monthly curated tech reads selected by industry experts",
  "Virtual and in-person meetups for deep-dive discussions",
  "Early access to new tech book releases",
  "Author Q&A sessions with tech thought leaders",
];

function Info1() {
  return (
    <section className="mt-16">
      <h2 className="text-Neutral900-062630 mb-6 text-[2.13rem] leading-[1.3] font-semibold tracking-[-2px]">
        Read together, grow together
      </h2>

      <div className="space-y-4">
        {infoLists.map((item, i) => (
          <CheckLists item={item} key={i} />
        ))}
      </div>

      <img
        className="mt-9 rounded-xl"
        src={image}
        alt="One man and two women and two more people whose faces are not visible are reading together individually a book"
      />
    </section>
  );
}

export default Info1;
