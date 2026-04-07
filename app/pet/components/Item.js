import { StyleSheet, Text, View } from "react-native";
export default function Item({ name, date, dosage, instructions }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      {!!date && (
        <Text style={styles.subHeader}>Date Administered: {date}</Text>
      )}
      {!!dosage && <Text style={styles.subHeader}>Dosage: {dosage}</Text>}
      {!!instructions && (
        <Text style={styles.subHeader}>Instructions: {instructions}</Text>
      )}
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
