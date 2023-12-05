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
import briefcaseProjects from './icons/briefcase-outline.svg'
import messageIcon from './icons/message-outline.svg'

class createElementtoDom{

  domElementCreator(type,newId,parentBox,Words="",placeholderWords=""){
    let newElement=document.createElement(type)
    newElement.id=newId;
    newElement.textContent=Words
    newElement.placeholder=placeholderWords;
    parentBox.appendChild(newElement);
    
    return newElement;
    
    }
    ImageLoadtoDOm(Icon,parentBox,idName) {
    
      let myIcon = new Image();
      myIcon.src = Icon;
      myIcon.id=idName;
      parentBox.appendChild(myIcon);
    
      return myIcon;
        
    }
    


}

let domElementMaker=new createElementtoDom();



export let sidebar=(()=>{

let siderbox=domElementMaker.domElementCreator('div',"sidebox",document.body);

let appTitleHolder=domElementMaker.domElementCreator('div',"appTitleHolder",siderbox);

let appLogo=domElementMaker.ImageLoadtoDOm(HeadImage,appTitleHolder,"appLogo")

let appTitle=domElementMaker.domElementCreator('p',"appTitle",appTitleHolder,"Ubuntu Tasks");




let section=domElementMaker.domElementCreator('div',"section",siderbox)

let homeButton=domElementMaker.domElementCreator('button',"homeDiv",section);
let homeicon=domElementMaker.ImageLoadtoDOm(HomeIcon,homeButton,"homeicon")
let homeText=domElementMaker.domElementCreator('p',"hometext",homeButton,"Home");


let DatesArrangedButton=domElementMaker.domElementCreator('button',"calender",section);
let Datesicon=domElementMaker.ImageLoadtoDOm(dateIcon,DatesArrangedButton,"Datesicon")
let DatesText=domElementMaker.domElementCreator('p',"hometext",DatesArrangedButton,"Calender");

let ProjectsButton=domElementMaker.domElementCreator('button',"Projects",section);
let ProjectsIcon=domElementMaker.ImageLoadtoDOm(projectsIcon,ProjectsButton,"projectIcon")
let ProjectsText=domElementMaker.domElementCreator('p',"ProjectText",ProjectsButton,"Projects")

let divProjectsSection=domElementMaker.domElementCreator('div',"projectsSection",section)

 let createprojectsButton=domElementMaker.domElementCreator('button',"createprojects",section);
let createProjectsIcon=domElementMaker.ImageLoadtoDOm(createProjectsicon,createprojectsButton,"createprojectsicon")
let createProject=domElementMaker.domElementCreator('p',"projectText",createprojectsButton,"Create Projects");
createprojectsButton.title="Create Project"
















return {createprojectsButton,siderbox,divProjectsSection};

})();



export let topBar=(()=>{

  let topBox=domElementMaker.domElementCreator('div','topBox',document.body);
 
  let topText=domElementMaker.domElementCreator('p','topText',topBox,`Enjoy your ${format(new Date(), 'EEEE')}`)
  let topBoximage=domElementMaker.ImageLoadtoDOm(topBoxImage,topBox,'topBoximagegirl');
  let musicpic=domElementMaker.ImageLoadtoDOm(musicimage,topBox,"musicboy")
  let boywithpapers=domElementMaker.ImageLoadtoDOm(boypapers,topBox,"boyWithpapers");



  return {topBox};
})();

export let createTaskicon=(()=>{

  let addTask=domElementMaker.domElementCreator('button',"addTask",document.body)
  addTask.title="Create new task"

  let addTaskIcon=domElementMaker.ImageLoadtoDOm(addTaskImage,addTask,"addtaskicon")



return {addTask}
})()



