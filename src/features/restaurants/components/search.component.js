import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
import { StyleSheet, View } from "react-native";
import { space } from "../../../../constants/spacing";

export const Search = ({ isToggled, setIsToggled }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <View style={styles.searchbarContainer}>
      <Searchbar
        icon={isToggled ? "heart" : "heart-outline"}
        onIconPress={() => setIsToggled(!isToggled)}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchbarContainer: {
    paddingLeft: space[1],
    paddingRight: space[1],
    top: 40,
    position: "absolute",
    zIndex: 999,
    width: "100%",
  },
});
