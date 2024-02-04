import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import UserNav from "./userNav";
const index = ({user}) => {
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
            <img src={logo} alt="" className="w-[70px] inline-block items-center" /> 
          </a>

          {/* buttons on large  devices */}
          <div className="gap-5 inline-flex">
            <Link className="space-x-2 cursor-pointer" to="business">
              <Button variant="outline" className="py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
                For Business
              </Button>
            </Link>

            {!user && (
              <Link className="md:flex space-x-12 cursor-pointer" to="auth">
                <Button variant="ghost" className="py-2 px-4 transition-all duration-300 rounded hover:bg-black hover:text-white">
                  Login / Join
                </Button>
              </Link>
            )}

            <UserNav user={user} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default index;
