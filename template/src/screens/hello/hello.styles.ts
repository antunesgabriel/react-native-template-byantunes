import styled from 'styled-components/native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Text = styled.Text`
  font-size: ${responsiveFontSize(4)}px;
`;
