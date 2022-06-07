import { Link } from "react-router-dom";

import { H3, P } from "./styles";
import Button from "../Button";

const Stat = ({ title, subtitle, button, route, content, modalHandler }) => {
  console.log(content);
  return (
    <div>
      <H3>{title}</H3>
      <P>{subtitle}</P>
      <Link to={`${route ? route : `/`}`}>
        <Button
          text={button}
          clickHandler={content ? () => modalHandler(content, false) : null}
        />
      </Link>
    </div>
  );
};
export default Stat;
