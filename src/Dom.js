
//creating the DOM
import './style.css'
import { Taskineachproject } from './project.js'
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
import {add, addDays, format} from 'date-fns';
import { ProjectManagement } from './add.js'
import { allMaterials } from './add.js'
import { spaceTravels } from './add.js'
import { TaskManagement } from './add.js'
import briefcaseProjects from './icons/briefcase-outline.svg'
import messageIcon from './icons/message-outline.svg'
import { shiftProject } from './project.js'
import { completeButtonforEachProject } from './check.js'
import { amountofCompletedTasks } from './add.js'
import deleteicon from './icons/deleteIcons.svg'
import todayIcon from './icons/today.svg'
import { arrangeDates } from './add.js'
import { deleteTasks } from './delete.js'
import isThisWeek from 'date-fns/isThisWeek/index.js'
import { deleteProject } from './delete.js'

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

let Today=domElementMaker.domElementCreator('button',"todayButton",section)
let TodayIcon=domElementMaker.ImageLoadtoDOm(todayIcon,Today,"todayIcon");
let TodayText=domElementMaker.domElementCreator('p',"TodayText",Today,"Today");


let DatesArrangedButton=domElementMaker.domElementCreator('button',"calender",section);
let Datesicon=domElementMaker.ImageLoadtoDOm(dateIcon,DatesArrangedButton,"Datesicon")
let DatesText=domElementMaker.domElementCreator('p',"hometext",DatesArrangedButton,"This Week");

let ProjectsButton=domElementMaker.domElementCreator('button',"Projects",section);
let ProjectsIcon=domElementMaker.ImageLoadtoDOm(projectsIcon,ProjectsButton,"projectIcon")
let ProjectsText=domElementMaker.domElementCreator('p',"ProjectText",ProjectsButton,"Projects")

let divProjectsSection=domElementMaker.domElementCreator('div',"projectsSection",section)

 let createprojectsButton=domElementMaker.domElementCreator('button',"createprojects",section);
let createProjectsIcon=domElementMaker.ImageLoadtoDOm(createProjectsicon,createprojectsButton,"createprojectsicon")
let createProject=domElementMaker.domElementCreator('p',"projectText",createprojectsButton,"Create Projects");
createprojectsButton.title="Create Project"
















return {createprojectsButton,siderbox,divProjectsSection,Today};

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

export let knowWhichsectiondialogis={

  section:"Home"


}

let inputBoxcreateProjects=(()=>{
  let dialogBox=domElementMaker.domElementCreator('dialog',"dialogCreateProject",sidebar.siderbox);
  let messageBoxdiv=domElementMaker.domElementCreator('form',"messageBoxdiv",dialogBox)
  messageBoxdiv.setAttribute("method","dialog");
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
  
 creatingProject()
 e.preventDefault();
  inputBoxcreateProjects.dialogBox.close();
  
   
  
 
});

export function creatingProject(){

  balancingprojects();
  projectButtons()
  
  deleteProjectDom.eraseProject()


}

export let stylingSlelectedButtons=(()=>{
  function makingTheButtonGlow(button){

   button.style.setProperty("color","white")
   button.style.setProperty("background-color","#F39C12")
   button.style.setProperty("text-align","center");
   
   
   }
   
  function returnAllbuttonstlyesTodefault(){
   
     let allButtons=document.querySelectorAll('#project');
   
   allButtons.forEach(Button=>{
   
   Button.style.setProperty("background-color","transparent");
   Button.style.setProperty("color","#828489");
   Button.style.setProperty("text-align","left");
   
   })
   
   
   
   }





return{returnAllbuttonstlyesTodefault,makingTheButtonGlow}
})() 

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
  TaskDescription.setAttribute("maxlength",45);

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
  e.preventDefault();
})

function addTask(){

  if(createTaskDialog.TaskName.value===""||createTaskDialog.TaskDescription.value===""||createTaskDialog.date.value===""){

    return 
  }

let newTask=new TaskManagement.createTask(createTaskDialog.TaskName.value,createTaskDialog.TaskDescription.value,createTaskDialog.date.value,createTaskDialog.PriorityDropdown.value)
newTask.Project=allMaterials.allProjects[TaskManagement.projectPos.position].projectTitle;
TaskManagement.addTasktoProject(newTask);
deleteTasks.clearOverdue()
TaskManagement.addingToallTasks();


createTaskDialog.dialogTask.close();


}
//move this to add.js
export function notHomesection(){

  knowWhichsectiondialogis.section="notHome"

}
function knowsection(){

  if(knowWhichsectiondialogis.section==="Home"){
    // console.log("we ar in",knowWhichsectiondialogis.section)
    settingAlltasksinHome()

  }
  else if(knowWhichsectiondialogis.section==="Today"){
      todayButtonFunctionalities.todayTask();
      

  }

}
function enterTask() {
  addTask();
  
  movingTasks.placingTasks();
  
  movingTasks.updateAlltasks()
  
  knowsection();
  completeTask.manageCheckbox();
  deleteingTasksofproject.buttonManager()

 
  
  
}

