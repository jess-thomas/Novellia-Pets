import DateTimePicker from "@react-native-community/datetimepicker";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export const VaccineForm = ({
  vaccineName,
  setVaccineName,
  vaccineDate,
  setVaccineDate,
  showVaccineDate,
  setShowVaccineDate,
}) => (
  <View style={styles.textContainer}>
    <Text style={styles.textTitle}>Name of Vaccine</Text>
    <TextInput
      placeholder="Name"
      style={styles.textInput}
      value={vaccineName}
      onChangeText={setVaccineName}
    />
    <Text style={styles.textTitle}>
      Date Administered:{" "}
      {vaccineDate?.toDateString() || new Date().toDateString()}
    </Text>
    <View>
      <View style={styles.buttonContainer}>
        <Button
          title="Select Date"
          color={"#052b53"}
          onPress={() => setShowVaccineDate(!showVaccineDate)}
        />
      </View>
      {showVaccineDate && (
        <DateTimePicker
          value={vaccineDate || new Date()}
          mode="date"
          onChange={setVaccineDate}
        />
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 18,
    marginTop: 10,
    color: "#052b53",
  },
  textInput: {
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderColor: "#052b53",
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  textContainer: {
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderColor: "#052b53",
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 50,
  },
  buttonContainer: {
    padding: 10,
    borderRadius: 15,
    width: "50%",
    alignSelf: "center",
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
