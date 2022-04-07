import { WithChildren } from "../../common/childrenType";

import { Wrapper } from "./styles";

export type TypographyType = {
  size?: "small" | "large" | "medium" | "huge";
  fontWeight?: 300 | 400 | 500 | 700 | 600;
  lineHeight?: string | number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & Required<WithChildren>;

const Typography = ({
  children,
  size = "large",
  level = 1,
  ...props
}: TypographyType) => (
  <Wrapper level={level} size={size} {...props}>
    {children}
  </Wrapper>
);

export default Typography;
