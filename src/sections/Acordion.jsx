import { useState } from "react";
const Item = () => {
  const [open, setOpen] = useState(false);
  return <div onClick={() => setOpen(!open)}></div>;
};

const Acordion = () => {
  return (
    <div>
      <Item />
    </div>
  );
};

export default Acordion;
