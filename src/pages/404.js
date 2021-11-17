import * as React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/layout';

const NotFoundPage = () => {
  return (
    <Layout title="Not Found">
      <h1>Page non trouvée</h1>
      <p>Désolé, nous n'avons pas trouvé la page que vous demandez</p>
      <Link to="/">Retourner à l'accueil</Link>.
    </Layout>
  );
};

export default NotFoundPage;
