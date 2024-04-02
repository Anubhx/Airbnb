import { View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";

const index = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader />,
        }}
      />
      {/* <Listings /> */}
    </View>
  );
};

export default index;
