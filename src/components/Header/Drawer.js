export default function Drawer({ isOpen, toggleDrawer }) {
  return (
    <>
      {isOpen && (
        <div className=" border-gradient flex float-right  justify-center items-center w-[200px] h-[300px] fixed top-[8%] right-0 rounded-md z-10">
          <ul className="flex flex-col gap-2 text-white font-medium">
            <li className="flex gap-3  items-center">
              <img src="Filled.png" alt="" />
              <span>Notifications</span>
            </li>
            <li className="flex gap-3   items-center">
              <img src="msg.png" alt="" />
              <span>Messages</span>
            </li>
            <li className="flex  gap-3  items-center">
              <img src="heart.png" alt="" />
              <span>Wishlist</span>
            </li>
            <li className=" flex gap-1 items-center">
              <img src="money.png" alt="" />
              <span>Balance</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
