import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log("- file: [id].tsx:7 -Page-id:", id);
  return (
    <View>
      <Text>Page</Text>
    </View>
  );
};

export default page;
