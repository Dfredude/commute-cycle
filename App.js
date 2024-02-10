import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import MapboxGL from "@rnmapbox/maps";

// MapboxGL.setAccessToken("sk.eyJ1IjoiZGZyZWR1ZGU0OCIsImEiOiJjbHNnaDY5YTIxbXo4Mmpxb3ZoczNid3duIn0.D7YgYcus56IQND7PT_Mx_Q");

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <MapboxGL.MapView style={styles.map} /> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
  }
});
