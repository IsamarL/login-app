import { StyleSheet, TextInput, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Cells = ({ placeholder, icon, textContentType, etiqueta }) => {
  return (
    <View>
      <Text style={styles.text}>{etiqueta}</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#555555"
          textContentType={textContentType}
        />
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={24} color="white" style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

export default Cells;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F2F3",
    borderColor: "#FD7401",
    borderWidth: 1,
    borderRadius: 15,
    height: 50,
    width: "90%",
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    color: "#1E2772",
    textAlign: "left",
    marginTop: 4,
    marginLeft:5,
    fontWeight:400,
  },
  input: {
    flex: 5,
    fontSize: 14,
    color: "#000",
  },
  iconContainer: {
    backgroundColor: "#FD7401",
    height: "100%",
    width: 60,
    justifyContent: "center",
    marginRight: -15,
    flex: 1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  icon: {
    alignSelf: "center",
  },
});
