import * as React from 'react';
import { BoldText } from './Text';

export interface IAppProps {
  title: string;
  children: React.ReactNode;
}

export default function Sections(props: IAppProps) {
  return (
    <div className="lg:p-4 ">
      <BoldText>{props.title}</BoldText>
      {props.children}
    </div>
  );
}
