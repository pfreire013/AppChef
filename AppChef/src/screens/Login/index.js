import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  View,
  Text,
  Linking,
} from 'react-native';
import styled from 'styled-components/native';
import {Formik} from 'formik';
import * as yup from 'yup';

import CommonText from '../../components/CommonText';
import InputLine from '../../components/InputLine';

import images from '../../assets/images';
import ROUTENAMES from '../../navigation/routeName';

const BackgroundImage = styled.ImageBackground.attrs(props => ({
  source: images.background,
}))`
  height: 100%;
  width: 100%;
`;

const Container = styled.View`
  flex: 1;
  padding-horizontal: 32;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  position: relative;
`;

const ButtonLogin = styled.TouchableOpacity`
  height: 40;
  width: 174;
  border-radius: 20;
  background: ${p => p.theme.colors.primary};
  align-items: center;
  justify-content: center;
  margin-bottom: 18;
`;

const ButtonAdd = styled.TouchableOpacity`
  height: 50;
  width: 100%;
  border-radius: 25;
  background: ${p => p.theme.colors.tertiary};
  align-self: center;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 32;
`;

const InputContainer = styled.View`
  margin-top: 40;
  margin-bottom: 40;
  width: 70%;
`;

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    senha: '',
  };
  render() {
    const {navigation} = this.props;
    return (
      <BackgroundImage>
        <Container>
          <CommonText type="h1" color="white">
            Login
          </CommonText>

          <InputContainer>
            <InputLine value={this.state.email} placeholder="Usuário / Email" />

            <InputLine value={this.state.senha} placeholder="Senha" />
          </InputContainer>

          <ButtonLogin onPress={() => navigation.navigate(ROUTENAMES.HOME)}>
            <CommonText type="h5Normal" color="white" noPadding noWidth>
              Entrar
            </CommonText>
          </ButtonLogin>

          <CommonText type="small" color="primary" noPadding noWidth>
            Esqueci minha senha
          </CommonText>

          <ButtonAdd>
            <CommonText type="h4" color="white" noPadding noWidth>
              Quero me cadastrar
            </CommonText>
          </ButtonAdd>
        </Container>
      </BackgroundImage>
    );
  }
}

export default Login;
