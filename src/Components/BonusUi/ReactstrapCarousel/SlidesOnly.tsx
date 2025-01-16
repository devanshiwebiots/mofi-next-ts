import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, SlideOnly } from "@/Constant";
import { sliderOnlySettingData, SliesOnlyData, SliesOnlyDataList } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";

const SlidesOnly = () => {
  return (
    <Col xl='6' xs='12'>
      <Card>
        <CommonCardHeader title={SlideOnly} span={SliesOnlyData} />
        <CardBody>
          <Swiper {...sliderOnlySettingData}>
            {SliesOnlyDataList.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={`${ImagePath}/${item.image}`} alt='drawing-room' className='d-block w-100' />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SlidesOnly;
