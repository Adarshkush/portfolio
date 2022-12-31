window.onscroll = function() {sticky()};

function sticky() {
  if (document.documentElement.scrollTop > 0) {
    document.getElementById("header").className = "header-sticky";
  } else {
    document.getElementById("header").className = "header";
  }
}