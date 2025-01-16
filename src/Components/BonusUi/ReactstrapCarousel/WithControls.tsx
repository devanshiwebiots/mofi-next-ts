import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, WithControl } from "@/Constant";
import { WithControlData, WithControlDataList, withControlSettingData } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";
import { Swiper, SwiperSlide } from "swiper/react";

const WithControls = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={WithControl} span={WithControlData} />
        <CardBody>
          <Swiper {...withControlSettingData}>
            {WithControlDataList.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={`${ImagePath}/${item.image}`}  alt="drawing-room" className="d-block w-100" />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithControls;