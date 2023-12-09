import { TaskManagement } from "./add.js";
import { knowWhichsectiondialogis } from "./Dom.js";
import { allMaterials } from "./add.js";
import { strikeOuteffect } from "./Dom.js";
export class completeButtonforEachProject{

    constructor(TaskButton,index){

        this.TaskButton=TaskButton.addEventListener('change',function(e){

            // console.log(TaskManagement.projectPos.position,index);
        if(this.checked){ 
            if(knowWhichsectiondialogis.section==="Home"){
            // console.log(allMaterials.allTasks[index]);
            // console.log(allMaterials.allProjects[TaskManagement.findingTask(allMaterials.allTasks[index].title)])
            // console.log(TaskManagement.findingTask("done"));
            let projectBox=TaskManagement.findingTask(allMaterials.allTasks[index].title)
            
            allMaterials.allProjects[projectBox.i].projectList[projectBox.x].status="done";
            console.log(allMaterials.allProjects[projectBox.i].projectList[projectBox.x])
            strikeOuteffect.strikeoutWords(index);
        }
        else{
            console.log(allMaterials.allProjects)
            allMaterials.allProjects[TaskManagement.projectPos.position].projectList[index].status="done"
            console.log(allMaterials.allProjects[TaskManagement.projectPos.position].projectList[index].status)

            strikeOuteffect.strikeoutWords(index)
        };}
        else{
            strikeOuteffect.strikeoutWords(index,"none")
        }
           
        })
    
    }




}