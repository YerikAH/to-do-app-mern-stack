import st from "./Banner.module.css";
import { BannerProps } from "../../types/props";
import { useEffect, useState } from "react";
import useWidth from "../../hooks/useWidth";
import { useAppSelector } from "../../redux/hook";

function Banner({
  imageDark,
  imageDarkMobile,
  imageLigth,
  imageLigthMobile,
}: BannerProps) {
  const mode = useAppSelector((state) => state.modeReducer.mode);
  const [image, setImage] = useState("");
  const { renderImages, windowWidth } = useWidth(720);

  useEffect(() => {
    if (windowWidth > 720 && renderImages) {
      mode === "dark" ? setImage(imageDark) : setImage(imageLigth);
    } else {
      mode === "dark" ? setImage(imageDarkMobile) : setImage(imageLigthMobile);
    }
  }, [renderImages, windowWidth, mode]);

  return <img src={image} alt="banner" className={st.banner} />;
}
export default Banner;
