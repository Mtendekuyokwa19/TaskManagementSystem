
//implementing local storages

import { createButtonsFromAllProjects, creatingProject, homeButtonReset, projectButtons } from "./Dom";
import { TaskManagement, allMaterials } from "./add";

export let localStorageManagement=(()=>{


    function addTotheLocalStorage() {
        localStorage.clear()
    
        for (let i = 0; i < allMaterials.allProjects.length; i++) {
            localStorage.setItem("project"+i,JSON.stringify(allMaterials.allProjects[i]))
            
        }
        
    }

    function gettingtheProjectsFromStorage() {
        let index=0

       while (!(localStorage.getItem("project"+index)===null)) {
        allMaterials.allProjects[index]=JSON.parse(localStorage.getItem("project"+index))
        index++;
       }
        
    }


return {gettingtheProjectsFromStorage,addTotheLocalStorage}
})()

export let loadingThetasksWhenRefreshing=(()=>{

    function loadTasksRefresh() {
        localStorageManagement.gettingtheProjectsFromStorage();
        TaskManagement.addingToallTasks();
        homeButtonReset()
        createButtonsFromAllProjects()
        projectButtons()
        creatingProject()
    }


return {loadTasksRefresh}
})()