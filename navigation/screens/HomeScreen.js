import * as React from 'react';
import { View, Text } from 'react-native';
import {StyleSheet} from 'react-native';
import Mapbox from '@rnmapbox/maps';
import MapCamera from '../components/MapCamera';
Mapbox.setAccessToken("sk.eyJ1Ijoia2FuaXNoazAxIiwiYSI6ImNsc2d4endpZjFiOWsyaXBxNXlxbzJhc2IifQ.9ptlcm-JO-S6OBrA60acoQ");

export default function HomeScreen({ navigation }) {
  const Map = new Mapbox.MapView({
    styleURL: Mapbox.StyleURL.Street,
    zoomEnabled: true,
    rotateEnabled: true,
  });
    return (
        <View style={styles.page}>
      <View style={styles.container}>
      <Mapbox.MapView
        style={styles.map}
        zoomEnabled={true}
        styleURL="mapbox://styles/mapbox/navigation-night-v1"
        rotateEnabled={true}
        >
        <MapCamera />
      </Mapbox.MapView>
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
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
});