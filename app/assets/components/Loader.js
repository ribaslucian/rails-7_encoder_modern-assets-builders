import $ from "jquery";

// window.onload = function () {
//     $('.Loader').hide();
//     // document.querySelectorAll('.Loader').style.display = 'none';
// }

window.onbeforeunload = function () {
    $('.Loader').show();
    // document.querySelectorAll('.Loader').style.visibility = 'hidden';
}

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        $('.Loader').hide();
    }
  }