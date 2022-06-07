import React, { useState } from "react";

import {
  StyledFaqQuestion,
  Question,
  StyledAnswer,
  QuestionAnswerContainer,
} from "./styles";

const FaqQuestion = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <StyledFaqQuestion>
      <QuestionAnswerContainer>
        <Question onClick={() => setShowAnswer(!showAnswer)}>
          Can I request custom gifts for a specific event?
        </Question>
        {showAnswer && (
          <StyledAnswer>
            Yes! You have the option of choosing a range of gifts from an
            existing catalogue or requesting a custom gift tailored to a
            specific event.
          </StyledAnswer>
        )}
      </QuestionAnswerContainer>
    </StyledFaqQuestion>
  );
};

export default FaqQuestion;
