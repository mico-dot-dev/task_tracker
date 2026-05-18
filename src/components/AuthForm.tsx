"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthSchema, AuthModel } from "@/src/types/auth";
import { SignUpUser, LoginUser } from "@/src/actions/auth.action";
import { useRouter } from "next/navigation";

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
            router.push("/tasks");
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
            title: "Account Created",
            text: "Please confirm your email address to complete the registration.",
          }).then(() => {
            window.location.href = "/login";
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
            className="flex flex-col my-[30%] "
            onSubmit={handleSubmit(AuthSubmit)}
          >
            <div className="flex flex-col gap-8 mb-5">
              <input
                type="email"
                placeholder="Email Adress"
                className="
                bg-foreground border-border rounded-2xl
                h-12 indent-3 
                text-primary-text 
                
                focus:outline-none
                focus:ring-2
                focus:ring-primary
                focus:border-primary
                "
                required
                {...register("email")}
              />
              <input
                type="password"
                placeholder="Password"
                className="
                bg-foreground border border-border rounded-2xl
                h-12 indent-3 
                text-primary-text 

                focus:outline-none
                focus:ring-2
                focus:ring-primary
                focus:border-primary
                "
                autoComplete="off"
                required
                minLength={6}
                {...register("password")}
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer bg-primary text-background rounded-4xl h-12 text-lg flex items-center justify-center "
            >
              {content.mode}
            </button>
          </form>

          <fieldset className="flex border-t border-text mb-30">
            <legend className="text-center px-2">or {content.mode} with</legend>
            <div className="flex justify-between w-full">
              <p>Google</p>
              <p>Fb</p>
              <p>Discord</p>
            </div>
          </fieldset>

          <button className="flex justify-self-center text-center cursor-pointer text-s text-text">
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
