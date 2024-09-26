import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { fonts, fontSizes } from "../../../../constants/fonts";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { colors } from "../../../../constants/colors";
import { sizes } from "../../../../constants/sizes";
import Favorite from "./favorite.component";

export const RestaurantInfoCard = ({ restaurant }) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
    placeId,
    vicinity,
  } = restaurant;

  const rattings = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <View>
        <Card style={styles.card}>
          <Favorite restaurant={restaurant} />
          <Card.Cover source={{ uri: photos[0] }} style={styles.cover} />
          <Card.Title title={<Text style={styles.title}>{name}</Text>} />
          <Card.Content>
            <View style={styles.ratingIsOpenContainer}>
              <Text>
                {rattings.map((singleRating, index) => {
                  return (
                    <SvgXml
                      key={`${placeId}-${index}`}
                      width={20}
                      height={20}
                      xml={star}
                    />
                  );
                })}
              </Text>
              {isOpenNow && (
                <Text>
                  <SvgXml width={30} height={30} xml={open} />
                </Text>
              )}
              {isClosedTemporarily && (
                <Text style={styles.closedTemporarilyText}>
                  CLOSED TEMPORARILY
                </Text>
              )}
            </View>
            <Text style={styles.address}>{vicinity}</Text>
          </Card.Content>
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.title,
  },
  address: {
    fontFamily: fonts.body,
    fontSize: fontSizes.body,
  },
  cover: {
    padding: 16,
    backgroundColor: "#fff",
  },
  closedTemporarilyText: {
    color: colors.ui.error,
    fontSize: sizes[1],
  },
  ratingIsOpenContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
