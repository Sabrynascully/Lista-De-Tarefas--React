import * as C from "./styles";
import { Item } from "../../types/Item";
import { useState } from "react";

type Props = {
  item: Item;
};

export const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.Container done={isChecked}>
      <input
        checked={isChecked}
        type="checkbox"
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>{item.name}</label>
    </C.Container>
  );
};
