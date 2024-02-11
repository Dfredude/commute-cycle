import * as React from 'react';
import { View, Text } from 'react-native';
import {StyleSheet} from 'react-native';
import Mapbox from '@rnmapbox/maps';
Mapbox.setAccessToken("sk.eyJ1Ijoia2FuaXNoazAxIiwiYSI6ImNsc2dtaHpxYjFycW4yaW1uaGd4YmdodDAifQ.hV2fpBzNnL-YTfZjic9y2w");

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} />
      </View>
    </View>
    );
}
const styles = StyleSheet.create({
    page: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      height: 300,
      width: 300,
    },
    map: {
      flex: 1
    }
  });