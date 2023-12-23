
import { ProjectManagement } from "./add";
import { allMaterials } from "./add";
import isAfter from "date-fns/isAfter";
import { isBefore } from "date-fns";
import { deleteingTasksofproject } from "./Dom";
import { knowWhichsectiondialogis } from "./Dom";
import { TaskManagement } from "./add";
import { movingTasks } from "./Dom";
import { placeTaskinAllTasks } from "./add";
import { creatingProject } from "./Dom";
import { createButtonsFromAllProjects } from "./Dom";
import { homeButtonReset } from "./Dom";
import { todayButtonFunctionalities } from "./Dom";
import { orderTasks } from "./Dom";
import { deleteProjectDom } from "./Dom";
import { updatingCompletedTask } from "./Dom";
import { localStorageManagement } from ".";


export let deleteTasks=(()=>{

    class deleteTask{
        constructor(button,index){
            this.button=button.addEventListener('click',function(e){

                deletingSpecificTask(index);
               
              
                deleteingTasksofproject.buttonManager()
            localStorageManagement.addTotheLocalStorage()


            })


        }
    }
        function clearOverdue() {
                   for (let i = 0; i < allMaterials.allProjects.length; i++) {
                
                for (let x = 0; x < allMaterials.allProjects[i].projectList.length; x++) {
                    // console.log(isAfter(new Date(),new Date(allMaterials.allProjects[i].projectList[x].date)))
                    if((new Date().setHours(0, 0, 0, 0) > new Date(allMaterials.allProjects[i].projectList[x].date).setHours(0, 0, 0, 0))){

                        allMaterials.allProjects[i].projectList.splice(x,1)
                        console.log("You can't create a date in the past")
                        console.log(new Date(),new Date)
                    }

                } 
                    
                
                
                
            }
            
        }

 function deletingSpecificTask(index) {
if(TaskManagement.projectPos.position>0){
    deletingTaskInProjects(index)
 
    return
}

deletingTaskinHome(index)

   
}


            
            
  
  function deletingTaskinHome(index) {
        let project=ProjectManagement.FindProject(allMaterials.allTasks[index].Project);
        let taskPosition=TaskManagement.HuntingForTasktodelete(project,allMaterials.allTasks[index].title)
    
        allMaterials.allProjects[project].projectList.splice(taskPosition,1);
        placeTaskinAllTasks();
        console.log(allMaterials.allProjects)
        console.log(allMaterials.allTasks)
        movingTasks.resettingTaskboxAfterdeleteHome();
        movingTasks.updateAlltasks();
      if(knowWhichsectiondialogis.section==="Home"){
        updatingCompletedTask();


      }
       
           
            
        
       } 
       
function deletingTaskInProjects(index){
        allMaterials.allProjects[TaskManagement.projectPos.position].projectList.splice(index,1);
        TaskManagement.addingToallTasks();
        
       
      movingTasks.placingTasks()
     


       }

       return {clearOverdue,deletingSpecificTask,deleteTask}
})()

export let deleteProject=(()=>{

class removeProject{

    constructor(ProjectButton,index){

        this.ProjectButton=ProjectButton.addEventListener('click',function (e) {

            eraseProject(index)
            createButtonsFromAllProjects()
           
          
            deleteProjectDom.eraseProject()
            positionAndrefreshing(index)
            localStorageManagement.addTotheLocalStorage()
            
        })


        
    }




}
function eraseProject(index) {
    allMaterials.allProjects.splice(index,1);
    TaskManagement.addingToallTasks();
    
}
function goToHome(index) {
    if (TaskManagement.projectPos.position===index) {
       
    }
    
}
function positionAndrefreshing(index) {

    if(knowWhichsectiondialogis.section==="Home"){
        homeButtonReset()
       
        
    }
    else if(knowWhichsectiondialogis.section==="Today"){

        todayButtonFunctionalities.todayRefresh()
    }
    else if(knowWhichsectiondialogis.section==="calender"){
        orderTasks.CalenderRefresh()

    }
    else (TaskManagement.projectPos.position===index);{
        homeButtonReset();


    }
    
}


return {removeProject}
})()