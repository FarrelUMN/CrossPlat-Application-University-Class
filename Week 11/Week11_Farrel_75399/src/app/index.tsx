import * as Location from 'expo-location';
import React, { useState } from 'react';

import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MapView, {
  Marker,
  Region,
  UrlTile,
  MapPressEvent,
  MarkerDragStartEndEvent,
} from 'react-native-maps';

type Coordinates = {
  latitude: number;
  longitude: number;
};

const { height } = Dimensions.get('window');

export default function App() {
  const [location, setLocation] =
    useState<Coordinates | null>(null);

  const getLocation = async (): Promise<void> => {
    try {
      const { status } =
        await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        alert('Location permission denied!');
        return;
      }

      const loc =
        await Location.getCurrentPositionAsync({});

      setLocation({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });
    } catch (error) {
      console.log(error);
      alert('Failed to get location');
    }
  };

  const handleMapPress = (
    event: MapPressEvent
  ) => {
    const coordinate = event.nativeEvent.coordinate;

    setLocation({
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    });
  };

  const handleMarkerDrag = (
    event: MarkerDragStartEndEvent
  ) => {
    const coordinate = event.nativeEvent.coordinate;

    setLocation({
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    });
  };

  const region: Region | undefined = location
    ? {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    : undefined;

  return (
    <View style={styles.container}>
      {!location ? (
        <Button
          title="GET GEO LOCATION"
          onPress={getLocation}
        />
      ) : (
        <>
          <MapView
            style={styles.map}
            initialRegion={region}
            onPress={handleMapPress}
          >
            <UrlTile
              urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              maximumZ={19}
            />

            <Marker
              coordinate={location}
              draggable
              onDragEnd={handleMarkerDrag}
              title="My Marker"
              description="Drag or tap map"
            />
          </MapView>

          <View style={styles.info}>
            <Text style={styles.text}>
              Latitude:
            </Text>

            <Text style={styles.value}>
              {location.latitude}
            </Text>

            <Text style={styles.text}>
              Longitude:
            </Text>

            <Text style={styles.value}>
              {location.longitude}
            </Text>

            <View style={styles.button}>
              <Button
                title="REFRESH CURRENT LOCATION"
                onPress={getLocation}
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: '100%',
    height: height * 0.7,
  },

  info: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  value: {
    fontSize: 16,
    marginBottom: 10,
  },

  button: {
    marginTop: 10,
    width: 220,
  },
});