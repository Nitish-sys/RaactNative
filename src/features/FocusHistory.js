import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../Utils/colors';
import { fontSizes, spacing } from '../Utils/spacing';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <Text style={styles.item}> We have not focused on anything yet! </Text>
    );
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History will come Here </Text>
      <FlatList data={history} renderItem={renderItem}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});
