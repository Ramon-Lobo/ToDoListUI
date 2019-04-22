import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';

import styles from './styles';

const AddButton = ({ style, onPress }) => (
  <TouchableOpacity
    style={style.button}
    onPress={onPress}
    activeOpacity={0.9}
  >
    <Icon name="plus" style={styles.plusIcon} />
  </TouchableOpacity>
);

AddButton.propTypes = {
  style: PropTypes.shape({}),
  onPress: PropTypes.func,
};

AddButton.defaultProps = {
  style: styles,
  onPress: () => {},
};

export default AddButton;
