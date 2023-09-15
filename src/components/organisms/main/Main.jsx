import ListBox from "../../molecules/listBox/ListBox";
import "./Main.scss";
import WatchedBox from "../../molecules/watchedBox/WatchedBox";
import { useState } from "react";

const Main = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen((open) => !open);
  };

  return (
    <main className="main">
      <ListBox isOpen={isOpen} onClick={handleClick} />
      <WatchedBox isOpen={isOpen} onClick={handleClick} />
    </main>
  );
};

export default Main;
