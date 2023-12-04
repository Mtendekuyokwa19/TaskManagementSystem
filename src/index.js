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
import { ProjectManagement } from './add.js'
import { allMaterials } from './add.js'
import { spaceTravels } from './add.js'
import { TaskManagement } from './add.js'



export function domElementMaker(type,name,parentBox,Words="",placeholderWords=""){

let newElement=document.createElement(type);
newElement.id=name;
newElement.textContent=Words
newElement.placeholder=placeholderWords;
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

// let AllTasksButton=domElementMaker('button',"AllTasks",section);
// let AllTasksicon=domImageLoad(allTasksicon,AllTasksButton,"AllTaskicon")
// let AllTasksText=domElementMaker('p',"hometext",AllTasksButton,"Tasks");

let DatesArrangedButton=domElementMaker('button',"calender",section);
let Datesicon=domImageLoad(dateIcon,DatesArrangedButton,"Datesicon")
let DatesText=domElementMaker('p',"hometext",DatesArrangedButton,"Calender");

let ProjectsButton=domElementMaker('button',"Projects",section);
let ProjectsIcon=domImageLoad(projectsIcon,ProjectsButton,"projectIcon")
let ProjectsText=domElementMaker('p',"ProjectText",ProjectsButton,"Projects")

let divProjectsSection=domElementMaker('div',"projectsSection",section)

 let createprojectsButton=domElementMaker('button',"createprojects",section);
let createProjectsIcon=domImageLoad(createProjectsicon,createprojectsButton,"createprojectsicon")
let createProject=domElementMaker('p',"projectText",createprojectsButton,"Create Projects");
createprojectsButton.title="Create Project"
















return {createprojectsButton,siderbox,divProjectsSection};

})();



