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
    console.log("iddhar hona")
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
    console.log(arr[questionNo-1])
    showQuestion.call(arr[questionNo-1],questionNo)
    
}

let showQuestion=function(questionNo){
    console.log("2")
    console.log(this);
    document.getElementById('questionArea').innerHTML=`<div class="row" style="background-color:transparent;height:20%;width:131%">
    Q${questionNo}. ${this.question}
</div> 
<div class="row" style="background-color:transparent;height:20%;width:131%">
<input type="radio" name="options">&nbsp;&nbsp;&nbsp;&nbsp;A. ${this.options[0]} 
</div>
<div class="row" style="background-color:transparent;height:20%;width:131%">
<input type="radio" name="options">&nbsp;&nbsp;&nbsp;&nbsp;B. ${this.options[0]} 
</div>  
<div class="row" style="background-color:transparent;height:20%;width:131%">
<input type="radio" name="options">&nbsp;&nbsp;&nbsp;&nbsp;C. ${this.options[0]} 
</div>
<div class="row" style="background-color:transparent;height:20%;width:131%">
<input type="radio" name="options">&nbsp;&nbsp;&nbsp;&nbsp;D. ${this.options[0]} 
</div>  
</div>`
}

let saveNext=()=>{
    
}


