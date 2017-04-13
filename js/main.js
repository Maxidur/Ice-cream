var modal = document.querySelector(".user");
var modal_close = document.querySelector(".modal-overlay-close");
var search = document.querySelector(".search");
var modal_search = document.querySelector(".modal-search");
var search_focus = document.querySelector("[name=search]");

modal.addEventListener("click", function (event) {
	event.preventDefault();
	modal_close.classList.add("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (modal_close.classList.contains("modal-overlay-show")) {
			modal_close.classList.remove("modal-overlay-show");
		}
	}
});

search.addEventListener("click", function(event) {
	event.preventDefault();
	if (modal_search.classList.contains("modal-search-close")) {
		modal_search.classList.remove("modal-search-close");
		search_focus.focus();
		} else{
			modal_search.classList.add("modal-search-close");
		}
});



