
function loadScript() {
  // document.addEventListener('DOMContentLoaded', function () {
      let container = document.querySelector(".tabs");
      let buttons = container.querySelectorAll(".tabs__button");

      buttons.forEach(btn => {
        btn.addEventListener("click", event => {
          switchActive(btn);
        });
      });
      function switchActive(activeBtn) {
        const position = [...buttons].indexOf(activeBtn);
        buttons.forEach(element => {
          element.setAttribute(
            "aria-selected",
            element !== activeBtn ? "false" : "true");
            var tab = $(element).attr('aria-controls');
            if(element == activeBtn){
            $(".show").removeClass("show");
            $(".active").removeClass("active");
            document.getElementById(tab).classList.add('show')
            document.getElementById(tab).classList.add('active')
          }
        });

        container.style.setProperty("--background-offset", position * 100 + "%");
      }
  // });
}




