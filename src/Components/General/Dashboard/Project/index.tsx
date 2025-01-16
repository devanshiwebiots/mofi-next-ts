'use client';
import { Container, Row } from "reactstrap";
import ClientActivity from "./ClientActivity";
import OnlineCourseTimeline from "./OnlineCourseTimeline";
import ProjectsOverview from "./ProjectsOverview";
import ProjectStatus from "./ProjectStatus";
import RecentProjects from "./RecentProjects";
import RunningEvents from "./RunningEvents";
import TodayTasks from "./TodayTasks";
import TotalProject from "./TotalProject";
import WebsiteDesign from "./WebsiteDesign";

const ProjectContainer = () => {
  return (
    <Container fluid className='dashboard-2'>
      <Row>
        <ProjectStatus />
        <RecentProjects />
        <TotalProject />
        <ProjectsOverview />
        <ClientActivity />
        <WebsiteDesign />
        <TodayTasks />
        <RunningEvents />
        <OnlineCourseTimeline />
      </Row>
    </Container>
  );
};

export default ProjectContainer;
