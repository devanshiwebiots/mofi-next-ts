import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AutoPlayVariants, ImagePath } from "@/Constant";
import { AutoPlayData, AutoPlayDataList, autoPlaySliderOptions } from "@/Data/BonusUi/OwlCarousel";
import Slider from "react-slick";
import { Card, CardBody, Col } from "reactstrap";

const AutoPlayVariant = () => {
  return (
    <Col xl='6' xs='12'>
      <Card>
        <CommonCardHeader title={AutoPlayVariants} span={AutoPlayData} />
        <CardBody>
          <Slider {...autoPlaySliderOptions}>
            {AutoPlayDataList.map((data, index) => (
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

export default AutoPlayVariant;
