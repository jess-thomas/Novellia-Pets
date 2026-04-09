export const MEDICAL_FORM_TYPES = {
  VACCINE: "vaccine",
  ALLERGY: "allergy",
  MEDICATION: "medication",
};

export const getReactions = (hasRash, hasSwelling, hasHives, hasVomiting) => {
  const reactions = [];
  if (hasRash) reactions.push("rash");
  if (hasSwelling) reactions.push("swelling");
  if (hasHives) reactions.push("hives");
  if (hasVomiting) reactions.push("vomiting");

  return reactions;
};
