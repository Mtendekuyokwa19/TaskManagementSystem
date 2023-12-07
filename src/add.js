

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


        constructor(title,description,date,priority,status="pending"){
    
            this.title=title;
            this.description=description;
            this.date=date;
            this.priority=priority;
            this.status=status;
    
    
    
    
        }
    
    
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
    let projectPos={
        position:0
    }
   function addTasktoProject(task,project=allMaterials.allProjects[projectPos.position].projectList){

        project[project.length]=task;
        allMaterials.allTasks[allMaterials.allTasks.length]=task;
        
        
        
        
        }



return {createTask,findingTask,addTasktoProject,projectPos}


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
export let spaceTravels=new ProjectManagement.createProject("space trip");
ProjectManagement.addToAllProjects(spaceTravels);

