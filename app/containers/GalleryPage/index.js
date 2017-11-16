import React from 'react';
import { Helmet } from 'react-helmet';
import Menu from 'containers/Menu';
import { Container, Card, Image } from 'semantic-ui-react';
import Footer from 'components/Footer';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';


export default class GalleryPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet>
          <title>Shop Page</title>
          <meta name="description" content="" />
        </Helmet>
        <Menu />
        <Container style={{ marginTop: '200px' }}>
          <Card.Group>
            <Card>
              <Card.Content>
                <Image floated="right" size="mini" src="/assets/images/avatar/large/steve.jpg" />
                <Card.Header>
                  Steve Sanders
                </Card.Header>
                <Card.Meta>
                  Friends of Elliot
                </Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                test
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
        <Footer />
      </article>
    );
  }
}

GalleryPage.propTypes = {
};

