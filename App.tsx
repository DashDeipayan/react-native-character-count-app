import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CounterText from './src/CounterText';
import TextField from './src/TextField';

const CHARACTER_LIMIT = 240;

const App = () => {
  const [characterCount, setCharacterCount] = useState(0);

  const getCharacterCount = (text: string) => {
    setCharacterCount(text.length);
  };
  const remainingCharacters = CHARACTER_LIMIT - characterCount;
  const getColor = (remainingChars: number) => {
    if (remainingChars < 0) {
      return 'rgba(255, 0, 35,';
    } else if (remainingChars < 10) {
      return 'rgba(210, 191, 0,';
    } else {
      return 'rgba(113, 113, 113,';
    }
  };

  return (
    <View style={styles.container}>
      <TextField
        getBorderColor={getColor(remainingCharacters)}
        getCharacterCount={(input: string) => getCharacterCount(input)}
      />
      <CounterText
        counterTextColor={getColor(remainingCharacters)}
        remainingCharacters={remainingCharacters}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
});
