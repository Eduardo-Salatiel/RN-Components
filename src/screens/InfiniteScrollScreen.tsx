import React, { useContext, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  View,
} from "react-native";
import HeaderTitle from "../components/HeaderTitle";
import { ThemeContext } from "../context/ThemeContext/ThemeContext";

const InfiniteScrollScreen = () => {
  const { theme: {colors} } = useContext(ThemeContext);
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newNumbers: number[] = [];
    for (let i = 0; i < 5; i++) {
      newNumbers[i] = numbers.length + i;
    }
    setNumbers([...numbers, ...newNumbers]);
  };

  const renderItem = (item: number): JSX.Element => {
    return (
      <Image
        source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
        style={{
          width: "100%",
          height: 400,
        }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({ item }) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size={20} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

export default InfiniteScrollScreen;
