import React, {useRef, useState, useEffect} from 'react';
import Mapbox, {Camera, MarkerView} from '@rnmapbox/maps';
import {StyleSheet, Text} from 'react-native';
import MapCamera from './MapCamera';

// Mapbox.setAccessToken('YOUR_MAPBOX_ACCESS_TOKEN');

const Map = () => {
  const Map = new Mapbox.MapView({
    styleURL: Mapbox.StyleURL.Street,
    zoomEnabled: true,
    rotateEnabled: true,
  });

  return (
    <Mapbox.MapView
        style={styles.map}
        zoomEnabled={true}
        styleURL="mapbox://styles/mapbox/navigation-night-v1"
        rotateEnabled={true}
        >
        <MapCamera />
      </Mapbox.MapView>
  );
};

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
    flex: 1,
  },
});

export default Map;
