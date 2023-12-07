
import { allMaterials } from "./add";
import { spaceTravels } from "./add.js";
import { ProjectManagement } from "./add";
import { stylingSlelectedButtons } from "./Dom.js";

function shiftProject(position){
        
    let temp=allMaterials.allProjects[0];
    allMaterials.allProjects[0]=allMaterials.allProjects[position];
    allMaterials.allProjects[position]=temp;

    console.log(allMaterials.allProjects)
}

export class Taskineachproject{


    constructor(projectButton,index){
        this.projectButton=projectButton.addEventListener('click',function(e){

           shiftProject(index)
           stylingSlelectedButtons.returnAllbuttonstlyesTodefault();
           stylingSlelectedButtons.makingTheButtonGlow(projectButton);
            
            })
         


    }

 
  
}

//import class and make default that

console.log(ProjectManagement.FindProject( "space trip") )  
