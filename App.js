import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {

  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );
  
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }
  
  const addGoalHandler = () => {
    setCourseGoals( currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.container}>

      <View style={{ padding: 50 }} >
        <View style={styles.inputContainer} >
          <TextInput placeholder="Course Goal" 
            style={ styles.textInput} 
            onChangeText={goalInputHandler} 
            value={enteredGoal} 
            />
          <Button title="Add" onPress={addGoalHandler} />
        </View>
        <View>
          {courseGoals.map((goal) => <Text>{goal}</Text> )}
        </View>
      </View>


      <Text>{outputText}</Text>
      <Button
        title="Change Text"
        onPress={() => setOutputText("The text changed!")}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
  inputContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  
  textInput: { 
    width: '80%', 
    borderColor: 'black', 
    borderWidth: 1 , 
    padding: 10 
  },
  
});
