import {Dimensions} from 'react-native';

export default {
  deviceHeight: Dimensions.get('screen').height,
  deviceWidth: Dimensions.get('screen').width,
  colors: {
    primary: '#F0326E ',
    secundary: '#FA6095',
    white: '#FFFFFF',
    black: '#000000',
    lightGray: '#D6D9DD',
    mediumGray: '#8A8A8A',
    hardGray: '',
    border: '',
    shadow: '#000000',
    transparent: 'rgba(0, 0, 0, 0)',
    success: '#A6D873',
    error: '#F5361B',
  },
  fontSize: {
    h1: 42,
    h2: 33,
    h3: 20,
    h4: 18,
    h5: 16,
    monster: 80,
    subtitle: 20,
    minor: 13,
    normal: 14,
    small: 12,
    button: 18,
    buttonMedium: 16,
    input: 17,
  },
  fontFamily: {
    regular: 'Montserrat-Regular',
    light: 'Montserrat-Light',
    semiBold: 'Montserrat-SemiBold',
    bold: 'Montserrat-Bold',
    button: 'Montserrat-Medium',
    input: 'Montserrat-Regular',
  },
};
