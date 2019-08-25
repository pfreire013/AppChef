import React, {Component} from 'react';
import styled from 'styled-components';

import CommonText from '../CommonText';

const TypesTagContainer = styled.View`
  height: 24;
  width: ${p => p.width}
  border-width: 2px;
  border-color: ${p => p.theme.colors.tertiary};
  border-radius: 12;
  padding-vertical: 4;
  padding-horizontal: 4;
  align-items: center;
  justify-content: center;
`;

const TypesTag = ({
  color = 'tertiary',
  width = 80,
  text,
  textColor = 'tertiary',
}) => {
  return (
    <TypesTagContainer color={color} width={width}>
      <CommonText color={textColor} noPadding noWidth>
        {text}
      </CommonText>
    </TypesTagContainer>
  );
};

export default TypesTag;
