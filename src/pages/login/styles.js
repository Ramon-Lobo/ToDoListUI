import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },

  input: {
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    width: '80%',
    height: 50,
    fontSize: 24,
    color: colors.white,
    marginTop: 20,
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

  bottomText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '100',
    position: 'absolute',
    bottom: 30,
  },
});
