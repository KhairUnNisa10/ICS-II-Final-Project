//JSON For Questions
const quizQues = [
	{
		question: "Q1: Select which is True for python function",
		a: "A function only executes when it is called",
		b: "A function can take an unlimited number of arguments",
		c: "A python function can return multiple values",
		d: "All the above options are correct",
		ans: "ans4",
	},

	{
		question: "Q2: PEP is",
		a: "the set of rules that specify how to format python code for maximum readability",
		b: "readability does not matter",
		c: "a method",
		d: "None of these",
		ans: "ans1"
	},
	{
		question: "Q3: What is the maximum possible length of an identifier?",
		a: "31 character",
		b: "63 character",
		c: "79 character",
		d: "None of the above",
		ans: "ans4"
	},
	{
		question: "Q4: Which statement best defines “concurrency”?",
		a: "Making the correct data structure for a problem",
		b: "Fake money",
		c: "Doing things one-at-a-time",
		d: "Doing multiple things simultaneously",
		ans: "ans4"
	},
	{
		question: "Q5: In a python program, a control structure:",
		a: "Defines program specific data structure",
		b: "Directs the order of execution of the statements in the program",
		c: "Manages the input and output of control characters",
		d: "none of the above",
		ans: "ans2"
	},
	{
		question: "Q6: What are the generators in python?",
		a: "Functions that return an iterable set of items are called generators",
		b: "Functions in which variables are already assigned",
		c: "Functions that generates its own argument",
		d: "None of these",
		ans: "ans1"
	},
	{
		question: "Q7: Which one is not data structure",
		a: "Queue",
		b: "Linked list",
		c: "Graph",
		d: "set",
		ans: "ans4"
	},
	{
		question: "Q8: the dir() function is used to",
		a: "display the defined symbols",
		b: "display the documentation string",
		c: "delete current iteration",
		d: "None of these",
		ans:"ans1"
	},
	{
		question: "Q9: python packages are:",
		a: "namespaces containing multiple modules",
		b: "naming convention",
		c: "signifies the variable type",
		d: "all of them",
		ans: "ans1"
	},
	{
		question: "Q10: Pylab is a package that combines __ , __ & __ into a single namespace.",
		a: "Numpy, scipy & matplotlib",
		b: "Numpy, matplotlib & pandas",
		c: "Numpy, pandas & matplotlib",
		d: "Numpy, scipy & pandas",
		ans: "ans1"
	},
];

//Applying Questions & Answers
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const answers = document.querySelectorAll('.ans');

//Score Board
let score = 0;
const showScore = document.querySelector('#score-container');


//Load Question
let quesCount = 0;

function loadQuestion(){
	const quesList = quizQues[quesCount];

	question.innerHTML = quesList.question;

	option1.innerHTML = quesList.a;
	option2.innerHTML = quesList.b;
	option3.innerHTML = quesList.c;
	option4.innerHTML = quesList.d;
}

loadQuestion();

//Checking the Correct answer
function getCheckAns(){
	let ans;
	answers.forEach((currAnsElem) => {
		if(currAnsElem.checked){
			ans = currAnsElem.id;
		}
	});

	return ans;
};

//Deselecting the default check
function deselect(){
	answers.forEach((currAnsElem) => currAnsElem.checked = false);
}

//Adding Functionality to the Submit Button
const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
	const checkedAns = getCheckAns();
	console.log(checkedAns);

	if(checkedAns === quizQues[quesCount].ans){
		score++;
	};

	quesCount++;
	deselect();

	if(quesCount < quizQues.length){
		loadQuestion();
	}else{
		//Displaying the Scoreboard
		showScore.innerHTML = `
			<img src="icon.png" alt="Prize Icon" height="50px" />
			<h3>You scored ${score}/${quizQues.length}</h3>
			<button class="btn play" onclick="location.href = 'start.html';">Play Again</button>
		`;

		showScore.classList.remove('score-area');
		document.getElementById("score-container").style.background = "#580f68";
		document.getElementById("score-container").style.paddingTop = "40px";
		document.getElementById("score-container").style.paddingBottom = "40px";
		document.getElementById("score-container").style.paddingRight = "80px";
		document.getElementById("score-container").style.paddingLeft = "80px";
		document.getElementById("score-container").style.marginTop = "30px";
		document.getElementById("hide").style.display = "none";
	}
});