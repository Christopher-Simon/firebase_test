
import React from 'react';
import auth from '@react-native-firebase/auth';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';


const HomeScreen = () => {
  return(
    <Text>Homescreen</Text>
  )
}


function App(): JSX.Element {

  const handleSignIn = () => {
    auth()
      .signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }
    
        console.error(error);
      });
  }

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handleSignIn}>
        <Text>Hello</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
