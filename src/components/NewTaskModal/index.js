import React from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

import Avatar from '~/components/Avatar';

import styles from './styles';

const NewTaskModal = ({ isVisible, toggleFunc }) => (
  <Modal isVisible={isVisible}>
    <TaskForm toggleFunc={toggleFunc} />
  </Modal>
);

const TaskForm = ({ toggleFunc }) => (
  <View style={styles.container}>
    {/* Header Container */}
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>New Task</Text>
    </View>

    {/* Title Container */}
    <View style={styles.taskInputContainer}>
      <Text style={styles.smallTitleText}>Task 10</Text>
      <TextInput style={styles.taskTitleTextInput} placeholder="Task Title" />
    </View>

    {/* Members Container */}
    <View style={styles.membersContainer}>
      {/* Title */}
      <Text style={styles.smallTitleText}>Members</Text>
      {/* Members List */}
      <View style={styles.membersSubContainer}>
        <View style={styles.membersListContainer}>
          <Avatar
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dFqz46O2LS1pyiyW9jMDEhmomrksJHzmaQy35j7bRbYLchyJcQ"
            style={styles.avatar}
            size={40}
          />
          <Avatar
            image="https://avatars3.githubusercontent.com/u/30187750?s=460&v=4'"
            style={styles.avatar}
            size={40}
          />
          <Avatar
            image="https://timedotcom.files.wordpress.com/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg"
            style={styles.avatar}
            size={40}
          />
        </View>
        <View style={styles.addMemberButtonContainer}>
          <TouchableOpacity
            style={styles.addMemberButton}
            activeOpacity={0.7}
          >
            <Text style={styles.addMemberButtonText}>add members</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

    {/* Deadline Container */}
    <View style={styles.baseContainer}>
      {/* Title */}
      <Text style={styles.smallTitleText}>Deadline</Text>

      {/* Inputs/Switch Container */}
      <View style={styles.deadlineRowContainer}>
        {/* Inputs Container */}
        <View style={styles.deadlineInputContainer}>
          <TextInput style={styles.deadlineInput} placeholder="22/04" />
          <TextInput style={styles.deadlineInput} placeholder="22:00" />
        </View>

        {/* Switch Container */}
        <View>
          <Switch
            value
            style={styles.deadlineSwitch}
            trackColor={styles.deadlineSwitchTrackColor}
          />
          <Text style={styles.deadlineSwitchSubtitle}>Important</Text>
        </View>
      </View>
    </View>

    {/* Actions container */}
    <View style={styles.actionsContainer}>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => toggleFunc()}
      >
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => toggleFunc()}
      >
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>

  </View>
);

NewTaskModal.propTypes = {
  isVisible: PropTypes.bool,
  toggleFunc: PropTypes.func,
};

NewTaskModal.defaultProps = {
  isVisible: false,
  toggleFunc: () => {},
};

TaskForm.propTypes = {
  toggleFunc: PropTypes.func,
};

TaskForm.defaultProps = {
  toggleFunc: () => {},
};

export default NewTaskModal;
