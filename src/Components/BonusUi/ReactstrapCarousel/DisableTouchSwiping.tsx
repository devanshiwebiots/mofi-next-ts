import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DisableTouchSwipings, ImagePath } from "@/Constant";
import { DisableTouchData, DisableTouchDataList } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const DisableTouchSwiping = () => {
  return (
    <Col xl='6' xs='12'>
      <Card>
        <CommonCardHeader title={DisableTouchSwipings} span={DisableTouchData} />
        <CardBody>
          <Swiper modules={[Navigation]} navigation loop slidesPerView={1} simulateTouch={false}>
            {DisableTouchDataList?.map((item, index) => (
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

export default DisableTouchSwiping;
