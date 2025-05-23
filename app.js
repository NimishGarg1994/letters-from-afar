
const challenges = [
    {
        day: 1,
        title: "Day 1: The Beginning",
        tasks: [
            {
                type: "emotionPuzzle",
                clue: "The air was quiet, but not empty. A single leaf turned in the breeze. Something shifted, though nothing moved.",
                options: ["Joy", "Longing", "Clarity", "Wonder", "Calm", "Curiosity"]
            },
            {
                type: "letterPrompt",
                prompt: "Write a short letter or journal entry using these three words: 'Pause,' 'Edge,' and 'Echo.'"
            },
            {
                type: "tokenTrade",
                currentTokens: ["Curiosity", "Joy", "Longing"],
                tradeOptions: [
                    { from: ["Curiosity", "Curiosity"], to: "Wonder" },
                    { from: ["Joy", "Longing"], to: "Clarity" }
                ]
            },
            {
                type: "reflection",
                question: "What did you notice today that you might have missed yesterday?"
            }
        ]
    },
    // Add more days here up to day 15
];

let currentDay = 1;

function renderDay(day) {
    const dayData = challenges.find(challenge => challenge.day === day);
    const dayTitle = document.getElementById("day-title");
    const dayContent = document.getElementById("day-content");

    dayTitle.textContent = dayData.title;
    dayContent.innerHTML = "";

    dayData.tasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        if (task.type === "emotionPuzzle") {
            const clueElement = document.createElement("p");
            clueElement.textContent = task.clue;
            taskElement.appendChild(clueElement);

            task.options.forEach(option => {
                const optionElement = document.createElement("button");
                optionElement.textContent = option;
                optionElement.onclick = () => selectEmotion(option);
                taskElement.appendChild(optionElement);
            });
        } else if (task.type === "letterPrompt") {
            const promptElement = document.createElement("p");
            promptElement.textContent = task.prompt;
            taskElement.appendChild(promptElement);

            const inputElement = document.createElement("textarea");
            inputElement.placeholder = "Write your letter here...";
            taskElement.appendChild(inputElement);
        } else if (task.type === "tokenTrade") {
            const currentTokensElement = document.createElement("p");
            currentTokensElement.textContent = `Current Tokens: ${task.currentTokens.join(", ")}`;
            taskElement.appendChild(currentTokensElement);

            task.tradeOptions.forEach(tradeOption => {
                const tradeElement = document.createElement("button");
                tradeElement.textContent = `Trade ${tradeOption.from.join(" + ")} for ${tradeOption.to}`;
                tradeElement.onclick = () => tradeTokens(tradeOption.from, tradeOption.to);
                taskElement.appendChild(tradeElement);
            });
        } else if (task.type === "reflection") {
            const questionElement = document.createElement("p");
            questionElement.textContent = task.question;
            taskElement.appendChild(questionElement);

            const inputElement = document.createElement("textarea");
            inputElement.placeholder = "Write your reflection here...";
            taskElement.appendChild(inputElement);
        }

        dayContent.appendChild(taskElement);
    });
}

function unlockNextDay() {
    if (currentDay < challenges.length) {
        currentDay++;
        renderDay(currentDay);
        localStorage.setItem("currentDay", currentDay);
    }
}

function selectEmotion(emotion) {
    console.log(`Selected emotion: ${emotion}`);
}

function tradeTokens(from, to) {
    console.log(`Traded ${from.join(" + ")} for ${to}`);
}

window.onload = () => {
    const savedDay = localStorage.getItem("currentDay");
    if (savedDay) {
        currentDay = parseInt(savedDay);
    }
    renderDay(currentDay);
};
