import { dialogForEdit, knowWhichsectiondialogis } from "./Dom"
import { TaskManagement, allMaterials } from "./add"
export class editingTask{


    constructor(button,index){

        this.button=button.addEventListener('click',function(e){


           console.log("hellwo",index)
            editTaskFunctionalities.showTask(editTaskFunctionalities.taskToedit(index))
            


        })



}



    
}

let editTaskFunctionalities=(()=>{
    function taskToedit(index) {
        if (TaskManagement.projectPos.position<1) {
            
            return allMaterials.allTasks[index]
        }
        else if(TaskManagement.projectPos.position>0){

            return allMaterials.allProjects[TaskManagement.projectPos.position].projectList[index]

        }

        
    }
    function showTask(task) {
        dialogForEdit.createDialogBox(task)
    }

    


return {showTask,taskToedit}
})()