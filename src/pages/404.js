import * as React from 'react';
import { Link } from 'gatsby';
import { PageLayout } from '../components/PageLayout';

const NotFoundPage = () => {
  return (
    <PageLayout title="Not Found">
      <h1>Page non trouvée</h1>
      <p>Désolé, nous n'avons pas trouvé la page que vous demandez</p>
      <Link to="/">Retourner à l'accueil</Link>.
    </PageLayout>
  );
};

export default NotFoundPage;
