import { colors, metrics } from '~/styles';

export default {
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  titleContainer: {
    justifyContent: 'center',
    paddingVertical: 20,
    paddingLeft: 16,
  },

  titleText: {
    fontSize: 24,
    color: colors.gray.dark,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
  },

  scroll: {
    width: metrics.screenWidth,
    // backgroundColor: colors.black,
  },

  scrollContentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    // backgroundColor: colors.black,
    width: metrics.screenWidth * 0.9,
    paddingHorizontal: metrics.basePadding * 2.5,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },

  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    // backgroundColor: colors.black,
    width: metrics.screenWidth * 0.9,
    paddingHorizontal: metrics.basePadding * 2.5,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },

  menuItem: {
    height: metrics.screenHeight * 0.15,
    width: metrics.screenHeight * 0.15,
    maxWidth: 150,
    marginVertical: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
    borderWidth: 2,
    borderColor: colors.gray.light,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  svg: {
    width: 50,
    height: 50,
  },

  itemText: {
    marginTop: 5,
    color: colors.primary,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
};
