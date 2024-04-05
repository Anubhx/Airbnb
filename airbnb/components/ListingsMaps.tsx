import { View, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import {  StyleSheet,  TouchableOpacity } from 'react-native';
import { memo, useEffect, useRef } from 'react';
import { defaultStyles } from '@/constants/Styles';

interface Props {
    listings: any;

}
const ListingsMaps = ({listings} : Props ) => {
  return (
    <View style={styles.container}>
    <MapView style={styles.map} />
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
    map: {
        width: '100%',
        height: '100%',
     }
  });
  
  export default ListingsMaps;