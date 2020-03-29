import React from 'react';
import Milestone from '../Milestone';
import { IMilestone } from '../../../types/milestone';

const MilestoneList: React.FC<{ list: IMilestone[] }> = props => {
  return (
    <>
      {props.list.map(item => {
        return (
          <Milestone
            key={item.id}
            id={item.id}
            heading={item.heading}
            reverse={item.reverse}
            link={item.link}
            image={item.image}
            content={item.content}
          />
        );
      })}
    </>
  );
};

export default MilestoneList;
