const progressions = document.querySelector(".progressions")

document.addEventListener("DOMContentLoaded", function () {
    //Nav Menu
    const menus = document.querySelectorAll(".side-menu");
    M.Sidenav.init(menus, { edge: "right" });
    // Add Tasks
    const forms = document.querySelectorAll(".side-form");
    M.Sidenav.init(forms, { edge: "left" });
  });

//const renderProgression = (data, id)=>{
//  const html = ` <div class="center">
//  <div class="col s12 m7">
//    <div class="card">
//      <div class="card-image">
//        <img src="img/hidden_message.png" class="responsive-img materialboxed" >
//         <span class="card-title">${data.title}</span>
//           </div>
//            <div class="card-content">
//              <p>I am a very simple card. I am good at containing small bits of information.
//                 I am convenient because I require little markup to use effectively.</p>
//           </div>
//      <div class="icons">
//          <i class="material-icons">play_circle_outline</i>
//          <i class="material-icons">edit</i>
//          <i class="material-icons">dashboard</i>
//          <i class="material-icons">share</i>
///          <i class="material-icons">more_vert</i>
//      </div>
//    </div>
//  </div>
//</div>`;

//progressions.innerHTML += html;

//};