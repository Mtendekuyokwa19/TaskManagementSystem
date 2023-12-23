
import { updatingCompletedTask } from "./Dom.js";
import { TaskManagement, arrangeDates } from "./add.js";
import { knowWhichsectiondialogis } from "./Dom.js";
import { allMaterials } from "./add.js";
import { strikeOuteffect } from "./Dom.js";
import { ProjectManagement } from "./add.js";
import { localStorageManagement } from "./index.js";

export class completeButtonforEachProject{

    constructor(TaskButton,index){

        this.TaskButton=TaskButton.addEventListener('change',function(e){

            
        if(this.checked){ 

       
          if(TaskManagement.projectPos.position<1){

            checkingFunction.CheckingInHome(index);

          }
          else if(TaskManagement.projectPos.position>0){
                checkingFunction.checkingInprojects(index)

          }
          
   
         
        }
       
        else{
            if (TaskManagement.projectPos.position>0) {
                checkingFunction.uncheckinginProjects(index)
            }
            else if (TaskManagement.projectPos.position<1){

                checkingFunction.uncheckinginhome(index);

            }
     
     
           
            

        }
          
        localStorageManagement.addTotheLocalStorage()
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
function checkingToday(index) {
    let todayTasks=arrangeDates.todayDates();
    let project=ProjectManagement.FindProject(todayTasks[index].Project)
    let taskPosition=TaskManagement.HuntingForTasktodelete(project,allMaterials.today[index].title)

    allMaterials.allProjects[project].projectList[taskPosition].status="undone";
    strikeOuteffect.strikeoutWords(index);

}
function checkingInprojects(index) {

    allMaterials.allProjects[TaskManagement.projectPos.position].projectList[index].status="done";
   console.log( allMaterials.allProjects[TaskManagement.projectPos.position].projectList[index])
    strikeOuteffect.strikeoutWords(index);
    
    
}

function uncheckinginhome(index) {
   
    let project=ProjectManagement.FindProject(allMaterials.allTasks[index].Project);
    let taskPosition=TaskManagement.HuntingForTasktodelete(project,allMaterials.allTasks[index].title)
           
    allMaterials.allProjects[project].projectList[taskPosition].status="undone";
   
    strikeOuteffect.strikeoutWords(index,"none");
    updatingCompletedTask()
   
    
}

function uncheckinginProjects(index) {
    let project=ProjectManagement.FindProject(allMaterials.allTasks[index].Project);
    let taskPosition=TaskManagement.HuntingForTasktodelete(project,allMaterials.allTasks[index].title)
           
    allMaterials.allProjects[project].projectList[taskPosition].status="undone";
   
    strikeOuteffect.strikeoutWords(index,"none");
    
}

return {CheckingInHome,uncheckinginhome,checkingToday,checkingInprojects,uncheckinginProjects}
})()
