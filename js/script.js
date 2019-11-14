let ready;
let transform_rotate = 0;
let this_url = window.location.href;

ready = $(document).ready(function() {
  $("#header")
    .find("nav")
    .find("ul")
    .find("li")
    .find("a")
    .find("#about-link")
    .click();
  function burger_become_x() {
    let borger_icon_1 = $("#navbar-icon i:nth-child(1)");
    let borger_icon_2 = $("#navbar-icon i:nth-child(2)");
    let borger_icon_3 = $("#navbar-icon i:nth-child(3)");
    let borger_icon_4 = $("#navbar-icon i:nth-child(4)");

    borger_icon_1.css({
      top: "45%",
      transform: "rotate(45deg)"
    });

    borger_icon_2.css({
      top: "45%",
      transform: "rotate(-45deg)"
    });

    borger_icon_3.css({
      top: "45%",
      transform: "rotate(135deg)"
    });

    borger_icon_4.css({
      top: "45%",
      transform: "rotate(225deg)"
    });
    $("#navbar-icon  :nth-child(n)").css({
      // "background":"white"
    });
  }

  function burger_middle() {
    let borger_icon_1 = $("#navbar-icon i:nth-child(1)");
    let borger_icon_2 = $("#navbar-icon i:nth-child(2)");
    let borger_icon_3 = $("#navbar-icon i:nth-child(3)");
    let borger_icon_4 = $("#navbar-icon i:nth-child(4)");

    borger_icon_1.css({
      top: "50%",
      transform: "rotate(0)"
    });

    borger_icon_2.css({
      top: "50%",
      transform: "rotate(0)"
    });

    borger_icon_3.css({
      top: "50%",
      transform: "rotate(0)"
    });

    borger_icon_4.css({
      top: "50%",
      transform: "rotate(0)"
    });

    $("#navbar-icon  :nth-child(n)").css({
      "transition-durration": "1s"
    });
  }

  function burger_become_menu() {
    let borger_icon_1 = $("#navbar-icon i:nth-child(1)");
    let borger_icon_2 = $("#navbar-icon i:nth-child(2)");
    let borger_icon_3 = $("#navbar-icon i:nth-child(3)");
    let borger_icon_4 = $("#navbar-icon i:nth-child(4)");

    borger_icon_1.css({
      top: "30%",
      transform: "rotate(0)"
    });

    borger_icon_2.css({
      top: "50%",
      transform: "rotate(0)"
    });

    borger_icon_3.css({
      top: "50%",
      transform: "rotate(0)"
    });

    borger_icon_4.css({
      top: "70%",
      transform: "rotate(0)"
    });

    $("#navbar-icon  :nth-child(n)").css({
      // "background":"black"
    });
  }

  let menu_toggle = $("#navbar-toggle");

  menu_toggle.on("click tap", function() {
    transform_rotate += 90;
    let str = "rotate(";

    let str2 = str.concat(transform_rotate, "deg)");

    let header = $("#header");
    let headertop = parseInt(header.css("top"));
    burger_middle();
    if (headertop < -700) {
      header.css({ top: "0" });
      setTimeout(function() {
        menu_toggle.css({ transform: str2 });
      }, 2000);

      setTimeout(burger_become_x(), 700);
    } else if (headertop == 0) {
      header.css({ top: "-100vh" });
      setTimeout(function() {
        menu_toggle.css({ transform: str2 });
      }, 2000);

      setTimeout(burger_become_menu(), 700);
    }
  });

  let menu_list = $("#nav-list");

  menu_list.on("click", function() {
    menu_toggle.click();
  });

  let menu_ite = menu_list.find("li");
  let menu_item = menu_ite.find("a");
  let nav = $("#nav");
  let navColor = nav.css("background");

  menu_item
    .mouseenter(function() {
      let txt = this.text;
      let swidth = $(this).css("width");
      let string = "var(--" + txt + "-color)";

      $(this).css({
        "background-color": "#253155"
      });
      $(this)
        .parent()
        .css({
          width: "30%"
        });
      // nav.css({"color":string});
    })
    .mouseleave(function() {
      // nav.css({"background":navColor});
      $(this).css({
        "background-color": "inherit"
      });
      $(this)
        .parent()
        .css({
          width: "80%"
        });
    });

  let next = $("#next-toggle");

  next.on("click", function() {});
});

