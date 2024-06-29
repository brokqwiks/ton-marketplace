import starIcon from "/icons/star.png";
import emptyStarIcon from "/icons/emptyStar.png";

interface Props {
  count: number;
  gap: number;
}

export default function Stars({ count, gap }: Props) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < count) stars.push(<img key={Math.random()} src={starIcon} />);
    else stars.push(<img key={Math.random()} src={emptyStarIcon} />);
  }
  return <div style={{ gap: gap, display: "flex" }}>{stars}</div>;
}
