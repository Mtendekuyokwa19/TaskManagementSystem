//creating the DOM

import './style.css'

import HeadImage from'./icons/linuxHead.png'
import HomeIcon from './icons/HomeButtons.svg'
import allTasksicon from './icons/allTasks.svg'
import dateIcon from './icons/arrangeDates.svg'
import createProjectsicon from './icons/createProject.svg'
import projectsIcon from './icons/Projects.svg'

function domElementMaker(type,name,parentBox,Words=""){


    let newElement=document.createElement(type);
newElement.id=name;
newElement.textContent=Words
parentBox.appendChild(newElement);

return newElement;

}

function domImageLoad(Icon,parentBox,idName) {
    
  let myIcon = new Image();
  myIcon.src = Icon;
  myIcon.id=idName;
  parentBox.appendChild(myIcon);

  return myIcon;
    
}
let sidebar=(()=>{

let siderbox=domElementMaker('div',"sidebox",document.body);

let appTitleHolder=domElementMaker('div',"appTitleHolder",siderbox);

let appLogo=domImageLoad(HeadImage,appTitleHolder,"appLogo")

let appTitle=domElementMaker('p',"appTitle",appTitleHolder,"Ubuntu Tasks");



let sectionTitle=domElementMaker('p',"sectionTitle",siderbox,"MAIN")
let section=domElementMaker('div',"section",siderbox)

let homeButton=domElementMaker('button',"homeDiv",section);
let homeicon=domImageLoad(HomeIcon,homeButton,"homeicon")
let homeText=domElementMaker('p',"hometext",homeButton,"Home");

let AllTasksButton=domElementMaker('button',"AllTasks",section);
let AllTasksicon=domImageLoad(allTasksicon,AllTasksButton,"AllTaskicon")
let AllTasksText=domElementMaker('p',"hometext",AllTasksButton,"Tasks");

let DatesArrangedButton=domElementMaker('button',"calender",section);
let Datesicon=domImageLoad(dateIcon,DatesArrangedButton,"Datesicon")
let DatesText=domElementMaker('p',"hometext",DatesArrangedButton,"Calender");

let ProjectsButton=domElementMaker('button',"Projects",section);
let ProjectsIcon=domImageLoad(projectsIcon,ProjectsButton,"projectIcon")
let ProjectTexts=domElementMaker('p',"hometext",ProjectsButton,"Projects");

let createprojectsButton=domElementMaker('button',"createprojects",section);
let createProjectsIcon=domImageLoad(createProjectsicon,createprojectsButton,"createprojectsicon")
let createProject=domElementMaker('p',"projectText",createprojects,"Create Projects");
createprojectsButton.title="Create Project"















})();






