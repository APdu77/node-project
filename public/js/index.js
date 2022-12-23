console.log('test 1 2');

document.addEventListener('DOMContentLoaded', (e) =>   {
  fetch('/api/users')
  .then(res => res.json())
  .then(usersObject => {
    console.log(usersObject);

    usersObject.users.forEach( user => {
      let usersFrame = document.createElement('a');
      usersFrame.className = "col-6 col-sm-4 col-md-3 col-xl-2";
      let usersFigure = document.createElement('figure');
      usersFigure.className = "container-fluid";
      let usersFace = document.createElement('img');//
      usersFace.src = "/img/face.svg";
      usersFace.alt = "face";
      usersFace.className = "col-12";
      usersFace.width = 300;
      let usersFigCaption = document.createElement('figcaption');
      usersFigCaption.textContent = `${user.pseudo}`;
      document.querySelector('#users').appendChild(usersFrame);
      usersFrame.appendChild(usersFigure);
      usersFigure.appendChild(usersFace);
      usersFigure.appendChild(usersFigCaption);
    });
  })
})