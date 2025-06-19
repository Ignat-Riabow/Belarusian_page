
const authorLinks = {
    "Цётка": "https://be.wikipedia.org/wiki/%D0%90%D0%BB%D0%B0%D1%96%D0%B7%D0%B0_%D0%9F%D0%B0%D1%88%D0%BA%D0%B5%D0%B2%D1%96%D1%87",
    "Ядвігін Ш.": "http://be.wikipedia.org/wiki/%D0%AF%D0%B4%D0%B2%D1%96%D0%B3%D1%96%D0%BD_%D0%A8.",
    "Янка Купала": "https://be.wikipedia.org/wiki/%D0%AF%D0%BD%D0%BA%D0%B0_%D0%9A%D1%83%D0%BF%D0%B0%D0%BB%D0%B0а",
    "Якуб Колас": "https://be.wikipedia.org/wiki/%D0%AF%D0%BA%D1%83%D0%B1_%D0%9A%D0%BE%D0%BB%D0%B0%D1%81",
    "Максім Багдановіч": "https://be-tarask.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BA%D1%81%D1%96%D0%BC_%D0%91%D0%B0%D0%B3%D0%B4%D0%B0%D0%BD%D0%BE%D0%B2%D1%96%D1%87",
    "Алесь Гарун": "https://be-tarask.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D1%81%D1%8C_%D0%93%D0%B0%D1%80%D1%83%D0%BD",
    "Максім Гарэцкі": "https://be-tarask.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BA%D1%81%D1%96%D0%BC_%D0%93%D0%B0%D1%80%D1%8D%D1%86%D0%BA%D1%96",
    "Змітрок Бядуля": "https://be.wikipedia.org/wiki/%D0%97%D0%BC%D1%96%D1%82%D1%80%D0%BE%D0%BA_%D0%91%D1%8F%D0%B4%D1%83%D0%BB%D1%8F",
    "Уладзімір Дубоўка": "https://be.wikipedia.org/wiki/%D0%A3%D0%BB%D0%B0%D0%B4%D0%B7%D1%96%D0%BC%D1%96%D1%80_%D0%94%D1%83%D0%B1%D0%BE%D1%9E%D0%BA%D0%B0",
    "Кандрат Крапіва": "https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BD%D0%B4%D1%80%D0%B0%D1%82_%D0%9A%D1%80%D0%B0%D0%BF%D1%96%D0%B2%D0%B0",
    "Міхась Зарэцкі": "https://be.wikipedia.org/wiki/%D0%9C%D1%96%D1%85%D0%B0%D1%81%D1%8C_%D0%97%D0%B0%D1%80%D1%8D%D1%86%D0%BA%D1%96",
    "Пятрусь Броўка": "https://be.wikipedia.org/wiki/%D0%9F%D1%8F%D1%82%D1%80%D1%83%D1%81%D1%8C_%D0%91%D1%80%D0%BE%D1%9E%D0%BA%D0%B0",
    "Аркадзь Куляшоў": "https://be-tarask.wikipedia.org/wiki/%D0%90%D1%80%D0%BA%D0%B0%D0%B4%D0%B7%D1%8C_%D0%9A%D1%83%D0%BB%D1%8F%D1%88%D0%BE%D1%9E",
    "Максім Танк": "https://be-tarask.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BA%D1%81%D1%96%D0%BC_%D0%A2%D0%B0%D0%BD%D0%BA",
    "Кузьма Чорны": "https://be-tarask.wikipedia.org/wiki/%D0%9A%D1%83%D0%B7%D1%8C%D0%BC%D0%B0_%D0%A7%D0%BE%D1%80%D0%BD%D1%8B",
    "Пімен Панчанка": "https://be.wikipedia.org/wiki/%D0%9F%D1%96%D0%BC%D0%B5%D0%BD_%D0%9F%D0%B0%D0%BD%D1%87%D0%B0%D0%BD%D0%BA%D0%B0",
    "Іван Шамякін": "https://be-tarask.wikipedia.org/wiki/%D0%86%D0%B2%D0%B0%D0%BD_%D0%A8%D0%B0%D0%BC%D1%8F%D0%BA%D1%96%D0%BD",
    "Андрэй Макаёнак": "https://be.wikipedia.org/wiki/%D0%90%D0%BD%D0%B4%D1%80%D1%8D%D0%B9_%D0%9C%D0%B0%D0%BA%D0%B0%D1%91%D0%BD%D0%B0%D0%BA",
    "Янка Брыль": "https://be.wikipedia.org/wiki/%D0%AF%D0%BD%D0%BA%D0%B0_%D0%91%D1%80%D1%8B%D0%BB%D1%8C",
    "Васіль Быкаў": "https://be.wikipedia.org/wiki/%D0%92%D0%B0%D1%81%D1%96%D0%BB%D1%8C_%D0%91%D1%8B%D0%BA%D0%B0%D1%9E",
    "Уладзімір Караткевіч": "https://be.wikipedia.org/wiki/%D0%A3%D0%BB%D0%B0%D0%B4%D0%B7%D1%96%D0%BC%D1%96%D1%80_%D0%9A%D0%B0%D1%80%D0%B0%D1%82%D0%BA%D0%B5%D0%B2%D1%96%D1%87",
    "Міхась Стральцоў": "https://be.wikipedia.org/wiki/%D0%9C%D1%96%D1%85%D0%B0%D1%81%D1%8C_%D0%A1%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D1%86%D0%BE%D1%9E",
    "Ніл Гілевіч": "https://be-tarask.wikipedia.org/wiki/%D0%9D%D1%96%D0%BB_%D0%93%D1%96%D0%BB%D0%B5%D0%B2%D1%96%D1%87",
    "Іван Чыгрынаў": "https://be.wikipedia.org/wiki/%D0%86%D0%B2%D0%B0%D0%BD_%D0%A7%D1%8B%D0%B3%D1%80%D1%8B%D0%BD%D0%B0%D1%9E",
    "Іван Навуменка": "https://be.wikipedia.org/wiki/%D0%86%D0%B2%D0%B0%D0%BD_%D0%9D%D0%B0%D0%B2%D1%83%D0%BC%D0%B5%D0%BD%D0%BA%D0%B0",
    "Рыгор Барадулін": "https://be.wikipedia.org/wiki/%D0%A0%D1%8B%D0%B3%D0%BE%D1%80_%D0%91%D0%B0%D1%80%D0%B0%D0%B4%D1%83%D0%BB%D1%96%D0%BD",
    "Алесь Разанаў": "https://be.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D1%81%D1%8C_%D0%A0%D0%B0%D0%B7%D0%B0%D0%BD%D0%B0%D1%9E",
    "Георгій Марчук": "https://be.wikipedia.org/wiki/%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D0%B9_%D0%9C%D0%B0%D1%80%D1%87%D1%83%D0%BA",
    "Аляксей Дудараў": "https://be.wikipedia.org/wiki/%D0%90%D0%BB%D1%8F%D0%BA%D1%81%D0%B5%D0%B9_%D0%94%D1%83%D0%B4%D0%B0%D1%80%D0%B0%D1%9E",
    "Міхась Башлакоў": "https://be.wikipedia.org/wiki/%D0%9C%D1%96%D1%85%D0%B0%D1%81%D1%8C_%D0%91%D0%B0%D1%88%D0%BB%D0%B0%D0%BA%D0%BE%D1%9E"
};const authors = [
    "Цётка", "Ядвігін Ш.", "Янка Купала", "Якуб Колас",
    "Максім Багдановіч", "Алесь Гарун", "Максім Гарэцкі", "Змітрок Бядуля",
    "Уладзімір Дубоўка", "Кандрат Крапіва", "Міхась Зарэцкі", "Пятрусь Броўка",
    "Аркадзь Куляшоў", "Максім Танк", "Кузьма Чорны", "Пімен Панчанка",
    "Іван Шамякін", "Андрэй Макаёнак", "Янка Брыль", "Васіль Быкаў",
    "Уладзімір Караткевіч", "Міхась Стральцоў", "Ніл Гілевіч", "Іван Чыгрынаў",
    "Іван Навуменка", "Рыгор Барадулін", "Алесь Разанаў", "Георгій Марчук",
    "Аляксей Дудараў", "Міхась Башлакоў"
];

