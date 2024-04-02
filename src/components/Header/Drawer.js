export default function Drawer({ isOpen, toggleDrawer }) {
  return (
    <>
      {isOpen && (
        <div
          onClick={toggleDrawer}
          className=" border-gradient flex float-right  justify-center items-center w-[200px] h-[300px] fixed top-[8%] right-0 rounded-md z-10"
        >
          <ul className="flex flex-col justify-center gap-2 text-white font-medium">
            <li className="flex gap-3  items-center cursor-pointer">
              <span>Search</span>
            </li>
            <li className="flex gap-3  items-center cursor-pointer">
              <span>Add</span>
            </li>
            <li className="flex gap-3  items-center cursor-pointer">
              <span>Notifications</span>
            </li>
            <li className="flex gap-3   items-center cursor-pointer">
              <span>Messages</span>
            </li>
            <li className="flex  gap-3  items-center cursor-pointer">
              <span>Wishlist</span>
            </li>
            <li className=" flex gap-1 items-center cursor-pointer">
              <span>Balance</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
