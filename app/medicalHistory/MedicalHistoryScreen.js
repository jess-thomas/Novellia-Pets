import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { useSelector } from "react-redux";
import MedicalHistoryScreenView from "./MedicalHistoryScreen.view";
import {
  addAllergy,
  addMedication,
  addVaccine,
  deleteAllergy,
  deleteMedication,
  deleteVaccine,
  editAllergy,
  editMedication,
  editVaccine,
} from "./medicalHistoryApi";
import {
  MEDICAL_FORM_TYPES,
  getInitialAllergyValues,
  getInitialMedicationValues,
  getInitialVaccineValues,
  getReactions,
} from "./medicalHistoryUtils";

export default function MedicalHistoryScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [editFormType] = useState(params?.type ?? MEDICAL_FORM_TYPES.VACCINE);
  const [medicalFormType, setMedicalFormType] = useState(editFormType);
  const [medID] = useState(params?.medID ?? null);
  const pet = useSelector((state) => state.pet?.selectedPet);
  const [initialMedicationValues] = useState(
    getInitialMedicationValues(editFormType, pet, medID),
  );
  const [initialVaccineValues] = useState(
    getInitialVaccineValues(editFormType, pet, medID),
  );
  const [initialAllergyValues] = useState(
    getInitialAllergyValues(editFormType, pet, medID),
  );
  const [medicationName, setMedicationName] = useState(
    initialMedicationValues.name,
  );
  const [vaccineName, setVaccineName] = useState(initialVaccineValues.name);
  const [vaccineDate, setVaccineDate] = useState(
    initialVaccineValues.administeredDate,
  );
  const [showVaccineDate, setShowVaccineDate] = useState(false);
  const [allergyName, setAllergyName] = useState(initialAllergyValues.name);
  const [allergySeverity, setAllergySeverity] = useState(
    initialAllergyValues.severity,
  );
  const [dosage, setDosage] = useState(initialMedicationValues.dosage);
  const [instructions, setInstructions] = useState(
    initialMedicationValues.instructions,
  );
  const [id] = useState(params?.id ?? null);
  const [hasRash, setRash] = useState(initialAllergyValues.hasRash);
  const [hasSwelling, setSwelling] = useState(initialAllergyValues.hasSwelling);
  const [hasHives, setHives] = useState(initialAllergyValues.hasHives);
  const [hasVomiting, setVomiting] = useState(initialAllergyValues.hasVomiting);
  const isEdit = !!params?.medID;

  const onSavePress = () => {
    if (isEdit) {
      switch (medicalFormType) {
        case MEDICAL_FORM_TYPES.VACCINE:
          editVaccine(vaccineName, vaccineDate, id, medID);
          break;
        case MEDICAL_FORM_TYPES.ALLERGY:
          editAllergy(
            allergyName,
            getReactions(hasRash, hasSwelling, hasHives, hasVomiting),
            allergySeverity,
            id,
            medID,
          );
          break;
        case MEDICAL_FORM_TYPES.MEDICATION:
          editMedication(medicationName, dosage, instructions, id, medID);
          break;
        default:
          break;
      }
    } else {
      switch (medicalFormType) {
        case MEDICAL_FORM_TYPES.VACCINE:
          addVaccine(vaccineName, vaccineDate, id);
          break;
        case MEDICAL_FORM_TYPES.ALLERGY:
          addAllergy(
            allergyName,
            getReactions(hasRash, hasSwelling, hasHives, hasVomiting),
            allergySeverity,
            id,
          );
          break;
        case MEDICAL_FORM_TYPES.MEDICATION:
          addMedication(medicationName, dosage, instructions, id);
          break;
        default:
          break;
      }
    }
    router.dismissTo({ pathname: `/pet/PetScreen`, params: { id } });
  };
  const onDeletePress = () => {
    switch (medicalFormType) {
      case MEDICAL_FORM_TYPES.VACCINE:
        deleteVaccine(id, medID);
        break;
      case MEDICAL_FORM_TYPES.ALLERGY:
        deleteAllergy(id, medID);
        break;
      case MEDICAL_FORM_TYPES.MEDICATION:
        deleteMedication(id, medID);
        break;
      default:
        break;
    }
    router.dismissTo({ pathname: `/pet/PetScreen`, params: { id } });
  };

  const onChangeDate = (event, newDate) => {
    if (newDate) {
      setVaccineDate(newDate);
    }
  };

  return (
    <MedicalHistoryScreenView
      medicalFormType={medicalFormType}
      setMedicalFormType={setMedicalFormType}
      vaccineName={vaccineName}
      setVaccineName={setVaccineName}
      allergyName={allergyName}
      setAllergyName={setAllergyName}
      setAllergySeverity={setAllergySeverity}
      allergySeverity={allergySeverity}
      medicationName={medicationName}
      setMedicationName={setMedicationName}
      dosage={dosage}
      setDosage={setDosage}
      instructions={instructions}
      setInstructions={setInstructions}
      onSavePress={onSavePress}
      onDeletePress={onDeletePress}
      vaccineDate={vaccineDate}
      setVaccineDate={onChangeDate}
      showVaccineDate={showVaccineDate}
      setShowVaccineDate={setShowVaccineDate}
      hasRash={hasRash}
      setRash={setRash}
      hasSwelling={hasSwelling}
      setSwelling={setSwelling}
      hasHives={hasHives}
      setHives={setHives}
      hasVomiting={hasVomiting}
      setVomiting={setVomiting}
      isEdit={isEdit}
    />
  );
}
