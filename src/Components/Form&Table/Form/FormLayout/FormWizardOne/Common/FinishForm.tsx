import { Congratulations, ImagePath } from "@/Constant";
import { Col, Form, Row } from "reactstrap";

const FinishForm = () => {
  return (
    <Row>
      <Col xs="12" className="m-0">
        <div className="successful-form">
          <img className="img-fluid" src={`${ImagePath}/gif/dashboard-8/successful.gif`} alt="successful" />
          <h6>{Congratulations}</h6>
          <p>Well done! You have successfully completed.</p>
        </div>
      </Col>
    </Row>
  );
};

export default FinishForm;