let inputBoxcreateProjects=(()=>{
  let dialogBox=domElementMaker.domElementCreator('dialog',"dialogCreateProject",sidebar.siderbox);
  let messageBoxdiv=domElementMaker.domElementCreator('form',"messageBoxdiv",dialogBox)
  let ProjectNamelabel=domElementMaker.domElementCreator('label',"projectName",messageBoxdiv)
  ProjectNamelabel.setAttribute("for","projectNameinput");
  let projectNameinput=domElementMaker.domElementCreator('input',"projectNameinput",messageBoxdiv)
  projectNameinput.placeholder="Go to the Moon";

  let buttonsdiv=domElementMaker.domElementCreator('div',"buttondiv",messageBoxdiv)

  let cancelButton=domElementMaker.domElementCreator('button',"cancelButton",buttonsdiv,"Cancel")
  let doneButton=domElementMaker.domElementCreator('button',"doneButton",buttonsdiv,"Create")

  
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

function balancingprojects(){
  addProject();
  UpdateNumberOfProjects();

}

inputBoxcreateProjects.doneButton.addEventListener('click',function (e) {
  
  balancingprojects();
  e.preventDefault();
  inputBoxcreateProjects.dialogBox.close();
  
   
  
 
});

let createTaskDialog=(()=>{
 
  let dialogTask=domElementMaker.domElementCreator('dialog',"dialogTask",document.body);
  let RequirementsForm=domElementMaker.domElementCreator('form',"messageBoxdiv",dialogTask)

  let TaskLabel=domElementMaker.domElementCreator('label','DateLabel',RequirementsForm,"Task Name");
  TaskLabel.setAttribute("for","TaskName")
  let TaskName=domElementMaker.domElementCreator('input',"TaskName",RequirementsForm,null,"Venus summit")
    
  let DescriptionLabel=domElementMaker.domElementCreator('label','DateLabel',RequirementsForm,"Description");
  DescriptionLabel.setAttribute("for","TaskDescription")
  let TaskDescription=domElementMaker.domElementCreator('textarea',"TaskDescription",RequirementsForm,null,"Take the mars rover at ubuntu station ")
  TaskDescription.rows=4;

  let dateLabel=domElementMaker.domElementCreator('label','DateLabel',RequirementsForm,"Due Date");
  dateLabel.setAttribute("for","Date")

  let date=domElementMaker.domElementCreator('input','Date',RequirementsForm,"Date","Due Date");
  date.type="date"; 

  let PriorityLabel=domElementMaker.domElementCreator('label',"PriorityLabel",RequirementsForm,"Priority");
  PriorityLabel.setAttribute("for","selectDropDown")
  let PriorityDropdown=domElementMaker.domElementCreator('select',"selectDropDown",RequirementsForm)
  let OptionHigh=domElementMaker.domElementCreator('option',"optionHigh",PriorityDropdown,"High");
  let OptionMedium=domElementMaker.domElementCreator('option',"optionMedium",PriorityDropdown,"Medium")
  let OptionLow=domElementMaker.domElementCreator('option',"optionLow",PriorityDropdown,"Low")

  OptionHigh.setAttribute("value","High");
  OptionMedium.setAttribute("value","Medium");
  OptionLow.setAttribute("value","Low");
  OptionMedium.selected=true;

  TaskName.required=true;
  PriorityDropdown.required=true;
  date.required=true;
  TaskDescription.required=true;
  
  
let buttonHolder=domElementMaker.domElementCreator('div',"buttonHolder",dialogTask)
let cancelTask=domElementMaker.domElementCreator('button',"cancelTask",buttonHolder,"Cancel")
let createTask=domElementMaker.domElementCreator('button',"createTask",buttonHolder,"Create")
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
 let button=domElementMaker.domElementCreator('button',"project"+i+" ",sidebar.divProjectsSection,"> "+arrayOfprojects[i].projectTitle)
  button.className="projectName" ;
}





}
createButtonsFromAllProjects();
function closeAddtask() {
  
  
}

let contentTobeupdatedChangingProjects=(()=>{

let content=domElementMaker.domElementCreator('div','contentTobeUpdated',document.body)



return {content};
})()




  function contentBoxelementMaker(type,newId,parentBox,Words="",placeholderWords="",classTitle="contentToRemove"){
    let element=domElementMaker.domElementCreator(type,newId,parentBox,Words,placeholderWords="")
    element.className=classTitle;

    return element;
  }









let statistics=(()=>{

  let statisticsHolderbox=contentBoxelementMaker('div',"statisticsHolderbox",contentTobeupdatedChangingProjects.content)
  let cardNames=["Current Projects","Current Tasks","Completed Tasks"];
  let namesOfStats=["informationOfProjectsHolder","infomationOfTasksHolder","informationOfcompletedTasksHolder"]
  let cardDetails=["projectNumber","TaskNumber","completedNumber"]
  let icons=[briefcaseProjects,messageIcon,allTasksicon]
  let idNames=["numberOfProjectsdiv","numberOfTasksdiv","completedTasks"]
  let staticsOfcard=[allMaterials.allProjects.length,allMaterials.allTasks.length,0]
  let specificNameforEntry=["projectDetails","TaskDetails","completedTask"];
  let backdrops=["projectsBackdrop","tasksBackdrop","completedBackdrop"]
  
for (let i = 0; i < cardNames.length; i++) {
  let cardDIV=contentBoxelementMaker('div',idNames[i],statisticsHolderbox);
  let informationHolder=contentBoxelementMaker('div',namesOfStats[i],cardDIV);
  let infoOfCard=contentBoxelementMaker('p',cardDetails[i],informationHolder,staticsOfcard[i]);
  let ProjectDetails=contentBoxelementMaker('p',specificNameforEntry[i],informationHolder,cardNames[i]);
  let IconDiv=contentBoxelementMaker('div',"iconDiv",cardDIV);
  let iconImage=domElementMaker.ImageLoadtoDOm(icons[i],IconDiv,"iconStatics");
  let iconImageBackdrop=domElementMaker.domElementCreator('div',backdrops[i],IconDiv)
}
  
  

  
  
 
  

})()

function UpdateNumberOfProjects() {
  let ProjectNumber=document.querySelector('#projectNumber')
  ProjectNumber.textContent=allMaterials.allProjects.length;
  
}