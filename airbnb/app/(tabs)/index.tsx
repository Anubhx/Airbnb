import { View, TouchableOpacity, StyleSheet } from "react-native"; // Import TouchableOpacity and StyleSheet
import React, { useMemo, useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import ListingsMap from "@/components/ListingsMaps";
import listingsData from "@/assets/data/airbnb-listings.json";
import listingsDataGeo from '@/assets/data/airbnb-listings.geo.json';
import ListingsMaps from "@/components/ListingsMaps";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";
import Colors from "@/constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  locateBtn: {
    // Add your styles here
  },
});

const page = () => {
  const items = useMemo(() => listingsData as any, []);
  const [category, setCategory] = useState<string>('Tiny homes');
  const getoItems = useMemo(() => listingsDataGeo, []);
  
  
    const onDataChanged = (category: string) => {
      setCategory(category);
    };
  return (
    <View style={{ flex: 1, marginTop: 80 }}>
    {/* Define pour custom header */}
    <Stack.Screen
      options={{
        header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
      }}
    />
     
      <Listings listings={items} category={category} refresh={false} /> 
      {/* <ListingsMaps listings={listingsDataGeo} /> */}
      <ListingsBottomSheet listings={items} category={category} />
    </View>
  );
};

export default page;