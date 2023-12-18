
import { updatingCompletedTask } from "./Dom.js";
import { TaskManagement } from "./add.js";
import { knowWhichsectiondialogis } from "./Dom.js";
import { allMaterials } from "./add.js";
import { strikeOuteffect } from "./Dom.js";
import { ProjectManagement } from "./add.js";

export class completeButtonforEachProject{

    constructor(TaskButton,index){

        this.TaskButton=TaskButton.addEventListener('change',function(e){

            
        if(this.checked){ 
            if(knowWhichsectiondialogis.section==="Home"||knowWhichsectiondialogis.section==="Today"){
           
          checkingFunction.CheckingInHome(index);
        }
        else{
            // console.log(allMaterials.allProjects)
            allMaterials.allProjects[TaskManagement.projectPos.position].projectList[index].status="done"
            // console.log(allMaterials.allProjects[TaskManagement.projectPos.position].projectList[index].status)
            
            strikeOuteffect.strikeoutWords(index)
        };}
        else{
     checkingFunction.uncheckinginhome(index);
     console.log("helo")
           
            

        }
           
        })
    
    }




}
let checkingFunction=(()=>{

function CheckingInHome(index){
    let project=ProjectManagement.FindProject(allMaterials.allTasks[index].Project);
    console.log(project)
    let taskPosition=TaskManagement.HuntingForTasktodelete(project,allMaterials.allTasks[index].title)
           
    allMaterials.allProjects[project].projectList[taskPosition].status="done";
   
    strikeOuteffect.strikeoutWords(index);
    updatingCompletedTask()


}
function uncheckinginhome(index) {
   
    let project=ProjectManagement.FindProject(allMaterials.allTasks[index].Project);
    let taskPosition=TaskManagement.HuntingForTasktodelete(project,allMaterials.allTasks[index].title)
           
    allMaterials.allProjects[project].projectList[taskPosition].status="done";
   
    strikeOuteffect.strikeoutWords(index);
    updatingCompletedTask()
   
    
}

return {CheckingInHome,uncheckinginhome}
})()
