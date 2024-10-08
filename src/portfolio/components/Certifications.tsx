// import * as React from 'react';
import List from '../../components/List';
import Certificate from './Certificate';

export interface ICertificateProps {
  name: string;
  from: string;
  issuedOn: string;
  link: string;
}

export default function Certifications({
  certificates,
}: {
  certificates: ICertificateProps[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <List component={Certificate} list={certificates} />
    </div>
  );
}
