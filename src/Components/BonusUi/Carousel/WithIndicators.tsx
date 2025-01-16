import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, WithIndicator } from "@/Constant";
import { mouseWheelSliderOptions, WithIndicatorData, WithIndicatorDataList } from "@/Data/BonusUi/OwlCarousel";
import Slider from "react-slick";
import { Card, CardBody, Col } from "reactstrap";

const WithIndicators = () => {
  return (
    <Col xl='6' xs='12'>
      <Card>
        <CommonCardHeader title={WithIndicator} span={WithIndicatorData} />
        <CardBody>
          <Slider {...mouseWheelSliderOptions}>
            {WithIndicatorDataList.map((data, index) => (
              <div className='item px-1' key={index}>
                <img src={`${ImagePath}/${data.image}`} alt='Drawing-room' className='img-fluid rounded' />
              </div>
            ))}
          </Slider>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithIndicators;
