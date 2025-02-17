type ItemStepsProps = {
  item: {
    index: number;
    step: string;
  };
};

function ItemSteps({ item }: ItemStepsProps) {
  return (
    <div>
      <p className="text-Neutral900-062630 border-Neutral900-062630 flex h-8 w-8 items-center justify-center rounded-sm border-2 text-base leading-[1.2] font-semibold tracking-[-1px] md:h-10 md:w-10">
        {item.index + 1}
      </p>
      <p className="text-Neutral900-062630 mt-5 leading-[1.3] font-semibold tracking-[-1px] md:mt-6 md:text-lg">
        {item.step}
      </p>
    </div>
  );
}

export default ItemSteps;
