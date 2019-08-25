import React, {Component} from 'react';
import styled from 'styled-components/native';
import CommonText from '../../components/CommonText';

//Components
import RecipeContainer from '../../components/RecipeContainer';

const Container = styled.View`
  flex: 1;
  background: ${p => p.theme.colors.white};
  padding-top: 40px;
`;

const Title = styled.View`
  flex-direction: row;
  margin-bottom: 20;
  padding-horizontal: 32px;
`;

const Subtitle = styled.View`
  margin-left: 10px;
  padding-horizontal: 32px;
`;

const SliderRecipeContainer = styled.ScrollView`
  margin-top: 12px;
  padding-left: 32;
`;

class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <Title>
          <CommonText type="h2" noPadding noWidth>
            Bom dia,
          </CommonText>
          <CommonText type="h2" color="primary" noPadding noWidth>
            Paulo
          </CommonText>
        </Title>

        <Subtitle>
          <CommonText type="h4" color="mediumGray" noPadding noWidth>
            Nosso chef escolheu algumas receitas para voce
          </CommonText>
        </Subtitle>

        <SliderRecipeContainer
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <RecipeContainer />
          <RecipeContainer />
          <RecipeContainer />
        </SliderRecipeContainer>
      </Container>
    );
  }
}

export default Home;
