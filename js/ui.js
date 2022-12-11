const progressions = document.querySelector(".progressions")

document.addEventListener("DOMContentLoaded", function () {
  //Nav Menu
  const menus = document.querySelectorAll(".side-menu");
  M.Sidenav.init(menus, { edge: "right" });
  // Add Tasks
  const forms = document.querySelectorAll(".side-form");
  M.Sidenav.init(forms, { edge: "left" });
});

const renderProgression = (data, id) => {
  const html = ` <div class="prog container center">
  <div class="col s12 m7">
    <div class="card" data-id ="${id}">
      <div class="card-image">
        <img src="img/hidden_message.png" class="responsive-img materialboxed" >
         <span class="card-title"><a href="/pages/hiddenmessage.html" class="waves-effect white-text" >${data.title}</a></span>
         <div class="progression-description">${data.type}</div>
           </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
                 I am convenient because I require little markup to use effectively.</p>
            </div>
      <div class="icons">
          <i class="material-icons">play_circle_outline</i>
          <i class="material-icons">edit</i>
          <i class="material-icons">dashboard</i>
          <i class="material-icons">share</i>
          <i class="material-icons">more_vert</i>
          <div class="progression-delete">
              <i class="material-icons">delete_outline</i>
            </div>
      </div>
    </div>
  </div>
</div>`;

  progressions.innerHTML += html;

};

function removeProgression(id) {
  const progression = document.querySelector(`.progression[data-id]=${id}`);
  progression.remove();
}