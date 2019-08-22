import React, {Component} from 'react';
import styled from 'styled-components';
import createRoutes from './router';

import ROUTENAMES from '../navigation/routeName';

const Container = styled.View`
  flex: 1;
  elevation: 1;
  z-index: 1;
`;

const Content = styled.View`
  flex: 1;
`;

class Navigation extends Component {
  state = {
    Launch: null,
  };

  componentDidMount = () => {
    this.setState({Launch: createRoutes()});
  };

  render = () => {
    const {Launch} = this.state;
    return (
      <Container>
        <Content>{Launch && <Launch />}</Content>
      </Container>
    );
  };
}

export default Navigation;
