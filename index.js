var score = 0;
var selfVar= 1;
var ageVar=1;
var genVar=1;
var lossVar=2;
var set = set1;
var i=0;



var set1=["How often have you been bothered by trouble failing or staying asleep, or sleeping too much ? ","How often have you had little interest or pleasure in doing things? ","How often have you been bothered by feeling down, depressed or hopeless? ","How often have you been bothered by poor apetite or overeating? ","How often have you been bothered by trouble concentrating on things, such as watching television? ","How often you feel struggling in school and tend to think it is because you are not smart enough? ","How often have you been bothered by having trouble relaxing after studies? ","Have you felt like an anxiety attack ( sudden feeling of fear or panic ) ?","How often you feel like you don't deserve to be loved? ","How many times have you been bothered by getting easily annoyed or irritable? " ];

var set2=["How often have your loved one been bothered by trouble failing or staying asleep, or sleeping too much ? ","How often have your loved one had little interest or pleasure in doing things? ","How often have your loved one been bothered by feeling down, depressed or hopeless? ","How often have your loved one been bothered by poor apetite or overeating? ","How often have your loved one been bothered by trouble concentrating on things, such as watching television? ","How often your loved one feel struggling in school and tend to think it is because your loved one is not smart enough? ","How often have your loved one been bothered by having trouble relaxing after studies? ","Have your loved one felt like an anxiety attack ( sudden feeling of fear or panic ) ?","How often your loved one feel like he or she don't deserve to be loved? ","How many times have your loved one been bothered by getting easily annoyed or irritable? "];

var set3=["How often have you been bothered by trouble failing or staying asleep, or sleeping too much ? ","How often have you had little interest or pleasure in doing things? ","How often have you been bothered by feeling down, depressed or hopeless? ","How often have you been bothered by poor apetite or overeating? ","How often have you been bothered by trouble concentrating on things, such as reading the newspaper or watching television? ","How often you feel struggling in work and tend to think it is because you are not smart enough? ","How often have you been bothered by having trouble relaxing after work? ","Have you felt like an anxiety attack ( sudden feeling of fear or panic ) ?","How often you feel like you don't deserve to be loved or don't have someone who can love you? ","How many times have you been bothered by getting easily annoyed or irritable? " ];

var set4=["How often have your loved one been bothered by trouble failing or staying asleep, or sleeping too much ? ","How often have your loved one had little interest or pleasure in doing things? ","How often have your loved one been bothered by feeling down, depressed or hopeless? ","How often have your loved one been bothered by poor apetite or overeating? ","How often have your loved one been bothered by trouble concentrating on things, such as reading the newspaper or watching television? ","How often your loved one feel struggling in work and tend to think it is because your loved one is not smart enough? ","How often have your loved one been bothered by having trouble relaxing after work? ","Have your loved one felt like an anxiety attack ( sudden feeling of fear or panic ) ?","How often your loved one feel like he or she don't deserve to be loved or don't have someone who can love him or her? ","How many times have your loved one been bothered by getting easily annoyed or irritable? "];

var set5=["How often have you been bothered by trouble failing or staying asleep, or sleeping too much ? ","How often have you had little interest or pleasure in doing things? ","How often have you been bothered by feeling down, depressed or hopeless? ","How often have you been bothered by poor apetite or overeating? ","How often have you been bothered by trouble concentrating on things, such as reading the newspaper? ","How often you feel struggling in work or daily visiting places and tend to think it is because you are not smart enough? ","How often have you been bothered by having trouble relaxing after work or anytime? ","Have you felt like an anxiety attack ( sudden feeling of fear or panic ) ?","How often you feel like you don't have someone who can love you? ","How many times have you been bothered by getting easily annoyed or irritable? " ];

