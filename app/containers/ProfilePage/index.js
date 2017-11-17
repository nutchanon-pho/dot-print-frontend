/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import DotPrintMenu from 'containers/Menu';
import Footer from 'components/Footer';
import { Grid, Image, Segment, Menu, Header } from 'semantic-ui-react';
import { makeSelectCurrentUser } from 'containers/App/selectors';

export class ProfilePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { activeItem: 'accountDetails' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state || {};
    const { currentUser } = this.props;
    return (
      <article>
        <Helmet>
          <title>Profile Page</title>
          <meta name="description" content="" />
        </Helmet>
        <DotPrintMenu />
        <Segment basic style={{ marginTop: '150px', minHeight: '350px' }}>
          <Grid stackable>
            <Grid.Column computer={3} mobile={8}>
              <Header textAlign="center" as="h1">
                {`${currentUser.get('firstName')}`}<br />
                {`${currentUser.get('lastName')}`}
              </Header>
              <Image src={'https://api.adorable.io/avatars/285/abott@adorable.png'} size="medium" className="circular" />
              <Menu vertical fluid>
                <Menu.Item name="accountDetails" active={activeItem === 'accountDetails'} onClick={this.handleItemClick}>
                  ACCOUNT DETAILS
                </Menu.Item>
                <Menu.Item name="purchaseHistory" active={activeItem === 'purchaseHistory'} onClick={this.handleItemClick}>
                  PURCHASE HISTORY
                </Menu.Item>
                <Menu.Item name="billingDetails" active={activeItem === 'billingDetails'} onClick={this.handleItemClick}>
                  BILLING DETAILS
                </Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column computer={13} mobile={8}>

            </Grid.Column>
          </Grid>
        </Segment>
        <Footer />
      </article>
    );
  }
}

ProfilePage.propTypes = {
  currentUser: PropTypes.object,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(ProfilePage);
