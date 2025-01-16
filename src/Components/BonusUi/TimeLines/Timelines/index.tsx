import { timelineData } from "@/Data/BonusUi/Timeline";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { Card, CardContent, Grid, Slide } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const Timelines: React.FC = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the item is in view
    });

    timelineItemsRef.current.forEach((item) => item && observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);
 

  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Timeline position='alternate'>
            {timelineData.map((item, index) => (
              <TimelineItem ref={(el: any) => (timelineItemsRef.current[index] = el)} id={item.id} key={item.id}>
                <TimelineSeparator>
                  <TimelineDot color={item.color} sx={{ width: 50, height: 50, fontSize: "1.5rem", padding: "10px" }}>
                    {item.icon}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Slide direction={item.direction} in={isVisible[item.id]} timeout={500}>
                    <div>{item.component}</div>
                  </Slide>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Timelines;
