import React from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import AppIdeasTimeline from "./AppIdeasTimeline";
import AutoTestingTimeline from "./AutoTestingTimeline";
import BlogTimeline from "./BlogTimeline";
import CarouselTimeline from "./CarouselTimeline";
import MeetUpTimeline from "./MeetUpTimeline";
import ResolutionTimeline from "./ResolutionTimeline";

const Timelines: React.FC = () => {
  return (
    <Col sm={12} className="box-col-12">
      <Card>
        <CardHeader>
          <h4>Timeline</h4>
          <p className="f-m-light mt-1">
            This is a Mofi timeline chart.</p>
        </CardHeader>
        <CardBody>
          <section className="cd-container" id="cd-timeline">
            <AppIdeasTimeline />
            <BlogTimeline />
            <CarouselTimeline />
            <AutoTestingTimeline />
            <MeetUpTimeline />
            <ResolutionTimeline />
          </section>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Timelines;
