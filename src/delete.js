import { allMaterials } from "./add";
import isAfter from "date-fns/isAfter";
import { isBefore } from "date-fns";
import { deleteingTasksofproject } from "./Dom";
import { knowWhichsectiondialogis } from "./Dom";
import { TaskManagement } from "./add";
import { movingTasks } from "./Dom";
import { ProjectManagement } from "./add";
import { createButtonsFromAllProjects } from "./Dom";
import { homeButtonReset } from "./Dom";
import { projectButtons } from "./Dom";
import { balancingprojects } from "./Dom";
import { UpdateNumberOfProjects } from "./Dom";
import { deletingProjectDom } from "./Dom";


export let deleteTasks=(()=>{

    class deleteTask{
        constructor(button,index){
            this.button=button.addEventListener('click',function(e){

                deletingSpecificTask(index);
                TaskManagement.addingToallTasks()
                movingTasks.placingTasks();
                movingTasks.updateAlltasks()
                

            })


        }
    }
        function clearOverdue() {
                   for (let i = 0; i < allMaterials.allProjects.length; i++) {
                
                for (let x = 0; x < allMaterials.allProjects[i].projectList.length; x++) {
                    // console.log(isAfter(new Date(),new Date(allMaterials.allProjects[i].projectList[x].date)))
                    if((new Date().setHours(0, 0, 0, 0) > new Date(allMaterials.allProjects[i].projectList[x].date).setHours(0, 0, 0, 0))){

                        allMaterials.allProjects[i].projectList.splice(x,1)
                        
                        console.log(new Date(),new Date)
                    }

                } 
                    
                
                
                
            }
            
        }

        function deletingSpecificTask(index) {

            if(knowWhichsectiondialogis.section==="Home"){

               

              let ProjectPosition=ProjectManagement.FindProject(allMaterials.allTasks[index].Project)

              console.log("johnson");
              console.log(allMaterials.allTasks[index].Project,ProjectManagement.FindProject(allMaterials.allTasks[index].Project)              );
                for (let i = 0; i < allMaterials.allProjects[ProjectPosition].projectList.length; i++) {
                    
                    if (allMaterials.allTasks[index].title===allMaterials.allProjects[ProjectPosition].projectList[i].title) {
                        console.log(allMaterials.allProjects[ProjectPosition].projectList[i])
                        allMaterials.allProjects[ProjectPosition].projectList.splice(i,1)

                        return
                    }
                    
                }


            }
            else{

                allMaterials.allProjects[TaskManagement.projectPos.position].projectList.splice(index,1)

                console.log("mother goose")

            }

            
            
        }
        


       return {clearOverdue,deletingSpecificTask,deleteTask}
})()

