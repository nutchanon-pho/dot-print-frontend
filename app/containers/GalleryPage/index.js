import React from 'react';
import { Helmet } from 'react-helmet';
import DotPrintMenu from 'containers/Menu';
import { Menu, Grid, Segment } from 'semantic-ui-react';
import Footer from 'components/Footer';
import GalleryDimmer from 'components/GalleryDimmer';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const cardList = [
  {
    image: 'https://picsum.photos/600/400?image=10',
    header: 'Picture#1',
    meta: 'Artist Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: 'https://picsum.photos/600/400?image=11',
    header: 'Picture#2',
    meta: 'Artist Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: 'https://picsum.photos/600/400?image=12',
    header: 'Picture#3',
    meta: 'Artist Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: 'https://picsum.photos/600/400?image=13',
    header: 'Picture#4',
    meta: 'Artist Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default class GalleryPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleItemClick = (name) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state || {};
    return (
      <article>
        <Helmet>
          <title>Shop Page</title>
          <meta name="description" content="" />
        </Helmet>
        <DotPrintMenu />
        <Segment basic style={{ marginTop: '100px' }}>
          <Grid stackable>
            <Grid.Column computer={3} mobile={8}>
              <Menu vertical fluid>
                <Menu.Item>
                  COLLECTION
                </Menu.Item>
                <Menu.Item>
                  <Menu.Header>DOTPRINT X ARTIST</Menu.Header>
                  <Menu.Menu>
                    <Menu.Item content="NEW ARTISTS" name="rails" active={activeItem === 'rails'} onClick={this.handleItemClick} />
                    <Menu.Item content="COLLECTIONS" name="python" active={activeItem === 'python'} onClick={this.handleItemClick} />
                    <Menu.Item content="SIGNATURES" name="php" active={activeItem === 'php'} onClick={this.handleItemClick} />
                  </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                  CELEBRATIONS
                </Menu.Item>
                <Menu.Item>
                  NATURE&EXPLORE
                </Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column computer={13} mobile={8}>
              <Grid stackable columns={3}>
                {cardList.map((each) => (
                  <Grid.Column textAlign="center" ><GalleryDimmer src={each.image} /></Grid.Column>
                ))}
              </Grid>
            </Grid.Column>
          </Grid>
        </Segment>
        <Footer />
      </article>
    );
  }
}

GalleryPage.propTypes = {
};

