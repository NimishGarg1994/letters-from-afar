
const challenges = [
    {
        day: 1,
        theme: "Beginnings",
        challenges: [
            {
                type: "Emotion Puzzle",
                clue: "The day was bright and full of promise. One emotion was clear, one was hopeful, and one was hidden.",
                options: ["Joy", "Hope", "Curiosity", "Calm", "Wonder", "Longing"]
            },
            {
                type: "Letter Prompt",
                prompt: "Write a short letter using the words: 'Sunrise', 'Path', and 'Whisper'."
            },
            {
                type: "Token Trade",
                options: [
                    "Trade 2 Curiosity for 1 Wonder",
                    "Trade 1 Joy + 1 Longing for 1 Clarity",
                    "Keep your tokens for later use"
                ]
            }
        ],
        reflection: "What new beginning did you experience today?"
    },
    // Add more days here up to day 15
];

let currentDay = 1;

function loadDay(day) {
    const container = document.getElementById('challenge-container');
    container.innerHTML = '';

    const dayData = challenges.find(challenge => challenge.day === day);
    if (!dayData) return;

    const theme = document.createElement('h2');
    theme.textContent = `Day ${day}: ${dayData.theme}`;
    container.appendChild(theme);

    dayData.challenges.forEach(challenge => {
        const challengeElement = document.createElement('div');
        challengeElement.classList.add('challenge');

        if (challenge.type === 'Emotion Puzzle') {
            const clue = document.createElement('p');
            clue.textContent = `Clue: ${challenge.clue}`;
            challengeElement.appendChild(clue);

            const options = document.createElement('ul');
            challenge.options.forEach(option => {
                const optionElement = document.createElement('li');
                optionElement.textContent = option;
                options.appendChild(optionElement);
            });
            challengeElement.appendChild(options);
        } else if (challenge.type === 'Letter Prompt') {
            const prompt = document.createElement('p');
            prompt.textContent = `Prompt: ${challenge.prompt}`;
            challengeElement.appendChild(prompt);
        } else if (challenge.type === 'Token Trade') {
            const options = document.createElement('ul');
            challenge.options.forEach(option => {
                const optionElement = document.createElement('li');
                optionElement.textContent = option;
                options.appendChild(optionElement);
            });
            challengeElement.appendChild(options);
        }

        container.appendChild(challengeElement);
    });

    const reflection = document.createElement('p');
    reflection.textContent = `Reflection: ${dayData.reflection}`;
    container.appendChild(reflection);
}

function nextDay() {
    currentDay++;
    if (currentDay > challenges.length) {
        currentDay = 1;
    }
    loadDay(currentDay);
}

window.onload = () => {
    loadDay(currentDay);
};
