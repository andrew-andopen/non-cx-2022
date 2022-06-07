import { SecondaryButton } from "./styles";

const ButtonSecondary = ({ text, clickHandler }) => {
  return <SecondaryButton onClick={clickHandler}>{text}</SecondaryButton>;
};

export default ButtonSecondary;
