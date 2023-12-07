
import { allMaterials } from "./add";
import { spaceTravels } from "./add.js";
import { ProjectManagement } from "./add";
import { stylingSlelectedButtons } from "./Dom.js";
import { movingfromOneprojecttoanother } from "./Dom.js";
import { projectButtonActionsTogiveTasks } from "./Dom.js";
import { TaskManagement } from "./add";

function shiftProject(position){
      console.log(position);  
      TaskManagement.projectPos.position=position;
}

export class Taskineachproject{


    constructor(projectButton,index){
        this.projectButton=projectButton.addEventListener('click',function(e){

           shiftProject(index)
           stylingSlelectedButtons.returnAllbuttonstlyesTodefault();
           stylingSlelectedButtons.makingTheButtonGlow(projectButton);
           movingfromOneprojecttoanother.refreshTaskBox();
           projectButtonActionsTogiveTasks.createTaskBoxforProject();
           projectButtonActionsTogiveTasks.navigatingTheProjectAndGivingTasks(index);
            
            })
         


    }

 
  
}

//import class and make default that


