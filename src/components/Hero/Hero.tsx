import styles from "./styles.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/scss/pagination';
import HeroSlide from "../HeroSlide/HeroSlide";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <Swiper
                    slidesPerView={1}
                    modules={[Pagination]}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                      }}
                    loop={true}
                    className={styles.swiper}
                >
                    <SwiperSlide><HeroSlide /></SwiperSlide>
                    <SwiperSlide><HeroSlide /></SwiperSlide>
                    <SwiperSlide><HeroSlide /></SwiperSlide>
                    <SwiperSlide><HeroSlide /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
