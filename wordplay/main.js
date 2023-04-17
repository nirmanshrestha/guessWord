const words = ["Nirman", "easy", "some", "lone", "here"];
const qnWord = document.querySelector(".word");
const showWord = document.querySelector(".showWord");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
let i = 0;
let score = 0;

const getWord = (c) => {
  let word = words[c];
  return word;
};

const randomized = (ct) => {
  let theWord = getWord(ct);

  let randomWord = theWord.split("");
  n = randomWord.length;
  for (let a = n - 1; a > 0; a--) {
    let j = Math.floor(Math.random() * (a + 1));
    let temp = randomWord[a];
    randomWord[a] = randomWord[j];
    randomWord[j] = temp;
  }
  randomWord.forEach((a) => {
    qnWord.innerHTML += `<button class ="options" value="${a}">${a} </button>`;
  });
  const btns = document.querySelectorAll(".options");

  console.log(btns);
  btns.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      if (input.innerHTML.length < btns.length) {
        input.innerHTML += ele.value;
        ele.setAttribute("disabled", "");
      }
    });
  });
};
randomized(0);

const checker = () => {
  let val;
  val = input.innerHTML;
  val.toString();
  let word = getWord(i);
  if (word == val) {
    score++;
    console.log(score);
    input.innerHTML = "";
    qnWord.innerHTML = "";
  } else {
    input.innerHTML = "";
    qnWord.innerHTML = "";
  }
  if (i <= 3) {
    i++;
    randomized(i);
  } else {
    qnWord.innerHTML = ` your score is ${score}`;
    btn.setAttribute("disabled", "");
  }
};
btn.addEventListener("click", checker);
