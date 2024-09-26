import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import { Search } from "../components/search.component";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants.context";
import CallOutCard from "../components/callout.component";

const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <View style={styles.container}>
      <Search />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
              title={restaurant.name}
              key={restaurant.name}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant })
                }
              >
                <CallOutCard restaurant={restaurant} isMapScreen={true} />
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  callOutImage: {
    width: 120,
    height: 100,
  },
  callOutContainer: {
    padding: 10,
    maxWidth: 120,
    alignItems: "center",
  },
});

export default MapScreen;
