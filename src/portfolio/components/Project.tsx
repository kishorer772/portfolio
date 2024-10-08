// import * as React from 'react';
import Text, { BoldText } from '../../components/Text';
import Chip from '../../components/Chip';
import { CiClock1 } from 'react-icons/ci';
export interface IProjectProps {
  name: string;
  company: string;
  duration: string;
  stack: string[];
}

export default function Project(props: IProjectProps) {
  return (
    <div className="hover:bg-gray-100 shadow p-10 hover:shadow-lg ">
      <Text>{props.company}</Text>
      <BoldText>{props.name}</BoldText>
      <div className="flex gap-1 items-center">
        <CiClock1 className="text-2xl" />
        <Text>{props.duration}</Text>
      </div>
      <Chip list={props.stack} />
    </div>
  );
}
