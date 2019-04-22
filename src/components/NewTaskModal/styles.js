import { colors, metrics } from '~/styles';

export default {
  container: {
    alignSelf: 'center',
    paddingVertical: metrics.basePadding,
    width: metrics.screenWidth * 0.9,
    backgroundColor: colors.white,
  },

  // Reusable

  smallTitleText: {
    fontSize: 14,
    color: colors.gray.dark,
    fontFamily: 'Montserrat-Regular',
  },

  baseContainer: {
    padding: metrics.basePadding * 1.5,
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray.light,
  },

  avatar: {
    marginHorizontal: 2.5,
  },

  // Header Container

  titleContainer: {
    padding: metrics.basePadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray.light,
  },

  titleText: {
    fontSize: 24,
    color: colors.gray.dark,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
    marginBottom: metrics.baseMargin,
  },

  // //

  // Task Title Input Container

  taskInputContainer: {
    padding: metrics.basePadding * 1.5,
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray.light,
  },

  taskTitleTextInput: {
    height: 30,
    marginTop: metrics.baseMargin,

    color: colors.gray.dark,
    fontSize: 24,
    fontFamily: 'Montserrat-Medium',
  },

  // //

  // Members Container

  membersContainer: {
    padding: metrics.basePadding * 1.5,
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray.light,
  },

  membersSubContainer: {
    flexDirection: 'row',
    paddingVertical: metrics.basePadding / 2,
  },

  membersListContainer: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  addMemberButtonContainer: {
    flex: 4,
    alignItems: 'flex-end',
  },

  addMemberButton: {
    padding: metrics.basePadding / 2,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addMemberButtonText: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: colors.secondary,
  },

  // //

  // Deadline Container

  deadlineRowContainer: {
    flexDirection: 'row',
    paddingVertical: metrics.basePadding / 2,
  },

  deadlineInputContainer: {
    flex: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  deadlineInput: {
    height: 35,
    width: 70,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: colors.gray.light,
    borderRadius: 5,
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: colors.gray.dark,
  },

  deadlineSwitchContainer: {
    flex: 3,
    alignItems: 'center',
  },

  deadlineSwitch: {
    borderWidth: 1,
    borderColor: colors.gray.light,
    borderRadius: 15,
  },

  deadlineSwitchTrackColor: {
    false: colors.white,
    true: colors.secondary,
  },

  deadlineSwitchSubtitle: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: colors.gray.dark,
    textAlign: 'center',
  },

  //  //

  // Actions Container

  actionsContainer: {
    flexDirection: 'row',
    padding: metrics.basePadding * 1.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  confirmButton: {
    backgroundColor: colors.secondary,
    paddingHorizontal: metrics.basePadding * 2,
    paddingVertical: metrics.basePadding,
  },

  confirmButtonText: {
    color: colors.white,
    fontFamily: 'Montserrat-Medium',
  },

  cancelButton: {
    marginLeft: metrics.baseMargin,
    paddingHorizontal: metrics.basePadding * 2,
    paddingVertical: metrics.basePadding,
  },

  cancelButtonText: {
    color: colors.gray.dark,
    fontFamily: 'Montserrat-Medium',
  },

  // //
};
