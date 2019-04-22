import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Menu = ({ children }) => (
  <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContentContainer}>
    { children }
  </ScrollView>
);

const MenuItem = ({ Icon, title }) => (
  <TouchableOpacity activeOpacity={0.9} style={styles.menuItem}>
    <Icon width={styles.svg.height} height={styles.svg.width} style={styles.svg} />
    <Text style={styles.itemText}>{title}</Text>
  </TouchableOpacity>
);

Menu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

Menu.defaultProps = {
  children: [<View />],
};

MenuItem.propTypes = {
  Icon: PropTypes.func.isRequired,
  title: PropTypes.string,
};
MenuItem.defaultProps = {
  title: '',
};

export { Menu, MenuItem };
