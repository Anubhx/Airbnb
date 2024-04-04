import { View, Text } from "react-native";
import React from "react";
import {ListRenderItem, StyleSheet, TouchableOpacity, Image,Dimensions , FlatList } from 'react-native'
import { useLocalSearchParams } from "expo-router";
import listingsData from '@/assets/data/airbnb-listings.json';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';

const IMG_HEIGHT = 300;
const { width } = Dimensions.get('window');
const page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const listing = (listingsData as any[]).find((item) => item.id === id);

  return (
    <View style= {styles.container}>
      <Animated.ScrollView>
        <Image source={{ uri: listing.xl_picture_url}} style={styles.image} />

      </Animated.ScrollView>
      <Text>Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: width,
    height: IMG_HEIGHT,
    
  },
});

export default page;
