import { PrimaryButton } from "./styles";

const ButtonPrimary = ({ text, clickHandler, isLarge }) => {
  return (
    <PrimaryButton $isLarge={isLarge} onClick={clickHandler}>
      {text}
    </PrimaryButton>
  );
};

export default ButtonPrimary;
