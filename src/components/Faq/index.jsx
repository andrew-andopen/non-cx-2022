import FaqQuestion from "../FaqQuestion";

import { FAQ, H1, QuestionContainer } from "./styles";

const Faq = () => {
  return (
    <FAQ>
      <H1>Frequently asked questions</H1>
      <QuestionContainer>
        <FaqQuestion />
        <FaqQuestion />
        <FaqQuestion />
        <FaqQuestion />
      </QuestionContainer>
    </FAQ>
  );
};

export default Faq;
