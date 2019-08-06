let  arr=[{
    question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
    options:["Sed ut perspiciatis unde omnis","iste natus error sit voluptatem accusantium","quae ab illo inventore veritatis et","quasi architecto beatae vitae dicta sunt"],
    answer:0,
    review:false
},{
    question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
    options:["Sed ut perspiciatis unde omnis","iste natus error sit voluptatem accusantium","quae ab illo inventore veritatis et","quasi architecto beatae vitae dicta sunt"],
    answer:0,
    review:false
},{
    question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
    options:["Sed ut perspiciatis unde omnis","iste natus error sit voluptatem accusantium","quae ab illo inventore veritatis et","quasi architecto beatae vitae dicta sunt"],
    answer:0,
    review:false
},{
    question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
    options:["Sed ut perspiciatis unde omnis","iste natus error sit voluptatem accusantium","quae ab illo inventore veritatis et","quasi architecto beatae vitae dicta sunt"],
    answer:0,
    review:false
},{
    question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
    options:["Sed ut perspiciatis unde omnis","iste natus error sit voluptatem accusantium","quae ab illo inventore veritatis et","quasi architecto beatae vitae dicta sunt"],
    answer:0,
    review:false
},{
    question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
    options:["Sed ut perspiciatis unde omnis","iste natus error sit voluptatem accusantium","quae ab illo inventore veritatis et","quasi architecto beatae vitae dicta sunt"],
    answer:0,
    review:false
},{
    question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
    options:["Sed ut perspiciatis unde omnis","iste natus error sit voluptatem accusantium","quae ab illo inventore veritatis et","quasi architecto beatae vitae dicta sunt"],
    answer:0,
    review:false
},{
    question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
    options:["Sed ut perspiciatis unde omnis","iste natus error sit voluptatem accusantium","quae ab illo inventore veritatis et","quasi architecto beatae vitae dicta sunt"],
    answer:0,
    review:false
},{
    question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
    options:["Sed ut perspiciatis unde omnis","iste natus error sit voluptatem accusantium","quae ab illo inventore veritatis et","quasi architecto beatae vitae dicta sunt"],
    answer:0,
    review:false
},{
    question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
    options:["Sed ut perspiciatis unde omnis","iste natus error sit voluptatem accusantium","quae ab illo inventore veritatis et","quasi architecto beatae vitae dicta sunt"],
    answer:0,
    review:false
},]


for(let i=0;i<arr.length;i++)
{
    //console.log("iddhar hona")
    let button=document.createElement("button");
    button.setAttribute("id",`q${i+1}`)
    button.setAttribute("onclick",`openQues(${i+1})`);
    button.setAttribute("class","btn btn-transparent")
    let text=document.createTextNode(`question ${i+1}`);
    button.appendChild(text);
    document.getElementById("questionNav").appendChild(button);
    // let css=document.getElementById("questionNav").childNodes[i]
}
let openQues = (questionNo)=>{
   // console.log(arr[questionNo-1])
    showQuestion.call(arr[questionNo-1],questionNo)
    
}

let showQuestion=function(questionNo){
    //console.log("2")
    //console.log(this);
    document.getElementById('questionArea').innerHTML=`<div class="row" style="background-color:transparent;height:20%;width:131%">
    Q${questionNo}. ${this.question}
</div> 
<div class="row" style="background-color:transparent;height:20%;width:131%">
<input type="radio" name="options" id="option1">&nbsp;&nbsp;&nbsp;&nbsp;A. ${this.options[0]} 
</div>
<div class="row" style="background-color:transparent;height:20%;width:131%">
<input type="radio" name="options" id="option2">&nbsp;&nbsp;&nbsp;&nbsp;B. ${this.options[1]} 
</div>  
<div class="row" style="background-color:transparent;height:20%;width:131%">
<input type="radio" name="options" id="option3">&nbsp;&nbsp;&nbsp;&nbsp;C. ${this.options[2]} 
</div>
<div class="row" style="background-color:transparent;height:20%;width:131%">
<input type="radio" name="options" id="option4">&nbsp;&nbsp;&nbsp;&nbsp;D. ${this.options[3]} 
</div>  
</div>
<div class="col-sm-2 offset-sm-4 "><button type="button" class="btn btn-info pt-80">Review</button>
                        </div>
                        <div class="col-sm-2"><button type="button" class="btn btn-info pt-80" onclick="clearResponse(${questionNo})">Clear</button></div>
                        <div class="col-sm-2 "><button type="button" class="btn btn-primary pt-80" onclick="previous(${questionNo})">Previous</button>
                        </div>
                        <div class="col-sm-2 "><button type="button" class="btn btn-success pt-80" onclick="saveNext(${questionNo})" >Next</button>
                        </div>`;


if(this.answer!=0){
document.getElementById(`option${this.answer}`).checked=true;
}



}

let saveNext=(questionNo)=>{
    //console.log(arr[questionNo-1])
    for(let i=1;i<=4;i++){
    if(document.getElementById(`option${i}`).checked===true)
    {arr[questionNo-1].answer=i;
    break;
    }
    }
    //console.log(arr[questionNo-1])
    openQues(questionNo+1);
}
let previous=(questionNo)=>{
    for(let i=1;i<=4;i++){
        if(document.getElementById(`option${i}`).checked===true)
        {arr[questionNo-1].answer=i;
        break;
        }
        }
    if(questionNo!=1)
    openQues(questionNo-1);
    else
    alert("you are alredy in the 1st question");
}

let clearResponse=(questionNo)=>{
    if(arr[questionNo-1].answer==0)
      {
          //console.log("idhaaaa")
          for(let i=1;i<=4;i++)
          {
                  
              if(document.getElementById(`option${i}`).checked===true)
              {
                  //console.log(document.getElementById(`option${i}`).checked)
                  document.getElementById(`option${i}`).checked=false;
                  //console.log(document.getElementById(`option${i}`).checked)

              }
          }

      }
    else{
        document.getElementById(`option${arr[questionNo-1].answer}`).checked===false;
        arr[questionNo-1].answer=0;
    }

}


