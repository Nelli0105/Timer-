const miliSecond = document.querySelector("#miliSecond")
const second = document.querySelector("#second")
const minut = document.querySelector("#minut")
const g = document.getElementsByClassName("*")
const stopButt = document.querySelector(".stopButt")
const startButt = document.querySelector(".startButt")
const restartButt = document.querySelector(".restartButt")
const pauseButt = document.querySelector(".pauseButt")
const loopButt = document.querySelector(".loopButt")
const secAndMin = document.querySelector(".secAndMin")
const childs = document.querySelector(".childs")

let countOfSeconds = 0;
let countOfMinuts = 0;
let idTimer;
let ms = 0;
let afterPause = 1;

function timer(milSec , sec, min)
{
	if(ms<100)
	{
	++ms;
		if(ms<10)
		{
			milSec.innerHTML = "0" + ms;	
		}
		else 
		{
			milSec.innerHTML = ms;	
		}
	}
	else
	{	
		timerOfSMT(sec, sec.innerHTML);
		ms = 0;
		if(sec.innerHTML % 60 === 0)
		{
			timerOfSMT(min, min.innerHTML);	
		}
	}
}

function timerOfSMT(idSecOrMin, SMT)
{
	
	if(SMT < 59)
	{
		++SMT
		if(SMT<10)
		{	
			idSecOrMin.innerHTML = "0" + SMT ;	
		}
		else
		{
			idSecOrMin.innerHTML = SMT;		
		}
	}
	else
	{	
		idSecOrMin.innerHTML = "00";
	}
}

function callTime()
{
	idTimer = setInterval(function(){timer(miliSecond, second, minut)}, 10);
}

function restart()
{
	minut.innerHTML = "00";
	second.innerHTML = "00";
	miliSecond.innerHTML = "00";
	start()
}

function start()
{
	if(afterPause === 1)
	{
		callTime();
	}
	afterPause = 0;
}

function pause()
{
	clearInterval(idTimer)
	afterPause = 1;
}

function stop()
{
	clearInterval(idTimer)
	minut.innerHTML = "00";
	second.innerHTML = "00";
	miliSecond.innerHTML = "00";
	afterPause = 1;
	
}

startButt.addEventListener("click", start)
restartButt.addEventListener("click", restart)
pauseButt.addEventListener("click", pause)
stopButt.addEventListener("click", stop)

let indexOfLoop = 0;
loopButt.addEventListener("click", function()
{
	++indexOfLoop;
	let childOfLoop = document.createElement("div");
	childOfLoop.className = "allResultOfLoop"
	childs.insertBefore(childOfLoop, childs.childNodes[0]);
	childOfLoop.innerHTML = ` ${minut.innerHTML}:${second.innerHTML}.${miliSecond.innerHTML}`;

	let loopIndex = document.createElement("span")
	loopIndex.innerHTML = `loop ${indexOfLoop}`
	loopIndex.className = "allIndexesOfLoops";
	childOfLoop.insertBefore(loopIndex, childOfLoop.childNodes[0]);
	let y = document.querySelector(".allIndexesOfLoops");
	
})


console.log(g)