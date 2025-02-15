import ItemSteps from "./ItemSteps";

const techSteps = [
  "Choose your membership tier",
  "Get your monthly book selection",
  "Join our discussion forums",
  "Attend exclusive meetups",
];

function Steps() {
  return (
    <section>
      <h3>Your tech reading journey</h3>

      <div className="mt-8 mb-16 space-y-8">
        {techSteps.map((step, index) => (
          <ItemSteps key={index} item={{ index, step }} />
        ))}
      </div>
    </section>
  );
}

export default Steps;
