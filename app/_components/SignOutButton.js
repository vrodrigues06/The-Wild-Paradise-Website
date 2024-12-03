import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-3 sm:px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full relative group">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-amber-600" />

        {/* Tooltip que aparece ao passar o mouse */}
        <span className="hidden lg:inline text-amber-600">
          {/* Texto do botão */}
          Sign out
        </span>

        {/* Tooltip que aparece ao passar o mouse */}
        <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 group-hover:block bg-primary-900 text-primary-100 text-sm py-1 px-2 rounded-md transition-opacity duration-200">
          Sign out
        </span>
      </button>
    </form>
  );
}

export default SignOutButton;