createTaskDialog.createTask.addEventListener('click',function (e) {

  enterTask();
  
   
  

 
})



inputBoxcreateProjects.cancelButton.addEventListener('click',function(e) {
  createButtonsFromAllProjects();
  
  e.preventDefault();
  
  inputBoxcreateProjects.dialogBox.close();
  
})

function refresh() {
  let projects=document.querySelectorAll('.projectName');
  let HoldProject=document.querySelectorAll('#HoldProject')
  let deleteProject=document.querySelectorAll('#removeProject')
  deleteProject.forEach(deleteProject=>{

deleteProject.remove()

  })
  HoldProject.forEach(HoldProject=>{
    HoldProject.remove()
  })

  projects.forEach(projects=>{
    // console.log(projects);
    projects.remove()

  })
  
}
let deleteProjectDom=(()=>{

  function eraseProject() {
    let allDeleteProjectbtns=document.querySelectorAll('#removeProject');
    let index=1;
    allDeleteProjectbtns.forEach(btn=>{

      let closeButton=new deleteProject.removeProject(btn,index)

      index++;
    })
    
  }

eraseProject()

return {eraseProject}
})()

export function createButtonsFromAllProjects(){

  refresh();

  let arrayOfprojects=allMaterials.allProjects;

for (let i = 1; i < arrayOfprojects.length; i++) {
  let containButtons=domElementMaker.domElementCreator('div',"HoldProject",sidebar.divProjectsSection)
 let button=domElementMaker.domElementCreator('button',"project",containButtons,"> "+arrayOfprojects[i].projectTitle)
 let removeProjectbtn=domElementMaker.domElementCreator('button',"removeProject",containButtons,"X")
 if(i===TaskManagement.projectPos.position){
    stylingSlelectedButtons.makingTheButtonGlow(button)
 } 
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

  function makeStatistics() {
    let statisticsHolderbox=contentBoxelementMaker('div',"statisticsHolderbox",contentTobeupdatedChangingProjects.content)
    let cardNames=["Current Projects","Overall Tasks","Completed Tasks"];
    let namesOfStats=["informationOfProjectsHolder","infomationOfTasksHolder","informationOfcompletedTasksHolder"]
    let cardDetails=["projectNumber","TaskNumber","completedNumber"]
    let icons=[briefcaseProjects,messageIcon,allTasksicon]
    let idNames=["numberOfProjectsdiv","numberOfTasksdiv","completedTasks"]
    let staticsOfcard=[allMaterials.allProjects.length-1,allMaterials.allTasks.length,0]
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
  }
  makeStatistics();
  
  

  
  
 
  
return{makeStatistics}
})()

