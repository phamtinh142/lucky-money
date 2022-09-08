import React from 'react';
import './style.scss';

import {Container} from '@mui/material';

import Header from '../../partials/Header';

const HomePage: React.FC = () => {
  return (
    <Container className="container-body" maxWidth={false}>
      <Header />
    </Container>
  );
};

export default HomePage;
