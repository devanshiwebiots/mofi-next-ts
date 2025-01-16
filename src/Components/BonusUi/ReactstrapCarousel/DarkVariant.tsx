import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DarkVariants, ImagePath } from "@/Constant";
import { DarkVariantData, DarkVariantDataList } from "@/Data/BonusUi/OwlCarousel";
import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";


const DarkVariant = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Col xl='6' sm='12'>
      <Card>
        <CommonCardHeader title={DarkVariants} span={DarkVariantData} />
        <CardBody>
          <div className='carousel-dark'>
            <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} loop slidesPerView={1} onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}>
              {DarkVariantDataList?.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                    <img src={`${ImagePath}/${slide.image}`} alt='drawing-room' className='d-block w-100' />
                    <div className='carousel-caption d-none d-md-block carousel-opacity'>
                      <h3>{slide.captionHeader}</h3>
                      <p>{slide.captionText}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DarkVariant;
