import React, {Component} from 'react';
import {TextInputMask} from 'react-native-masked-text';
import styled from 'styled-components';

const StyledMaskInput = styled(TextInputMask).attrs(props => ({
  placeholderTextColor: props.theme.colors.white,
}))`
  border-bottom-width: 1;
  border-bottom-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  height: 50;
  width: 100%;
`;

const StyledInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.colors.white,
}))`
  border-bottom-width: 1;
  border-bottom-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  height: 50;
  width: 100%;
  font-size: ${p => p.theme.fontSize.h5};
  font-family: ${p => p.theme.fontFamily.regular};
`;

const Wraper = styled.View`
  align-self: ${p => (p.center ? 'center' : 'auto')};
  flex-direction: column;
  max-width: 100%;
  margin-top: ${p => (p.noMarging ? 0 : 20)};
  width: 100%;
`;

//const ErrorLabel = styled.View``

const UpperLabel = styled.Text`
  font-size: 12px;
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fontFamily.regular};
`;

class InputLine extends Component {
  state = {
    isFocused: false,
    validate: false,
  };

  handleFocus = () => this.setState({isFocused: true});

  //handleBlur = () => {}

  render() {
    const {validate, isFocused} = this.state;
    const {
      value,
      placeholder,
      onChange,
      isVisible = false,
      errorMessage,
      mask = '',
      maxLength,
      enable = true,
      width = '80%',
      textColor = 'black',
      noMarging,
      haveTitle,
      fakeTitle,
      ...rest
    } = this.props;

    return (
      <Wraper noMarging width={width}>
        {!fakeTitle && haveTitle && value !== '' && (
          <UpperLabel type="small">{placeholder.toUpperCase()}</UpperLabel>
        )}
        {fakeTitle && <UpperLabel />}
        {mask ? (
          <StyledMaskInput
            noMarging={noMarging}
            value={value}
            placeholder={placeholder}
            editable={enable}
            enable={enable}
            maxLength={maxLength}
            type={mask}
            onChangeText={val => onChange(val)}
            secureTextEntry={isVisible}
            autoCapitalize="none"
            textColor={textColor}
            isFocused={isFocused}
            onFocus={this.onFocus}
            //onBlur={}
            {...rest}
          />
        ) : (
          <StyledInput
            noMarging={noMarging}
            value={value}
            placeholder={placeholder}
            editable={enable}
            enable={enable}
            maxLength={maxLength}
            type={mask}
            onChangeText={val => onChange(val)}
            secureTextEntry={isVisible}
            autoCapitalize="none"
            textColor={textColor}
            isFocused={isFocused}
            onFocus={this.handleFocus}
            //onBlur={this.handleBlur}
            {...rest}
          />
        )}
      </Wraper>
    );
  }
}

export default InputLine;
