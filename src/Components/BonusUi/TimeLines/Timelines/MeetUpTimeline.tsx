import { MeetUpTimelineTitle, PleaseMeetUp, WebDesignersMeeUp } from '@/Constant';
import { Badge } from 'reactstrap';

const MeetUpTimeline = () => {
const MeetUpText: string = "Find nearby web designers to network with! A Web Design Meetup is a place where you can discuss tools.";

   return (
     <div className='vertical-timeline-element--work'>
       <div className='timeline-wrapper'>
         <Badge color='success'>{MeetUpTimelineTitle}</Badge>
       </div>
       <h4 className='m-0 vertical-timeline-element-subtitle'>{WebDesignersMeeUp}</h4>
       <p className='mb-0'>{MeetUpText}</p>
       <div className='time-content pt-2'>
         <i className='icon-android'></i>
         <h5>{PleaseMeetUp}</h5>
       </div>
     </div>
   );
}
export default MeetUpTimeline;