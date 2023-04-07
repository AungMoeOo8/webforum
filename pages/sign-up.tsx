import Auth from "@/services/auth";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "" || password === "") return;
    const { success, message, token } = await Auth.register(
      username,
      email,
      password
    );

    if (!success) {
      setError(message);
      return;
    }

    document.cookie = "session=" + token;
    router.replace("/");
  };

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className="w-full h-screen flex justify-center items-center">
        <form className="w-full max-w-sm px-4 py-8" onSubmit={submitHandler}>
          <p className="font-bold text-4xl text-center pb-4">WebForum</p>
          <div className="my-4">
            <label className="font-semibold">
              Username
              <input
                required
                value={email}
                onChange={onEmailChange}
                className="border rounded-lg outline-none px-2 py-2 w-full"
              />
            </label>
          </div>
          <div className="my-4">
            <label className="font-semibold">
              Email Address
              <input
                required
                value={email}
                onChange={onEmailChange}
                className="border rounded-lg outline-none px-2 py-2 w-full"
              />
            </label>
          </div>
          <div className="my-4">
            <label className="font-semibold">
              Password
              <input
                required
                type={"password"}
                value={password}
                onChange={onPasswordChange}
                className="border rounded-lg outline-none px-2 py-2 w-full"
              />
            </label>
          </div>
          <button
            className="w-full py-2 rounded-lg bg-rose-500 text-white my-4 font-medium"
            type="submit"
          >
            Create Account
          </button>
          <p>
            Already have an account? {""}
            <Link
              className="font-medium hover:underline underline-offset-2 inline-block"
              href={"/sign-in"}
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
