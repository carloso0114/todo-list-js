const pageLoad = (() => {
    const contentContainer = document.querySelector('body');
    const header = document.createElement('header');
    header.innerHTML = `
    <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" id="home-link">To-Do List</a>
          </li>
        </ul>
        </div>
    </div>
    </nav>
    `;
    const main = document.createElement('div');
    main.setAttribute('id', 'content');
  
    const footer = document.createElement('footer');
  
    footer.classList.add('py-4', 'bg-dark', 'flex-shrink-0');
    footer.innerHTML = `
    <div class="container text-center">
      <a href='#' class='text-muted'>Footer</a>
    </div>`;
  
    contentContainer.append(header);
    contentContainer.append(main);
    contentContainer.append(footer);
  })();
  
  export default pageLoad;