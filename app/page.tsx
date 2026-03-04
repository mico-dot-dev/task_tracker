import AccountForm from "./components/AccountForm";
import { ThemeToggle } from "./components/ThemeChanger";

export default function Home() {
  return (
    <>
      <div>
        <AccountForm isLogin={true} />
      </div>
    </>
  );
}
