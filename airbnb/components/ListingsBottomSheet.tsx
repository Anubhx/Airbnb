import React, { useMemo, useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity , Text } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Listings from '@/components/Listings'; // Adjust the import path as needed
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    listings: any[];
   
    category: string;
    
}

const ListingsBottomSheet = ({ listings, category }: Props) => {
    
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [refresh, setRefresh] = useState<number>(0);
    const snapPoints = useMemo(() => ['10%', '100%'], []);

    const ShowMap = () => {
        bottomSheetRef.current?.collapse();
        setRefresh(refresh + 1);
      };
    
    return (
        <GestureHandlerRootView style={styles.flexContainer}>
           
        <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        handleIndicatorStyle={{ backgroundColor: Colors.grey }}
        style={styles.sheetContainer}>
        <View >
            <Listings listings={listings} category={category} refresh={true} />
        </View>
        <View style= {styles.aboluteBtn}>
            <TouchableOpacity onPress={ShowMap}  style={styles.btn} >
                <Text>Map </Text>
                <Ionicons name="map" size={20} color="#000" />
            </TouchableOpacity>
            
        </View>
    </BottomSheet>
    </GestureHandlerRootView>
   
    );
};

const styles = StyleSheet.create({
aboluteBtn: {  
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
 },
 btn: {
    backgroundColor: '#fff',
    padding: 14,
    fontSize: 16,
    height: 50,
    borderRadius: 30,
    flexDirection: 'row',
    marginHorizontal: 'auto',
    alignItems: 'center',
 },
 flexContainer: {
    flex: 100,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
 },
},
 
 sheetContainer: {
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
        width: 1,
        height: 1,
    },
 },
});

export default ListingsBottomSheet;
