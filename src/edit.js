import { dialogForEdit, knowWhichsectiondialogis } from "./Dom"
import { TaskManagement, allMaterials } from "./add"

import { ProjectManagement } from "./add"
export class editingTask{


    constructor(button,index){
        this.button=button.addEventListener('click',function(e){

            editTaskFunctionalities.showTask(editTaskFunctionalities.taskToedit(index))
            dialogForEdit.createTask(index);
            
        })
}    
}

let editTaskFunctionalities=(()=>{
    function taskToedit(index) {
        if (TaskManagement.projectPos.position<1) {

        let project=ProjectManagement.FindProject(allMaterials.allTasks[index].Project);
        let taskPosition=TaskManagement.HuntingForTasktodelete(project,allMaterials.allTasks[index].title)

            
            return allMaterials.allProjects[project].projectList[taskPosition]
        }
        else if(TaskManagement.projectPos.position>0){

            return allMaterials.allProjects[TaskManagement.projectPos.position].projectList[index]

        }

        
    }
    function  showTask(task) {
        dialogForEdit.createDialogBox(task)
        
    }

return {showTask,taskToedit}
})()