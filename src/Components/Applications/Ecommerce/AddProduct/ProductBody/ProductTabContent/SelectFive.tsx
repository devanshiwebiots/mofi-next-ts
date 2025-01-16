import { Col, Label, Row } from "reactstrap";
import ReactDatePicker from "react-datepicker";
import { SetStateAction, useState } from "react";
import { PublishDateTime } from "@/Constant";

const SelectFive = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const handleChange = (date: SetStateAction<Date | null>) => setStartDate(date);

  return (
    <Col sm="6">
      <Row>
        <Col xs="12">
          <Label for="validationServer01" check> {PublishDateTime} </Label>
          <div className="input-group flatpicker-calender product-date">
            <ReactDatePicker className="form-control flatpickr-input" selected={startDate} onChange={handleChange} />
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default SelectFive;
