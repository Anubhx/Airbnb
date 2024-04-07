import React, { useMemo, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Listings from '@/components/Listings'; // Adjust the import path as needed
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface Props {
    listings: any[];
    category: string;
}
const ListingsBottomSheet = ({ listings, category }: Props) => {
    const bottomSheetRef = useRef(null);
    // Adjust snap points to allow for a full-screen view
    const snapPoints = useMemo(() => ['10%', '50%', '1000%'], []);

    return (
        <GestureHandlerRootView style={styles.flexContainer}>
            <BottomSheet
                ref={bottomSheetRef}
                index={1} // Start at the '50%' snap point; adjust as needed
                snapPoints={snapPoints}
                enablePanDownToClose={true}>
                <View style={styles.flexContainer}>
                    <Listings listings={listings} category={category} />
                </View>
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
    },
});

export default ListingsBottomSheet;
