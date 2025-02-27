import Link from "next/link";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import { SortUpIcon } from "@/public/icons";
import useDeviceType from "@/hook/use-device-type";
import { usePathname } from "next/navigation";
import { CompanyLogo, CompanyLogoMobile } from "@/public/images";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const pathname = usePathname();
  const splitPathname = pathname.split("/");

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const { isMobile } = useDeviceType();

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                {isMobile ? <CompanyLogoMobile /> : <CompanyLogo />}
              </Link>
            </div>

            <div className="flex w-full items-center justify-end px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] w-full rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:items-center lg:space-x-12">
                    {menuData.map((menuItem, index) => {
                      const splitMenuItemPath = menuItem?.path.split("/");

                      return (
                        <li key={menuItem.id} className="group relative">
                          {menuItem.submenu ? (
                            <>
                              <a
                                onClick={() => handleSubmenu(index)}
                                className={`flex cursor-pointer items-center justify-between py-2 text-base font-semibold  text-primaryRed group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                                  splitPathname[1] === menuItem.path
                                    ? "text-primaryRed"
                                    : "text-spaceCadet"
                                }`}
                              >
                                {menuItem.title}
                                <span className="pl-1">
                                  <SortUpIcon />
                                </span>
                              </a>
                              <div
                                className={`submenu relative left-0 top-full rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                  openIndex === index ? "block" : "hidden"
                                }`}
                              >
                                {menuItem.submenu.map((submenuItem) => {
                                  return (
                                    <Link
                                      href={submenuItem.path}
                                      key={submenuItem.id}
                                      className={`block rounded py-2.5 text-sm text-dark hover:opacity-70 lg:px-3  ${
                                        pathname === `${submenuItem.path}/`
                                          ? "text-primaryRed"
                                          : "text-primaryText"
                                      }`}
                                      onClick={() => setNavbarOpen(false)}
                                    >
                                      {submenuItem.title}
                                    </Link>
                                  );
                                })}
                              </div>
                            </>
                          ) : (
                            <Link
                              onClick={() => setNavbarOpen(false)}
                              href={menuItem.path}
                              className={`flex py-2 text-base font-semibold  group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                                splitPathname[1] === splitMenuItemPath[1]
                                  ? "text-primaryRed"
                                  : "text-spaceCadet"
                              }`}
                            >
                              {menuItem.title}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
