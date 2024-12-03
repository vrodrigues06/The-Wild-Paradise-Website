import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-6 mt-10 sm:gap-10">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center">
        Sign in to access your guest area
      </h2>
      <div className="w-full flex justify-center">
        <SignInButton />
      </div>
    </div>
  );
}
