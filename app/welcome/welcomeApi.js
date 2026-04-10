export async function login(username) {
  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`log in API request failed (${response.status}): ${text}`);
  }

  return response.json();
}
