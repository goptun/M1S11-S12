import { ButtonStyled } from "./styled";
import { ButtonProps } from "../Interfaces/ButtonProps";

function Button({ descriptionButton }: ButtonProps) {
  return <ButtonStyled>{descriptionButton}</ButtonStyled>;
}

export { Button };
