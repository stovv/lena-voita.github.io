// https://surveyjs.io/form-library/documentation/design-survey-create-a-quiz
// https://surveyjs.io/try/reactjs#try-creator

const test = {
    title: 'Test quiz',
    pages: [
        {
            elements: [
                {
                    type: 'radiogroup',
                    name: 'civilwar',
                    title: 'When was the American Civil War?',
                    choices: ['1796-1803', '1810-1814', '1861-1865', '1939-1945'],
                    correctAnswer: '1861-1865',
                },
            ],
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    name: 'libertyordeath',
                    title: 'Whose quote is this: "Give me liberty, or give me death"?',
                    choicesOrder: 'random',
                    choices: ['John Hancock', 'James Madison', 'Patrick Henry', 'Samuel Adams'],
                    correctAnswer: 'Patrick Henry',
                },
            ],
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    name: 'magnacarta',
                    title: 'What is Magna Carta?',
                    choicesOrder: 'random',
                    choices: [
                        'The foundation of the British parliamentary system',
                        'The Great Seal of the monarchs of England',
                        'The French Declaration of the Rights of Man',
                        'The charter signed by the Pilgrims on the Mayflower',
                    ],
                    correctAnswer: 'The foundation of the British parliamentary system',
                },
            ],
        },
    ],
};

export { test };
