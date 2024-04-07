import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ListRenderItem, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FontDisplay, processFontFamily } from 'expo-font';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import Colors from '@/constants/Colors';

interface ListingItem {
    name: string;
    id: string;
    title: string;
    image: string;
    medium_url: string;
    review_scores_rating : number;
    room_type: string;
    price: number;
    // Assuming each ListingItem has an image property
}

interface Props {
    listings: ListingItem[];
    category: string;
}

const Listings = ({ listings: items, category }: Props) => {
    const [loading, setLoading] = useState<boolean>(false);
    const listRef = useRef<FlatList<ListingItem>>(null);

    useEffect(() => {
        console.log('RELOADING LISTINGS:', items.length);
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, [category]);

    const renderRow: ListRenderItem<ListingItem> = ({ item }) => (
      
        <Link href={`/listing/${item.id}`} asChild>
       
        <TouchableOpacity>
          <Animated.View style={styles.listing} entering={FadeInRight} exiting={FadeOutLeft}>
            <Animated.Image source={{ uri: item.medium_url }} style={styles.image} />
            <TouchableOpacity style={{ position: 'absolute', right: 30, top: 30 }}>
              <Ionicons name="heart-outline" size={24} color="#000" />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 16, fontFamily: 'mon-sb' }}>{item.name}</Text>
              <View style={{ flexDirection: 'row', gap: 4 }}>
                <Ionicons name="star" size={16} />
                <Text style={{ fontFamily: 'mon-sb' }}>{item.review_scores_rating / 20}</Text>
              </View>
            </View>
            <Text style={{ fontFamily: 'mon' }}>{item.room_type}</Text>
            <View style={{ flexDirection: 'row', gap: 4 }}>
              <Text style={{ fontFamily: 'mon-sb' }}>€ {item.price}</Text>
              <Text style={{ fontFamily: 'mon' }}>night</Text>
            </View>
          </Animated.View>

        </TouchableOpacity>

      </Link>
      
    );

    return (
        <View>
            <FlatList
                renderItem={renderRow}
                ref={listRef}
                data={loading ? [] : items}
                keyExtractor={item => item.id} // Added keyExtractor for unique identification
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listing: {
        padding: 16,
        gap:10,
        marginVertical :16,
       // paddingBottom: 0,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        //aspectRatio: 1, // Adjust based on your images' aspect ratio
    },
});

export default Listings;
