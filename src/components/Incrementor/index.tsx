import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";

import { Wrapper, IconWrapper, Quantity } from "./styles";

type IncrementorProps = {
	amount: number;
	onClickPlus: () => void;
	onClickMinus: () => void;
}; 

const Incrementor = ({
  amount,
  onClickMinus,
  onClickPlus,
}: IncrementorProps) => (
  <Wrapper>
    <IconWrapper>
      <SubtractIcon onClick={onClickMinus} aria-label="Subtract item" />
    </IconWrapper>

    <Quantity>{amount}</Quantity>

    <IconWrapper>
      <PlusIcon onClick={onClickPlus} aria-label="Add item" />
    </IconWrapper>
  </Wrapper>
);

export default Incrementor;
