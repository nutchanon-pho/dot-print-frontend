/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Menu from 'containers/Menu';
import { Container } from 'semantic-ui-react';
import Footer from 'components/Footer';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet>
          <title>Shop Page</title>
          <meta name="description" content="" />
        </Helmet>
        <Menu />
        <Container style={{ marginTop: '30px' }}>
        </Container>
        <Footer />
      </article>
    );
  }
}

HomePage.propTypes = {
};

