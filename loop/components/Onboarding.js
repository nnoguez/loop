import React, { useRef } from "react";
import { View, Image, Text, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { RFValue } from "react-native-responsive-fontsize";

const slides = [
  {
    id: 1,
    image: "https://www.vecteezy.com/vector-art/16265359-happy-people-in-subway-flat-vector-illustration",
    text: "Seamless City Travel",
    subtext: "Discover the easiest way to navigate Chicago with our intuitive transport app.",
  },
  {
    id: 2,
    image: "https://www.busylittlekiddies.com/wp-content/uploads/Fish-11.png",
    text: "Personalized Routes, Tailored for You",
    subtext: "Effortlessly find the best routes and transport options tailored to your needs.",
  },
  {
    id: 3,
    image: "https://www.busylittlekiddies.com/wp-content/uploads/Fish-11.png",
    text: "Unforgettable Journeys Await",
    subtext: "Enjoy a seamless and personalized travel experience as you explore the vibrant city of Chicago.",
  },
];

const Onboarding = ({ navigation }) => {
  const flatlistRef = useRef();
  const screenWidth = Dimensions.get("window").width;

  const renderSlide = ({ item }) => {
    return (
      <View style={styles.slideContainer}>
        <View style={styles.imageContainer}>
          <Text style={styles.logo}>LOOP</Text>
          <Image source={{ uri: item.image }} style={styles.slideImage} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.h1}>{item.text}</Text>
          <Text style={styles.p}>{item.subtext}</Text>
        </View>
      </View>
    );
  };

  return (
      <View style={styles.container}>
        <Carousel
          ref={flatlistRef}
          data={slides}
          renderItem={renderSlide}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          loop={true}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  imageContainer: {
    backgroundColor: "#56ccf2",
    height: RFValue(400), 
    width: "100%", 
    borderBottomLeftRadius: RFValue(120),
    borderBottomRightRadius: RFValue(120),
    marginTop: RFValue(-140),
    marginBottom: RFValue(40),
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    fontWeight: "600",
    fontSize: RFValue(24),
    color: "white",
    letterSpacing: RFValue(5),
  },
  h1: {
    fontSize: RFValue(24),
    marginBottom: RFValue(20),
    fontWeight: "600",
    color: "#FE3E40",
    textAlign: "center",
  },
  p: {
    fontSize: RFValue(14),
    marginBottom: RFValue(40),
    color: "rgba(0, 0, 0, 0.7)",
    marginHorizontal: RFValue(20),
    textAlign: "center",
  },
  slideImage: {
    width: RFValue(310),
    height: 250,
    marginTop: 30
  },
});

export default Onboarding;