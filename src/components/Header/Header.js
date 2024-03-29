import Image from "next/image";
const Header = () => {
  return (
    <>
      <header className="flex  justify-between p-2 px-8">
        <div>
          <img src="logo.png" alt="" />
        </div>
        <div>
          <ul className="flex gap-3 cursor-pointer">
            <li>
              <img src="search.jpg" alt="" />
            </li>
            <li>
              <img src="create.jpg" alt="" />
            </li>
            <li>
              <img src="Filled.png" alt="" />
            </li>
            <li>
              <img src="msg.png" alt="" />
            </li>
            <li>
              <img src="heart.png" alt="" />
            </li>
            <li>
              <img src="money.png" alt="" />
            </li>
            <li>
              <img src="hamburger.png" alt="" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
