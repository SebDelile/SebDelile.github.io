import * as React from 'react';
import { GlobalStyleProvider } from '../utils/GlobalStyleProvider';

const IndexPage = () => {
  return (
    <GlobalStyleProvider>
      <main>
        <title>SebDelile</title>
        <h1>Hello world !</h1>
      </main>
    </GlobalStyleProvider>
  );
};

export default IndexPage;
