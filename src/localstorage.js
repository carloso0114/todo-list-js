import {
    projectList, projectDomLocal, Project
} from './newproject';
const save_localstorage = () => {
    localStorage.setItem('ListaDeProyectos', JSON.stringify(projectList))
}

const get_localstorage = () => {
    
    if (localStorage.getItem('ListaDeProyectos')) {
        let getTask = JSON.parse(localStorage.getItem('ListaDeProyectos')) 
        getTask.forEach(t => {
            projectList.push(t)
            projectDomLocal(t)
        });
    } else {
        const defaultProject = new Project('Default Project')
        projectList.push(defaultProject)
        projectDomLocal(defaultProject)
    }
}

export { save_localstorage, get_localstorage }