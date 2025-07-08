"use client";
import clsx from "clsx";
import Container from "../Commonds/container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCallIcon } from "lucide-react";
import Language from "./language";
import Image from "next/image";

const navigation = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Find Job",
    link: "find-job/",
  },
  {
    name: "Employers",
    link: "employers/",
  },
  {
    name: "Candidates",
    link: "candidates/",
  },
  {
    name: "Pricing Plans",
    link: "pricing/",
  },
  {
    name: "Customer Supports",
    link: "customer-supports/",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="border-b border-b-noir-50 py-5 relative">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={143} height={40} />
          </Link>
          <ul className="flex items-center gap-10">
            {navigation.map((nav, idx) => (
              <li key={idx}>
                <Link
                  href={nav.link}
                  className={clsx(
                    "transition-all duration-300 ease-in-out hover:text-primary-500",
                    pathname === nav.link
                      ? "text-primary-500 font-semibold"
                      : "text-noir-600"
                  )}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button className="border border-primary-100 text-primary-500 font-semibold px-6 rounded py-2">
              <Link href="/sign-in">Sign In</Link>
            </button>
            <button className="bg-primary-500 text-white font-semibold px-6 rounded py-2">
              <Link href="/post-a-jobs">Post A Jobs</Link>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
