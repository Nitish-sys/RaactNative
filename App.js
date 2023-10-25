import {
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import { colors } from './src/Utils/colors';
import { Focus } from './src/features/focus';
import { Timer } from './src/features/timer';
import { TextInput } from 'react-native-paper';
import { FocusHistory } from './src/features/FocusHistory';
import React from 'react';

export default function App() {
  const [currentSubject, setCurrentSubject] = React.useState(null);
  const [history, setHistory] = React.useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  textInput: {
    color: colors.white,
  },
});
