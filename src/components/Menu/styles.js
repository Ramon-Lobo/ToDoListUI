import { colors, metrics } from '~/styles';

export default {
  scroll: {
    width: metrics.screenWidth,
  },

  scrollContentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    width: metrics.screenWidth * 0.9,
    paddingHorizontal: metrics.basePadding * 2.5,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },

  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
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
