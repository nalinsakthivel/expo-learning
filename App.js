import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

export default function App() {
  useEffect(() => {
    setImageUrl("https://i.imgur.com/TkIrScD.png");
  }, []);

  const [imageUrl, setImageUrl] = useState();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result?.uri) {
      setImageUrl(result.uri);
    }
    if (!result.cancelled) {
      setImageUrl(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          Alert.alert("Hello World", "Thanks for clicking mee..!");
        }}
      >
        <Text>Just click mee...!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 30,
    width: 200,
    height: 50,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
});
