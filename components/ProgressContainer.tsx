import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface State {
  progress: number;
  validProgress: number;
  goal: number;
  validGoal: number;
}

class ProgressContainer extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    const progressInit = 2;
    const goalInit = 5;
    this.state = {
      progress: progressInit,
      validProgress: progressInit,
      goal: goalInit,
      validGoal: goalInit,
    };

    this.changeProgress = this.changeProgress.bind(this);
    this.changeGoal = this.changeGoal.bind(this);
  }

  changeProgress(value: string) {
    const numValue = Number(value);
    if (!isNaN(numValue)) {
      this.setState({ progress: numValue, validProgress: numValue });
    } else {
      this.setState({ progress: 0 });
    }
  }

  changeGoal(value: string) {
    const numValue = Number(value);
    if (!isNaN(numValue)) {
      this.setState({ goal: numValue, validGoal: numValue });
    } else {
      this.setState({ goal: 0 });
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.label}>Progress</Text>
        <TextInput
          style={styles.input}
          value={String(this.state.progress)}
          onChangeText={this.changeProgress}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Goal</Text>
        <TextInput
          style={styles.input}
          value={String(this.state.goal)}
          onChangeText={this.changeGoal}
          keyboardType="numeric"
        />
        <View style={styles.progressContainer}>
          <ProgressBar
            progress={this.state.validProgress}
            goal={this.state.validGoal}
          />
        </View>
      </View>
    );
  }
}

interface ProgressBarProps {
  progress: number;
  goal: number;
}

class ProgressBar extends Component<ProgressBarProps> {
  calculateProgress(progress: number, goal: number): string {
    if (progress === 0) {
      return '0.75%';
    }
    if (goal >= progress) {
      return `${(progress / goal) * 100}%`;
    } else {
      return '100%';
    }
  }

  render() {
    const { progress, goal } = this.props;
    return (
        <View style={[
            styles.progressholder,
            { width:"100%"},
          ]}> 
      <View
        style={[
          styles.progressBar,
          { width: this.calculateProgress(progress, goal) },
        ]}
      />
      </View>
    );
  }
}

export default ProgressBar;
const styles = StyleSheet.create({
    label: {
      marginBottom: 4,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 16,
      paddingLeft: 8,
    },
    progressContainer: {
      backgroundColor: '#626262cf',
      height: 10,
      width: '99%',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: 10,
      position: 'absolute',
    //   bottom: '2%',
    //   left: '50%',
    //   transform: [{ translateX: -50 }],
    },
    progressholder : {
        //   position: 'absolute',
          left: 0,
          height: 10,
          borderRadius: 10,
          backgroundColor: '#626262cf',
        },
    progressBar: {
    //   position: 'absolute',
      left: 0,
      height: 10,
      borderRadius: 10,
      backgroundColor: '#0da1d4',
    },
  });
  