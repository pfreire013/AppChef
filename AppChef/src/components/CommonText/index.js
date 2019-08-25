import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  padding: ${p => (!p.noPadding ? '0 5%' : '0')};
  ${p => p.width && `width: ${p.width}`};
  margin-top: ${p => p.marginTop};
  ${p => {
    switch (p.color) {
      case 'lightGray':
        return `color: ${p.theme.colors.lightGray}`;
      case 'mediumGray':
        return `color: ${p.theme.colors.mediumGray}`;
      case 'hardGray':
        return `color: ${p.theme.colors.hardGray}`;
      case 'black':
        return `color: ${p.theme.colors.black}`;
      case 'white':
        return `color: ${p.theme.colors.white}`;
      case 'primary':
        return `color: ${p.theme.colors.primary}`;
      case 'secondary':
        return `color: ${p.theme.colors.secondary}`;
      case 'tertiary':
        return `color: ${p.theme.colors.tertiary}`;
      default:
        return `color: ${p.theme.colors.black}`;
    }
  }};
  ${p => {
    switch (p.background) {
      case 'transparent':
        return `background-color: ${p.theme.colors.transparent}`;
      default:
        return `background-color: ${p.theme.colors.transparent}`;
    }
  }};
  font-size: ${p => p.theme.fontSize.normal};
  font-family: ${p => p.theme.fontFamily.regular};
  ${p => {
    switch (p.type) {
      case 'monsterText':
        return `
                  font-family: ${p.theme.fontFamily.regular};
                  font-size: ${p.theme.fontSize.monster};
                `;
      case 'fakeInput':
        return `
                  font-family: ${p.theme.fontFamily.regular};
                  font-size: ${p.theme.fontSize.input};
                `;

      case 'normal':
        return `
                  font-family: ${p.theme.fontFamily.regular};
                  font-size: ${p.theme.fontSize.normal};
                `;
      case 'normalMedium':
        return `
                  font-family: ${p.theme.fontFamily.button};
                  font-size: ${p.theme.fontSize.normal};
                `;
      case 'normalSemiBold':
        return `
                  font-family: ${p.theme.fontFamily.semiBold};
                  font-size: ${p.theme.fontSize.normal};
                `;
      case 'normalBold':
        return `
                  font-family: ${p.theme.fontFamily.bold};
                  font-size: ${p.theme.fontSize.normal};
                `;

      case 'minor':
        return `
                  font-family: ${p.theme.fontFamily.regular};
                  font-size: ${p.theme.fontSize.minor};
                `;
      case 'minorMedium':
        return `
                  font-family: ${p.theme.fontFamily.button};
                  font-size: ${p.theme.fontSize.minor};
                `;
      case 'minorSemiBold':
        return `
                  font-family: ${p.theme.fontFamily.semiBold};
                  font-size: ${p.theme.fontSize.minor};
                `;
      case 'minorBold':
        return `
                  font-family: ${p.theme.fontFamily.bold};
                  font-size: ${p.theme.fontSize.minor};
                `;

      case 'high':
        return `
                  font-family: ${p.theme.fontFamily.light};
                  font-size: ${p.theme.fontSize.buttonMedium};
                `;
      case 'highNormal':
        return `
                  font-family: ${p.theme.fontFamily.button};
                  font-size: ${p.theme.fontSize.buttonMedium};
                `;
      case 'highMedium':
        return `
                  font-family: ${p.theme.fontFamily.button};
                  font-size: ${p.theme.fontSize.buttonMedium};
                `;
      case 'highSemiBold':
        return `
                  font-family: ${p.theme.fontFamily.semiBold};
                  font-size: ${p.theme.fontSize.buttonMedium};
                `;
      case 'highBold':
        return `
                  font-family: ${p.theme.fontFamily.bold};
                  font-size: ${p.theme.fontSize.buttonMedium};
                `;

      case 'medium':
        return `
                  font-family: ${p.theme.fontFamily.light};
                  font-size: ${p.theme.fontSize.buttonMedium};
                `;
      case 'small':
        return `
                  font-family: ${p.theme.fontFamily.light};
                  font-size: ${p.theme.fontSize.small};
                `;
      case 'header':
        return `
                  font-family: ${p.theme.fontFamily.button};
                  font-size: ${p.theme.fontSize.button};
                `;
      case 'subtitle':
        return `
                  font-family: ${p.theme.fontFamily.bold};
                  font-size: ${p.theme.fontSize.subtitle};
                `;
      case 'subtitleNormal':
        return `
                  font-family: ${p.theme.fontFamily.button};
                  font-size: ${p.theme.fontSize.subtitle};
                `;
      case 'subtitleLight':
        return `
                  font-family: ${p.theme.fontFamily.light};
                  font-size: ${p.theme.fontSize.subtitle};
                `;
      case 'h1':
        return `
                  font-family: ${p.theme.fontFamily.bold};
                  font-size: ${p.theme.fontSize.h1};
                `;
      case 'h1Normal':
        return `
                  font-family: ${p.theme.fontFamily.button};
                  font-size: ${p.theme.fontSize.h1};
                `;
      case 'h2':
        return `
                  font-family: ${p.theme.fontFamily.bold};
                  font-size: ${p.theme.fontSize.h2};
                `;
      case 'h2Normal':
        return `
                  font-family: ${p.theme.fontFamily.button};
                  font-size: ${p.theme.fontSize.h2};
                `;
      case 'h3':
        return `
                  font-family: ${p.theme.fontFamily.bold};
                  font-size: ${p.theme.fontSize.h3};
                `;
      case 'h3Normal':
        return `
                  font-family: ${p.theme.fontFamily.button};
                  font-size: ${p.theme.fontSize.h3};
                `;
      case 'h4':
        return `
                  font-family: ${p.theme.fontFamily.bold};
                  font-size: ${p.theme.fontSize.h4};
                `;
      case 'h4Normal':
        return `
                  font-family: ${p.theme.fontFamily.button};
                  font-size: ${p.theme.fontSize.h4};
                `;
      case 'h5':
        return `
                  font-family: ${p.theme.fontFamily.bold};
                  font-size: ${p.theme.fontSize.h5};
                `;
      case 'h5Normal':
        return `
                  font-family: ${p.theme.fontFamily.button};
                  font-size: ${p.theme.fontSize.h5};
                `;
      default:
        return `
                  font-family: ${p.theme.fontFamily.regular};
                  font-size: ${p.theme.fontSize.normal};
                `;
    }
  }};
  text-align: ${p => p.align};
  ${p => p.bold && `font-family: ${p.theme.fontFamily.bold};`};
  ${p => p.rounded && 'border-radius: 20px'}
`;

/*
  h1
  h2
  h3
  h4
  h5
  subtitle
  normal
  noramlBold
  small
*/

const CommonText = ({
  children,
  width = '100%',
  type = 'normal',
  color = 'dark',
  background = 'transparent',
  bold = false,
  align = 'left',
  multiline = true,
  marginTop = 0,
  rounded = false,
  noWidth,
  noPadding,
  ...rest
}) => {
  return (
    <Text
      marginTop={marginTop}
      width={!noWidth && width}
      type={type}
      align={align}
      color={color}
      multiline={multiline}
      bold={bold}
      noPadding={noPadding}
      {...rest}>
      {children}
    </Text>
  );
};

export default CommonText;
