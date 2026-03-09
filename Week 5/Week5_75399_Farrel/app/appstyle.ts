import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  card: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    width: 325,
    position: "relative",
    backgroundColor: "#fff",
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginRight: 10,
  },
  boldtext: {
    fontWeight: "bold",
  },
  hideButton: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});

export default styles;