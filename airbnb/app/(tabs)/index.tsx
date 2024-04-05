import { View } from "react-native";
import React, { useMemo, useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import ListingsMap from "@/components/ListingsMaps"; // Import the ListingsMap component
import listingsData from "@/assets/data/airbnb-listings.json";
const page = () => {
  const items = useMemo(() => listingsData as any, []);
  const [category, setCategory] = useState<string>('Tiny homes');
  
  
    const onDataChanged = (category: string) => {
      setCategory(category);
    };
  return (
    <View style={{ flex: 1, marginTop : 130 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      {/* <Listings listings={items} category={category} />  */}
      <ListingsMap /> {/* Add the ListingsMap component */}
    </View>
  );
};

export default page;
