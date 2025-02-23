import { Card, CardBody, Col, Container, Row } from "reactstrap";
import InvoiceSixHeader from "./InvoiceSixHeader";
import UserDetails from "./UserDetails";
import InvoiceSixTable from "./InvoiceSixTable";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const InvoiceSixContainer = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef
  });
  return (
    <>
      <Container>
        <div ref={contentRef}>
          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <div className="invoice">
                    <div>
                      <InvoiceSixHeader />
                      <hr />
                      <UserDetails />
                      <InvoiceSixTable />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      <InvoiceButtons handlePrint={handlePrint} />
    </>
  );
};

export default InvoiceSixContainer;
