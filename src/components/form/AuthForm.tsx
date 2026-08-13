"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthSchema, AuthModel } from "@/src/types/auth";
import { SignUpUser, LoginUser } from "@/src/actions/auth.action";
import { useRouter } from "next/navigation";
import { FaFacebook, FaDiscord } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function AccountForm() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");

  const content = {
    login: {
      title: "Welcome back!",
      subtitle: "Log in to continue",
      mode: "Log in",
      invertText: "Don't have an account?",
      invertTitle: "Sign Up",
    },
    signup: {
      title: "Create your account.",
      subtitle: "Join us today",
      mode: "Sign Up",
      invertText: "Already have an account?",
      invertTitle: "Log in",
    },
  }[mode];

  const authService = {
    login: LoginUser,
    signup: SignUpUser,
  }[mode];

  const { register, handleSubmit } = useForm<AuthModel>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function toggleMode() {
    try {
      setMode((prev) => (prev === "login" ? "signup" : "login"));
    } catch (error) {}
  }

  async function AuthSubmit(data: AuthModel) {
    try {
      const res = await authService(data);

      if (!res) {
        throw new Error("No response from auth service");
      }

      //Login
      if (mode === "login") {
        // Redirect to dashboard or another page after successful login
        if (!res.ok) {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: res.error || "Invalid email or password.",
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: res.message,
          }).then(() => {
            router.push("/dashboard");
          });
        }
        // for sign up
      } else {
        if (!res.ok) {
          Swal.fire({
            icon: "error",
            title: "Sign Up Failed",
            text: res.error || "An error occurred during sign up.",
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Email Sent",
            text: "Validation email sent. Please check your inbox to complete the registration.",
          }).then(() => {
            setMode("login");
          });
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <>
      <div className="flex justify-center text-primary-text h-screen items-center">
        <div className="flex flex-col h-3/4 w-1/4 justify-center">
          <p className="text-3xl text-center font-bold">{content.title}</p>

          <form
            className="flex flex-col my-[20%] "
            onSubmit={handleSubmit(AuthSubmit)}
          >
            <div className="flex flex-col gap-8 mb-5">
              <input
                type="email"
                placeholder="Email Adress"
                className="input-base indent-2.5 py-2 "
                required
                {...register("email")}
              />
              <input
                type="password"
                placeholder="Password"
                className="input-base py-2 indent-2.5"
                autoComplete="off"
                required
                {...register("password")}
              />
            </div>

            <div className="aura text-text-info duration-3000 rounded-4xl">
              <div className="cursor-pointer button-base rounded-4xl h-12 text-lg flex items-center justify-center">
                <button className="cursor-pointer" type="submit">
                  {content.mode}
                </button>
              </div>
            </div>
          </form>

          <fieldset className="flex border-t border-text mb-30">
            <legend className="text-center px-2 mb-5">
              or {content.mode} with
            </legend>
            <div className="flex justify-between w-full text-3xl">
              <FcGoogle className="" />
              <FaFacebook className="" />
              <FaDiscord className="" />
            </div>
          </fieldset>

          <button
            className="flex justify-self-center text-center cursor-pointer text-s text-text"
            onClick={toggleMode}
          >
            <p>{content.invertText} &thinsp;</p>{" "}
            <p className="text-primary hover:underline">
              {content.invertTitle}
            </p>
          </button>
        </div>
      </div>
    </>
  );
}

export default AccountForm;
