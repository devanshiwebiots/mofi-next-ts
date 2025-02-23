import { AppIdeas, EstablishedNewTheAppIdeaRepository, ViewItOnGithub } from "@/Constant";
import { Badge } from "reactstrap";

const AppIdeasTimeline = () => {
  const AppIdeaText: string = "developers who are just beginning their learning process. those who often concentrate on developing programmes with a user interface.";

  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img cd-picture bg-primary bounce-in"><i className="icon-pencil-alt" /></div>
      <div className="cd-timeline-content bounce-in">
        <div className="vertical-timeline-element--work">
          <div className="timeline-wrapper">
            <Badge color="warning">{AppIdeas}</Badge>
          </div>
          <h4 className="m-0 vertical-timeline-element-subtitle">{EstablishedNewTheAppIdeaRepository}</h4>
          <p className="mb-0">{AppIdeaText}</p>
          <div className="time-content pt-2">
            <i className="icon-github"></i>
            <h5>{ViewItOnGithub}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppIdeasTimeline;