var set6=["How often have your loved one been bothered by trouble failing or staying asleep, or sleeping too much ? ","How often have your loved one had little interest or pleasure in doing things? ","How often have your loved one been bothered by feeling down, depressed or hopeless? ","How often have your loved one been bothered by poor apetite or overeating? ","How often have your loved one been bothered by trouble concentrating on things, such as reading the newspaper? ","How often your loved one feel struggling in work or daily visiting places and tend to think it is because he or she is not smart enough? ","How often have your loved one been bothered by having trouble relaxing after work or anytime? ","Have your loved one felt like an anxiety attack ( suddenly feeling fear or panic ) ?","How often your loved one feel like he or she don't have someone who can love him or her? ","How many times have your loved one been bothered by getting easily annoyed or irritable? " ];


function shown(){
	var disc = '<div id="main2" style="margin:8%;padding-right: 2%;padding-left: 2%;padding-top: 3%;padding-bottom: 1%;background-color: #ffffff62;"><figure class="text-center"><blockquote class="blockquote"><p class="display-7">Health is Wealth! <br>Often we have heard this statement that if you are healthy then no one can stop you from being wealthy. We always follow this statement but often we forget that health is not sticked to physical health only, but this is not at all true, mental health is also important. Infact, mental health is the most important part and cant be ignored at any cost! Sometimes we dont even get to know that we our suffering from this disease. Also when people get to know about this disease they try to hide this, because of society fears. But its completely normal or ok to have depression or similars. Its like any other disease, which needs to be detected at earlier stages to avoid any hazardous conditions! For that we first need to do some screening tests at our level.This is a small test designed for self screening of depression. It hardly takes less than 10 minutes to complete this test but can become a life saviour for you or your closed ones! Its an anonymous test and data is asked just for evaluation purpose only. If you are 16 or above you can take this test!</p></blockquote><figcaption class="blockquote-footer" >Creativstan<cite title="Source Title"> By Sharduli Pandey</cite></figcaption><div class="alert alert-primary d-flex align-items-center" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">		<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>	  </svg><div>This is just a small self-screening and to get the best treatment, Doctor Consultation is advisable!</div></div><a class="btn btn-outline-warning btn-lg" href="info.html" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Click here to start the screening test!">Start The Test</a></figure></div>';
	document.getElementById('all').innerHTML = disc;
}


function never(num){
	if(i<9){
	i = i+1;
	showQues(i,num);}
	else{
		results();
	}
}
function some(num){
	score += 1;
	if(i<9){
	i = i+1;
	showQues(i,num);}
	else{
		results();
	}
}
function half(num){
	score+= 3;
	if(i<9){
	i = i+1;
	showQues(i,num);}
	else{
		results();
	}
}
function always(num){
	score += 5;
	if(i<9){
	i = i+1;
	showQues(i,num);}
	else{
		results();
	}
}
function setOne(dig){
	var template = '<blockquote class="blockquote"><p class="display-6">'+set1[dig]+'</p></blockquote>';
	document.getElementById('ques').innerHTML = template;
	return;
}
function setTwo(dig){
	var template = '<blockquote class="blockquote"><p class="display-6">'+set2[dig]+'</p></blockquote>';
	document.getElementById('ques').innerHTML = template;
	return;
 }
function setThree(dig){
	var template = '<blockquote class="blockquote"><p class="display-6">'+set3[dig]+'</p></blockquote>';
	document.getElementById('ques').innerHTML = template;
	return;
 }
 function setFour(dig){
	var template = '<blockquote class="blockquote"><p class="display-6">'+set4[dig]+'</p></blockquote>';
	document.getElementById('ques').innerHTML = template;
	return;
 }
 function setFive(dig){
	var template = '<blockquote class="blockquote"><p class="display-6">'+set5[dig]+'</p></blockquote>';
	document.getElementById('ques').innerHTML = template;
	return;
 }
 function setSix(dig){
	var template = '<blockquote class="blockquote"><p class="display-6">'+set6[dig]+'</p></blockquote>';
	document.getElementById('ques').innerHTML = template;
	return;
 }


