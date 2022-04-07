import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";

import { Wrapper, IconWrapper, Quantity } from "./styles";

type IncrementorProps = {
  id: number;
  quantity: number;
};

const Incrementor = ({ id, quantity }: IncrementorProps) => (
  <Wrapper>
    <IconWrapper>
      <SubtractIcon aria-label="Subtract item" />
    </IconWrapper>

    <Quantity>{quantity}</Quantity>

    <IconWrapper>
      <PlusIcon aria-label="Add item" />
    </IconWrapper>
  </Wrapper>
);

export default Incrementor;
