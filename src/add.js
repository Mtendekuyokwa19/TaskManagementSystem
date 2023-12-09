

export let allMaterials=(()=>{

    let allProjects=[];
    let allTasks=[];


return {allProjects,allTasks}

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
        
        if(ProjectName===allMaterials.allProjects[i].projectName)
     
      
             
             return allProjects[i].projectList;
        }
    
        return
     }



return{FindProject,createProject,addToAllProjects}


})() 


export let TaskManagement=(()=>{

    class createTask{


        constructor(title,description,date,priority,status="undone"){
    
            this.title=title;
            this.description=description;
            this.date=date;
            this.priority=priority;
            this.status=status;
    
    
    
    
        }
    
    
    }

   

    function findingTask(TaskName){

   
        for (let i = 0; i < allMaterials.allProjects.length; i++) {
    
           
            for (let x = 0; x < allMaterials.allProjects[i]["projectList"].length; x++) {
    
            
              if(TaskName===allMaterials.allProjects[i]["projectList"][x]["title"]){
    
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
        // allMaterials.allTasks[allMaterials.allTasks.length]=task;
        
        
        
        
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


return {createTask,findingTask,addTasktoProject,projectPos,addingToallTasks}


})()


//the arrys should have a name and the tasks should know where they belong to

function placeTaskinAllTasks() {

    for (let i = 0; i < allMaterials.allProjects.length; i++) {

        for (let x = 0; x <allMaterials.allProjects["projectList"].length; x++) {
            allMaterials.allTasks[i]=allMaterials.allProjects["projectList"][x]
            
        }
        
        
    }
    
}

let unknownTaks= new ProjectManagement.createProject("unknown");
ProjectManagement.addToAllProjects(unknownTaks);
let task= new TaskManagement.createTask("Make chips","fly emirates","2020-3-20","medium");
TaskManagement.addTasktoProject(task);








//creating default 
export let spaceTravels=new ProjectManagement.createProject("space trip");
ProjectManagement.addToAllProjects(spaceTravels);
TaskManagement.findingTask("Make chips");