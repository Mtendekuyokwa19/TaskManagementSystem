

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
            console.log(projectTitle);
    
    
    
        }
    
    
    
    
    
    
    
    }

    function addToAllProjects(NewProject) {
        allMaterials.allProjects[allMaterials.allProjects.length]=NewProject;
        
    }

    function FindProject(ProjectName) {
        for (let i = 0; i < allProjects.length; i++) {
        
        if(ProjectName===allMaterials.allProjects[i].projectName)
     
      
             
             return allProjects[i].projectList;
        }
         
     }



return{FindProject,createProject,addToAllProjects}


})() 


export let TaskManagement=(()=>{

    class createTask{


        constructor(title,description,date,priority,status="pending"){
    
            this.title=title;
            this.description=description;
            this.date=date;
            this.priority=priority;
            this.status=status;
    
    
    
    
        }
    
    
    }

    function addingTask(newTask,project=spaceTravels){

        
        allMaterials.allTasks[allMaterials.allTasks.length]=newTask
        // project.projectList[project.projectList.length]=newTask;
        // FindProject(project)[ FindProject(project).length]=newTask;
    
    
    }

    function findingTask(TaskName){

   
        for (let i = 0; i < allProjects.length; i++) {
    
           
            for (let x = 0; x < allProjects[i]["projectList"].length; x++) {
    
            
              if(TaskName===allProjects[i]["projectList"][x]["title"]){
    
                console.log("found",x,i,allProjects[i]["projectList"][x]["title"]);
    
                return{x,i}
              }
                
            }
            
        }
    
    
    }




return {createTask,addingTask,findingTask}


})()


//the arrys should have a name and the tasks should know where they belong to

function placeTaskinAllTasks() {

    for (let i = 0; i < allMaterials.allProjects.length; i++) {

        for (let x = 0; x <allMaterials.allProjects["projectList"].length; x++) {
            allMaterials.allTasks[i]=allMaterials.allProjects["projectList"][x]
            
        }
        
        
    }
    
}










//creating default 
let spaceTravels=new ProjectManagement.createProject("space trip");
ProjectManagement.addToAllProjects(spaceTravels);

