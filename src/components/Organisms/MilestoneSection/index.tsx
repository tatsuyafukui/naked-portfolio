import { Link } from 'gatsby';
import React from 'react';
import Heading from '../../Atoms/Heading';
import Txt from '../../Atoms/Txt';
import Image from '../../Atoms/Image';
import Button from '../../Atoms/Button';
import style from './style.css';
import { IMilestone } from '../../../types/milestone';
import {InlineSection} from "../../Atoms/Section";

const Milestone: React.FC<IMilestone> = props => {
  return (
    <InlineSection
      reverse={props.reverse}
    >
      <div>
        <Image imageName={props.image} />
      </div>
      <div>
        <div>
          <Heading>{props.heading}</Heading>
          <Txt>{props.content}</Txt>
          <Link to={props.link}>
            <Button>学習項目を確認する</Button>
          </Link>
        </div>
      </div>
    </InlineSection>
  );
};

export default Milestone;