function UpdateNumberOfProjects() {
  if(knowWhichsectiondialogis.section==="Home"){
  let ProjectNumber=document.querySelector('#projectNumber')
  ProjectNumber.textContent=allMaterials.allProjects.length-1;
  }
}
export let movingTasks=(()=>{
  function makeTaskbox() {
    
  let TaskBox=contentBoxelementMaker('div',"TaskBox",contentTobeupdatedChangingProjects.content)
  return TaskBox
  }
   
let taskcards=(({title,description,date,priority,status},TaskBox=document.querySelector('#TaskBox'))=>{

    let taskDiv=contentBoxelementMaker('div',"TaskDiv",TaskBox)
    
    let dateDiv=contentBoxelementMaker('div',"dateDiv",taskDiv)

    
    let Date=contentBoxelementMaker('p',"daysRemaining",dateDiv,date);
    let deletebutton=domElementMaker.domElementCreator('button',"deleteTask",dateDiv)
    let deleteIcon=domElementMaker.ImageLoadtoDOm(deleteicon,deletebutton,"deleteIcon");
    let taskTitle=contentBoxelementMaker('p',"taskTitle",taskDiv,title);
    let DescriptionTask=contentBoxelementMaker('p',"explainationTask",taskDiv,description)
    let buttonsManipulationDiv=contentBoxelementMaker('div',"buttonsManipulationDiv",taskDiv)
    let PriorityTag=contentBoxelementMaker('button',"Priotrity",buttonsManipulationDiv,priority)
    let edit=contentBoxelementMaker('button',"editTask",buttonsManipulationDiv,"edit");
    let complete=contentBoxelementMaker('input',"completeTask",buttonsManipulationDiv,status);
    //re-factor this make a fn
    if (status==="done"){

     complete.checked=true;
     taskTitle.style.setProperty("text-decoration","line-through")
     DescriptionTask.style.setProperty("text-decoration","line-through")
    }

  
    complete.type="checkbox";
    complete.title="toogle complete"
    taskDiv.className="task";
    dateDiv.className="task";
    Date.className="task";
    taskTitle.className="task";
    DescriptionTask.className="task";
    buttonsManipulationDiv.className="task";
    PriorityTag.className="task";
    edit.className="task";
    complete.className="task";
  
  
  
  
  
  });

  function resettingTaskboxAfterdeleteHome() {
    clearTaskBox()
    for (let i = 0; i < allMaterials.allTasks.length; i++) {
      let task=allMaterials.allTasks[i];
      // console.log(task)

      
     taskcards(task);
    
     
     
    }

    
  }  
  function placingTasks() {
    clearTaskBox();
    if(knowWhichsectiondialogis.section==="calender"){

      for (let i = 0; i < allMaterials.allProjects[TaskManagement.projectPos.position].projectList.length; i++) {
        let task=allMaterials.allProjects[TaskManagement.projectPos.position].projectList[i];
        // console.log(task)
        console.log(task.date);
       if(isThisWeek(new Date(task.date))){
       
        taskcards(task);


       } 
      


        
       
      
       
       
      

    }

 
  }
  else{
    for (let i = 0; i < allMaterials.allProjects[TaskManagement.projectPos.position].projectList.length; i++) {
      let task=allMaterials.allProjects[TaskManagement.projectPos.position].projectList[i];
      // console.log(task)

      
     taskcards(task);
    
     
     
    }
  }
  
  }
  
  function clearTaskBox(){
  
    let allTaskscards=document.querySelectorAll('.task');
    allTaskscards.forEach(allTaskscards=>{
      allTaskscards.remove();
    })
  
  
  }
  function updateAlltasks() {
    if(knowWhichsectiondialogis.section==="Home"){
      let numberOftasks=document.querySelector('#TaskNumber')
      numberOftasks.textContent=allMaterials.allTasks.length;

    }
   
  }



return{placingTasks,updateAlltasks,makeTaskbox,taskcards,resettingTaskboxAfterdeleteHome};
})()
let taskBoxtokeepTasks=(()=>{
let TaskBox=contentBoxelementMaker('div',"TaskBox",contentTobeupdatedChangingProjects.content);


return {TaskBox};
})()



export let defaultProjectButton=(()=>{
  let projectButton=document.querySelectorAll('#project');

  let defaultProject=projectButton[0]


return{defaultProject}
})()

 function projectButtons(){
  let allprojectButtons=document.querySelectorAll('#project');
 
  let index=1;
  allprojectButtons.forEach(projectButton=>{
   
    
      let TaskPlacing=new Taskineachproject(projectButton,index)
      
     index++;

    

    


  })


}

projectButtons();

export let movingfromOneprojecttoanother=(()=>{

  function refreshTaskBox(){
      let allElements=document.querySelectorAll('.contentToRemove');
      allElements.forEach(element=>{

        element.remove()

      })
      let alltasks=document.querySelectorAll('.task')
      alltasks.forEach(element=>{

        element.remove()
      })
      function TaskBoxcleanup() {
        let TaskBox=document.querySelectorAll('#TaskBox')
        TaskBox.forEach(TaskBox=>{
          TaskBox.remove();
      
        })
      }
     TaskBoxcleanup();
      


  }



return {refreshTaskBox,TaskBoxcleanup};
})()


let Homebutton=document.querySelector('#homeDiv');

export function homeButtonReset() {
  TaskManagement.projectPos.position=0;
  movingfromOneprojecttoanother.refreshTaskBox();
    statistics.makeStatistics();
    movingTasks.makeTaskbox();
    UpdateNumberOfProjects()

    // movingTasks.placingTasks();
    // movingTasks.updateAlltasks();
    knowWhichsectiondialogis.section="Home";
    knowsection();
    completeTask.manageCheckbox();
    updatingCompletedTask()
    deleteingTasksofproject.buttonManager()
    // settingAlltasksinHome()
}

Homebutton.addEventListener('click',function(e){

  homeButtonReset();
  

})

