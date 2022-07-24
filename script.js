`use strict`;

const askBtn = document.querySelector(`.button`);
const answer = document.getElementById(`answer`);
const imageBall = document.getElementById(`8ball`);

answer.removeAttribute(`answer`);

const allAnswers = [
  `It is certain.`,
  `It is decidedly so.`,
  `Without a doubt.`,
  `Yes definitely.`,
  `You may rely on it.`,

  `As I see it, yes.`,
  `Most likely.`,
  `Outlook good.`,
  `Yes.`,
  `Signs point to yes.`,

  `Reply hazy, try again.`,
  `Ask again later.`,
  `Better not tell you now.`,
  `Cannot predict now.`,
  `Concentrate and ask again.`,

  `Don't count on it.`,
  `My reply is no.`,
  `My sources say no.`,
  `Outlook not so good.`,
  `Very doubtful.`,
];

let randomAnswer = allAnswers[Math.trunc(allAnswers.length * Math.random())];
console.log(randomAnswer);

askBtn.addEventListener(`click`, function () {
  prompt(`What would you like to ask the Magic 8-Ball?`);

  // need to change image source from old to new source.
  imageBall.src =
    "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png";
  // https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png
  answer.classList.add(`answer`);
  answer.textContent = randomAnswer;

  console.log(`Ask me anything`);
});
