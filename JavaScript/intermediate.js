//JSON For Questions
const quizQues = [
	{
		question: "Q1: How do you insert COMMENTS in Python code?",
		a: "'''",
		b: '"""',
		c: "a and b both",
		ans: "ans1"
	},
	{
		question: "Q2: What is the correct file extension for Python files?",
		a: ".py",
		b: ".Pyt",
		c: ".p",
		ans: "ans1"
	},
	{
		question: "Q3: How do you create a variable with the floating number 2.8?",
		a: "Float(2.8)",
		b: "Eval(2.8)",
		c: "Both",
		ans: "ans3"
	},
	{
		question: "Q4: Which statement is used to stop the loop in python.",
		a: "Break",
		b: "Pass",
		c: "Continue",
		ans: "ans1"
	},
	{
		question: "Q5: A tuple is a collection which is: ",
		a: "ordered and unchangeable",
		b: "Unordered",
		c: "Changeable",
		ans: "ans1"
	},
	{
		question: "Q6: Which function is correct to get the data type of any object.",
		a: "type(x)",
		b: "Data_type(x)",
		c: "data type(x)",
		ans: "ans1"
	},
	{
		question: "Q7: What is the Output of the following code.\n a = 'John' \nb = '8'\n Print (a+b)",
		a: "John 8",
		b: "Error",
		c: "John + 8",
		ans: "ans1"
	},
	{
		question: "Q8: In the Python statement x = a + 5 - b: \na and b are ___\n a + 5 - b is ___ ",
		a: "operands, an equation",
		b: "operators, a statement",
		c: "operands, an expression",
		ans: "ans3"
	},
	{
		question: "Q9: What is the value of the expression 100/ 25?",
		a: "4",
		b: "4.0",
		c: "both",
		ans: "ans2"
	},
	{
		question: "Q10: Is it safe to directly use the == operator to determine whether objects of type float are equal?",
		a: "Sure! Go for it.",
		b: "Incorrect",
		c: "Nope, not a good idea.",
		ans: "ans3"
	},
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
	}
});