import { Image, Platform, StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";

const CallOutCard = ({ restaurant, isMapScreen }) => {
  const isAndroid = Platform.OS === "android";

  const CustomImage = isAndroid && isMapScreen ? WebView : Image;
  const { photos, name } = restaurant;

  return (
    <View style={styles.callOutContainer}>
      <CustomImage source={{ uri: photos[0] }} style={styles.callOutImage} />
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  callOutContainer: {
    padding: 10,
    maxWidth: 120,
    alignItems: "center",
  },
  callOutImage: {
    width: 120,
    height: 100,
  },
});

export default CallOutCard;
