import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Task = ({
  id,
  title,
  image,
  priority,
}) => (
  <View>
    {/* Task Cell */}
    <View style={styles.taskCell(priority)}>
      {/* Avatar Container */}
      <View styles={styles.avatarContainer}>
        <Image
          source={{ uri: image }}
          style={styles.avatar}
        />
      </View>

      {/* Task Text Container */}
      <View style={styles.taskTextContainer}>
        <Text style={styles.taskId}>{id}</Text>
        <Text
          style={styles.taskTitle}
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>

      {/* Deadline Text Container */}
      <View style={styles.deadlineTextContainer}>
        <Text style={styles.deadlineText}>Deadline</Text>
        <Text style={styles.deadlineDateTime}>20/04 21:30</Text>
      </View>
    </View>
  </View>
);

Task.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
};

export default Task;
