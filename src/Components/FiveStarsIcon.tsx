import starIcons from "../assets/images/icon-star.svg";

function FiveStarsIcon() {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <img src={starIcons} key={i} alt={`Star Icon ${i + 1}`} />
      ))}
    </div>
  );
}

export default FiveStarsIcon;
