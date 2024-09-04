const quotes1 = [
    "Proszę zwrócić uwagę, że",
    "I tak mam trzy razy mniej czasu, więc proszę mi pozwolić powiedzieć:",
    "Państwo się śmieją, ale",
    "Ja nie potrzebowałem edukacji seksualnej, żeby wiedzieć, że",
    "No niestety:",
    "Gdzie leży przyczyna problemu? Ja państwu powiem:",
    "Państwo chyba nie widzą, że",
    "Oświadczam kategorycznie:",
    "Powtarzam:",
    "Powiedzmy to z całą mocą:",
    "W Polsce dzisiaj",
    "Państwo sobie nie zdają sprawy, że",
    "To ja przepraszam bardzo:",
    "Otóż nie wiem, czy pan wie, że",
    "Yyyyy...",
    "Ja chcę powiedzieć jedną rzecz:",
    "Trzeba powiedzieć jasno:",
    "Jak powiedział wybitny krakowianin Stanisław Lem,",
    "Proszę mnie dobrze zrozumieć:",
    "Ja chciałem państwu przypomnieć, że",
    "Niech państwo nie mają złudzeń:",
    "Powiedzmy to wyraźnie:"
];

const quotes2 = [
    "właściciele niewolników",
    "związkowcy",
    "trockiści",
    "tak zwane dzieci kwiaty",
    "rozmaici urzędnicy",
    "federasi",
    "etatyści",
    "ci durnie i złodzieje",
    "ludzie wybrani głosami meneli spod budki z piwem",
    "socjaliści pobożni",
    "socjaliści bezbożni",
    "komuniści z krzyżem w zębach",
    "agenci obcych służb",
    "członkowie Bandy Czworga",
    "pseudo-masoni z Wielkiego Wschodu Francji",
    "przedstawiciele czerwonej hołoty",
    "ci wszyscy (tfu!) geje",
    "funkcjonariusze reżymowej telewizji",
    "tak zwani ekolodzy",
    "ci wszyscy (tfu!) demokraci",
    "agenci bezpieki",
    "feminazistki"
];

const quotes3 = [
    "po przeczytaniu Manifestu komunistycznego",
    "którymi się brzydzę",
    "których nienawidzę",
    "z okolic „Gazety Wyborczej”",
    "czyli taka żydokomuna",
    "których miejsce w którymś kraju jest w więzieniu",
    "na polecenie Brukseli",
    "posłusznie",
    "bezmyślnie",
    "z krzyżem w zębach",
    "na pieniądze",
    "zgodnie z ideologią LGBTQZ",
    "za wszelką cenę",
    "zupełnie bezkarnie",
    "całkowicie bezczelnie",
    "o poglądach na lewo od komunizmu",
    "celowo i świadomie",
    "z premedytacją",
    "od czasów Okrągłego Stołu",
    "w ramach postępu"
];

const quotes4 = [
    "udają homoseksualistów",
    "niszczą rodzinę",
    "idą do polityki",
    "zakazują góralom robienia oscypków",
    "organizują paraolimpiady",
    "wprowadzają ustrój, w którym raz na cztery lata można wybrać sobie pana",
    "ustawiają fotoradary",
    "wprowadzają dotacje",
    "wydzielają buspasy",
    "podnoszą wiek emerytalny",
    "rżną głupa",
    "odbierają dzieci rodzicom",
    "przygotowują absurdalne przepisy podatkowe",
    "umieszczają dzieci w szkołach koedukacyjnych",
    "wprowadzają parytety",
    "nawołują do podniesienia podatków",
    "próbują wyrzucić kierowców z miast",
    "próbują skłócić Polskę z Rosją",
    "głoszą brednie o globalnym ociepleniu",
    "zakazują posiadania broni",
    "nie dopuszczają prawicy do władzy",
    "uczą dzieci homoseksualizmu"
];

const quotes5 = [
    "żeby poddawać wszystkich tresurze",
    "bo taka jest ich natura",
    "bo chcą wszystko kontrolować",
    "bo nie rozumieją, że socjalizm nie działa",
    "żeby wesprzeć zaplanowany socjalizm",
    "dokładnie tak jak tow. Janosik",
    "zamiast pozwolić ludziom zarabiać",
    "żeby wyrwać kobiety z domu",
    "bo to jest w interesie tak zwanych ludzi pracy",
    "zamiast podwyższać dochody konsumentowi",
    "żeby mogła się mieć dobrze",
    "żeby obniżyć podatki",
    "żeby zmniejszyć podatki",
    "żeby dzieci nie przestały być agresywne",
    "bo dzięki temu mogą brać łapówki",
    "bo dzięki temu mogą kraść",
    "bo dostają za to pieniądze",
    "bo tak się uczy w państwowej szkole",
    "bo bez tego (tfu!) demokracja nie może istnieć",
    "bo głupich jest więcej niż mądrych",
    "bo chcą tworzyć raj na ziemi",
    "bo chcą niszczyć cywilizację białego człowieka"
];

const quotes6 = [
    "co ma zresztą tyle samo sensu, co zawody w szachach dla debili.",
    "co zostało dokładnie zaplanowane w Magdalence przez śp. generała Kiszczaka.",
    "i trzeba być idiotą, żeby ten system popierać.",
    "co dowodzi, że wybrakowano nie tych, co trzeba.",
    "żeby wreszcie zapanował socjalizm.",
    "a zwykłym ludziom wmawia się coś „władza”.",
    "cóż: chcieliście (tfu!) demokracji, no to macie.",
    "żeby wyrwać kobiety z domu.",
    "bo jest w interesie tak zwanych ludzi pracy.",
    "podczas gdy normalni ludzie dojadają dziwactw dziwaków.",
    "co w wieku XIX można było nie mieć.",
    "ale to jest argument dla idioty.",
    "selekcja naturalna jest czymś dobrym.",
    "– dlatego trzeba przywrócić normalność.",
    "a we Wspólnej Polsce pójdą siedzieć.",
    "przez kolejne kadencje.",
    "o czym się nie mówi.",
    "i właśnie dlatego Europa umiera.",
    "ale przyjdą muzułmanie i zrobią porządek.",
    "– tak samo zresztą jak za Hitlera.",
    "– proszę zobaczyć, co się dzieje na Zachodzie, jeśli mi państwo nie wierzą.",
    "co lat temu sto nikomu nie przyszłoby do głowy."
];

const allQoutes = [quotes1, quotes2, quotes3, quotes4, quotes5, quotes6];

let generateButton = document.querySelector("#generate");
console.log(generateButton);
generateButton.addEventListener("click", () => {

    for (let i = 0; i < allQoutes.length; i++) {
        const randomIndex = Math.floor(Math.random() * allQoutes[i].length);
        let qouteArticle = document.getElementById("quote"+(i+1));
        qouteArticle.textContent = allQoutes[i][randomIndex];
        console.log("balls");
        console.log("balls2");
        console.log("balls3");
    }

});