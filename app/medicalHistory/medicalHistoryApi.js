export async function addVaccine(name, date, id) {
  const response = await fetch(`http://10.0.0.12:3000/pets/${id}/vaccines`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      dateAdministered: date,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `add vaccine API request failed (${response.status}): ${text}`,
    );
  }

  return response.json();
}