export let projectButtonActionsTogiveTasks=(()=>{


  function createTaskBoxforProject(){

    let TaskBoxforProject=domElementMaker.domElementCreator('div',"TaskBox",document.querySelector('#contentTobeUpdated'));
    TaskBoxforProject.className=".contentToRemove";
    
    
    // return TaskBoxforProjectknowWhichsectiondialogis.section="Today"
    }

  function navigatingTheProjectAndGivingTasks(index){
   

    for (let i = 0; i <  allMaterials.allProjects[index].projectList.length; i++) {
      
      movingTasks.taskcards(allMaterials.allProjects[index].projectList[i])
      
    }





  }



return {createTaskBoxforProject,navigatingTheProjectAndGivingTasks}
})()
function TaskBoxcleanup() {
  let TaskBox=document.querySelectorAll('.task')
  TaskBox.forEach(TaskBox=>{
    TaskBox.remove();

  })
}
// movingTasks.makeTaskbox();
function settingAlltasksinHome() {
TaskBoxcleanup();
console.log("hello");

for (let i = 0; i < allMaterials.allTasks.length; i++) {
  // console.log(allMaterials.allTasks[i]);
 movingTasks.taskcards(allMaterials.allTasks[i])
  
}


  
}

settingAlltasksinHome();

export let completeTask=(()=>{

  function manageCheckbox() {
    let index=0;
let checkboxOfcomplete=document.querySelectorAll('#completeTask');

checkboxOfcomplete.forEach(checkbox=>{

  let complete=new completeButtonforEachProject(checkbox,index)
  index++;
})
    
  }





return {manageCheckbox}

})()

export let strikeOuteffect=(()=>{

  function strikeoutWords(position,chosenStyle="line-through") {
    let allTasktitles=document.querySelectorAll('#taskTitle')
    let explainationTask=document.querySelectorAll('#explainationTask')

    allTasktitles[position].style.setProperty("text-decoration",chosenStyle);
    explainationTask[position].style.setProperty("text-decoration",chosenStyle);
  }
  



return {strikeoutWords}
})()


function keepingStrikeOut({status},) {
  
}

export function updatingCompletedTask() {
  let updateTask=document.querySelector('#completedNumber');
  let numbers=amountofCompletedTasks.countCompletedTasks()
  updateTask.textContent=numbers;
  // console.log(amountofCompletedTasks.countCompletedTasks());
}

updatingCompletedTask();

export let todayButtonFunctionalities=(()=>{

    let todayButton=sidebar.Today;

    function todayTask() {
      movingfromOneprojecttoanother.refreshTaskBox();
      movingTasks.makeTaskbox();
      
      arrangeDates.todayDates()
      
      
    }
    function todayRefresh() {
      knowWhichsectiondialogis.section="Today"
      TaskManagement.projectPos.position=0;
      todayTask()
      completeTask.manageCheckbox();
      deleteingTasksofproject.buttonManager()
      
    }
    todayButton.addEventListener('click',function(e){
      
      todayRefresh()
    })



return {todayTask,todayRefresh}
})()


export let orderTasks=(()=>{

  let calender=document.querySelector('#calender');
  function arrangeTask() {
    movingfromOneprojecttoanother.refreshTaskBox();
    
  }
  function makeTheboxesForEachday() {
    let HolderforDates=contentBoxelementMaker('div',"holderforDates",document.querySelector('#contentTobeUpdated'))
    let TodayBox=contentBoxelementMaker('div',"TodayBox",HolderforDates)
    let Todayheading=contentBoxelementMaker('p',"heading",TodayBox,"Tomorrow")
    let taskboxToday=contentBoxelementMaker('div',"taskBoxToday",TodayBox)
    let tomorrowBox=contentBoxelementMaker ('div',"tomorrowBox",HolderforDates);
   
    let tomorrowHeading=contentBoxelementMaker('p',"tomorrowHeading",tomorrowBox,add(new Date(),{days:2}).toLocaleString('en-us',{day:'numeric',month:'long'}))
    let taskTomorrowbox=contentBoxelementMaker('div',"taskBoxtomorrow",tomorrowBox)
    
  }

  function CalenderRefresh() {
    knowWhichsectiondialogis.section="calender";
    movingfromOneprojecttoanother.refreshTaskBox();
   movingTasks.makeTaskbox();
  
   arrangeDates.ThisWeek();
    
    deleteingTasksofproject.buttonManager()
  }

calender.addEventListener('click',function (e) {
  CalenderRefresh()
 
})



return {CalenderRefresh}
})()


export let deleteingTasksofproject=(()=>{


  function buttonManager() {
    let allDeletingButton=document.querySelectorAll('#deleteTask');
   
    for (let i = 0; i < allDeletingButton.length; i++) {
      
      let buttonManagement=new deleteTasks.deleteTask(allDeletingButton[i],i);
      
      
    }

                

    
  }


buttonManager();

return {buttonManager}
})()





