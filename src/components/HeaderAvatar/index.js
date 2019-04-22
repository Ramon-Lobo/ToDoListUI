import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '~/components/Avatar';

const styles = {
  avatar: {
    marginRight: 20,
  },
};

const HeaderAvatar = ({ image }) => (
  <Avatar
    image={image}
    style={styles.avatar}
    size={40}
  />
);

HeaderAvatar.propTypes = {
  image: PropTypes.string.isRequired,
};

export default HeaderAvatar;
