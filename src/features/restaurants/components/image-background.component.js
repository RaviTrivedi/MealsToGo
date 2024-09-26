import { ImageBackground, StyleSheet, Text, View } from "react-native";
import image from "../../../../assets/home_bg.jpg";

const ImageBackgroundComponent = ({ children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ImageBackgroundComponent;
