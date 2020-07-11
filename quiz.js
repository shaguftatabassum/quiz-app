window.onload= function() {
    show(0);
}
var totalScore = 0;
var point=0;
var myQuestions = [
    {
    question: "What is 2*5?",
    a:"65",
    b:"50",
    c:"10",
    answer:"c"
    },
{
    question: "What is 10/2?",
    a:"5",
    b:"7",
    c:"4",
    answer:"a"
},
{
    question: "What is 50+5?",
    a:"55",
    b:"7",
    c:"44",
    answer:"a"
},
{
    question: "What is 8*8?",
    a:"77",
    b:"66",
    c:"64",
    answer:"c",
},
];
var question_count=0;
function next(){
    var radiobtns = document.querySelectorAll('#radiobox');
    var selectedOption="";
   
        for (var radiobtn of radiobtns){
            if(radiobtn.checked){
                 selectedOption=radiobtn.value;
             }
             radiobtn.checked=false;
        }
     
      if(selectedOption==myQuestions[question_count].answer)totalScore++;
 
       
    question_count++;
    show(question_count);
}
function show(count){
    if(count<4){
    var question = document.getElementById("questions");
    question.innerHTML= `<h2>${myQuestions[count].question}</h2>`;
    var option = document.getElementById("options");
    option.innerHTML = `<h4>${myQuestions[count].a}</h4>`;
    var option = document.getElementById("option b");
    option.innerHTML = `<h4>${myQuestions[count].b}</h4>`;
    var option = document.getElementById("option c");
    option.innerHTML = `<h4>${myQuestions[count].c}</h4>`;
    }
    else{
        var question = document.getElementById("questions");
        question.innerHTML=`<h2>${totalScore}</h2>`;
        var option = document.getElementById("options");
        option.innerHTML ="";
        var option = document.getElementById("option b");
        option.innerHTML="";
        var option = document.getElementById("option c");
        option.innerHTML="";
        var radiobtns = document.querySelectorAll('#radiobox');
        for (var radiobtn of radiobtns){
           radiobtn.style.display = "none";
        }
        document.getElementById("btn-next").style.display = "none";


    }
}
//checking answer