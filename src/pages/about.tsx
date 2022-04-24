import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Info = ({ text }: { text: string }) => (
  <p className="text-red-300">{text}</p>
);

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <Info text={'test'} />
      <Info text={'test2'} />
      <Info text={'test3'} />
      <p className="text-gray-600">It is my first blog</p>
      <p></p>
    </Content>
  </Main>
);

export default About;
