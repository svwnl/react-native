import React from 'react';
import PropTypes from 'prop-types';

import {Button, View, Text, StyleSheet} from 'react-native';
import RandomNumber from './RandomNumber';
import shuffle from 'lodash/shuffle';

class App extends React.Component {
  static propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
    initialSeconds: PropTypes.number.isRequired,
    onPlayAgain: PropTypes.func.isRequired,
  };
  state = {
    selectedIds: [],
    remainingSeconds: this.props.initialSeconds,
  };
  randomNumbers = Array.from({length: this.props.randomNumberCount}).map(
    () => 2 + Math.floor(10 * Math.random()),
  );
  target = this.randomNumbers
    .slice(0, this.props.randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);

  shuffleRandomNumbers = shuffle(this.randomNumbers)

  isNumberSelected = (numberIndex) => {
    return this.state.selectedIds.indexOf(numberIndex) >= 0;
  };
  selectNumber = (numberIndex) => {
    this.setState((prevState) => ({
      selectedIds: [...prevState.selectedIds, numberIndex],
    }));
  };
  gameStatus = 'PLAYING';
  calcGameStatus = (nextState) => {
    const sumSelected = nextState.selectedIds.reduce((acc, curr) => {
      return acc + this.shuffleRandomNumbers[curr];
    }, 0);
    if (nextState.remainingSeconds === 0) {
      return 'LOST';
    }
    if (sumSelected < this.target) {
      return 'PLAYING';
    }
    if (sumSelected === this.target) {
      return 'WON';
    }
    if (sumSelected > this.target) {
      return 'LOST';
    }
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        return {remainingSeconds: prevState.remainingSeconds - 1};
      }, () => {
        if (this.state.remainingSeconds === 0) {
          clearInterval(this.intervalId);
        }
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // getSnapShotBeforeUpdate
  UNSAFE_componentWillUpdate(nextProds, nextState) {
    if (nextState.selectedIds !== this.state.selectedIds || nextState.remainingSeconds === 0) {
      console.log('Calc Game Status')
      this.gameStatus = this.calcGameStatus(nextState);
      if (this.gameStatus !== 'PLAYING') {
        clearInterval(this.intervalId);
      }
    }
  }

  render() {
    const gameStatus = this.gameStatus;
    return (
      <View style={styles.container}>
        <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>{this.target}</Text>
        <View style={styles.randomContainer}>
          {this.shuffleRandomNumbers.map((randomNumber, index) => (
            <RandomNumber
              key={index}
              id={index}
              number={randomNumber}
              isDisabled={
                this.isNumberSelected(index) || gameStatus !== 'PLAYING'
              }
              onPress={this.selectNumber}
            />
          ))}
        </View>
        <Text>{gameStatus} ? {this.state.remainingSeconds}</Text>
        {this.gameStatus !== 'PLAYING' && (
          <Button title="Play again" onPress={this.props.onPlayAgain}/>
        )}
        <Text>...</Text>
        <Text>...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 25,
  },
  target: {
    fontSize: 50,
    marginHorizontal: 25,
    marginBottom: 50,
    textAlign: 'center',
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  col: {
    width: '50%',
    paddingHorizontal: 25,
  },
  random: {
    backgroundColor: 'green',
    width: '100%',
    marginBottom: 50,
    fontSize: 40,
    textAlign: 'center',
  },
  STATUS_WON: {
    backgroundColor: 'green',
  },
  STATUS_LOST: {
    backgroundColor: 'red',
  },
  STATUS_PLAYING: {
    backgroundColor: '#bbb',
  },
});

export default App;
