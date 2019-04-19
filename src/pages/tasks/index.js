import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';

// Custom components
import Task from '~/components/Task';
import AddButton from '~/components/AddButton';

// Mock Data
import list from './mockData';

import styles from './styles';

export default class Tasks extends Component {
  footer = () => (
    <View style={styles.footer} />
  );

  separator = () => (
    <View style={styles.separator} />
  );

  renderItem = ({ item }) => (
    <Task id={item.id} title={item.title} image={item.image} priority={item.priority} />
  );

  render() {
    return (
      <SafeAreaView style={styles.container} forceInset>
        {/* Title View */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>All Tasks</Text>
        </View>
        <FlatList
          data={list}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.separator}
          ListFooterComponent={this.footer}
        />
        <AddButton />
      </SafeAreaView>
    );
  }
}
