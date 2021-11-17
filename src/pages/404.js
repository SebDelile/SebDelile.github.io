import * as React from 'react';
import { Link } from 'gatsby';
import { GlobalStyleProvider } from '../utils/GlobalStyleProvider';

const NotFoundPage = () => {
  return (
    <GlobalStyleProvider>
      <main>
        <title>Not found</title>
        <h1>Page non trouvée</h1>
        <p>Désolé, nous n'avons pas trouvé la page que vous dedmandez</p>
        <Link to="/">Retourner à l'accueil</Link>.
      </main>
    </GlobalStyleProvider>
  );
};

export default NotFoundPage;
