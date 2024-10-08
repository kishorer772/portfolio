// import * as React from 'react';
import Project, { IProjectProps } from './Project';
import List from '../../components/List';

export interface IAppProps {
  projects: IProjectProps[];
}

export default function Projects(props: IAppProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 flex-wrap ">
      <List component={Project} list={props.projects} />
    </div>
  );
}
