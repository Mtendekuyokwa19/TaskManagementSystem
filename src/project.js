
import { allMaterials } from "./add";
import { spaceTravels } from "./add.js";
import { ProjectManagement } from "./add";
import { stylingSlelectedButtons } from "./Dom.js";
import { movingfromOneprojecttoanother } from "./Dom.js";
import { projectButtonActionsTogiveTasks } from "./Dom.js";
import { TaskManagement } from "./add";
import { notHomesection } from "./Dom.js";
import { completeTask } from "./Dom.js";
import { strikeOuteffect } from "./Dom.js";

export function shiftProject(position){
      console.log(position);  
      TaskManagement.projectPos.position=position;
}

export class Taskineachproject{


    constructor(projectButton,index){
        this.projectButton=projectButton.addEventListener('click',function(e){
            notHomesection();
           shiftProject(index)
           strikeOuteffect.strikeoutWords();
           stylingSlelectedButtons.returnAllbuttonstlyesTodefault();
           stylingSlelectedButtons.makingTheButtonGlow(projectButton);
           movingfromOneprojecttoanother.refreshTaskBox();
           projectButtonActionsTogiveTasks.createTaskBoxforProject();
           projectButtonActionsTogiveTasks.navigatingTheProjectAndGivingTasks(index);
           completeTask.manageCheckbox();
            
            })
         


    }

 
  
}

//import class and make default that


