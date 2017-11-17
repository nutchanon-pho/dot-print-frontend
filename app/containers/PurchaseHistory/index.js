/**
 *
 * PurchaseHistory
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Card, Menu, Segment, Image } from 'semantic-ui-react';

const items = [
  {
    key: 1,
    header: 'ORDER NUMBER: 5743840',
    description: 'Canvas A3 Size. 20 Copies.',
    meta: '17th November 2017 13:04',
    previewImage: ['https://picsum.photos/600/400?image=6'],
  },
  {
    key: 2,
    header: 'ORDER NUMBER: 5759840',
    description: 'Canvas A3 Size. 20 Copies.',
    meta: '17th November 2017 13:04',
    previewImage: ['https://picsum.photos/600/400?image=7'],
  },
  {
    key: 3,
    header: 'ORDER NUMBER: 2743840',
    description: 'Canvas A3 Size. 20 Copies.',
    meta: '17th November 2017 13:04',
    previewImage: ['https://picsum.photos/600/400?image=8', 'https://picsum.photos/600/400?image=9'],
  },
];

export class PurchaseHistory extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { activeItem: '10' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Card.Group itemsPerRow={1}>
          {items.map((item) => (
            <Card key={item.header}>
              <Card.Content>
                <Card.Header>
                  {item.header}
                </Card.Header>
                <Card.Meta>
                  {item.meta}
                </Card.Meta>
                <Card.Description>
                  {item.description}
                </Card.Description>
                {item.previewImage.map((imageSrc) => (
                  <Image floated="right" size="small" key={imageSrc} src={imageSrc} />
                ))}
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
        <br />
        <Segment basic textAlign="center">
          <Menu pagination>
            <Menu.Item name="1" active={activeItem === '1'} onClick={this.handleItemClick} />
            <Menu.Item disabled>...</Menu.Item>
            <Menu.Item name="10" active={activeItem === '10'} onClick={this.handleItemClick} />
            <Menu.Item name="11" active={activeItem === '11'} onClick={this.handleItemClick} />
            <Menu.Item name="12" active={activeItem === '12'} onClick={this.handleItemClick} />
          </Menu>
        </Segment>
      </div>
    );
  }
}

PurchaseHistory.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(PurchaseHistory);