export let topBar=(()=>{

  let topBox=domElementMaker('div','topBox',document.body);
 
  let topText=domElementMaker('p','topText',topBox,`Enjoy your ${format(new Date(), 'EEEE')}`)
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




let inputBoxcreateProjects=(()=>{
  let dialogBox=domElementMaker('dialog',"dialogCreateProject",sidebar.siderbox);
  let messageBoxdiv=domElementMaker('form',"messageBoxdiv",dialogBox)
  let ProjectNamelabel=domElementMaker('label',"projectName",messageBoxdiv)
  ProjectNamelabel.setAttribute("for","projectNameinput");
  let projectNameinput=domElementMaker('input',"projectNameinput",messageBoxdiv)
  projectNameinput.placeholder="Go to the Moon";

  let buttonsdiv=domElementMaker('div',"buttondiv",messageBoxdiv)

  let cancelButton=domElementMaker('button',"cancelButton",buttonsdiv,"Cancel")
  let doneButton=domElementMaker('button',"doneButton",buttonsdiv,"Create")

  
return {dialogBox,cancelButton,doneButton,projectNameinput}
})()
function disablebutton(button){
  button.disabled=true;
  
  
  }

  function createFormforprojects(button){

    inputBoxcreateProjects();
    disablebutton(button)



  }

sidebar.createprojectsButton.addEventListener('click',function(e){ 
  inputBoxcreateProjects.dialogBox.showModal();
});

function clearAllElements(selector){

let holderContainer=document.querySelector(`${selector}>*`);
holderContainer.forEach(element => {
  element.remove();
});



}
function fromDomtoAllprojects()
{
  if (inputBoxcreateProjects.projectNameinput.value===""){

    return
   }
    
    
    let newProject=new ProjectManagement.createProject(inputBoxcreateProjects.projectNameinput.value);
    ProjectManagement.addToAllProjects(newProject);


}

function addProject(){

fromDomtoAllprojects();
createButtonsFromAllProjects();

}


inputBoxcreateProjects.doneButton.addEventListener('click',function (e) {
  
  addProject();
  console.log("yes")
  e.preventDefault();
  
  inputBoxcreateProjects.dialogBox.close();
  
   
  
 
});

let createTaskDialog=(()=>{
 
  let dialogTask=domElementMaker('dialog',"dialogTask",document.body);
  let RequirementsForm=domElementMaker('form',"messageBoxdiv",dialogTask)

  let TaskLabel=domElementMaker('label','DateLabel',RequirementsForm,"Task Name");
  TaskLabel.setAttribute("for","TaskName")
  let TaskName=domElementMaker('input',"TaskName",RequirementsForm,null,"Venus summit")
    
  let DescriptionLabel=domElementMaker('label','DateLabel',RequirementsForm,"Description");
  DescriptionLabel.setAttribute("for","TaskDescription")
  let TaskDescription=domElementMaker('textarea',"TaskDescription",RequirementsForm,null,"Take the mars rover at ubuntu station ")
  TaskDescription.rows=4;

  let dateLabel=domElementMaker('label','DateLabel',RequirementsForm,"Due Date");
  dateLabel.setAttribute("for","Date")

  let date=domElementMaker('input','Date',RequirementsForm,"Date","Due Date");
  date.type="date"; 

  let PriorityLabel=domElementMaker('label',"PriorityLabel",RequirementsForm,"Priority");
  PriorityLabel.setAttribute("for","selectDropDown")
  let PriorityDropdown=domElementMaker('select',"selectDropDown",RequirementsForm)
  let OptionHigh=domElementMaker('option',"optionHigh",PriorityDropdown,"High");
  let OptionMedium=domElementMaker('option',"optionMedium",PriorityDropdown,"Medium")
  let OptionLow=domElementMaker('option',"optionLow",PriorityDropdown,"Low")

  OptionHigh.setAttribute("value","High");
  OptionMedium.setAttribute("value","Medium");
  OptionLow.setAttribute("value","Low");
  OptionMedium.selected=true;

  TaskName.required=true;
  PriorityDropdown.required=true;
  date.required=true;
  TaskDescription.required=true;
  
  
let buttonHolder=domElementMaker('div',"buttonHolder",dialogTask)
let cancelTask=domElementMaker('button',"cancelTask",buttonHolder,"Cancel")
let createTask=domElementMaker('button',"createTask",buttonHolder,"Create")
createTask.type="Submit";



return {dialogTask,cancelTask,createTask,TaskName,TaskDescription,PriorityDropdown,date}
})();


createTaskicon.addTask.addEventListener('click',function (e) {
  createTaskDialog.dialogTask.showModal();
  
})

function closeTaskdialog(){

createTaskDialog.dialogTask.close()


}

createTaskDialog.cancelTask.addEventListener('click',function (e) {
  closeTaskdialog();
  
})

function addTask(){

  if(createTaskDialog.TaskName.value===""||createTaskDialog.TaskDescription.value===""||createTaskDialog.date.value===""){

    return 
  }
let newTask=new TaskManagement.createTask(createTaskDialog.TaskName.value,createTaskDialog.TaskDescription.value,createTaskDialog.date.value,createTaskDialog.PriorityDropdown.value)
TaskManagement.addingTask(newTask)

console.log(allMaterials.allTasks);
createTaskDialog.dialogTask.close();


}

createTaskDialog.createTask.addEventListener('click',function (e) {
  addTask();
  
  
})



inputBoxcreateProjects.cancelButton.addEventListener('click',function(e) {
  createButtonsFromAllProjects();
  e.preventDefault();
  
  inputBoxcreateProjects.dialogBox.close();
  
})

function refresh() {
  let projects=document.querySelectorAll('.projectName');

  projects.forEach(projects=>{
    console.log(projects);
    projects.remove()

  })
  
}

function createButtonsFromAllProjects(){

  refresh();

  let arrayOfprojects=allMaterials.allProjects;

for (let i = 0; i < arrayOfprojects.length; i++) {
 let button=domElementMaker('button',"project"+i+" ",sidebar.divProjectsSection,"> "+arrayOfprojects[i].projectTitle)
  button.className="projectName" ;
}





}
createButtonsFromAllProjects();
function closeAddtask() {
  
  
}

