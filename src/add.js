
import isThisWeek from "date-fns/isThisWeek/index.js";
import { movingTasks } from "./Dom.js";
import add from "date-fns/add";

export let allMaterials=(()=>{

    let allProjects=[];
    let allTasks=[];
    let thisWeek=[];
    let today=[];
  

return {allProjects,allTasks,thisWeek,today}

})()


export let ProjectManagement=(()=>{

    class createProject{

        constructor(projectTitle){
            this.projectTitle=projectTitle;
            this.projectList=[];
           
    
    
    
        }
    
    
    
    
    
    
    
    }

    function addToAllProjects(NewProject) {
        allMaterials.allProjects[allMaterials.allProjects.length]=NewProject;
        
    }

    function FindProject(ProjectName) {

        for (let i = 0; i < allMaterials.allProjects.length; i++) {
        
        if(ProjectName===allMaterials.allProjects[i].projectTitle)
     
      
             
             return i;
        }
    
        return
     }



return{FindProject,createProject,addToAllProjects}


})() 


export let TaskManagement=(()=>{

    class createTask{


        constructor(title,description,date,priority,status="undone",projectBelong=""){
    
            this.title=title;
            this.description=description;
            this.date=date;
            this.priority=priority;
            this.status=status;
            this.Project=projectBelong
    
    
    
        }
    
    
    }
    //do not forget to add prevention of duplicates in each project
    function HuntingForTasktodelete(projectNumber,title){

        for (let i = 0; i< allMaterials.allProjects[projectNumber].projectList.length; i++) {
          
            if (title===allMaterials.allProjects[projectNumber].projectList[i].title) {

                return i;
            }
           
        }




    }

   

    function findingTask({title,description}){

   
        for (let i = 0; i < allMaterials.allProjects.length; i++) {
    
           
            for (let x = 0; x < allMaterials.allProjects[i]["projectList"].length; x++) {
    
            
              if(title===allMaterials.allProjects[i]["projectList"][x]["title"]&&description===allMaterials.allProjects[i]["projectList"][x]["description"]){
    
                console.log("found",x,i,allMaterials.allProjects[i]["projectList"][x]["title"]);
    
                return {i,x};
              }
                
            }
            
        }
    
    
    }
    let projectPos={
        position:0
    }
   function addTasktoProject(task,project=allMaterials.allProjects[projectPos.position].projectList){

        project[project.length]=task;
       
        
        
        
        
        }
function addingToallTasks() {
allMaterials.allTasks.splice(0,allMaterials.allTasks.length)


    for (let index = 0; index < allMaterials.allProjects.length; index++) {
        
        for (let x = 0; x < allMaterials.allProjects[index].projectList.length; x++) {
            // console.log(allMaterials.allProjects[index].projectList,allMaterials.allProjects.length)
            allMaterials.allTasks[allMaterials.allTasks.length]=allMaterials.allProjects[index].projectList[x];
        }
    }
    
}

function replaceTask(task,position) {


console.log(task.Project)

    allMaterials.allProjects[ProjectManagement.FindProject(task.Project)].projectList[position]=task


    
addingToallTasks()
}


return {createTask,findingTask,addTasktoProject,projectPos,addingToallTasks,HuntingForTasktodelete,replaceTask}


})()


//the arrys should have a name and the tasks should know where they belong to

export function placeTaskinAllTasks() {
allMaterials.allTasks.splice(0,allMaterials.allTasks.length)
let index=0;
    for (let i = 0; i < allMaterials.allProjects.length; i++) {

        for (let x = 0; x <allMaterials.allProjects[i].projectList.length; x++) {
            allMaterials.allTasks[index]=allMaterials.allProjects[i].projectList[x]
            index++;
        }
        
        
    }
    
}

export let amountofCompletedTasks=(()=>{

    function countCompletedTasks() {
        let counter=0;
        
         allMaterials.allTasks.forEach(task=>{

            if(task.status=="done"){
                counter++
               
            }
         }) 
           
      console.log("here",allMaterials.allTasks)      
        
     return counter;   
    }


return {countCompletedTasks};
})()

export let arrangeDates=(()=>{

    function todayDates() {
        for (let i = 0; i < allMaterials.allTasks.length; i++) {
            let dateOftask=new Date( allMaterials.allTasks[i].date).toISOString().slice(0, 10);
            let today = new Date().toISOString().slice(0, 10)

           
            if(dateOftask===today){
                movingTasks.taskcards(allMaterials.allTasks[i])
                
                allMaterials.today[allMaterials.today.length]=allMaterials.allTasks[i];

            }
            

        }

        return allMaterials.today;
        
    }

    function ThisWeek() {
        for (let i = 0; i < allMaterials.allTasks.length; i++) {
            let dateOftask=new Date( allMaterials.allTasks[i].date)
            let Tomorrow = add(new Date(),{days:1}).toISOString().slice(0, 10)

           
            if(isThisWeek(dateOftask)){
                movingTasks.taskcards(allMaterials.allTasks[i])
            }
            
        }
        
    }

    function aDayafter() {
        for (let i = 0; i < allMaterials.allTasks.length; i++) {
            let dateOftask=new Date( allMaterials.allTasks[i].date).toISOString().slice(0, 10);
            let aDayafter = add(new Date(),{days:2}).toISOString().slice(0, 10)

           
            if(dateOftask===aDayafter){
                movingTasks.taskcards(allMaterials.allTasks[i],document.querySelector('#taskBoxtomorrow'))
            }
            
        }
        
        
    }


return {todayDates,ThisWeek,aDayafter}

})()


//creating default 
export let defaultProject=new ProjectManagement.createProject("Default Project");
ProjectManagement.addToAllProjects(defaultProject);


