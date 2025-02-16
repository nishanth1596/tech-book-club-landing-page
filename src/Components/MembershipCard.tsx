import checkIcon from "../assets/images/icon-check.svg";

type MembershipCardProps = {
  item: {
    amount?: number;
    title: string;
    firstItem: string;
    secondItem: string;
    subscription: boolean;
    custom?: boolean;
  };
};

function MembershipCard({ item }: MembershipCardProps) {
  return (
    <article className="border-Neutral200-E6E1DF inset-0.5 rounded-lg border p-6">
      <h3 className="text-Neutral900-062630 text-2xl font-semibold">
        {item.title}
      </h3>

      {item.custom ? (
        <p className="text-Neutral900-062630 mt-6 text-[2.13rem] leading-[1.3] tracking-[-1px]">
          Custom
        </p>
      ) : (
        <p className="text-Neutral700-385159 font-Inter border-Neutral200-E6E1DF mt-6 flex items-center gap-2 border-b-[1px] pb-6 text-xl leading-[1.4] font-normal tracking-[-0.5px]">
          <span className="text-Neutral900-062630 text-[2.13rem] leading-[1.3] tracking-[-1px]">
            &#36;{item.amount}
          </span>
          /month
        </p>
      )}

      <ul className="mt-6 space-y-4">
        <li className="text-Neutral700-385159 font-Inter flex items-center gap-3 text-xl leading-[1.4] font-normal tracking-[-0.5px]">
          <img src={checkIcon} alt="Check Icon" />
          <p>{item.firstItem}</p>
        </li>

        <li className="text-Neutral700-385159 font-Inter flex items-center gap-3 text-xl leading-[1.4] font-normal tracking-[-0.5px]">
          <img src={checkIcon} alt="Check Icon" />
          <p>{item.secondItem}</p>
        </li>
      </ul>

      <button className="text-Neutral900-062630 bg-LightSalmon50-fff5ef inset-0.5 mt-8 w-full rounded-lg border-2 px-[78px] py-5 text-base leading-[1.3] font-semibold tracking-[-1px] uppercase">
        {item.subscription ? "Subscribe now" : "Talk to us"}
      </button>
    </article>
  );
}

export default MembershipCard;
