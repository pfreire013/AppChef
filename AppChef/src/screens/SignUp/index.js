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
  justify-content: flex-end;
`;

const Darkness = styled.View`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
`;

const Header = styled.View`
  flex: 0.2;
`;

const Title = styled.View`
  margin-top: 40;
  margin-left: 36;
`;

const Subtitle = styled.View`
  margin-left: 36;
`;

const Container = styled.View`
  flex: 0.8;
  border-top-left-radius: 40;
  border-top-right-radius: 40;
  padding-horizontal: 32;
  background: ${p => p.theme.colors.white};
`;

class SignUp extends Component {
  state = {
    nome: '',
    email: '',
    senha: '',
    conf_senha: '',
  };
  render() {
    return (
      <BackgroundImage>
        <Darkness>
          <Header>
            <Title>
              <CommonText type="h2" color="white" noPadding noWidth>
                Cadastro
              </CommonText>
            </Title>
            <Subtitle>
              <CommonText type="h5Normal" color="white" noPadding noWidth>
                Informações pessoais
              </CommonText>
            </Subtitle>
          </Header>
          <Container>
            <InputLine value={this.state.nome} placeholder="Nome" />

            <InputLine value={this.state.email} placeholder="Email" />

            <InputLine value={this.state.senha} placeholder="Senha" />

            <InputLine
              value={this.state.conf_senha}
              placeholder="Confirmar Senha"
            />

            <CommonText>Sexo</CommonText>
            <CommonText>Data</CommonText>
            <CommonText>Termo de privacidade</CommonText>
            <CommonText>SMS</CommonText>
          </Container>
        </Darkness>
      </BackgroundImage>
    );
  }
}

export default SignUp;
