"use client";
import clsx from "clsx";
import Container from "../Commonds/container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCallIcon } from "lucide-react";
import Language from "./language";

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

export default function SmallNav() {
  const pathname = usePathname();
  return (
    <div className="bg-noir-50 py-3">
      <Container>
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-10">
            {navigation.map((nav, idx) => (
              <li key={idx}>
                <Link
                  href={nav.link}
                  className={clsx(
                    "transition-all duration-300 ease-in-out hover:text-primary-500 relative text-sm",
                    pathname === nav.link
                      ? "text-primary-500 before:absolute before:top-9 before:h-0.5 before:w-full before:bg-primary-500"
                      : "text-noir-600"
                  )}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <PhoneCallIcon size={18} className="text-noir-900" />
              <span className="text-noir-900 text-sm">+237-123-456-789</span>
            </div>
            <Language />
          </div>
        </div>
      </Container>
    </div>
  );
}
