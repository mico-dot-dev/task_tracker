"use client";
import Link from "next/link";
import { FormEvent } from "react";
import { ThemeToggle } from "./ThemeChanger";
import Swal from "sweetalert2";

function AccountForm({ isLogin }: { isLogin: boolean }) {
  let title = isLogin ? "Log in" : "Sign Up";
  let invertTitle = !isLogin ? "Log in" : "Sign Up";
  let link = isLogin ? "/signUp" : "/login";
  let description = isLogin ? "Welcome back!" : "Create your account.";
  let stats = isLogin ? "Don't have an account? " : "Already have an account? ";
  let apiEndpoint = isLogin ? "/api/login" : "/api/sign-up";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const response = await fetch(apiEndpoint, {
        method: "POST",
        body: formData,
      });

      if (isLogin) {
        // Redirect to dashboard or another page after successful login
        if (response.ok) {
          window.location.href = "/hero";
        } else {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "Invalid username or password. Please try again.",
          });
        }
      } else {
        if (!response.ok) {
          const errorData = await response.json();
          Swal.fire({
            icon: "error",
            title: "User Error",
            text: errorData.error || "An error occurred. Please try again.",
          });
          return;
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
      <ThemeToggle></ThemeToggle>
      <div className="flex justify-center ">
        <div className="flex flex-col h-5/6 w-85 p-3">
          <p className="text-2xl text-center">{description}</p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 my-[30%]"
          >
            <input
              type="email"
              placeholder="Email Adress"
              name="email"
              className="bg-input rounded-2xl text-text h-12 indent-3"
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="bg-input rounded-2xl text-text h-12 indent-3"
              autoComplete="off"
              required
              minLength={6}
            />

            <button
              type="submit"
              className="cursor-pointer bg-button text-background rounded-4xl h-12 text-lg flex items-center justify-center "
            >
              {title}
            </button>
          </form>

          <fieldset className="flex border-t border-text mb-30">
            <legend className="text-center px-2">or {title} with</legend>
            <div className="flex justify-between w-full">
              <p>Google</p>
              <p>Fb</p>
              <p>Discord</p>
            </div>
          </fieldset>

          <Link href={link}>
            <button className="flex justify-self-center text-center cursor-pointer text-xs text-text">
              <p>{stats} &thinsp;</p>{" "}
              <p className="text-button">{invertTitle}</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AccountForm;
