// import * as React from 'react';

export interface IAppProps {
  children: string;
}

export default function Text(props: IAppProps) {
  return <p className="p-1 ">{props.children}</p>;
}

export function BoldText(props: IAppProps) {
  return (
    <p className="text-2xl font-semibold py-2 hover:text-red-400 duration-1000">
      {props.children}
    </p>
  );
}
