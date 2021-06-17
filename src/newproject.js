const newProject = (() => {
  const projectList = [];

  function Project(name) {
    this.name = name;
    this.todolist = [];
  }

  const addButton = document.querySelector('#add');
  const getProjectName = document.querySelector('#projectName')

  addButton.addEventListener('click', () => {
    if (getProjectName.value.length > 0) {
      let newProject = new Project(getProjectName.value);
      projectList.push(newProject)
      const ulSelector = document.querySelector('.wi')
      const createLi = document.createElement('li')
      createLi.classList.add('nav-item','my-1')
      const createAnchorTag = document.createElement('a')
      createAnchorTag.setAttribute('href','#')
      createAnchorTag.classList.add('active','nav-link')
      createAnchorTag.innerText = newProject.name;
      ulSelector.append(createLi)
      const liSelector = document.querySelector('.sidenav ul li:last-child')
      liSelector.appendChild(createAnchorTag)
      getProjectName.value = "";
      console.log(projectList)
    }
  });

})();

export default newProject;