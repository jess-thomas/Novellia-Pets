import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export const PetProfileHeader = ({
  petName,
  setPetName,
  animalType,
  setAnimalType,
  breed,
  setBreed,
  dob,
  showDOBPicker,
  setShowDOBPicker,
  onChangeDate,
  isEdit,
  addMedicalRecordPress,
}) => {
  const _renderAnimalType = () => (
    <View style={styles.textInput}>
      <Picker
        selectedValue={animalType}
        onValueChange={(itemValue) => setAnimalType(itemValue)}
      >
        <Picker.Item label="Dog" value="dog" />
        <Picker.Item label="Cat" value="cat" />
        <Picker.Item label="Bird" value="bird" />
        <Picker.Item label="Bunny" value="bunny" />
        <Picker.Item label="Horse" value="horse" />
        <Picker.Item label="Lizard" value="lizard" />
      </Picker>
    </View>
  );

  const _renderDOBPicker = () => {
    return (
      <View>
        <View style={styles.buttonContainer}>
          <Button
            title="Select Date"
            color={"#052b53"}
            onPress={() => setShowDOBPicker(!showDOBPicker)}
          />
        </View>
        {showDOBPicker && (
          <DateTimePicker value={dob} mode="date" onChange={onChangeDate} />
        )}
      </View>
    );
  };

  return (
    <View>
      <Image
        source={require("../images/dog-placeholder.jpg")}
        style={styles.image}
      />
      <Text style={styles.textTitle}>Name</Text>
      <TextInput
        placeholder="Name"
        style={styles.textInput}
        value={petName}
        onChangeText={setPetName}
      />
      <Text style={styles.textTitle}>Animal Type</Text>
      {_renderAnimalType()}
      <Text style={styles.textTitle}>Breed</Text>
      <TextInput
        placeholder="Breed"
        style={styles.textInput}
        value={breed}
        onChangeText={setBreed}
      />
      <Text style={styles.textTitle}>Date of Birth: {dob.toDateString()}</Text>
      {_renderDOBPicker()}
      {isEdit && (
        <>
          <Text style={[styles.title, { alignSelf: "center" }]}>
            Medical History
          </Text>
          <View style={styles.addButtonContainer}>
            <Button
              title="+ Medical Record"
              color={"#052b53"}
              onPress={() => addMedicalRecordPress()}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    alignSelf: "center",
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "#052b53",
    borderRadius: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
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
  textInput: {
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderColor: "#052b53",
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  buttonContainer: {
    padding: 10,
    borderRadius: 15,
    margin: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
  addButtonContainer: {
    borderRadius: 25,
    margin: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
});
