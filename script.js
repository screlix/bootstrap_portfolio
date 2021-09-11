var hoverimg = document.querySelectorAll(".holo img");
// var spans = document.querySelectorAll("")
hoverimg.forEach((element) => {
  // console.log("hhhh");
  element.addEventListener("mouseover", function (eve) {
    // console.log(element.nodeName);
    if (element.nodeName === "IMG") {
      element.setAttribute(
        "style",
        "transform:scale(1.1); filter:brightness(0.15)"
      );
      element.parentElement.setAttribute(
        "style",
        "transform:scale(1.1);filter:drop-shadow(4px 3px 15px rgb(211, 208, 208))"
      );
    }
  });
  element.addEventListener("mouseout", () => {
    if (element.nodeName === "IMG") {
      element.style.transform = "scale(1)";
      element.style.filter = "";
      element.parentElement.style.filter = "none";
      element.parentElement.style.transform = "none";
    }
  });
});
$(document).ready(function () {
  console.log("hello");
  $(".meme").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    // appendDots: true,
    dots: true,
  });
});
