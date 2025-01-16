 

import { TourGuideClient } from "@sjmc11/tourguidejs";
import { useEffect, useRef, useState } from "react";
import { Container, Row } from "reactstrap";
import TourMain from "./TourMain";

import { TourSteps } from "@/Data/BonusUi/Tour";
import { toast } from "react-toastify";

export default function TourContainer() {
  const tourRef = useRef<any | null>(null);
  const [isTourOpen, setIsTourOpen] = useState(false);

  useEffect(() => {
    try {
      tourRef.current = new TourGuideClient({ steps: TourSteps });
    } catch (error) {
      toast.error("Error initializing TourGuideClient:" + error);
    }

    return () => tourRef.current?.destroy?.();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsTourOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isTourOpen) tourRef.current?.start?.();
  }, [isTourOpen]);

  return (
    <>
      <Container fluid>
        <div className='user-profile'>
          <Row>
            <TourMain />
          </Row>
        </div>
      </Container>
    </>
  );
}
