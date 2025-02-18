import { membershipData } from "./data";
import MembershipCard from "./MembershipCard";

function Membership() {
  return (
    <section className="mt-16">
      <h2 className="text-Neutral900-062630 text-[2.13rem] leading-[1.3] font-semibold tracking-[-2px] md:text-[3.125rem] xl:text-center">
        Membership options
      </h2>

      <div className="mt-6 flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-x-6 xl:mx-auto xl:max-w-[60.25rem] xl:grid-cols-3">
        {membershipData.map((item) => (
          <MembershipCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Membership;
