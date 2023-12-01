

let allMaterials=(()=>{

    let allProjects=[];
    let allTasks=[];


return {allProjects,allTasks}

})()


let ProjectManagement=(()=>{

    class createProject{

        constructor(projectTitle){
    
            this.projectList=[];
            this.projectName=projectTitle;
    
    
    
        }
    
    
    
    
    
    
    
    }

    function addToAllProjects(NewProject) {
        allProjects[allMaterials.allProjects.length]=NewProject;
        
    }

    function FindProject(ProjectName) {
        for (let i = 0; i < allProjects.length; i++) {
        
        if(ProjectName===allMaterials.allProjects[i].projectName)
     
      
             
             return allProjects[i].projectList;
        }
         
     }



return{FindProject,createProject,addToAllProjects}


})() 


let TaskManagement=(()=>{

    class createTask{


        constructor(title,priority){
    
            this.title=title;
            this.priority=priority;
    
    
    
    
        }
    
    
    }

    function addingTask(ProjectName,newTask){

    

        FindProject(ProjectName)[ FindProject(ProjectName).length]=newTask;
    
    
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













