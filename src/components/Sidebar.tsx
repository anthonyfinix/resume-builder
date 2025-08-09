import { FC, useContext } from "react";
import { Minus, Plus } from "./icons";
import { AppContext } from "./AppProvider";

export type Item = {
  label: string;
  value: string;
  children?: Array<Item>;
};

const SidebarItem: FC<{ item: Item }> = ({ item }) => {
  const appContext = useContext(AppContext);
  const handleClick = () => {
    if (appContext?.selectedMenu == item.value) {
      appContext?.setSelectedMenu(null);
    } else {
      appContext?.setSelectedMenu(item.value as never);
    }
  };
  return (
    <div
      className={`sidebar-item${
        appContext?.selectedMenu === item.value ? " active" : ""
      }`}
      onClick={handleClick}
    >
      <p>{item.label}</p>
      {appContext?.selectedMenu === item.value ? <Minus /> : <Plus />}
    </div>
  );
};

const Sidebar: FC<{ items: Array<Item> }> = ({ items }) => {
  return (
    <div className="sidebar">
      {items.map((item) => (
        <SidebarItem item={item} />
      ))}
    </div>
  );
};
export default Sidebar;
