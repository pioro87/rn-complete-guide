import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHendler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHendler = () => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
  };

  return (
    <View style={styles.screen} >
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="Course Goal"
          onChangeText={goalInputHendler}
          value={enteredGoal} />
        <Button title="Add" onPress={addGoalHendler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => 
        <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

  const styles = StyleSheet.create({
    screen: {
      padding: 50
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    input: {
      borderColor: 'black',
      borderWidth: 1, padding: 10,
      width: '80%',
    },
  });
