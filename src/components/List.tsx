import { ElementType } from 'react';

export default function List<T>({
  list,
  component,
}: {
  list: T[];
  component: ElementType;
}) {
  const AppComponent = component;
  return (
    <>
      {list.map((list) => (
        <AppComponent key={list} {...list} />
      ))}
    </>
  );
}
