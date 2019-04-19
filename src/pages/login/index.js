import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import { colors } from '~/styles';
import styles from './styles';

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {};

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Login"
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
        >
          <Text style={styles.btnText}>Enter</Text>
        </TouchableOpacity>

        <Text style={styles.bottomText}>Dont have account</Text>
      </View>
    );
  }
}
