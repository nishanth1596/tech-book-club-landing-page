import ItemSteps from "./ItemSteps";

const techSteps = [
  "Choose your membership tier",
  "Get your monthly book selection",
  "Join our discussion forums",
  "Attend exclusive meetups",
];

function Steps() {
  return (
    <section className="mt-16 px-4 py-16">
      <h2 className="text-Neutral900-062630 text-[2.13rem] leading-[1.3] font-semibold tracking-[-2px]">
        Your tech reading journey
      </h2>

      <div className="mt-8 space-y-8 pr-5">
        {techSteps.map((step, index) => (
          <ItemSteps key={index} item={{ index, step }} />
        ))}
      </div>
    </section>
  );
}

export default Steps;
