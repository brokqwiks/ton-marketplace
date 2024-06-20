import { TImgContainer } from "../../types/TImgContainer";
import style from "./ImgContainer.module.scss";

export const ImgContainer = ({images}: TImgContainer) => {
  return (
    <div className={style.imgContainer}>
      {images.map((i, index) => (
        <img key={index} src={i} alt="" />
      ))}
    </div>
  );
};
