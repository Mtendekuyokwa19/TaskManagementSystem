
import { updatingCompletedTask } from "./Dom.js";
import { TaskManagement } from "./add.js";
import { knowWhichsectiondialogis } from "./Dom.js";
import { allMaterials } from "./add.js";
import { strikeOuteffect } from "./Dom.js";

export class completeButtonforEachProject{

    constructor(TaskButton,index){

        this.TaskButton=TaskButton.addEventListener('change',function(e){

            
        if(this.checked){ 
            if(knowWhichsectiondialogis.section==="Home"){
           
            let projectBox=TaskManagement.findingTask(allMaterials.allTasks[index])
           
            allMaterials.allProjects[projectBox.i].projectList[projectBox.x].status="done";
           
            strikeOuteffect.strikeoutWords(index);
            updatingCompletedTask()
        }
        else{
            // console.log(allMaterials.allProjects)
            allMaterials.allProjects[TaskManagement.projectPos.position].projectList[index].status="done"
            // console.log(allMaterials.allProjects[TaskManagement.projectPos.position].projectList[index].status)
            
            strikeOuteffect.strikeoutWords(index)
        };}
        else{
            strikeOuteffect.strikeoutWords(index,"none")
            allMaterials.allProjects[TaskManagement.projectPos.position].projectList[index].status="undone"
            if(knowWhichsectiondialogis.section==="Home"){

                updatingCompletedTask();

            }
            
           
            

        }
           
        })
    
    }




}

