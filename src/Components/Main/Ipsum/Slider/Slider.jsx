import "./Slider.scss";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Modal from "../../../General/Modal/Modal";

const Slider = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={"slider"}>
      <Swiper
        id={"thumbs"}
        className={"slider__thumbs"}
        loop={true}
        modules={[Navigation, Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        tag={"section"}
        wrapperTag={"ul"}
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
        {props.state.slides.map((item, index) => (
          <SwiperSlide key={"slide-" + item.id} tag={"li"} onClick={() => setModalActive(true)}>
            <div className={`slide ${item.className}`}>
              <img src={item.srcMin} className={"slide__img"} alt={"Слайд №" + item.id} />
              {item.textMin && <span className={"slide__text"}> {item.textMin} </span>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={"slider__navBlock"}>
        <div className={"slider__prev"}>
          <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M21.348 4.666C21.5224 4.8446 21.6201 5.08435 21.6201 5.334C21.6201 5.58366 21.5224 5.82341 21.348 6.002L11.602 16L21.348 25.996C21.5224 26.1746 21.6201 26.4143 21.6201 26.664C21.6201 26.9136 21.5224 27.1534 21.348 27.332C21.2632 27.4191 21.1618 27.4883 21.0498 27.5356C20.9379 27.5828 20.8175 27.6072 20.696 27.6072C20.5744 27.6072 20.4541 27.5828 20.3421 27.5356C20.2302 27.4883 20.1288 27.4191 20.044 27.332L9.68 16.698C9.49797 16.5112 9.39609 16.2608 9.39609 16C9.39609 15.7392 9.49797 15.4887 9.68 15.302L20.044 4.668C20.1288 4.58092 20.2302 4.5117 20.3421 4.46444C20.4541 4.41717 20.5744 4.39282 20.696 4.39282C20.8175 4.39282 20.9379 4.41717 21.0498 4.46444C21.1618 4.5117 21.2632 4.58092 21.348 4.668V4.666Z'
              fill='black'
            />
          </svg>
        </div>
        <div className={"slider__next"}>
          <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M10.652 4.666C10.4775 4.8446 10.3799 5.08435 10.3799 5.334C10.3799 5.58366 10.4775 5.82341 10.652 6.002L20.398 16L10.652 25.996C10.4775 26.1746 10.3799 26.4143 10.3799 26.664C10.3799 26.9136 10.4775 27.1534 10.652 27.332C10.7368 27.4191 10.8382 27.4883 10.9501 27.5356C11.0621 27.5828 11.1824 27.6072 11.304 27.6072C11.4255 27.6072 11.5459 27.5828 11.6578 27.5356C11.7698 27.4883 11.8712 27.4191 11.956 27.332L22.32 16.698C22.502 16.5112 22.6039 16.2608 22.6039 16C22.6039 15.7392 22.502 15.4887 22.32 15.302L11.956 4.668C11.8712 4.58092 11.7698 4.5117 11.6578 4.46444C11.5459 4.41717 11.4255 4.39282 11.304 4.39282C11.1824 4.39282 11.0621 4.41717 10.9501 4.46444C10.8382 4.5117 10.7368 4.58092 10.652 4.668V4.666Z'
              fill='black'
            />
          </svg>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <Swiper
          className={"bigSlider"}
          modules={[Navigation, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          slidesPerView={1}
          tag={"section"}
          wrapperTag={"ul"}
          navigation={{
            prevEl: ".bigSlider__prev",
            nextEl: ".bigSlider__next",
          }}
        >
          {props.state.slides.map((item, index) => (
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
          ))}
          <div className={"bigSlider__navBlock"}>
            <div className={"bigSlider__prev"}>
              <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M21.348 4.666C21.5225 4.8446 21.6201 5.08435 21.6201 5.334C21.6201 5.58366 21.5225 5.82341 21.348 6.002L11.602 16L21.348 25.996C21.5225 26.1746 21.6201 26.4143 21.6201 26.664C21.6201 26.9136 21.5225 27.1534 21.348 27.332C21.2632 27.4191 21.1618 27.4883 21.0499 27.5356C20.9379 27.5828 20.8176 27.6072 20.696 27.6072C20.5745 27.6072 20.4541 27.5828 20.3422 27.5356C20.2302 27.4883 20.1288 27.4191 20.044 27.332L9.68001 16.698C9.49798 16.5112 9.39611 16.2608 9.39611 16C9.39611 15.7392 9.49798 15.4887 9.68001 15.302L20.044 4.668C20.1288 4.58092 20.2302 4.5117 20.3422 4.46444C20.4541 4.41717 20.5745 4.39282 20.696 4.39282C20.8176 4.39282 20.9379 4.41717 21.0499 4.46444C21.1618 4.5117 21.2632 4.58092 21.348 4.668V4.666Z'
                  fill='white'
                />
              </svg>
            </div>
            <div className={"bigSlider__next"}>
              <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M10.652 27.334C10.4775 27.1554 10.3799 26.9157 10.3799 26.666C10.3799 26.4163 10.4775 26.1766 10.652 25.998L20.398 16L10.652 6.00401C10.4775 5.82542 10.3799 5.58567 10.3799 5.33601C10.3799 5.08636 10.4775 4.84661 10.652 4.66801C10.7368 4.58092 10.8382 4.51171 10.9501 4.46445C11.0621 4.41718 11.1824 4.39283 11.304 4.39283C11.4255 4.39283 11.5459 4.41718 11.6578 4.46445C11.7698 4.51171 11.8712 4.58092 11.956 4.66801L22.32 15.302C22.502 15.4888 22.6039 15.7392 22.6039 16C22.6039 16.2608 22.502 16.5113 22.32 16.698L11.956 27.332C11.8712 27.4191 11.7698 27.4883 11.6578 27.5356C11.5459 27.5828 11.4255 27.6072 11.304 27.6072C11.1824 27.6072 11.0621 27.5828 10.9501 27.5356C10.8382 27.4883 10.7368 27.4191 10.652 27.332V27.334Z'
                  fill='white'
                />
              </svg>
            </div>
          </div>
        </Swiper>
      </Modal>
    </div>
  );
};

export default Slider;