let box = $(".box");
function removeOffset(delay = 0) {
  box
    .removeClass("show-bottom")
    .removeClass("show-top")
    .removeClass("show-back")
    .removeClass("show-right")
    .removeClass("show-left")
    .removeClass("show-front");
}

let navItem = $(".listItem");

let about_page = $("#about-page");
let skills_page = $("#skills-page");
let portfolio_page = $("#portfolio-page");
let contact_page = $("#contact-page");
let slider = $(".page-slider");

function slide_left() {
  let leftOffset = slider.css("left");
  leftOffset = parseFloat(leftOffset.split("px"));
  if (leftOffset == "0") {
    slider.css({
      left: "+100vw"
    });
  } else {
    slider.css({
      left: leftOffset - leftOffset
    });
  }
}
function boxPageAppend(string) {
  let box_side = $("#box-front");
  console.log("page appnd " + string);
  switch (string) {
    case "about":
      box_side.append(
        "<section class='page' id='" +
          string +
          "-page' class='page d-flex justify-content-center align-items-center text-center'><div class='page-bg'></div>" +
          "<h2>Skills</h2></section>"
      );
      //   "<section id='about-page' class='page d-flex justify-content-center align-items-center text-center'>" +
      //     "<div class='page-bg'></div>" +
      //     "<div class='row page-row'>" +
      //     "<div id='about-content'  class='card card-body container-fluid col-md-8 col-sm-12'>" +
      //     "<h1 class='m-auto pb-5'>Hello, I'm Amir!</h1>" +
      //     "<p>There is some information about me</p></div> </div> </section>"
      // );
      break;

    case "skills":
      box_side.append(
        "<section class='page' id='" +
          string +
          "-page' class='page d-flex justify-content-center align-items-center text-center'><div class='page-bg'></div>" +
          "<h2>Skills</h2></section>"
      );
      break;

    case "portfolio":
      box_side.append(
        "<section class='page' id='" +
          string +
          "-page' class='page d-flex justify-content-center align-items-center text-center'><div class='page-bg'></div>" +
          "<h2>Portfolio</h2></section>"
      );
      break;

    case "contact":
      box_side.append(
        "<section class='page' id='" +
          string +
          "-page' class='page d-flex justify-content-center align-items-center text-center'><div class='page-bg'></div>" +
          "<h2>Contact</h2></section>"
      );
  }
}

function sliderPageAppend(string) {
  // let slider = $(".page-slider");
  switch (string) {
    case "about":
      slider.append(
        "<section class='page' id='" +
          string +
          "-page' class='page d-flex justify-content-center align-items-center text-center'><div class='page-bg'></div>" +
          "<h2>Skills</h2></section>"
      );
      //   "<section id='about-page' class='page d-flex justify-content-center align-items-center text-center'>" +
      //     "<div class='page-bg'></div>" +
      //     "<div class='row page-row'>" +
      //     "<div id='about-content'  class='card card-body container-fluid col-md-8 col-sm-12'>" +
      //     "<h1 class='m-auto pb-5'>Hello, I'm Amir!</h1>" +
      //     "<p>There is some information about me</p></div> </div> </section>"
      // );
      break;

    case "skills":
      slider.append(
        "<section class='page' id='" +
          string +
          "-page' class='page d-flex justify-content-center align-items-center text-center'><div class='page-bg'></div>" +
          "<h2>Skills</h2></section>"
      );
      break;
    case "portfolio":
      slider.append(
        "<section class='page' id='" +
          string +
          "-page' class='page d-flex justify-content-center align-items-center text-center'><div class='page-bg'></div>" +
          "<h2>Portfolio</h2></section>"
      );
      break;

    case "contact":
      slider.append(
        "<section class='page' id='" +
          string +
          "-page' class='page d-flex justify-content-center align-items-center text-center'><div class='page-bg'></div>" +
          "<h2>Contact</h2></section>"
      );
      break;
  }
}

