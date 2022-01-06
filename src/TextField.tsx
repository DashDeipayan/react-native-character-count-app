import React, {FC, useState} from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';

interface Props {
  getCharacterCount: (input: string) => void;
  getBorderColor: string;
}

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

const App: FC<Props> = ({getCharacterCount, getBorderColor}) => {
  const [input, setInput] = useState('');

  const onInputChange = (text: string) => {
    getCharacterCount(text);
    setInput(text);
  };

  return (
    <View style={[styles.textfieldview, {borderColor: getBorderColor}]}>
      <TextInput
        style={styles.textfield}
        value={input}
        onChangeText={e => onInputChange(e)}
        multiline={true}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  textfieldview: {
    backgroundColor: '#F8F3E3',
    width: WINDOW_WIDTH * 0.8,
    height: WINDOW_HEIGHT * 0.3,
    padding: 10,
    borderWidth: 2,
    borderRadius: 20,
  },
  textfield: {
    fontSize: 14,
  },
});
