"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setActiveLink(pathname);
    }
  }, [pathname, mounted]);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const handleNavLinkClick = (href: string) => {
    setActiveLink(href);
    setMobileNavOpen(false);
  };

  return (
    <header className="w-full fixed top-0 bg-white z-50 shadow">
      <div className="container flex justify-between items-center h-[96px] md:px-4 px-8">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <Link
            href="#hero"
            className={`mr-8 ${
              activeLink === "#hero"
                ? "border-b-4 border-primary text-black font-bold"
                : ""
            }`}
            onClick={() => handleNavLinkClick("#hero")}
          >
            HOME
          </Link>
          <Link
            href="#about"
            className={`mr-8 ${
              activeLink === "#about"
                ? "border-b-4 border-primary text-black font-bold"
                : ""
            }`}
            onClick={() => handleNavLinkClick("#about")}
          >
            ABOUT
          </Link>
          <Link
            href="#sponsors"
            className={`mr-8 ${
              activeLink === "#sponsors"
                ? "border-b-4 border-primary text-black font-bold"
                : ""
            }`}
            onClick={() => handleNavLinkClick("#sponsors")}
          >
            SPONSORS
          </Link>
          <Link
            href="#agenda"
            className={`mr-8 ${
              activeLink === "#agenda"
                ? "border-b-4 border-primary text-black font-bold"
                : ""
            }`}
            onClick={() => handleNavLinkClick("#agenda")}
          >
            AGENDA
          </Link>
          <Link
            href="#faq"
            className={`${
              activeLink === "#faq"
                ? "border-b-4 border-primary text-black font-bold"
                : "text-bold"
            }`}
            onClick={() => handleNavLinkClick("#faq")}
          >
            FAQ
          </Link>
        </nav>
        {/* Register Button (Desktop) */}
        <div className="hidden md:flex bg-primary items-center py-3 px-10 rounded-lg">
          <Link
            href="https://t.co/ePoeaWwl7f"
            className="text-white text-base font-bold"
          >
            Register Here
          </Link>
        </div>
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Image
            src={mobileNavOpen ? "/x.svg" : "/menu.svg"}
            alt="Menu"
            width={30}
            height={30}
            onClick={toggleMobileNav}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Full-screen Mobile Navigation */}
      {mobileNavOpen && (
        <div className="fixed inset-0 bg-white z-100 flex flex-col items-center justify-center text-black">
          {/* Logo and Close Button */}
          <div className="absolute top-8 flex items-center justify-between w-full px-8">
            <Link href="/" onClick={toggleMobileNav}>
              <Image src="/logo.svg" alt="Logo" width={100} height={100} />
            </Link>
            <Image
              src="/x.svg"
              alt="Close Menu"
              width={30}
              height={30}
              className="cursor-pointer"
              onClick={toggleMobileNav}
            />
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-8 text-center">
            <Link
              href="#hero"
              className={`text-2xl ${
                activeLink === "#hero" ? "text-primary" : ""
              }`}
              onClick={() => handleNavLinkClick("#hero")}
            >
              HOME
            </Link>
            <Link
              href="#about"
              className={`text-2xl ${
                activeLink === "#about" ? "text-primary" : ""
              }`}
              onClick={() => handleNavLinkClick("#about")}
            >
              ABOUT
            </Link>
            <Link
              href="#sponsors"
              className={`text-2xl ${
                activeLink === "#sponsors" ? "text-primary" : ""
              }`}
              onClick={() => handleNavLinkClick("#sponsors")}
            >
              SPONSORS
            </Link>
            <Link
              href="#agenda"
              className={`text-2xl ${
                activeLink === "#agenda" ? "text-primary" : ""
              }`}
              onClick={() => handleNavLinkClick("#agenda")}
            >
              AGENDA
            </Link>
            <Link
              href="#faq"
              className={`text-2xl ${
                activeLink === "#faq" ? "text-primary" : ""
              }`}
              onClick={() => handleNavLinkClick("#faq")}
            >
              FAQ
            </Link>
          </nav>
          <div className="mt-24 w-full flex items-center justify-center p-8">
            <Link
              href="/register"
              className=" py-3 px-24 bg-primary rounded-lg items-center text-xl text-white"
            >
              Register Here
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
