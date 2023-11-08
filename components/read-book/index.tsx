import React, { useState } from "react";
import { ReadBookPages } from "./ReadBookPages";
import { BookPageCover } from "./BookPageCover";
import { BookPageFlipped } from "./BookPageFlipped";
import { BookPageCoverEnd } from "./BookPageCoverEnd";

export const ReadBookPage = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const gotoNext = () => {
    setCurrentStepIndex((x) => x + 1);
  };

  const gotoPrevious = () => {
    setCurrentStepIndex((x) => x - 1);
  };

  const renderCurrentSelection = () => {
    switch (currentStepIndex) {
      case 0:
        return <ReadBookPages onNextClick={gotoNext} />;
      case 1:
        return (
          <BookPageCover onNextClick={gotoNext} onBackClick={gotoPrevious} />
        );
      case 2:
        return (
          <BookPageFlipped onNextClick={gotoNext} onBackClick={gotoPrevious} />
        );
      case 3:
        return (
          <BookPageCoverEnd onNextClick={gotoNext} onBackClick={gotoPrevious} />
        );
      default:
        return <ReadBookPages onNextClick={gotoNext} />;
    }
  };

  return <div>{renderCurrentSelection()}</div>;
};
