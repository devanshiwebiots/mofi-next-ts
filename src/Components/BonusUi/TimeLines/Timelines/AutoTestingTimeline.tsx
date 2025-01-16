import { AudioTesting, MusicalTrendsAndPredictability } from "@/Constant";
import { Badge } from "reactstrap";

const AutoTestingTimeline = () => {
  const AutoText: string = "So, the next time you listen to music, you might or might not consider how it's actively altering your mood.";

  return (
    <div className='vertical-timeline-element--work text-start'>
      <div className='timeline-wrapper'>
        <Badge color='primary'>{AudioTesting}</Badge>
      </div>
      <h4 className='m-0'>{MusicalTrendsAndPredictability}</h4>
      <p className='mb-0'>{AutoText}</p>
      <audio controls className='mt-3'>
        <source src='/assets/audio/horse.ogg' type='audio/ogg' />
      </audio>
    </div>
  );
};
export default AutoTestingTimeline;
