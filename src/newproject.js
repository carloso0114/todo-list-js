const newProject = (() => {

  function Project(name) {
    this.name = name;
    this.todolist = [];
  }

  const addButton = document.querySelector('#add');
  const getProjectName = document.querySelector('#projectName')
 
  addButton.addEventListener('click', () => { 
    if (getProjectName.value.length > 0) {
    let newProject = new Project(getProjectName.value);
    const sidebarSelector = document.querySelector('.sidenav')
    sidebarSelector.append(newProject.name)
    getProjectName.value="";
    console.log(newProject)
    }
  });

})();

export default newProject;