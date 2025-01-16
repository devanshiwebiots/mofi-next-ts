import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import CommonFileUpload from "@/CommonComponent/CommonFileUpload";
import { MultiFileUploads } from "@/Constant";
import { FileUploadData } from "@/Data/BonusUi/Dropzone";
import { Card, CardBody, Col } from "reactstrap";

const MultiFileUpload = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={MultiFileUploads} span={FileUploadData} />
        <div className="p-3">
        <CommonFileUpload multiple/>
        </div>
      </Card>
    </Col>
  );
};

export default MultiFileUpload;
