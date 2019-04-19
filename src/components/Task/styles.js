import { colors } from '~/styles';

export default {
  // Task Cell
  taskCell: priority => ({
    flexDirection: 'row',
    paddingVertical: 15,
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.gray.light,

    // Priority Bar
    borderLeftWidth: 8,
    borderLeftColor: colors.priority[priority],
  }),

  avatarContainer: {
    flex: 2,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },

  taskTextContainer: {
    flex: 5,
    justifyContent: 'space-around',
    textWrap: 'wrap',
  },

  taskId: {
    fontSize: 12,
    color: colors.gray.dark,
  },

  taskTitle: {
    fontSize: 18,
    color: colors.gray.dark,
    fontWeight: 'bold',
  },

  deadlineTextContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  deadlineText: {
    fontSize: 14,
    color: colors.gray.dark,
    textAlign: 'center',
  },

  deadlineDateTime: {
    fontSize: 12,
    color: colors.gray.dark,
    textAlign: 'center',
  },
  // //
};