const authorCaptions = {
    "Цётка": "Яе вочы выказваюць пяшчоту і адчувальнасць, быццам пераносяць у свет спакою",
    "Ядвігін Ш.": "Погляд, які прыцягвае сваёй яснасцю і сілай характару",
    "Янка Купала": "Вочы, што адлюстроўваюць светлы сум і нястрымнае імкненне да ісціны",
    "Якуб Колас": "Яго погляд спалучае цяпло і ўпэўненасць, ствараючы адчуванне надзейнасці",
    "Максім Багдановіч": "Гэта погляд творцы, які бачыць прыгажосць у самых простых рэчах",
    "Алесь Гарун": "Вочы, што адкрываюць перад вамі цэлую гісторыю, дзе мінулае сустракаецца з сучаснасцю",
    "Максім Гарэцкі": "Яго погляд, як люстэрка душы, перадае шчырасць і перажыванні",
    "Змітрок Бядуля": "Мяккі і поўны чароўнасці погляд, здольны абудзіць эмоцыі",
    "Уладзімір Дубоўка": "Праніклівы і ўдумлівы погляд, які бачыць глыбіню",
    "Кандрат Крапіва": "Яго вочы вострыя і іранічныя выпраменьваюць мудрасць і назіральнасць",
    "Міхась Зарэцкі": "Задумлівы погляд, які раскрывае таямніцы чалавечай душы",
    "Пятрусь Броўка": "Цёплы погляд, што адлюстроўвае надзею і мары",
    "Аркадзь Куляшоў": "Сканцэнтраваны і натхняльны погляд творцы",
    "Максім Танк": "Вочы, у якіх жывуць сіла і бясконцая адданасць роднай зямлі",
    "Кузьма Чорны": "Погляд, які насычаны эмоцыямі і глыбокай драмай",
    "Пімен Панчанка": "Мудры погляд, які поўны рытму і спакойнай сілы",
    "Іван Шамякін": "Моцны і нястрымны погляд, які заўсёды накіраваны ў будучыню",
    "Андрэй Макаёнак": "Скептычны, але цёплы погляд, які раскрывае сацыяльныя канфлікты",
    "Янка Брыль": "Мяккі погляд, што адлюстроўвае інтымныя аспекты жыцця",
    "Васіль Быкаў": "Праніклівы погляд, напоўнены адказнасцю і сілай",
    "Уладзімір Караткевіч": "Яго вочы захоўваюць таямніцы гісторыі і нацыянальнай гордасці",
    "Міхась Стральцоў": "Удумлівы і тонкі погляд, што шукае глыбіню",
    "Ніл Гілевіч": "Вочы, якія нясуць цяпло і клопат пра культуру народа",
    "Іван Чыгрынаў": "Сканцэнтраваны погляд даследчыка беларускай гісторыі",
    "Іван Навуменка": "Яго вочы выпраменьваюць інтэлект і цікавасць да чалавечай натуры",
    "Рыгор Барадулін": "Мудры погляд, які пранізаны народнай філасофіяй",
    "Алесь Разанаў": "Яркі і незалежны погляд, накіраваны на пошукі сэнсу",
    "Георгій Марчук": "Вочы, якія адлюстроўваюць сучаснасць і спадчыну",
    "Аляксей Дудараў": "Сканцэнтраваны і чуйны погляд, які поўны драматызму",
    "Міхась Башлакоў": "Мяккі і душэўны погляд,  напоўнены любоўю да роднай зямлі"
};

