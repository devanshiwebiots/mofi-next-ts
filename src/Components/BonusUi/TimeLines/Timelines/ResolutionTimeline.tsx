import { MyResolutions, MyResolutionsFor2023, Resolutions } from "@/Constant";
import { Badge } from "reactstrap";

const ResolutionTimeline = () => {
  const ResolutionText: string = "I'm determined to streamline, organism, systematism, realign, and embrace life in 2023.";

  return (
    <div className='vertical-timeline-element--work text-start'>
      <div className='timeline-wrapper'>
        <Badge color='warning'>{Resolutions}</Badge>
      </div>
      <h4 className='m-0 vertical-timeline-element-subtitle'>{MyResolutionsFor2023}</h4>
      <p className='mb-0'>{ResolutionText}</p>
      <div className='time-content pt-2'>
        <i className='icon-write'></i>
        <h5>{MyResolutions}</h5>
      </div>
    </div>
  );
};
export default ResolutionTimeline;
