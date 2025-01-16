import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, IndividualCarouselItemIntervals } from "@/Constant";
import { ItemIntervalData, itemIntervalDataList, ItemIntervalDataList } from "@/Data/BonusUi/OwlCarousel";
import { useEffect, useRef } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const IndividualInterval = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;
    //@ts-ignore
    const swiperInstance = swiperRef.current.swiper;

    const updateAutoplayDelay = () => {
      const currentSlideIndex = swiperInstance.realIndex;
      const currentInterval = ItemIntervalDataList[currentSlideIndex].interval;
      swiperInstance.params.autoplay.delay = currentInterval;
      swiperInstance.autoplay.stop();
      swiperInstance.autoplay.start();
    };

    swiperInstance.on("slideChange", updateAutoplayDelay);

    return () => {
      swiperInstance.off("slideChange", updateAutoplayDelay);
    };
  }, []);
  return (
    <Col xl='6' xs='12'>
      <Card>
        <CommonCardHeader title={IndividualCarouselItemIntervals} span={ItemIntervalData} />
        <CardBody>
          <Swiper ref={swiperRef} modules={[Autoplay, Navigation]} navigation loop autoplay={{ delay: itemIntervalDataList[0].interval }} slidesPerView={1}>
            {itemIntervalDataList?.map((item, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img src={`${ImagePath}/${item.image}`} alt='drawing-room' className='d-block w-100' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default IndividualInterval;