let score = 0;
let chosenAuthors = [];
let processedAuthors = 0;

function getRandomAuthors() {
    while (chosenAuthors.length < 10) {
        const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
        if (!chosenAuthors.includes(randomAuthor)) {
            chosenAuthors.push(randomAuthor);
        }
    }
}

function renderAuthors() {
    const container = document.getElementById("authorsContainer");
    if (!container) {
        console.error("Элемент authorsContainer не найден на странице.");
        return;
    }
    container.innerHTML = ""; 

    chosenAuthors.forEach((author) => {
        const authorBlock = document.createElement("div");
        authorBlock.className = "authorBlock";

        const authorPhoto = document.createElement("img");
        authorPhoto.className = "authorPhoto eyes"; 
        authorPhoto.src = `img/eyes/${author}.jpg`;
        authorPhoto.alt = author;

        const authorEyesText = document.createElement("p");
        authorEyesText.textContent = authorCaptions[author] || "Взгляд автора";
        authorEyesText.className = "author-eyes-text";

        const authorChoices = document.createElement("div");
        authorChoices.className = "author-choices";
        const options = getRandomOptions(author);

        options.forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.style.margin = "5px";
            button.onclick = () => handleChoice(option, author, authorBlock);
            authorChoices.appendChild(button);
        });

        const toggleButton = document.createElement("button");
        toggleButton.className = "toggleButton";
        toggleButton.textContent = "Вярнуцца на фото";
        toggleButton.style.display = "none"; 
        toggleButton.onclick = () => togglePhotoView(authorPhoto, toggleButton);

        const resultIcon = document.createElement("span");
        resultIcon.className = "resultIcon";

        authorBlock.appendChild(authorPhoto);
        authorBlock.appendChild(authorEyesText);
        authorBlock.appendChild(authorChoices);
        authorBlock.appendChild(toggleButton);
        authorBlock.appendChild(resultIcon);

        container.appendChild(authorBlock);
    });
}



