import {Text,View,Button,Image,StyleSheet,} from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';
import { supabase } from './database/supabase';

export default function Index() {
  const [image, setImage] = useState<string | null>(null);

  const openCamera = async () => {
    const permission =
      await Camera.requestCameraPermissionsAsync();

    if (!permission.granted) {
      alert('Camera permission is required!');
      return;
    }

    const result =
      await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      alert('Gallery permission is required!');
      return;
    }

    const result =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const saveImage = async () => {
    if (!image) {
      alert('No image to save!');
      return;
    }

    const permission =
      await MediaLibrary.requestPermissionsAsync();

    if (!permission.granted) {
      alert('Permission required!');
      return;
    }

    await MediaLibrary.saveToLibraryAsync(image);

    alert('Image saved to gallery!');
  };

  const uploadToSupabase = async () => {
    try {
      if (!image) {
        alert('No image selected!');
        return;
      }

      const locationPermission =
        await Location.requestForegroundPermissionsAsync();

      if (!locationPermission.granted) {
        alert('Location permission denied!');
        return;
      }

      const location =
        await Location.getCurrentPositionAsync({});

      const latitude =
        location.coords.latitude.toFixed(6);

      const longitude =
        location.coords.longitude.toFixed(6);

      const response = await fetch(image);
      const blob = await response.blob();

      const fileName =
        `photo-${Date.now()}.jpg`;

      const { error: uploadError } =
        await supabase.storage
          .from('camera')
          .upload(fileName, blob, {
            contentType: 'image/jpeg',
          });

      if (uploadError) {
        console.log(uploadError);

        alert(
          `UPLOAD FAILED\nLatitude: ${latitude}\nLongitude: ${longitude}`
        );

        return;
      }
      const {
        data: { publicUrl },
      } = supabase.storage
        .from('camera')
        .getPublicUrl(fileName);

      const { error: dbError } =
        await supabase.from('photo').insert([
          {
            latitude,
            longitude,
            image_url: publicUrl,
          },
        ]);

      if (dbError) {
        console.log(dbError);

        alert(
          `DATABASE FAILED\nLatitude: ${latitude}\nLongitude: ${longitude}`
        );

        return;
      }

      alert(
        `UPLOAD SUCCESS\nLatitude: ${latitude}\nLongitude: ${longitude}`
      );
    } catch (error) {
      console.log(error);

      alert('Something went wrong!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Name - NIM
      </Text>

      <View style={styles.button}>
        <Button
          title="OPEN CAMERA"
          onPress={openCamera}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="OPEN GALLERY"
          onPress={openGallery}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="SAVE IMAGE"
          onPress={saveImage}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="UPLOAD SUPABASE"
          onPress={uploadToSupabase}
        />
      </View>

      {image && (
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    marginBottom: 10,
  },

  button: {
    marginVertical: 5,
    width: 180,
  },

  image: {
    width: 250,
    height: 200,
    marginTop: 20,
  },
});