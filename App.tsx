import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import CounterText from './src/CounterText';
import TextField from './src/TextField';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const CHARACTER_LIMIT = 240;

const App = () => {
  const [characterCount, setCharacterCount] = useState(0);

  const getCharacterCount = (text: string) => {
    setCharacterCount(text.length);
  };
  const remainingCharacters = CHARACTER_LIMIT - characterCount;
  const getColor = (remainingChars: number) => {
    if (remainingChars < 0) {
      return 'red';
    } else if (remainingChars < 10) {
      return '#D2BF00';
    } else {
      return '#717171';
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
    marginTop: WINDOW_HEIGHT * 0.1,
  },
});
