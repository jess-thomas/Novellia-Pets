import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Item({
  name,
  date,
  dosage,
  instructions,
  medID,
  medicalRecordDetailPress,
  reactions,
  severity,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => medicalRecordDetailPress(medID)}>
        <View>
          <Text style={styles.title}>{name}</Text>
          {!!date && (
            <Text style={styles.subHeader}>
              Date Administered: {new Date(date).toDateString()}
            </Text>
          )}
          {!!dosage && <Text style={styles.subHeader}>Dosage: {dosage}</Text>}
          {!!instructions && (
            <Text style={styles.subHeader}>Instructions: {instructions}</Text>
          )}
          {!!reactions && (
            <Text style={styles.subHeader}>
              Reactions: {reactions?.join(", ")}
            </Text>
          )}
          {!!severity && (
            <Text style={styles.subHeader}>Severity: {severity}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fdfcf9e5",
    padding: 10,
    borderWidth: 2,
    borderColor: "#052b53",
    borderRadius: 8,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#052b53",
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 10,
    color: "#052b53",
  },
});
