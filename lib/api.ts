import axios from "axios";

export const api = axios.create({
  baseURL: "https://duckzr-studios-api-production.up.railway.app/api",
  withCredentials: true,
});

export async function login(
  username: string,
  password: string
) {
  const response = await api.post(
    "/auth/login",
    {
      username,
      password,
    }
  );

  return response.data;
}

export async function register(
  username: string,
  email: string,
  password: string
) {
  const response = await api.post(
    "/auth/register",
    {
      username,
      email,
      password,
    }
  );

  return response.data;
}