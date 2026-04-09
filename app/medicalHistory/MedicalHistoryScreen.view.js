import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import Checkbox from "expo-checkbox";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function MedicalHistoryScreenView({
  medicalFormType,
  setMedicalFormType,
  vaccineName,
  setVaccineName,
  allergyName,
  setAllergyName,
  allergySeverity,
  setAllergySeverity,
  medicationName,
  setMedicationName,
  setDosage,
  dosage,
  instructions,
  setInstructions,
  onDeletePress,
  onSavePress,
  vaccineDate,
  setVaccineDate,
  showVaccineDate,
  setShowVaccineDate,
  hasRash,
  setRash,
  hasSwelling,
  setSwelling,
  hasHives,
  setHives,
  hasVomiting,
  setVomiting,
  isEdit,
}) {
  const _renderMedicalFormPicker = () => (
    <View style={styles.textInput}>
      <Picker
        selectedValue={medicalFormType}
        onValueChange={(itemValue) => setMedicalFormType(itemValue)}
      >
        <Picker.Item label="Vaccine" value="vaccine" />
        <Picker.Item label="Allergy" value="allergy" />
        <Picker.Item label="Medication" value="medication" />
      </Picker>
    </View>
  );

  const _renderVaccineForm = () => (
    <View style={styles.textContainer}>
      <Text style={styles.textTitle}>Name of Vaccine</Text>
      <TextInput
        placeholder="Name"
        style={styles.textInput}
        value={vaccineName}
        onChangeText={setVaccineName}
      />
      <Text style={styles.textTitle}>
        Date Administered: {vaccineDate.toDateString()}
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
            value={vaccineDate}
            mode="date"
            onChange={setVaccineDate}
          />
        )}
      </View>
    </View>
  );

  const _renderAllergyForm = () => (
    <View style={styles.textInput}>
      <Text style={styles.textTitle}>Allergy Name</Text>
      <TextInput
        placeholder="Name..."
        style={styles.textInput}
        value={allergyName}
        onChangeText={setAllergyName}
      />
      <View style={styles.textInput}>
        <Text style={[styles.textTitle, { alignSelf: "center" }]}>
          Reactions
        </Text>
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={hasRash}
            onValueChange={setRash}
            color={hasRash ? "#052b53" : undefined}
          />
          <Text style={styles.checkboxText}>Rash</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={hasSwelling}
            onValueChange={setSwelling}
            color={hasSwelling ? "#052b53" : undefined}
          />
          <Text style={styles.checkboxText}>Swelling</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={hasHives}
            onValueChange={setHives}
            color={hasHives ? "#052b53" : undefined}
          />
          <Text style={styles.checkboxText}>Hives</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={hasVomiting}
            onValueChange={setVomiting}
            color={hasVomiting ? "#052b53" : undefined}
          />
          <Text style={styles.checkboxText}>Vomiting</Text>
        </View>
      </View>
      <View style={styles.textInput}>
        <Text style={styles.pickerTitleText}>Severity</Text>
        <Picker
          selectedValue={allergySeverity}
          onValueChange={(itemValue) => setAllergySeverity(itemValue)}
        >
          <Picker.Item label="Mild" value="mild" />
          <Picker.Item label="Severe" value="severe" />
        </Picker>
      </View>
    </View>
  );

  const _renderMedicationForm = () => (
    <View style={styles.textContainer}>
      <Text style={styles.textTitle}>Name of Medication</Text>
      <TextInput
        placeholder="Name..."
        style={styles.textInput}
        value={medicationName}
        onChangeText={setMedicationName}
      />
      <Text style={styles.textTitle}>Dosage</Text>
      <TextInput
        placeholder="e.g. 3.45mg..."
        style={styles.textInput}
        value={dosage}
        onChangeText={setDosage}
      />
      <Text style={styles.textTitle}>Instructions</Text>
      <TextInput
        placeholder="give twice a day morning and night..."
        style={styles.paragraph}
        value={instructions}
        onChangeText={setInstructions}
        multiline
        numberOfLines={4}
      />
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Medical History</Text>
        {_renderMedicalFormPicker()}
        {medicalFormType === "vaccine" && _renderVaccineForm()}
        {medicalFormType === "allergy" && _renderAllergyForm()}
        {medicalFormType === "medication" && _renderMedicationForm()}
        <View style={styles.buttonContainer}>
          <Button
            title="Save"
            color={"#052b53"}
            style={styles.button}
            onPress={() => onSavePress()}
          />
          {isEdit && (
            <Button
              title="Delete"
              color={"#531805"}
              style={styles.deleteButton}
              onPress={() => onDeletePress()}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbfaf261",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    alignSelf: "center",
    color: "#052b53",
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 18,
    marginTop: 10,
    color: "#052b53",
  },
  checkboxText: {
    fontSize: 18,
    fontWeight: "medium",
    color: "#052b53",
    marginLeft: 8,
  },
  pickerTitleText: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 5,
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
  paragraph: {
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderColor: "#052b53",
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
    height: "20%",
  },
  textContainer: {
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderColor: "#052b53",
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 50,
  },
  button: {
    borderRadius: 15,
    flex: 1,
  },
  deleteButton: {
    borderRadius: 15,
    marginLeft: 10,
    flex: 1,
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
});
