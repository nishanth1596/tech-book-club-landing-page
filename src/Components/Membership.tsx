import MembershipCard from "./MembershipCard";

const membershipData = [
  {
    title: "Starter",
    amount: 19,
    firstItem: "1 book/month",
    secondItem: "Online forums",
    subscription: true,
  },
  {
    title: "Pro",
    amount: 29,
    firstItem: "2 books/month",
    secondItem: "Virtual meetups",
    subscription: true,
  },

  {
    title: "Enterprise",
    custom: true,
    firstItem: "Team access",
    secondItem: "Private sessions",
    subscription: false,
  },
];

function Membership() {
  return (
    <section className="pt-16">
      <h2 className="text-Neutral900-062630 text-[2.13rem] leading-[1.3] font-semibold tracking-[-2px]">
        Membership options
      </h2>

      <div className="mt-6 flex flex-col gap-6">
        {membershipData.map((item) => (
          <MembershipCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Membership;
