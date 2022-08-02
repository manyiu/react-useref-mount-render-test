import { useRef, useState } from "react";

interface TestProps {
  id: number;
}

const Test: React.FC<TestProps> = () => {
  const [id, setId] = useState(0);
  const refTitle = useRef("Title");
  const refInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    refTitle.current = refInput.current?.value || "Unable to set value";
  };
  const forceUpdate = () => {
    setId((id) => id + 1);
  };

  return (
    <div>
      <h1>{refTitle.current}</h1>
      <input ref={refInput}></input>
      <button onClick={handleClick}>Change Title</button>
      <button onClick={forceUpdate}>Force Update Child</button>
    </div>
  );
};

export default Test;
