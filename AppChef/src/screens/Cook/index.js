import React, {Component} from 'react';
import styled from 'styled-components/native';
import CommonText from '../../components/CommonText';

const Container = styled.View`
  flex: 1;
  background: ${p => p.theme.colors.white};
`;
class Cook extends Component {
  render() {
    return <Container />;
  }
}
export default Cook;