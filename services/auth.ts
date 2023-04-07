export type AuthReponseType = {
  success: boolean;
  message: string;
  token: string | null;
};

class Auth {
  public static async register(
    username: string,
    email: string,
    password: string
  ) {
    const requestInit: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    };

    const response = await fetch(
      "http://localhost:5000/api/auth/register",
      requestInit
    );

    const data = (await response.json()) as AuthReponseType;
    return data;
  }

  public static async login(email: string, password: string) {
    const requestInit: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };

    const response = await fetch(
      "http://localhost:5000/api/auth/login",
      requestInit
    );

    const data = (await response.json()) as AuthReponseType;
    return data;
  }
}

export default Auth;
