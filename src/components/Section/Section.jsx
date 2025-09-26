import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";

const Section = ({ title, data, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <Swiper
              spaceBetween={15}
              slidesPerView={6}
              onSlideChange={() => {
                console.log("Slide change");
              }}
              onSwiper={(swiper) => console.log("Swiper")}
              className="albums"
              breakpoints={{
                320: { slidesPerView: 2 },
                600: { slidesPerView: 3 },
                900: { slidesPerView: 4 },
                1200: { slidesPerView: 6 },
              }}
            >
              <div className={styles.wrapper}>
                  {data.map((card) => (
                    <SwiperSlide>
                      <Card data={card} type={type} key={card.id} />
                    </SwiperSlide>
                  ))}
              </div>
            </Swiper>
          ) : (
            <Carousel data={data} renderCardComponent={(data) => <Card data={data} type={type}/>}/>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;