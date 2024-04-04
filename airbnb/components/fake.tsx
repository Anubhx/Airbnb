import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const TestScroll = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.scrollViewStyle}>
        {/* Creating multiple Text components to ensure enough content to scroll */}
        {Array.from({ length: 20 }, (_, i) => (
          <Text key={i} style={styles.textStyle}>
            Item {i}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50, // Adjust as needed
  },
  scrollViewStyle: {
    alignItems: 'center',
    paddingStart: 20,
    paddingEnd: 20,
  },
  textStyle: {
    marginHorizontal: 10, // Ensuring gap between items
    fontSize: 20,
  },
});

export default TestScroll;
