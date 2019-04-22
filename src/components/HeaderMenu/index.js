import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  menu: {
    marginLeft: 20,
    width: 35,
    height: 35,
  },
};

const HeaderMenu = ({ Icon }) => (
  <Icon
    style={styles.menu}
    width={styles.menu.width}
    height={styles.menu.height}
  />
);

HeaderMenu.propTypes = {
  Icon: PropTypes.func.isRequired,
};

export default HeaderMenu;
