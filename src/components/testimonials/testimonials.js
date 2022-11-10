import React from 'react'
import './testimonials.css'

import AVTR1 from '../../assets/testimonials 1.jpeg'
import AVTR2 from "../../assets/testimponials 2.jpeg";
import AVTR3 from "../../assets/testimonials 3.jpeg";

import { Pagination,Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";




const testimonials = () => {
  const data = [
		{
			avatar: AVTR1,
			name: "Kumail Haider",
			review:
				"He's a really passionate developer, and I've had the pleasure of working with him on his project. He's easy to talk to and work with.",
		},
		{
			avatar: AVTR2,
			name: "Saqib Altaf",
			review:
				"I've been working with him since two years it's been blessing to have him on bored.",
		},
		{
			avatar: AVTR3,
			name: "Ahtisam Khan",
			review: "He's my colleague in school working with him since college",
		},
	];
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={ [Pagination, Navigation] }
        spaceBetween={40}
        slidesPerView={1}
        navigation={{clickable:true}}
        pagination={{clickable:true}}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default testimonials

