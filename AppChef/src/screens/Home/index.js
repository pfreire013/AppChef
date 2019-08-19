import React, {Component} from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background: ${p => p.theme.colors.lightGray};
`;

class Home extends Component {
  render() {
    return <Container />;
  }
}

export default Home;
