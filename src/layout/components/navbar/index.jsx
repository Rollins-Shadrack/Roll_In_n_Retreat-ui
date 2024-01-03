import { useEffect, useState } from "react";
import logo from "@/assets/Icon.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "@/layout/constants/navbar";
import { Button } from "@/components/ui/button";
const index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //Toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav className={`py-4 lg:px-14  ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`}>
        <div className="px-4 flex justify-between items-center text-base gap-8">
          <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
            <img src={logo} alt="" className="w-10 inline-block items-center" /> <span className="text-[#263238]">Roll In & Retreat</span>
          </a>

          {/* Navbar Items for large screen */}
          <ul className="md:flex space-x-12 hidden cursor-pointer">
            {navItems.map(({ link, path }) => (
              <Link key={path} to={path} className="block text-base text-gray900 hover:text-brandPrimary first:font-medium">
                {link}
              </Link>
            ))}
          </ul>

          {/* buttons on large  devices */}
          <div className="gap-5 inline-flex">
            <Link className="md:flex space-x-12 hidden cursor-pointer" to = "business">
              <Button variant="outline" className="py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
                For Business
              </Button>
            </Link>

            <Link className="md:flex space-x-12 hidden cursor-pointer" to="auth">
              <Button className="py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">Login / Join</Button>
            </Link>
          </div>

          {/* menu btn for mobile devices only */}
          <div className="md:hidden">
            <div onClick={toggleMenu} className="focus:outline-none text-neutralDGrey focus:text-gray-500">
              {isMenuOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
            </div>
          </div>
        </div>

        {/* mobile device */}
        <div className={isMenuOpen ? "py-0 block fixed w-screen z-[9999] lg:hidden" : "py-0 hidden fixed w-screen z-[9999] lg:hidden"}>
          <div className="h-screen w-screen top-0 fixed bg-black bg-opacity-30 z-[999]" onClick={toggleMenu}></div>
          <div className="bg-white top-0 right-0 h-screen fixed w-[320px] z-[9999]">
            <div className="h-14 px-10 border-b flex items-center">
              <div onClick={toggleMenu} className="flex items-center space-x-3">
                <X size={32} strokeWidth={2.5} /> <span>Close</span>
              </div>
            </div>
            <div className="h-full py-3 px-10 overflow-y-scroll scroll-smooth">
              <ul className="block mb-7">
                {navItems.map(({ link, path }) => (
                  <Link key={path} to={path} className="block text-base text-gray900 hover:text-brandPrimary first:font-medium py-2">
                    {link}
                  </Link>
                ))}
                <Link className="block text-base text-gray900 hover:text-brandPrimary first:font-medium py-2" to="auth">
                  Login / Join
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default index;
