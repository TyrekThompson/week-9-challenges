function Person (name,job,age) {
    this.name = name;  //"this" is referring to whatever the named parameter is set to which would be the name  
    this.job = job;
    this.age =  age;
    this.exercise= function() {
       console.log("Let's run a 4k")
    }
    this.fetchJob = function (){
       console.log (this.name + " is a " + this.job) // calls the variables "this" under the first function 
    }
}


var joe = new Person ('joe', 'Back-end, developer', 23) //specifically calling the name
joe.exercise()

joe.fetchJob() 

var another = new Person ("Lovon", "front-end, developer", 22)
// console.log(another)
another.exercise();

function Programmer(name, job, age, languages) {
    Person.call(this, name,job,age);
    this.languages= languages;
    this.busy=true;
    this.completeTask= function() {
        this.busy=false;
    }
    this.acceptNewTask= function() {
        this.busy = true
    }

    this.offerNewTask= function (){
        if(this.busy==true){
            console.log("Im busy right now");
        } else console.log("Right away!");
    }

    this.learnLanguage= function (language){
        this.languages.push(language)
    }
    this.listLanguages= function(){
        console.log(this.languages);
    }
}

var Mark = new Programmer('Mark', 'software-developer', 35, ["javascript", "java", "ruby"])
Mark.completeTask()
console.log(Mark.busy)
Mark.offerNewTask()
Mark.acceptNewTask()

console.log(Mark.busy);
Mark.offerNewTask()
Mark.learnLanguage("HTML")
Mark.listLanguages()

