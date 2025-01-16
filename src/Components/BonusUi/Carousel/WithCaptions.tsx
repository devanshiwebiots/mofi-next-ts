import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, WithCaption } from "@/Constant";
import { WithCaptionData, WithCaptionDataList } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const WithCaptions = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={WithCaption} span={WithCaptionData} />
        <CardBody className="mt-2 mb-3">
          <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} loop>
            {WithCaptionDataList.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={`${ImagePath}/${item.image}`} alt="drawing-room" className="d-block w-100" />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithCaptions;
