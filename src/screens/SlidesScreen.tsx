import { useNavigation } from "@react-navigation/core";
import React, { useContext, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../context/ThemeContext/ThemeContext";
import useAnimated from "../hooks/useAnimated";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: "Titulo 1",
    desc: "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
    img: require("../assets/slide-1.png"),
  },
  {
    title: "Titulo 2",
    desc: "Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
    img: require("../assets/slide-2.png"),
  },
  {
    title: "Titulo 3",
    desc: "Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.",
    img: require("../assets/slide-3.png"),
  },
];

const SlidesScreen = () => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  const { opacity, fadeIn } = useAnimated();
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 40,
          borderRadius: 5,
          backgroundColor: "white",
        }}
      >
        <Image
          source={item.img}
          style={{
            width: "100%",
            height: 400,
            resizeMode: "center",
          }}
        />
        <Text style={{ ...styles.title, color: colors.primary }}>
          {item.title}
        </Text>
        <Text style={styles.description}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Carousel
        data={items}
        renderItem={({ item }: any) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          index === items.length - 1 && fadeIn();
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: colors.primary,
          }}
        />
        <Animated.View
          style={{
            width: 130,
            height: 40,
            borderRadius: 10,
            opacity,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              backgroundColor: colors.primary,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
              }}
            >
              Entrar
            </Text>
            <Icon name="chevron-forward-outline" size={30} color="white" />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SlidesScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#5856D6",
  },
  description: {
    fontSize: 16,
  },
});
