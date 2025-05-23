
const challenges = [
    {
        day: 1,
        theme: "Stillness and Subtle Change",
        challenges: [
            {
                type: "Emotion Puzzle",
                clue: "The air was quiet, but not empty. A single leaf turned in the breeze. Something shifted, though nothing moved.",
                options: ["Joy", "Longing", "Clarity", "Wonder", "Calm", "Curiosity"]
            },
            {
                type: "Letter Prompt",
                prompt: "Write a short letter or journal entry using these three words: 'Pause,' 'Edge,' and 'Echo.'"
            },
            {
                type: "Token Trade",
                options: [
                    "Trade 2 Curiosity for 1 Wonder",
                    "Trade 1 Joy + 1 Longing for 1 Clarity",
                    "Keep your tokens for later use"
                ]
            },
            {
                type: "Reflection",
                question: "What did you notice today that you might have missed yesterday?"
            }
        ]
    },
    // Add more days here up to day 15
];

let currentDay = 1;

function unlockNextDay() {
    if (currentDay < challenges.length) {
        currentDay++;
        renderDay(currentDay);
    }
}

function renderDay(day) {
    const dayContainer = document.getElementById('day-container');
    const dayContent = document.getElementById('day-content');
    const nextDayBtn = document.getElementById('next-day-btn');

    const dayData = challenges.find(challenge => challenge.day === day);
    dayContainer.querySelector('h2').innerText = `Day ${day}`;
    dayContent.innerHTML = '';

    dayData.challenges.forEach(challenge => {
        const challengeElement = document.createElement('div');
        challengeElement.classList.add('challenge');

        if (challenge.type === 'Emotion Puzzle') {
            challengeElement.innerHTML = `
                <h3>Emotion Puzzle</h3>
                <p>${challenge.clue}</p>
                <ul>
                    ${challenge.options.map(option => `<li>${option}</li>`).join('')}
                </ul>
            `;
        } else if (challenge.type === 'Letter Prompt') {
            challengeElement.innerHTML = `
                <h3>Letter Prompt</h3>
                <p>${challenge.prompt}</p>
            `;
        } else if (challenge.type === 'Token Trade') {
            challengeElement.innerHTML = `
                <h3>Token Trade</h3>
                <ul>
                    ${challenge.options.map(option => `<li>${option}</li>`).join('')}
                </ul>
            `;
        } else if (challenge.type === 'Reflection') {
            challengeElement.innerHTML = `
                <h3>Reflection</h3>
                <p>${challenge.question}</p>
            `;
        }

        dayContent.appendChild(challengeElement);
    });

    if (currentDay === challenges.length) {
        nextDayBtn.style.display = 'none';
    } else {
        nextDayBtn.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderDay(currentDay);
});
