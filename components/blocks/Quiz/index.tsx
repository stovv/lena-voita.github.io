import React, { PropsWithChildren } from 'react';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

import * as data from './data';

type QuizProps = {
    name: keyof typeof data;
};

StylesManager.applyTheme('defaultV2');
const Quiz = ({ name }: PropsWithChildren<QuizProps>) => {
    const survey = new Model(data[name]);
    survey.focusFirstQuestionAutomatic = false;

    return <Survey model={survey} />;
};
export default Quiz;
