import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },

  scroll: {
    flex: 9,
  },

  scrollContentContainer: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.screenWidth,
  },

  loginFormContainer: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

  input: {
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    width: '80%',
    height: 50,
    fontSize: 24,
    color: colors.white,
    marginTop: 20,
    paddingLeft: 10,
    fontFamily: 'Montserrat-Regular',
  },

  btn: {
    marginTop: 20,
    width: '80%',
    height: 50,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },

  bottomTextContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },

  bottomText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '100',
  },
});
