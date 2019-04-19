import React from 'react';

import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const AddButton = ({ style, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={() => {}} activeOpacity={0.9} />
);

export default AddButton;