function sliderPageHide(string) {
  let selector = "#" + string + "-page";
  console.log("yes i am" + selector);
  let target = $(".page-slider").find(selector);

  $(target).css({
    "transition-duration": "0s",
    "transition-delay": "0s",
    visibility: "hidden"
  });
}

function boxPageDestroy(string) {
  let selector = "#" + string + "-page";
  console.log("AAAAAAAAAAAA" + string);
  let parent = $("#box-front");
  setTimeout(function() {
    parent.find(selector).remove();
  }, 1000);
}

function sliderPageDestroy(string) {
  let selector = "#" + string + "-page";
  let parent = $(".page-slider");
  let section = parent.find("section");
  setTimeout(function() {
    parent.find(selector).remove();
  }, 430);
}

// function slide_right(page) {
//   let leftOffset = slider.css("left");
//   leftOffset = parseFloat(leftOffset.split("px"));

//   if (leftOffset == "0") {
//     slider.css({
//       left: "-100vw"
//     });
//   } else {
//     let slider_child = $(".page-slider").find("section");
//     slider.css({
//       left: "-100vw"
//     });
//     slider_child.css({
//       left: "100vw"
//     });
//   }
// }

function slide_right(page) {
  let leftOffset = slider.css("left");
  leftOffset = parseFloat(leftOffset.split("px"));

  let slider_child = $(".page-slider").find("section");
  slider_child.css({
    left: "0"
  });
}

function checkForSections(current_page) {
  let about_page = $("#about-page");
  let skills_page = $("#skills-page");
  let portfolio_page = $("#portfolio-page");
  let contact_page = $("#contact-page");
  let slider = $(".page-slider");
  let mas = ["about", "skills", "portfolio", "contact"];
  for (let i = 0; i < mas.length - 1; i++) {
    if (current_page == mas[i]) {
      selector = "#" + mas[i] + "-page";
      console.log("masi " + mas[i]);
      $(selector).remove();
    } else {
      if (slider.children().length > 1) {
        selector = "#" + current_page + "-page";
        $(selector).remove();
      }
    }
  }
}

function aboutFix() {
  $("#about-page").css({
    left: "100vw"
  });
}

function mainRight(current_page, target_page) {
  // console.log(
  //   "current_page = " + current_page + "  target_page = " + target_page
  // );

  if (target_page == current_page) {
    return;
  } else {
    aboutFix();
    removeOffset();
    sliderPageHide(current_page);
    boxPageAppend(current_page);
    sliderPageDestroy(current_page);

    sliderPageAppend(target_page);
    slide_right();
    checkForSections(current_page);
    boxPageDestroy(current_page);

    box.addClass("show-right");
    setTimeout(function() {
      removeOffset();
    }, 1000);
  }
}

navItem.on("click", function() {
  let current_url = window.location.href;
  let current_page = "about";
  if (current_url.includes("#about")) {
    current_page = "about";
  }
  if (current_url.includes("#skills")) {
    current_page = "skills";
  }
  if (current_url.includes("#portfolio")) {
    current_page = "portfolio";
  }
  if (current_url.includes("#contact")) {
    current_page = "contact";
  }

  let href = $(this)
    .find("a")
    .attr("href");
  console.log(href);
  switch (href) {
    case "#about":
      mainRight(current_page, "about");
      break;

    case "#skills":
      mainRight(current_page, "skills");
      break;

    case "#portfolio":
      mainRight(current_page, "portfolio");
      break;

    case "#contact":
      mainRight(current_page, "contact");
      break;
  }
});

$("#next-toggle").on("click", function() {});
// navItem.on("click", function() {
//   let href = $(this)
//     .find("a")
//     .attr("href");

//   switch (href) {
//     case "#about":
//       removeOffset();
//       box.addClass("show-front");
//       break;
//     case "#skills":
//       removeOffset();
//       box.addClass("show-right");
//       break;
//     case "#portfolio":
//       removeOffset();
//       box.addClass("show-left");
//       break;
//     case "#contact":
//       removeOffset();
//       box.addClass("show-back");
//       break;
//   }
// });

// if (parseInt(main.css("left")) >= -200){
//     offset = offset - 100;
//     $('#main').css({
//         "left":offset+"%"
//     })
//     console.log(offset);
// }
// console.log("offset = "+offset);
