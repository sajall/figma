import { useState } from "react";
import Drawer from "./Drawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <header className="flex  justify-between p-2 px-8">
        <div>
          <img src="logo.png" alt="" />
        </div>
        <div>
          <ul className="flex gap-3 cursor-pointer">
            <li className="hidden sm:block">
              <img src="search.jpg" alt="" />
            </li>
            <li className="hidden sm:block">
              <img src="create.jpg" alt="" />
            </li>
            <li className="hidden sm:block">
              <img src="Filled.png" alt="" />
            </li>
            <li className="hidden sm:block">
              <img src="msg.png" alt="" />
            </li>
            <li className="hidden sm:block">
              <img src="heart.png" alt="" />
            </li>
            <li className="hidden sm:block">
              <img src="money.png" alt="" />
            </li>
            <li className="block sm:hidden" onClick={toggleDrawer}>
              <img src="hamburger.png" alt="" />
            </li>
          </ul>
        </div>
      </header>
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Header;
