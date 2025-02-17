import ItemSteps from "./ItemSteps";

const techSteps = [
  "Choose your membership tier",
  "Get your monthly book selection",
  "Join our discussion forums",
  "Attend exclusive meetups",
];

function Steps() {
  return (
    <section className="mt-16 px-4 py-16 md:px-8 md:py-20 xl:mt-[7.5rem] xl:px-[3.75rem] xl:pb-[4.4rem]">
      <h2 className="text-Neutral900-062630 text-[2.13rem] leading-[1.3] font-semibold tracking-[-2px] md:text-[3.125rem] xl:mx-auto xl:max-w-[32rem] xl:text-center">
        Your tech reading journey
      </h2>

      <div className="mt-8 space-y-8 pr-5 md:mt-12 md:space-y-[1.88rem] xl:grid xl:grid-cols-4 xl:gap-x-12">
        {techSteps.map((step, index) => (
          <ItemSteps key={index} item={{ index, step }} />
        ))}
      </div>
    </section>
  );
}

export default Steps;

// xl:flex xl:gap-12 xl:pr-0
