import {StyleSheet} from 'react-native';
import {colors, gird, fonts} from '../../css/base.js';

const custom = StyleSheet.create({
  cardbox: {
    flex: 1,
    backgroundColor: colors.white,
    margin: 3,
  },
  name: {
    fontSize: fonts.s,
    color: colors.black,
    lineHeight: 14,
    height: 40,
    padding: gird.s,
    textAlign: 'center',
  },
  price: {
    fontSize: fonts.m,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.orange,
    marginBottom: 10,
  },
});

export default custom;
