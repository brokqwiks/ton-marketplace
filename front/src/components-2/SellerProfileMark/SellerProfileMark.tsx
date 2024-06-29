import Stars from "../Stars/Stars";
import style from "./styles.module.scss";

export default function SellerProfileMark() {
  return (
    <div className={style.container}>
      <div className={style.mark}><span>4</span>/5</div>
      <div className={style.stars}>
        <Stars count={4} gap={30} />
      </div>
    </div>
  );
}
