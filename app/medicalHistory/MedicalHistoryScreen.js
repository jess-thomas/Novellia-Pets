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
  getInitialMedicationValues,
  getReactions,
} from "./medicalHistoryUtils";

export default function MedicalHistoryScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [editFormType] = useState(params?.type ?? null);
  const [medicalFormType, setMedicalFormType] = useState(
    editFormType || MEDICAL_FORM_TYPES.VACCINE,
  );
  const pet = useSelector((state) => state.pet?.selectedPet);
  const [vaccineName, setVaccineName] = useState("");
  const [vaccineDate, setVaccineDate] = useState(new Date());
  const [showVaccineDate, setShowVaccineDate] = useState(false);
  const [allergyName, setAllergyName] = useState("");
  const [allergySeverity, setAllergySeverity] = useState("");
  const [initialMedicationValues] = useState(
    getInitialMedicationValues(editFormType, pet),
  );
  const [medicationName, setMedicationName] = useState(
    initialMedicationValues.name,
  );
  const [dosage, setDosage] = useState(initialMedicationValues.dosage);
  const [instructions, setInstructions] = useState(
    initialMedicationValues.instructions,
  );
  const [id] = useState(params?.id ?? null);
  const [medID] = useState(params?.medID ?? null);
  const [hasRash, setRash] = useState(false);
  const [hasSwelling, setSwelling] = useState(false);
  const [hasHives, setHives] = useState(false);
  const [hasVomiting, setVomiting] = useState(false);
  const isEdit = !!params?.id;

  const onSavePress = () => {
    if (isEdit) {
      switch (medicalFormType) {
        case MEDICAL_FORM_TYPES.VACCINE:
          editVaccine(vaccineName, vaccineDate, id);
          break;
        case MEDICAL_FORM_TYPES.ALLERGY:
          editAllergy(
            allergyName,
            getReactions(hasRash, hasSwelling, hasHives, hasVomiting),
            allergySeverity,
            id,
          );
          break;
        case MEDICAL_FORM_TYPES.MEDICATION:
          editMedication(medicationName, dosage, instructions, id);
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
    console.warn(pet);
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
