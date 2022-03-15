import React from "react";
import SliderItem from "./SliderItem";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper";
import '../../styles/section-slider/slider.css'



class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          title: 'Ледниковая свежесть',
          price: '980 руб',
          img: '/SliderItem1.jpg'
        },
        {
          title: 'Полное наслаждение',
          price: '1180 руб',
          img: '/SliderItem2.jpg'
        },
        {
          title: 'Красота и сияние',
          price: '1180 руб',
          img: '/SliderItem3.jpg'
        },
        {
          title: 'Магия манго',
          price: '1180 руб',
          img: '/SliderItem4.jpg'
        },
        {
          title: 'Ягодное наслаждение',
          price: '1200 рублей',
          img: '/SliderItem1.jpg'
        },
        {
          title: 'Утренний ритуал красоты',
          price: '1480 рублей',
          img: '/SliderItem2.jpg'
        },
        {
          title: 'Четкий контур',
          price: '2480 рублей',
          img: '/SliderItem3.jpg'
        },
      ]
    };
  }



  render() {
    return (
        <div className="swiper">
          <Swiper
              slidesPerView={4}
              spaceBetween={19}
              slidesPerGroup={4}
              loop={true}
              loopFillGroupWithBlank={false}

              navigation={true}
              modules={[Pagination, Navigation]}
              style={{ marginLeft: '140px', marginRight: '140px', position: 'unset'}}
              className="mySwiper"
          >
            {this.state.items.map((item, index) =>
                <SwiperSlide  key={item.title}>
                  <SliderItem
                      title={item.title}
                      price={item.price}
                      img={item.img}
                  />
                </SwiperSlide>
            )}
          </Swiper>
        </div>
    );
  }
}

export default Slider;
