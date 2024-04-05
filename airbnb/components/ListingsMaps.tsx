import { View, Text } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {  StyleSheet,  TouchableOpacity } from 'react-native';
import { memo, useEffect, useRef } from 'react';
import { defaultStyles } from '@/constants/Styles';
import { ListingGeo } from '@/interfaces/listingGeo';
import { router } from 'expo-router';


interface Props {
    listings: any;

}
const onMarkerSelected = (event: any) => {
  router.push(`/listing/${event.properties.id}`);
};

const INITIAL_REGION = {
  latitude: 37.33,
  longitude: -122,
  latitudeDelta: 9,
  longitudeDelta: 9,
};

const ListingsMaps = ({listings} : Props ) => {
  return (

    <View style={defaultStyles.container}>
    <MapView style={StyleSheet.absoluteFill} 
     provider={PROVIDER_GOOGLE}
    showsUserLocation={true}
     showsMyLocationButton 
     initialRegion={INITIAL_REGION}
     >
      {listings.features.map((item: ListingGeo)=> (
        <Marker 
        key={item.properties.id}
        onPress={() => onMarkerSelected(item)}
        coordinate={{
          latitude:+ item.properties.latitude,
          longitude :+ item.properties.longitude,

        }} />
      ))}
     </MapView>     
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    marker: {
      padding: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      elevation: 5,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 6,
      shadowOffset: {
        width: 1,
        height: 10,
      },
    },
    markerText: {
      fontSize: 14,
      fontFamily: 'mon-sb',
    },
    locateBtn: {
      position: 'absolute',
      top: 70,
      right: 20,
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 6,
      shadowOffset: {
        width: 1,
        height: 10,
      },
     
    },

    // map: {
    //     width: '100%',
    //     height: '100%',
    //  }
  });
  
  export default ListingsMaps;