import { StyleSheet, Text, View } from "react-native";
export default function Item({ name, type }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subHeader}>Type: {type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbfaf261",
    padding: 10,
    borderWidth: 2,
    borderColor: "#052b53",
    borderRadius: 8,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 10,
  },
});
