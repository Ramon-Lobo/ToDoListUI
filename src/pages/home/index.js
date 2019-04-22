import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { Menu, MenuItem } from '~/components/Menu';
import NewTaskModal from '~/components/NewTaskModal';

import LateTask from '~/assets/svg/lateTask.svg';
import TaskList from '~/assets/svg/taskList.svg';
import NewTask from '~/assets/svg/newTask.svg';
import TaskPage from '~/assets/svg/taskPage.svg';
import TaskProgress from '~/assets/svg/taskProgress.svg';
import Comments from '~/assets/svg/comments.svg';

import AddButton from '~/components/AddButton';

import styles from './styles';

export default class Home extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    const { isModalVisible } = this.state;
    this.setState({ isModalVisible: !isModalVisible });
  }

  render() {
    const { isModalVisible } = this.state;
    return (
      <SafeAreaView style={styles.container} forceInset>
        {/* Title View */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Home</Text>
        </View>

        <Menu>
          <MenuItem Icon={TaskList} title="Task List" />
          <MenuItem Icon={TaskPage} title="Task Page" />
          <MenuItem Icon={NewTask} title="New Task" />
          <MenuItem Icon={TaskProgress} title="Task Progress" />
          <MenuItem Icon={LateTask} title="Late Task" />
          <MenuItem Icon={Comments} title="Comments" />
        </Menu>

        <AddButton onPress={() => this.toggleModal()} />

        <NewTaskModal isVisible={isModalVisible} toggleFunc={this.toggleModal} />
      </SafeAreaView>
    );
  }
}
