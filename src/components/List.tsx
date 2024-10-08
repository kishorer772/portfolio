import { ElementType } from 'react';

export default function List<T>({
  list,
  component,
  keyExtractor,
}: {
  list: T[];
  component: ElementType;
  keyExtractor: (item: T) => React.Key;
}) {
  const AppComponent = component;
  return (
    <>
      {list.map((item) => (
        <AppComponent key={keyExtractor(item)} {...item} />
      ))}
    </>
  );
}
