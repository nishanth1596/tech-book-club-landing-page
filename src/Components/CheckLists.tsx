import checkMarkIcon from "../assets/images/icon-check.svg";

type CheckListsProps = {
  item: string;
};

function CheckLists({ item }: CheckListsProps) {
  return (
    <div className="flex items-center gap-3.5">
      <img src={checkMarkIcon} alt="Check Icon" />
      <p className="text-Neutral700-385159 font-Inter text-xl leading-[1.4] tracking-[-0.5px]">
        {item}
      </p>
    </div>
  );
}

export default CheckLists;
