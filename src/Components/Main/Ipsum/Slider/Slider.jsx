import "./Slider.scss";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Modal from "../../../General/Modal/Modal";
import NavBlock from "./NavBlock/NavBlock";

const Slider = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [modalActive, setModalActive] = useState(false)

  //  Создание слайдов для главного слайдера
    let mainSliderElements = props.state.slides.map((item, index) => (
      <SwiperSlide key={"slide-" + item.id} tag={"li"} onClick={() => setModalActive(true)}>
          <div className={`slide ${item.className}`}>
              <img src={item.srcMin} className={"slide__img"} alt={"Слайд №" + item.id} />
              {item.textMin && <span className={"slide__text"}> {item.textMin} </span>}
          </div>
      </SwiperSlide>
  ))

  //  Создание слайдов для детализированного слайдера
    let bigSliderElements = props.state.slides.map((item, index) => (
        <SwiperSlide key={"bigSlide-" + item.id} tag={"li"}>
            <div className={"bigSlider__image"}>
                <img src={item.srcMax} alt={"Слайд №" + item.id} />
            </div>
            {item.texts && (
                <div className={"bigSlider__texts"}>
                    {item.texts.map((text, index) => {
                        return <p className={"bigSlider__text"}> {text} </p>;
                    })}
                </div>
            )}
        </SwiperSlide>
    ))

  return (
    <div className={"slider"}>
      <Swiper id={"thumbs"} loop={true} modules={[Navigation, Thumbs]} watchSlidesProgress
        onSwiper={setThumbsSwiper} tag={"section"} wrapperTag={"ul"}
        breakpoints={{
          300: {
            width: 260,
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1920: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        navigation={{
          prevEl: ".slider__prev",
          nextEl: ".slider__next",
        }}
      >
        { mainSliderElements }
      </Swiper>
      <NavBlock classContainer={"slider__navBlock"} classPrev={"slider__prev"} classNext={"slider__next"} colorArrow={'black'} colorBox={'none'}/>
      <Modal active={modalActive} setActive={setModalActive}>
        <Swiper
          className={"bigSlider"} modules={[Navigation, Thumbs]} thumbs={{ swiper: thumbsSwiper }} slidesPerView={1} tag={"section"} wrapperTag={"ul"}
          navigation={{
            prevEl: ".bigSlider__prev",
            nextEl: ".bigSlider__next",
          }}
        >
          { bigSliderElements }
          <NavBlock classContainer={"bigSlider__navBlock"} classPrev={"bigSlider__prev"} classNext={"bigSlider__next"} colorArrow={'white'} colorBox={'none'}/>
        </Swiper>
      </Modal>
    </div>
  );
};

export default Slider;
