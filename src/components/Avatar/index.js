import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  avatar: size => ({
    height: size,
    width: size,
    borderRadius: size / 2,
  }),
};

const Avatar = ({ image, style, size }) => (
  <Image
    source={{ uri: image }}
    style={[styles.avatar(size), style]}
  />
);

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.number,
  style: PropTypes.shape({}),
};

Avatar.defaultProps = {
  style: {},
  size: 10,
};

export default Avatar;
