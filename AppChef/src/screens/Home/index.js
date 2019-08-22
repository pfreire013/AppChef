import React, {Component} from 'react';
import styled from 'styled-components/native';
import CommonText from '../../components/CommonText';

const Container = styled.View`
  flex: 1;
  background: ${p => p.theme.colors.lightGray};
`;

class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <CommonText>Home</CommonText>
      </Container>
    );
  }
}

export default Home;
