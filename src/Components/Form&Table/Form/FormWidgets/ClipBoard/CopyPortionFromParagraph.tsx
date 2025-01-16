import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ClipBoardCopy, CopyHighLightedText, CopyPortionFromParagraphs, HighlightText } from "@/Constant";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, Col } from "reactstrap";

const CopyPortionFromParagraph = () => {
  const highlightText = "Web design is the process of creating websites";
  const fullText = `${highlightText} that are visible online. Take a website design course to learn how to create an appealing and responsive website. In the discipline of web design, there are degree, diploma, postgraduate degree, and certificate programmes. A web designer is responsible for a website's look, feel, and occasionally even content.`;
  const [clipBoardValues, setClipBoardValues] = useState({ value: highlightText, copied: false });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(clipBoardValues.value);
      setClipBoardValues({ ...clipBoardValues, copied: true });

      setTimeout(() => {
        setClipBoardValues({ ...clipBoardValues, copied: false });
      }, 2000);
    } catch (err) {
      toast.error("Failed to copy text: " + err);
    }
  };
  return (
    <Col sm='12' md='6'>
      <Card>
        <CommonCardHeader title={CopyPortionFromParagraphs} />
        <CardBody>
          <div className='clipboaard-container'>
            <p className='card-description'>{ClipBoardCopy}</p>
            <h6 className='border rounded card-body f-w-300'>
              {fullText}
            </h6>
            <div className='mt-3 text-end'>
              <Button className='btn-clipboard' color='secondary' onClick={handleCopy}>
                <i className='fa fa-copy'></i> {CopyHighLightedText}
              </Button>
              {clipBoardValues.copied && <span className='ms-2 text-success'>Copied!</span>}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CopyPortionFromParagraph;
