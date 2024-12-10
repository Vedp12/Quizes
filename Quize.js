//! Declare a variable
const Quize_form = document.querySelector("#createQuizForm");
const Quize_Container = document.querySelector("#Quiz_container");
const Quize_Addquestion = document.querySelector("#addQuestionBtn");
// after Process
const Quize_takeQuize = document.querySelector("#takeQuizContainer");
const Quize_submitbtn = document.querySelector("#submitQuizBtn");
const Quize_Result = document.querySelector("#quizResult");

Quize_Addquestion.addEventListener("click", () => {
  const Questions_box = document.createElement("div");
  Questions_box.id = "Que_box";

  //? Add Ques
  const Que_inp = document.createElement("input");
  Que_inp.placeholder = "Enter your Qouestion ";
  Que_inp.style.height = "30px";
  Que_inp.style.width = "40%";
  Que_inp.style.borderRadius = "8px";
  Que_inp.style.margin = "12px";

  //? Add options For Quize
  const opt1 = document.createElement("input");
  const opt2 = document.createElement("input");
  const opt3 = document.createElement("input");
  const opt4 = document.createElement("input");

  opt1.className = "Ques_opt";
  opt2.className = "Ques_opt";
  opt3.className = "Ques_opt";
  opt4.className = "Ques_opt";

  const style = document.querySelector("style");
  style.innerHTML= `
  .Ques_opt{
    }
  `
  //? Add correct  Ans
  //   const Que_Correct_ans = document.createElement("input");
  //   Que_Correct_ans.placeholder

  Questions_box.appendChild(Que_inp);
  Quize_Container.appendChild(Questions_box);
});
