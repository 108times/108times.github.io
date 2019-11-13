let ready;
let transform_rotate = 0;
let this_url = window.location.href;

console.log(this_url);
// console.log(getType(this_url));
ready = $(document).ready(function() {
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

  menu_toggle.on("click touchstart", function() {
    transform_rotate += 90;
    let str = "rotate(";

    let str2 = str.concat(transform_rotate, "deg)");

    let header = $("#header");
    let headertop = parseInt(header.css("top"));

    if (headertop < -700) {
      header.css({ top: "0" });
      menu_toggle.css({ transform: str2 });
      burger_become_x();
    } else if (headertop == 0) {
      header.css({ top: "-100vh" });
      menu_toggle.css({ transform: str2 });
      burger_become_menu();
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
      console.log(string);
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
  // let main = $('#main');
  // let offset =main.css("left");
  // console.log("offset = "+offset);
  //  //offset =offset.replace(
  //  offset = parseInt(main.css("left"));
  //
  // console.log("offset = "+offset);
  next.on("click", function() {
    console.log(this_url);
    let initialOffset = box.css("");
  });
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

// let rotateRight = $(".rotate-right");
// console.log(rotateRight);
// let rotateDeg = parseInt(rotateRight.css("transform").split(",")[1]);
// console.log(rotateDeg);
// function boxRotate() {
//   let rotateDeg = parseInt(rotateRight.css("transform").split(",")[5]);
//   box.addClass("rotate-right");
// }

let navItem = $(".listItem");

let about_page = $("#about-page");
let skills_page = $("#skills-page");
let portfolio_page = $("#portfolio-page");
let contact_page = $("#contact-page");
let slider = $(".page-slider");

function slide_right(page) {
  let leftOffset = slider.css("left");
  leftOffset = parseFloat(leftOffset.split("px"));
  console.log("left offset =" + leftOffset);
  // leftOffset = leftOffset;
  if (leftOffset == "0") {
    slider.css({
      left: "-100vw"
    });
  } else {
    slider.css({
      left: leftOffset + leftOffset
    });
  }

  console.log("left offset =" + leftOffset);
}

function slide_left() {
  let leftOffset = slider.css("left");
  leftOffset = parseFloat(leftOffset.split("px"));
  console.log("left offset =" + leftOffset);
  if (leftOffset == "0") {
    slider.css({
      left: "+100vw"
    });
  } else {
    slider.css({
      left: leftOffset - leftOffset
    });
  }

  console.log("left offset =" + leftOffset);
}

function appendSlider(string) {
  switch (string) {
    case "about":
      slider.append(
        "<section class='page' id='" +
          string +
          "-page'><h2>Section Skills</h2></section>"
      );
      break;

    case "skills":
      slider.append(
        "<section class='page' id='" +
          string +
          "-page'><h2>Section</h2></section>"
      );
      break;

    case "portfolio":
      slider.append(
        "<section class='page' id='" +
          string +
          "-page'><h2>Section</h2></section>"
      );
      break;

    case "contact":
      slider.append(
        "<section class='page' id='" +
          string +
          "-page'><h2>Section</h2></section>"
      );
      break;
  }
}

function pageDestroy(string) {
  let selector = "#" + string + "-page";
  console.log(selector);
  $(selector).css({
    "transition-duration": "0s",
    "transition-delay": "0s",
    visibility: "hidden"
  });
}

function pageSetRight(string) {
  let selector = "#" + string + "-page";
  // $(selector).
}

navItem.on("click", function() {
  let href = $(this)
    .find("a")
    .attr("href");
  switch (href) {
    case "#about":
      removeOffset();
      box.addClass("show-front");

      break;

    case "#skills":
      removeOffset();
      pageDestroy("about");
      appendSlider("skills");
      slide_right();
      box.addClass("show-right");
      setTimeout(removeOffset, 4000);
      break;

    case "#portfolio":
      removeOffset();
      box.addClass("show-left");
      break;

    case "#contact":
      removeOffset();
      box.addClass("show-back");
      break;
  }
});

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
