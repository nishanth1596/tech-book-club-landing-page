import checkIcon from "../assets/images/icon-check.svg";

function MembershipCard() {
  return (
    <article>
      <h4>Starter</h4>
      <p>$19 /month</p>

      <ul className="space-y-4">
        <li className="text-Neutral700-385159 font-Inter flex items-center gap-3 text-xl leading-[1.4] font-normal tracking-[-0.5px]">
          <img src={checkIcon} alt="Check Icon" />
          <p>1 book</p>
        </li>

        <li className="text-Neutral700-385159 font-Inter flex items-center gap-3 text-xl leading-[1.4] font-normal tracking-[-0.5px]">
          <img src={checkIcon} alt="Check Icon" />
          <p>Online</p>
        </li>
      </ul>

      <button className="text-Neutral900-062630 bg-LightSalmon50-fff5ef inset-0.5 mx-6 mt-8 mb-6 rounded-lg border-2 px-[79px] py-5 text-base leading-[1.3] font-semibold tracking-[-1px]">
        Subscribe now
      </button>
    </article>
  );
}

export default MembershipCard;
