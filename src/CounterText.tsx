import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  remainingCharacters: number;
  counterTextColor: string;
}

const CounterText: FC<Props> = ({remainingCharacters, counterTextColor}) => {
  return (
    <View style={styles.countertextview}>
      <Text style={[styles.countertext, {color: counterTextColor}]}>
        {remainingCharacters} Character remaining
      </Text>
    </View>
  );
};

export default CounterText;

const styles = StyleSheet.create({
  countertextview: {
    marginTop: 10,
  },
  countertext: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});
