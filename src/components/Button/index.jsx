import { StyledButton } from "./styles";

const Button = ({ text, isPrimary, isLarge, clickHandler }) => {
  return (
    <StyledButton
      $isPrimary={isPrimary}
      $isLarge={isLarge}
      onClick={clickHandler}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
