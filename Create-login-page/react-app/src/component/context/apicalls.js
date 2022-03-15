const url = "http://localhost:3002/api";

export const loginAPI = async (email, password) => {
  const result = await fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  console.log(result);
  const data = await result.json();
  return data;
};
export const signupAPI = async (name, email, password, passwordConfirm) => {
  const result = await fetch(`${url}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    }),
  });
  console.log(result);
  const data = await result.json();
  console.log(data);
  return data;
};
