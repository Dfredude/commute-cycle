import * as React from 'react';
import { View, Text } from 'react-native';
import {StyleSheet} from 'react-native';
import Mapbox from '@rnmapbox/maps';
import Map from '../../components/Map';

export default function HomeScreen({ navigation }) {
  // const Map = new Mapbox.MapView({
  //   styleURL: Mapbox.StyleURL.Street,
  //   zoomEnabled: true,
  //   rotateEnabled: true,
  // });
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <Map></Map>
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
  }
});