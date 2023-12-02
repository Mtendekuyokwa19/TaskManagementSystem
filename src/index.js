//creating the DOM

import './style.css'

import HeadImage from'./icons/linuxHead.png'
import HomeIcon from './icons/HomeButtons.svg'
import allTasksicon from './icons/Tasks.svg'
import dateIcon from './icons/arrangeDates.svg'
import createProjectsicon from './icons/createProject.svg'
import projectsIcon from './icons/Projects.svg'
import topBoxImage from './images/girl.svg'
import musicimage from './images/music.svg'
import addTaskImage from './icons/createAdd.svg'
import boypapers from './images/carryingpapers.svg'
import {format} from 'date-fns';



export function domElementMaker(type,name,parentBox,Words=""){

let newElement=document.createElement(type);
newElement.id=name;
newElement.textContent=Words
parentBox.appendChild(newElement);

return newElement;

}

export function domImageLoad(Icon,parentBox,idName) {
    
  let myIcon = new Image();
  myIcon.src = Icon;
  myIcon.id=idName;
  parentBox.appendChild(myIcon);

  return myIcon;
    
}

export let sidebar=(()=>{

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
let ProjectsText=domElementMaker('p',"ProjectText",ProjectsButton,"Projects")

 let createprojectsButton=domElementMaker('button',"createprojects",section);
let createProjectsIcon=domImageLoad(createProjectsicon,createprojectsButton,"createprojectsicon")
let createProject=domElementMaker('p',"projectText",createprojectsButton,"Create Projects");
createprojectsButton.title="Create Project"













return {siderbox,createprojectsButton};

})();



export let topBar=(()=>{

  let topBox=domElementMaker('div','topBox',document.body);
 
  let topText=domElementMaker('p','topText',topBox,`It's ${format(new Date(), 'EEEE')}`)
  let topBoximage=domImageLoad(topBoxImage,topBox,'topBoximagegirl');
  let musicpic=domImageLoad(musicimage,topBox,"musicboy")
  let boywithpapers=domImageLoad(boypapers,topBox,"boyWithpapers");



  return {topBox};
})();

export let createTaskicon=(()=>{

  let addTask=domElementMaker('button',"addTask",document.body)
  addTask.title="Create new task"

  let addTaskIcon=domImageLoad(addTaskImage,addTask,"addtaskicon")



return {addTask}
})()