function showQues(j,n){
	if(n==1){
		setOne(j);
	}
	else if(n==2){
		setTwo(j);
	}
	else if(n==3){
		setThree(j);
	}
	else if(n==4){
		setFour(j);
	}
	else if(n==5){
		setFive(j);
	}
	else if(n==6){
		setSix(j);
	}
	var buttonShow = '<div class="d-grid gap-2">'+'<button class="btn btn-primary" type="button"  onclick="never('+n+')">Never</button>'+'<button class="btn btn-primary" type="button" onclick="some('+n+')">Sometimes</button>'+'<button class="btn btn-primary" type="button" onclick="half('+n+')">Half Of The Time</button>'+'<button class="btn btn-primary" type="button" onclick="always('+n+')">Everytime</button>'+'</div>';
	document.getElementById('ques').innerHTML += buttonShow;

}

function selfs(val){
	selfVar=val.value;

}


function ages(age){
	ageVar=age.value;

}

function gens(gen){
	genVar=gen.value;


}

function loss(los){
	lossVar = los.value;

}



function start(){
if(genVar==2){
	score += 1;
}
else if(genVar==3){
	score += 2;
}
if(lossVar==1){
	score +=3;
}
if(ageVar==1){
	if(selfVar==1){
		document.getElementById('ques').innerHTML = "";
		showQues(i,1);
	}else if(selfVar==2){
		document.getElementById('ques').innerHTML = "";
		showQues(i,2);
	}
}
else if(ageVar==2){
	if(selfVar==1){
		document.getElementById('ques').innerHTML = "";
		showQues(i,3);
	}else if(selfVar==2){
		document.getElementById('ques').innerHTML = "";
		showQues(i,4);
	}
}
else if(ageVar==3){
	if(selfVar==1){
		document.getElementById('ques').innerHTML = "";
		showQues(i,5);
	}else if(selfVar==2){
		document.getElementById('ques').innerHTML = "";
		showQues(i,6);
	}
}


}


function endMsg(advise){
	var temp = '<div class="alert alert-success" role="alert" style="text-align:left;">  <h4 class="alert-heading">Score After Evaluation : '+score+' </h4>  <p>'+advise+'</p>  <hr>  <p class="mb-0">Happy Mental Health </p></div><div class="alert alert-danger d-flex align-items-center" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">		<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>	  </svg><div>This is just a small self-screening and to get the best treatment, Doctor Consultation is advisable!</div></div><br><a class="btn btn-outline-dark btn-lg" href="info.html" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Click here to start the screening test again!">Take The Test Again</a><span> </span><a class="btn btn-outline-dark btn-lg" href="First Page.html" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Click here to go to home page!">Go To Home Page</a>';
	document.getElementById('ques').innerHTML += temp;
	
}

function results(){
	alert('You have successfully answered all the questions!!')
    document.getElementById('ques').innerHTML = "";
	var templates;
	if(score>=40){
		templates = '<div class="alert alert-danger" role="alert"><strong>You are at a very High Risk !</strong></div>';
		document.getElementById('ques').innerHTML += templates;
		endMsg('Doctor consultation is highly recommended that too ASAP! Talk with your family! And remember you are not alone!');
	}
	else if(score>=27 && score<40){
		templates = '<div class="alert alert-danger" role="alert"><strong>You are at a High Risk !</strong></div>';
		document.getElementById('ques').innerHTML += templates;
		endMsg('Doctor Consultation is advisable! Talk with your family! And remember you are not alone!');
		
	}
	else if(score>=16 && score<27){
		templates = '<div class="alert alert-primary" role="alert"><strong>You are at a Medium Risk !</strong></div>';
		document.getElementById('ques').innerHTML += templates;
		endMsg('Talk with your Family! You can consult your Doctor if any of the above symptoms continues or become frequent!');
		
	}
	else if(score>=6 && score<16){
		templates = '<div class="alert alert-primary" role="alert"><strong>You are at Less Risk !</strong></div>';
		document.getElementById('ques').innerHTML += templates;
		endMsg('Your Mental is doing well! Just believe in yourself and never forget that you are not alone! Talk to your loved ones if needed!');
		
	}
	else if(score>=0 && score<6){
		templates = '<div class="alert alert-success" role="alert"><strong>	You are at a very Low Risk !</strong> </div>';
		document.getElementById('ques').innerHTML += templates;
		endMsg("Your Mental Health is completely fine!! KEEP GOING HAPPILY!! ");
		
	}
}
