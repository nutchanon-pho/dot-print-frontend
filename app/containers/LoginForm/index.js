/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React, { Component } from 'react';
import { Icon, Button, Grid, Form, Header } from 'semantic-ui-react';

export default class LoginForm extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column computer={10} mobile={16}>
            <Form>
              <Form.Field>
                <Form.Input label="EMAIL" type="email" />
              </Form.Field>
              <Form.Field>
                <Form.Input label="PASSWORD" type="password" />
              </Form.Field>
              <Form.Field style={{ textAlign: 'right' }}>
                Forgot Your Password?
              </Form.Field>
              <Form.Field style={{ textAlign: 'right' }}>
                <Button type="submit">GO</Button>
              </Form.Field>
            </Form>
          </Grid.Column>
          <Grid.Column computer={6} mobile={16} textAlign="center">
            <Header>
              LOGIN WITH
            </Header>
            <div>
              <Button color="facebook">
                <Icon name="facebook" /> Facebook
            </Button>
            </div>
            <Header as="h4">
              OR
            </Header>
            <div>
              <Button color="google plus">
                <Icon name="google plus" /> Google Plus
            </Button>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column textAlign="center">
          NEW MEMBER?&nbsp;<strong>REGISTER</strong>&nbsp;OR&nbsp;<strong>CONTINUE AS GUEST</strong>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
