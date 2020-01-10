import {StyleSheet, Platform} from 'react-native';
import {colors, gird, fonts} from '../../css/base.js';

const custom = StyleSheet.create({
  product_name: {
    fontSize: 18,
    color: colors.black,
  },

  //Price Area
  unitpricebox: {
    flex: 2,
  },
  unitprice: {
    fontSize: fonts.l,
    color: colors.orange,
    paddingTop: gird.s,
    paddingBottom: gird.s,
  },
  type: {
    fontSize: fonts.s,
    color: colors.gray,
  },

  //Share Area
  sharebox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    color: colors.gray,
  },
  shareicon: {
    marginLeft: gird.s,
    fontSize: fonts.l,
    color: colors.gray,
  },

  //Discount Area
  discountbox: {
    borderRadius: 5,
    backgroundColor: colors.orange,
    padding: gird.s,
    marginBottom: gird.m,
  },
  discount: {
    fontSize: fonts.s,
    color: colors.white,
    lineHeight: 20,
  },

  //Sub Info
  subinfo: {
    fontSize: fonts.s,
    color: colors.black,
    lineHeight: 20,
  },

  //Mobal Area
  mobal_box: {
    flex: 1,
    backgroundColor: `rgba(0,0,0,.5)`,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  mobal_display: {
    backgroundColor: '#fff',
    padding: gird.m,
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1000,
    padding: 5,
  },

  //Bottom Tools Bar Area

  footerbtn: {
    flex: 1,
    margin: gird.s,
    backgroundColor: colors.orange,
    borderRadius: 5,
    minHeight: 30,
  },
  footerbtntext: {
    flex: 1,
    color: colors.white,
    textAlign: 'center',

    padding: gird.m,
  },
});

export default custom;
