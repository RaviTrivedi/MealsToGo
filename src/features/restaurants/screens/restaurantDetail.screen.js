import { ScrollView, View } from "react-native";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { List } from "react-native-paper";

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
        >
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
        >
          <List.Item title="Bahubali thali" />
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
        >
          <List.Item title="Dosa" />
          <List.Item title="Bhaji pau" />
          <List.Item title="Gujarati thali" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </View>
  );
};
export default RestaurantDetailScreen;
