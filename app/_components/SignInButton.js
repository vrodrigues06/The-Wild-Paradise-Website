import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-4 sm:gap-6 text-sm sm:text-lg border border-primary-300 px-6 py-3 sm:px-10 sm:py-4 font-medium rounded-md">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
          className="h-5 w-5 sm:h-6 sm:w-6"
        />
        <span className="text-center">Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
