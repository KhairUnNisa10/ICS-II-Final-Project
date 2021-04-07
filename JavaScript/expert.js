//JSON For Questions
const quizQues = [
	{
		question: "Q1: In regards to separated value files such as .csv and .tsv, what is the delimiter?",
		a: "Any character such as the comma (,) or tab that is used to separate the row data",
		b: "Delimiters are not used in separated value files",
		c: "Any character such as the comma (,) or tab that is used to separate the column data.",
		d: "Anywhere the comma (,) character is used in the file",
		ans: "ans3",
	},

	{
		question: "Q2: Assume you have a file object my_data which has properly opened a separated value file that uses the tab character as the delimiter.\nWhat is the proper way to open the file using the Python csv module and assign it to the variable csv_reader?\nAssume that csv has already been imported.",
		a: "csv_reader = csv.reader(my_data, tab_delimited=True)",
		b: "csv_reader = csv.reader(my_data)",
		c: "csv_reader = csv.reader(my_data, delimiter='\t')",
		d: "csv_reader = csv.tab_reader(my_data)",
		ans: "ans3"
	},
	{
		question: "Q3: How many CPUs (or cores) will the Python threading library take advantage of simultaneously?",
		a: "All of the available CPU",
		b: "None",
		c: "Two",
		d: "One",
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
		question: "Q6: Which of the following HTTP requests are correct?\n HTTP bin is a simple HTTP request and response service. Assume that you won’t have any errors dealing with it.",
		a: "requests.put('https://httpbin.org/put', data={'key':'value'})",
		b: "requests.post('https://httpbin.org/post', data={'key':'value'})",
		c: "requests.delete('https://httpbin.org/delete')",
		d: "requests.tail('https://httpbin.org/tail')",
		ans: "ans3"
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
		question: "Q8: What will be the output of the following code?\ndef total(initial = 5, *num, **key):\n count = initialfor n in num: \n      count+=n \nfor k in key:\n      count+=key[k]\n   return count\nprint(total(100,2,3, clouds=50, stars=100))",
		a: "260",
		b: "160",
		c: "155",
		d: "255",
		ans:"ans4"
	},
	{
		question: "Q9: Discuss the outcome of the code?\ndef func1(n):	  if(n==0):\n    return 0\n   else:\n     return(n+func1(n-1))\ndef func2(n, result):\n   if(n==0):\n     return(result)\n   else:     return(func2(n-1, n+result))\n  print(func1(4))\nprint(func2(4,0))",
		a: "Func1 is tail recursion.",
		b: "Func1 and Func2 are tail recursions.",
		c: "Func2 is only tail recursion.",
		d: "Neither Func2 nor Func1 is tail recursion",
		ans: "ans2"
	},
	{
		question: "Q10: . Pylab is a package that combines _______,________&______ into a single namespace.",
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
	}
});