import {StyleSheet, Platform} from 'react-native';
import {colors, gird, fonts} from './base.js';

const theme = StyleSheet.create({
  //Use
  container: {
    flex: 1,
    display: 'flex',
    height: '100%',
    padding: 10,
    backgroundColor: colors.default,
  },
  tabBar: {
    height: 65,
    paddingBottom: gird.s,
    backgroundColor: colors.white,
  },
  shadowbox: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderColor: 'rgba(128,128,128,.1)',
    borderStyle: 'solid',
    borderWidth: 1,
    overflow: 'hidden',
  },
  Rowbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  flexbox: {
    flex: 1,
  },
  flexWrap: {
    flex: 1,
    flexWrap: 'wrap',
  },
  halfbox: {
    width: '47%',
    margin: '1%',
  },
  spaceline: {
    height: 2,
    borderBottomWidth: 0.2,
    width: '100%',
    borderColor: colors.gray,
    borderStyle: 'solid',
    marginVertical: gird.s,
  },
  Navbar: {
    backgroundColor: colors.orange,
  },

  //Image styles
  roundimg_s: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: gird.s,
  },
  roundimg_m: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: gird.s,
  },
  roundimg_l: {
    width: 120,
    height: 120,
    borderRadius: 60,
    margin: gird.s,
  },

  //Text styles
  txc: {
    textAlign: 'center',
  },
  txl: {
    textAlign: 'left',
  },
  txr: {
    textAlign: 'right',
  },
  text_bold: {
    fontWeight: 'bold',
  },
  text_l: {
    fontSize: fonts.l,
    lineHeight: 36,
  },
  text_m: {
    fontSize: fonts.m,
    lineHeight: 28,
  },
  text_s: {
    fontSize: fonts.s,
    lineHeight: 18,
    paddingVertical: 2,
  },
  text_xs: {
    fontSize: fonts.xs,
    lineHeight: 16,
  },
  text_black: {
    color: colors.black,
  },
  text_gray: {
    color: colors.gray,
  },
  text_darkgray: {
    color: 'darkgrey',
  },
  text_white: {
    color: colors.white,
  },
  text_orange: {
    color: colors.orange,
  },
  text_blue: {
    color: colors.blue,
  },

  title: {
    fontSize: fonts.s,
    color: colors.orange,
    padding: gird.s,
  },

  // Gird styles
  alignCenter: {
    alignItems: 'center',
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  center: {
    justifyContent: 'center',
  },
  right: {
    justifyContent: 'flex-end',
  },
  between: {
    justifyContent: 'space-between',
  },
  //Magrin styles
  margin_s: {
    margin: gird.s,
  },
  marginRight_s: {
    marginRight: gird.s,
  },
  marginRight_m: {
    marginRight: gird.m,
  },
  marginLeft_s: {
    marginLeft: gird.s,
  },
  marginLeft_m: {
    marginLeft: gird.m,
  },
  marginBottom_s: {
    marginBottom: gird.s,
  },
  marginBottom_m: {
    marginBottom: gird.m,
  },
  marginH_m: {
    marginVertical: gird.m,
  },
  marginH_xs: {
    marginVertical: gird.xs,
  },
  marginH_s: {
    marginVertical: gird.s,
  },

  marginW_s: {
    marginHorizontal: gird.s,
  },
  marginTop_s: {
    marginTop: gird.s,
  },
  marginTop_m: {
    marginTop: gird.m,
  },
  marginTop_l: {
    marginTop: gird.l,
  },

  //padding styles
  paddingRight_s: {
    paddingRight: gird.s,
  },
  paddingLeft_s: {
    paddingLeft: gird.s,
  },
  padding_s: {
    padding: gird.s,
  },
  padding_m: {
    padding: gird.m,
  },
  padding_l: {
    padding: gird.l,
  },
  padding_xl: {
    padding: gird.xl,
  },

  //Colors styles
  bg_orange: {
    backgroundColor: colors.orange,
  },
  bg_gray: {
    backgroundColor: colors.gray,
  },
  bg_default: {
    backgroundColor: colors.default,
  },
  bg_white: {
    backgroundColor: colors.white,
  },
  bg_blue: {
    backgroundColor: colors.blue,
  },

  productlist: {
    justifyContent: 'space-between',
    padding: gird.s,
  },

  btn_return: {
    marginTop: Platform.OS === 'ios' ? 25 : 15,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderRadius: 30,
    position: 'absolute',
    zIndex: 1,
    margin: 5,
  },

  //input styles
  logininput: {
    backgroundColor: '#f0f0f0',
    height: 40,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    marginVertical: gird.s,
  },

  //Catalog styles
  itemsCard: {
    width: '30%',
    backgroundColor: 'white',
    marginBottom: 8,
    marginRight: '2%',
    padding: gird.s,
  },
  itemsCardtext: {
    color: 'gray',
    fontSize: fonts.s,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default theme;
