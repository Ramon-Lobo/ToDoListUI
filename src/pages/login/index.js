import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView, StackActions, NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import Logo from '~/assets/svg/logo.svg';

import { colors } from '~/styles';
import styles from './styles';

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  }

  moveToMainTab = () => {
    const { navigation } = this.props;
    const action = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'MainTab' })],
    });

    navigation.dispatch(action);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loginFormContainer}>
          <Logo width={styles.logo.width} height={styles.logo.height} style={styles.logo} />
          <TextInput
            style={styles.input}
            placeholder="Login"
            autoCapitalize="none"
            placeholderTextColor={colors.whiteTransparent}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={colors.whiteTransparent}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.8}
            onPress={() => this.moveToMainTab()}
          >
            <Text style={styles.btnText}>Enter</Text>
          </TouchableOpacity>
        </View>

        {/* Account Container */}
        <View style={styles.bottomTextContainer}>
          <TouchableOpacity>
            <Text style={styles.bottomText}>{'Don\'t have account'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};
