{
        name: "Меркурій",
        emoji: "🪐",
        fact: "Найближча до Сонця планета."
    },
    {
        name: "Венера",
        emoji: "♀️",
        fact: "Найгарячіша планета Сонячної системи."
    },
    {
        name: "Марс",
        emoji: "🔴",
        fact: "Червона планета з найвищою горою."
    },
    {
        name: "Юпітер",
        emoji: "🌀",
        fact: "Найбільша планета — газовий гігант."
    },
    {
        name: "Сатурн",
        emoji: "💍",
        fact: "Має найкрасивіші кільця з льоду."
    },
    {
        name: "Нептун",
        emoji: "🔵",
        fact: "Далека блакитна крижана планета."
    }
];

const countries = [
    {
        flag: "🇺🇦",
        name: "Україна",
        fact: "Найбільша країна повністю в Європі. Смачний борщ!"
    },
    {
        flag: "🇯🇵",
        name: "Японія",
        fact: "Країна вишневого цвіту та понад 6800 островів."
    },
    {
        flag: "🇧🇷",
        name: "Бразилія",
        fact: "Тут росте найбільший ліс — Амазонія."
    },
    {
        flag: "🇫🇷",
        name: "Франція",
        fact: "Ейфелева вежа, круасани та мистецтво."
    },
    {
        flag: "🇪🇬",
        name: "Єгипет",
        fact: "Стародавні піраміди й велика річка Ніл."
    },
    {
        flag: "🇦🇺",
        name: "Австралія",
        fact: "Кенгуру, коали та Великий бар'єрний риф."
    },
    {
        flag: "🇨🇦",
        name: "Канада",
        fact: "Кленовий сироп і полярні сяйва."
    },
    {
        flag: "🇮🇸",
        name: "Ісландія",
        fact: "Земля вогню, льоду та гейзерів."
    }
];

const sea = [
    {
        emoji: "🐠",
        name: "Рибка-клоун",
        fact: "Живе серед щупалець актиній — вони її захищають."
    },
    {
        emoji: "🐙",
        name: "Восьминіг",
        fact: "Має три серця і дуже розумний!"
    },
    {
        emoji: "🐢",
        name: "Морська черепаха",
        fact: "Може прожити понад 100 років."
    },
    {
        emoji: "🐬",
        name: "Дельфін",
        fact: "Спілкується свистом і любить гратися."
    },
    {
        emoji: "🐳",
        name: "Синій кит",
        fact: "Найбільша тварина на планеті — до 30 метрів."
    },
    {
        emoji: "🦑",
        name: "Кальмар",
        fact: "Плаває реактивно — випускає струмінь води."
    },
    {
        emoji: "🦀",
        name: "Крабик",
        fact: "Ходить бочком."
    },
    {
        emoji: "🐡",
        name: "Риба-фугу",
        fact: "Надувається кулькою, коли злякається."
    }
];

function createCard(emoji, name, fact) {
    return `
        <div class="card">
            <div class="emoji">${emoji}</div>
            <h3>${name}</h3>
            <p>${fact}</p>
        </div>
    `;
}

document.getElementById("planets-grid").innerHTML =
    planets.map(item => createCard(item.emoji, item.name, item.fact)).join("");

document.getElementById("countries-grid").innerHTML =
    countries.map(item => createCard(item.flag, item.name, item.fact)).join("");

document.getElementById("sea-grid").innerHTML =
    sea.map(item => createCard(item.emoji, item.name, item.fact)).join("");

const starsEl = document.getElementById("stars");

if (starsEl) {
    for (let i = 0; i < 80; i++) {
        const star = document.createElement("span");
        star.className = "star";

        const size = Math.random() * 2 + 1;

        star.style.cssText = `
            top:${Math.random() * 100}%;
            left:${Math.random() * 100}%;
            width:${size}px;
            height:${size}px;
            animation-delay:${Math.random() * 3}s;
        `;

        starsEl.appendChild(star);
    }
}

const bubblesEl = document.getElementById("bubbles");

if (bubblesEl) {
    for (let i = 0; i < 18; i++) {
        const bubble = document.createElement("span");
        bubble.className = "bubble";

        const size = Math.random() * 20 + 8;
left:${Math.random() * 100}%;
            width:${size}px;
            height:${size}px;
            animation-duration:${Math.random() * 6 + 6}s;
            animation-delay:${Math.random() * 6}s;
        `;

        bubblesEl.appendChild(bubble);
    }
}
