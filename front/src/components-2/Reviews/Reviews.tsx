import { TReviewsProfile } from "../../types/TReviewsProfile";
import Stars from "../Stars/Stars";
import style from "./styles.module.scss";

interface Props {
  reviews: TReviewsProfile[];
}

export default function Reviews({ reviews }: Props) {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Reviews</h2>
      <div className={style.reviewsContainer}>
        {reviews.map((review: TReviewsProfile) => (
          <div key={review.id} className={style.reviewContainer}>
            <div className={style.reviewHeader}>
              {review.image ? (
                <img className={style.img} src={review.image} />
              ) : (
                <div className={style.imgPlaceholder} />
              )}
              <div className={style.reviewTitleAndMark}>
                <h3 className={style.reviewTitle}>{review.username}</h3>
                <Stars count={review.mark} gap={8} />
              </div>
              <div className={style.cardContainer}>
                <img src={review.product.source} />
                <h4>{review.product.price}</h4>
              </div>
            </div>
            <p className={style.reviewText}>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
