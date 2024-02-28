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
    <header className="w-full bg-brandFog  fixed top-0 left-0 right-0 z-[9999] main-container">
      <nav className={`py-4 lg:px-14  ${isSticky ? "sticky top-0 left-0 right-0   bg-white duration-300" : ""}`}>
        <div className="px-4 flex justify-between items-center text-base gap-8">
          <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
            <img src={logo} alt="" className="w-[70px] inline-block items-center" />
          </a>

          {/* buttons on large  devices */}
          <div className="gap-2 inline-flex">
            <Link className="space-x-2 cursor-pointer" to="property">
              <Button
                variant="outline"
                className="md:py-2 md:px-4 transition-all duration-300 rounded hover:bg-neutralDGrey bg-brandSunset text-brandFog">
                Property Listing
              </Button>
            </Link>

            {!user && (
              <Link className="space-x-2 cursor-pointer" to="auth">
                <Button className="md:py-2 md:px-4 transition-all duration-300 rounded text-brandSunset border border-brandSunset hover:bg-brandShell hover:text-brandSunset text-xs md:text-base ">
                  Login / Register
                </Button>
              </Link>
            )}

            {user && <UserNav />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default index;
