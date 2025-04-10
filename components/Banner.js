import { Image, View, StyleSheet, Text } from "react-native";

const Banner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/img/background.png")}
          style={styles.imgBanner}
        />
      </View>
      <Text style={styles.title}>Welcome!</Text>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F3F6",
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop:5,
  },
  imgBanner: {
    height: 250,
    width: 250,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: "#C2C2C2",
  },
  title: {
    color: "#1E2772",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
