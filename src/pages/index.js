import * as React from 'react';
import { Background } from '../components/Background';
import { Banner } from '../components/Banner';
import { PageLayout } from '../components/PageLayout';
import { Technologies } from '../components/Technologies';

const IndexPage = () => {
  return (
    <PageLayout title="SebDelile">
      <Banner />
      <Technologies />
      <Background />
    </PageLayout>
  );
};

export default IndexPage;
