import React from 'react';
import PropTypes from 'prop-types';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class RandomNumber extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
  };
  handlePress = () => {
    if (!this.props.isDisabled) {
      this.props.onPress(this.props.id);
    }
  };

  render() {
    return (
      <View style={styles.col}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text
            style={[styles.random, this.props.isDisabled && styles.disabled]}>
            {this.props.number}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
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
  disabled: {
    opacity: 0.3,
  },
});

export default RandomNumber;
