var servisesLabel = document.getElementsByClassName("servises__label");
for (var i = 0; i < servisesLabel.length; i++) {
    servisesLabel[i].addEventListener("click", function(){
      if(!(this.classList.contains("active"))) {
        for(var i = 0; i < servisesLabel.length; i++) {
          servisesLabel[i].classList.remove("active");
        }
        this.classList.add("active");
      }
    })
}

var feedbackLink = document.querySelector(".contacts .btn");
var feedbackForm = document.querySelector(".feedback-popup");
var mapLink = document.querySelector(".map__link");
var mapPopup = document.querySelector(".map-popup");
var close = document.querySelector(".close");
var feedbackClose = document.querySelector(".feedback-popup .close");
var html = document.documentElement;

html.className = html.className.replace("js-off","js-on");

feedbackLink.addEventListener("click", function(event) {
	event.preventDefault();
	feedbackForm.classList.add("modal-content-show");
});

mapLink.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.add("modal-content-show");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	feedbackForm.classList.remove("modal-content-show");
  mapPopup.classList.remove("modal-content-show");
});

feedbackClose.addEventListener("click", function(event) {
	event.preventDefault();
	feedbackForm.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (feedbackForm.classList.contains("modal-content-show")) {
			feedbackForm.classList.remove("modal-content-show");
    }
    if (mapPopup.classList.contains("modal-content-show")) {
      mapPopup.classList.remove("modal-content-show");
    }
	}
});
