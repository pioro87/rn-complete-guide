import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';



const goalInputHeader = () => {
  setEnteredGoal()
}

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHendler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal = '';
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="Course Goal"
          onChangeText={goalInputHendler}
          value={enteredGoal} />
        <View style={styles.buttonContainer} >
          <View style={styles.button}>
            <Button title="Cancell" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={props.wlasnyPropOnAddGoal.bind(this, enteredGoal)} />
          </View>
        </View>
      </View>
    </Modal >
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    width: '40%',

  },
});

export default GoalInput;