import { CarouselText, DesignerTitle, ImagePath } from "@/Constant";
import { CarouselDataList } from "@/Data/BonusUi/Timeline";
import { Fragment } from "react";
import { Badge } from "reactstrap";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CarouselTimeline = () => {
  const CarouselSpanText: string = "Spend some time looking up current design trend.";
  return (
    <Fragment>
      <div className='timeline-wrapper'>
        <Badge color='info'>{DesignerTitle}</Badge>
      </div>
      <h4 className='m-0 vertical-timeline-element-subtitle'>{CarouselText}</h4>
      <p className='mb-0'>{CarouselSpanText}</p>     
      {/* <Swiper width={615} modules={[ Pagination]} navigation pagination={{ clickable: true }} loop={true} slidesPerView={'auto'}>
        {CarouselDataList.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={`${ImagePath}/${item.image}`} alt={`carousel-item-${index}`} className='d-block' width={615} height={313} />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </Fragment>
  );
};
export default CarouselTimeline;
