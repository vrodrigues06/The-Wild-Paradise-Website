import Link from "next/link";
import { auth } from "../_lib/auth";
import NavigationClient from "./NavigationClient";

export default async function Navigation() {
  const session = await auth();

  const links = [
    { href: "/cabins", label: "Cabins" },
    { href: "/about", label: "About" },
  ];

  const userLink = session?.user?.image
    ? {
        href: "/account",
        label: "Guest area",
        image: session.user.image,
        name: session.user.name,
      }
    : { href: "/account", label: "Guest area" };

  return <NavigationClient links={links} userLink={userLink} />;
}
