import { TImgContainer } from "../../types/TImgContainer";
import style from "./ImgContainer.module.scss";

export const ImgContainer = ({images}: TImgContainer) => {
  return (
    <div className={style.imgContainer}>
      {images.map((i) => (
        <img key={i} src={i} alt="" />
      ))}
    </div>
  );
};
