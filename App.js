import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from "react-native";
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as SMS from 'expo-sms';




export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick An Image To Send"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        
        
        <Button 
          style={styles.buttonContainer}
          onPress={this.onPress} 
          title="Touch my button" 
        />
      </View>
       
       
      
    );
  }

  // componentDidMount() {
  //   this.getPermissionAsync();
  // }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log('result',result);//'imagepicker',ImagePicker,

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  
  onPress = async () => {
    const status = await SMS.sendSMSAsync('8675309', 'you up?');

    console.log(status);
  };
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  sensor: {
    marginTop: 45,
    paddingHorizontal: 10,
  },
  text:{
    textAlign: 'center'
  }
});




// export default function App() {

//   const [outputText, setOutputText] = useState(
//     "Open up App.js to start working on your app!"
//   );
  
//   const [enteredGoal, setEnteredGoal] = useState('');
//   const [courseGoals, setCourseGoals] = useState([]);

//   const goalInputHandler = (enteredText) => {
//     setEnteredGoal(enteredText);
//   }
  
//   const addGoalHandler = () => {
//     setCourseGoals( currentGoals => [...currentGoals, enteredGoal]);
//   }

//   return (
//     <View style={styles.container}>

//       <View style={{ padding: 50 }} >
//         <View style={styles.inputContainer} >
//           <TextInput placeholder="Course Goal" 
//             style={ styles.textInput} 
//             onChangeText={goalInputHandler} 
//             value={enteredGoal} 
//             />
//           <Button title="Add" onPress={addGoalHandler} />
//         </View>
//         <View>
//           {courseGoals.map((goal) => <Text>{goal}</Text> )}
//         </View>
//       </V>


//       <Text>{outputText}</Text>
//       <Button
//         title="Change Text"
//         onPress={() => setOutputText("The text changed!")}
//       />
//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
  
//   inputContainer: { 
//     flexDirection: 'row', 
//     justifyContent: 'space-between', 
//     alignItems: 'center' 
//   },
  
//   textInput: { 
//     width: '80%', 
//     borderColor: 'black', 
//     borderWidth: 1 , 
//     padding: 10 
//   },
  
// });
