import { allMaterials } from "./add";
import isAfter from "date-fns/isAfter";
import { isBefore } from "date-fns";
import { deleteingTasksofproject } from "./Dom";
import { knowWhichsectiondialogis } from "./Dom";
import { TaskManagement } from "./add";
import { movingTasks } from "./Dom";

export let deleteTasks=(()=>{

    class deleteTask{
        constructor(button,index){
            this.button=button.addEventListener('click',function(e){

                deletingSpecificTask(index);
                movingTasks.placingTasks();
            movingTasks.updateAlltasks()
                console.log("yes we work")

            })


        }
    }
        function clearOverdue() {
                   for (let i = 0; i < allMaterials.allProjects.length; i++) {
                
                for (let x = 0; x < allMaterials.allProjects[i].projectList.length; x++) {
                    // console.log(isAfter(new Date(),new Date(allMaterials.allProjects[i].projectList[x].date)))
                    if(isAfter(new Date(),new Date(allMaterials.allProjects[i].projectList[x].date))){

                        allMaterials.allProjects[i].projectList.splice(x,1)
                        alert("You can't create a date in the past")
                    }

                } 
                    
                
                
                
            }
            
        }

        function deletingSpecificTask(index) {

            if(knowWhichsectiondialogis.section==="Home"){

                




            }
            else{

                allMaterials.allProjects[TaskManagement.projectPos.position].projectList.splice(index,1)


            }

            
            
        }
        


       return {clearOverdue,deletingSpecificTask,deleteTask}
})()