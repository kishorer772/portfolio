import * as React from 'react';

export interface IAppProps {
  children: React.ReactNode;
  title: string;
  url: string;
}

export default function MediaLink(props: IAppProps) {
  return (
    <div className="flex gap-3">
      {props.children}
      <a href={props.url}>{props.title}</a>
    </div>
  );
}
