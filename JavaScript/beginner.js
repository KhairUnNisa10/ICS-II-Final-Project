//JSON For Questions
const quizQues = [
	{
		question: "Q1: python is a:",
		a: "high level programming language",
		b: "assembly language",
		c: "low level programming language",
		ans: "ans1"
	},
	{
		question: "Q2: Who invented python:",
		a: "Guido van Rossum",
		b: "James gosling",
		c: "Rasmus lerdorf",
		ans: "ans1"
	},
	{
		question: "Q3: Which one is illegal variable name:",
		a: "MYVAR",
		b: "MY_var",
		c: "my var",
		ans: "ans3"
	},
	{
		question: "Q4: python code is run by: ",
		a: "compiler",
		b: "interpreter",
		c: "none of the above",
		ans: "ans2"
	},
	{
		question: "Q5: Can we use the “else” clause for loops",
		a: "yes",
		b: "no",
		c: "rarely",
		ans: "ans1"
	},
	{
		question: "Q6:  What is the correct syntax to output 'Hello World' in Python?",
		a: "p('Hello world')",
		b: "print('Hello world')",
		c: "echo'Hello world'",
		ans: "ans2"
	},
	{
		question: "Q7: How do you insert inline comments in python code?",
		a: "//this is a comment",
		b: "# this is a comment",
		c: "/*this is a comment*/",
		ans: "ans2"
	},
	{
		question: "Q8: How do you create a variable with the numeric value 5?",
		a: "x = int 5",
		b: "x = 5",
		c: "Both are correct",
		ans: "ans3"
	},
	{
		question: "Q9: What is the correct syntax to output the type of a variable or object in python?",
		a: "print(typeofx)",
		b: "print(type(x))",
		c: "print(typeOf(x))",
		ans: "ans2"
	},
	{
		question: "Q10: What is the correct way to create a function in python",
		a: "create myfunction():",
		b: "Function myfunction():",
		c: "def myFunction():",
		ans: "ans3"
	}
];

//Applying Questions & Answers
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
// const option4 = document.querySelector('#option4');
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
	// option4.innerHTML = quesList.d;
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