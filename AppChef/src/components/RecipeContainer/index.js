import React, {Component} from 'react';
import {StyleSheet, findNodeHandle} from 'react-native';
import styled from 'styled-components';
import {BlurView} from '@react-native-community/blur';

import images from '../../assets/images';

import CommonText from '../CommonText';
import TypesTag from '../TypesTag';

const Container = styled.TouchableOpacity`
  height: 257;
  width: 257;
  border-radius: 16;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.9);
  position: relative;
  margin-right: 24;
`;

const BackgroundImage = styled.ImageBackground.attrs(props => ({
  source: images.recipe01,
  borderRadius: 16,
}))`
  height: 100%;
  width: 100%;
  align-items: center;
  padding-bottom: 8;
  padding-horizontal: 8;
`;

const InfoContainer = styled.View`
  height: 90;
  width: 234;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16;
  position: absolute;
  bottom: 8;
  padding-vertical: 6;
  padding-horizontal: 8;
`;

const LikeIcon = styled.Image.attrs(props => ({
  //(Icon).attrs(props => ({
  source: images.icons.likeOn,
}))`
  height: 14;
  width: 14;
  position: absolute;
  right: 10;
  top: 10;
`;

const Title = styled.View``;

const Name = styled.View``;

const Difficulty = styled.View``;

const TypesTags = styled.View`
  height: 24;
  width: 83;
  border-width: 2px;
  border-color: ${p => p.theme.colors.tertiary};
  border-radius: 12;
  align-items: center;
  justify-content: center;
`;

export default class RecipeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {viewRef: null};
  }

  imageLoaded() {
    this.setState({viewRef: findNodeHandle(this.backgroundImage)});
  }

  render() {
    return (
      <Container>
        <BackgroundImage>
          <InfoContainer>
            <LikeIcon />
            <Title>
              <CommonText type="h5Normal" color="white" noPadding noWidth>
                Risoto de Soja com shoyu
              </CommonText>
            </Title>
            <Name>
              <CommonText type="small" color="lightGray" noPadding noWidth>
                chef Rafael Silva
              </CommonText>
            </Name>
            <Difficulty>
              <CommonText type="small" color="white" noPadding noWidth>
                Dificuldade: Médio
              </CommonText>
            </Difficulty>
            <TypesTag text="Vegetariano" width={100} />
          </InfoContainer>
        </BackgroundImage>
      </Container>
    );
  }
}
