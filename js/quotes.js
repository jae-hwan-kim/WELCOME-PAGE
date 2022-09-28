const quotes = [
    {
        quote: "타인이 나를 비추는 거울이 듯, 나도 타인을 비추는 거울이다",
        author: "jaekim",
    },
    {
        quote: "기대하기보다 너 스스로에 최선을 다하라",
        author: "jaekim",
    },
    {
        quote: "너가 더욱 너다워지는 사람과 함께 해라",
        author: "jaekim",
    },
    {
        quote: "틀린 건 없다. 다를 뿐이다",
        author: "jaekim",
    },
    {
        quote: "아무도 너를 믿지 않아도, 고개 들고 다닐 수 있는 의지를 길러라",
        author: "jaekim",
    },
    {
        quote: "인생에서 도전은 기본이다",
        author: "jaekim",
    },
    {
        quote: "기대의 끝은 비난과 질타가 아닌, 응원과 위로가 되길...",
        author: "jaekim",
    },
    {
        quote: "단기적 부정과 장기적 긍정, 결국 긍정이어라",
        author: "jaekim",
    },
    {
        quote: "'나는 좋은 사람일까?'에 대한 답은 '내'가 아닌 '당신'이 하는 것",
        author: "jaekim",
    },
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const toDayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDayQuote.quote;
author.innerText = toDayQuote.author;
