const quotes = [
  {
    quote: "변명 중에서도 가장 어리석고 못난 변명은 시간이 없다 라는 변명이다.",
    author : "에디슨",
  },
  {
    quote : "끝까지 해보기 전까지는 늘 불가능해 보입니다.",
    author : "넬슨 만델라",
  },
  {
    quote: "지식과 인격이 단절될 때 그 지식인은 가짜요, 위선자이다.",
    author: "법정",
  },
  {
    quote: "불가능은 없다.",
    author: "대한민국 해군 특수전 전단, UDT",
  },
  {
    quote: "위로받으려 하지 마라.",
    author: "구자철",
  },
  {
    quote: "지금의 삶을 다시 한번 똑같이 살아도 전혀 후회하지 않도록 살아라.",
    author: "니체",
  },
  {
    quote: "난 과거의 나하고만 비교한다. 난 항상 어제보다 나아지고 있기 때문에 행복하다.",
    author: "가오가이",
  },
  {
    quote: "안이하게 살고 싶으면 항상 군중속에 머물러 있으라. 군중에 섞여 너 자신을 잃어버려라",
    author: "니체",
  },
  {
    quote: "모든 기회에는 어려움이 있고, 모든 어려움에는 기회가 있다.",
    author: "시드로우 백스터",
  },
  {
    quote: `배우는게 적어도 도전할 수 있고
가진게 없어도 도전할 수 있고
잃을것이 많아도 도전할 수 있다.
모든 도전은 성공 못해도 괜찮다
그러나 계속하면 값진 결과가 있을 것이다.
우리가 할 것은 끊임없이 끊임없이 도전하는 것이다.`,
    author: "김병지",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
