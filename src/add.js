const { add } = require("date-fns");

let allProjects=[];


class createProject{

    constructor(projectTitle){

        this.projectList=[];
        this.projectName=projectTitle;



    }







}

class createTask{


    constructor(title,priority){

        this.title=title;
        this.priority=priority;




    }


}

//the arrys should have a name and the tasks should know where they belong to


function addToAllProjects(NewProject) {
    allProjects[allProjects.length]=NewProject;
    
}

function FindProject(ProjectName) {
   for (let i = 0; i < allProjects.length; i++) {
   
   if(ProjectName===allProjects[i].projectName)

 
        
        return allProjects[i].projectList;
   }
    
}

function addingTask(ProjectName,newTask){

    

    FindProject(ProjectName)[ FindProject(ProjectName).length]=newTask;


}

function findingTask(TaskName){



}

let Dance=new createProject("Dance");
addToAllProjects(Dance);
let walk=new createTask("walk","very");
addingTask("Dance",walk);






