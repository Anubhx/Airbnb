import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ListRenderItem, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { Link } from 'expo-router';

interface ListingItem {
    id: string;
    title: string;
    image: string;
    medium_url: string;
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
        <Link href={`/listing/${item.id}`}>
            <TouchableOpacity>
                <View style={styles.listing}>
                    <Image source={{ uri: item.medium_url }} style={styles.image} resizeMode="contain"/>
                </View>
                <Text></Text>
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
        paddingBottom: 0,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        aspectRatio: 1.3, // Adjust based on your images' aspect ratio
    }
});

export default Listings;