function getRandomOptions(correctAuthor) {
    const options = [correctAuthor];
    while (options.length < 3) {
        const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
        if (!options.includes(randomAuthor)) {
            options.push(randomAuthor);
        }
    }
    return options.sort(() => Math.random() - 0.5);
}

function handleChoice(selectedAuthor, correctAuthor, authorBlock) {
    const authorPhoto = authorBlock.querySelector(".authorPhoto");
    const authorEyesText = authorBlock.querySelector(".author-eyes-text");
    const toggleButton = authorBlock.querySelector(".toggleButton");
    const resultIcon = authorBlock.querySelector(".resultIcon");

    if (selectedAuthor === correctAuthor) {
        resultIcon.textContent = "✔️";
        resultIcon.style.color = "green";
        score += 1;
    } else {
        resultIcon.textContent = "❌";
        resultIcon.style.color = "red";
    }

    resultIcon.style.display = "inline-block";

    const authorLink = authorLinks[correctAuthor] || "#"; 
    authorEyesText.innerHTML = `<a href="${authorLink}" target="_blank">${correctAuthor}</a>`; 
    authorEyesText.classList.add("author-link");

    authorPhoto.src = `img/full/${correctAuthor}.jpg`;
    authorPhoto.classList.remove("eyes");
    authorPhoto.classList.add("full");

    setTimeout(() => {
        authorPhoto.classList.add("visible");
    }, 10);

    toggleButton.style.display = "inline-block";

    processedAuthors += 1;

    if (processedAuthors === chosenAuthors.length) {
        showFinalScore();
    }
}

function showFinalScore() {
    const finalScoreContainer = document.getElementById("finalScore");
    if (finalScoreContainer) {
        finalScoreContainer.textContent = `Гульня завершана! Ваш фінальны лік: ${score} з ${chosenAuthors.length}`;
        finalScoreContainer.style.display = "block";
    } else {
        console.error("Элемент finalScore не найден на странице.");
    }
}

function togglePhotoView(photoElement, toggleButton) {
    const isEyesPhoto = photoElement.classList.contains("eyes");
    if (isEyesPhoto) {
        photoElement.src = photoElement.src.replace("eyes", "full");
        photoElement.classList.remove("eyes");
        photoElement.classList.add("full");
        toggleButton.textContent = "Вярнуцца на фото";
    } else {
        photoElement.src = photoElement.src.replace("full", "eyes");
        photoElement.classList.remove("full");
        photoElement.classList.add("eyes");
        toggleButton.textContent = "Вярнуцца на фото";
    }
}

getRandomAuthors();
renderAuthors();
