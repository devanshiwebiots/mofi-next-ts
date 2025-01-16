import CommonFileUpload from "@/CommonComponent/CommonFileUpload";
import { Form } from "reactstrap";

const DropzoneClass = () => {
  return (
    <Form className='m-b-20'>
      <CommonFileUpload />
    </Form>
  );
};

export default DropzoneClass;
