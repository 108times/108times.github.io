let ready;
let current_page = "about";

function decideDelay() {
  let width = parseInt($(window).width());
  let initial = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--slider-delay"
    )
  );
  let value;
  console.log(value);
  if (width < 1201) {
    // value = initial - 100 + "ms";
    value = "1070ms";
  } else {
    value = "1170ms";
  }
  console.log(value);
  document.documentElement.style.setProperty("--slider-delay", value);
}

$(window).on("resize", function() {});

ready = $(document).ready(function() {
  let transform_rotate = 0;
  let this_url = window.location.href;

  let target_page = "about";
  let current_url = window.location.href;
  let flag = 1;

  let navItem = $(".listItem");

  let about_page = $("#about-page");
  let skills_page = $("#skills-page");
  let portfolio_page = $("#portfolio-page");
  let contact_page = $("#contact-page");
  let slider = $(".page-slider");

  let borger_icon_1 = $("#navbar-icon i:nth-child(1)");
  let borger_icon_2 = $("#navbar-icon i:nth-child(2)");
  let borger_icon_3 = $("#navbar-icon i:nth-child(3)");
  let borger_icon_4 = $("#navbar-icon i:nth-child(4)");

  let box = $(".box");
  pagePreLoad();
  $(".box #top").append(
    "<header id='header-box' class='d-flex justify-content-center align-items-center'>" +
      "<nav id='nav' class='container-fluid'>" +
      " <ul id='nav-list'class='d-flex flex-column justify-content-center align-items-center'>" +
      "<li class='listItem'><a id='about-link' href='#about'>about</a></li>" +
      " <li class='listItem'>" +
      " <a id='skills-link' href='#skills'>skills</a>" +
      "</li>" +
      " <li class='listItem'>" +
      "<a id='portfolio-link' href='#portfolio'>portfolio</a>" +
      " </li>" +
      "<li class='listItem'>" +
      "<a id='contact-link' href='#contact'>contact</a>" +
      "</li>" +
      " </ul>" +
      " </nav>" +
      "</header>"
  );
  $("#header")
    .find("nav")
    .find("ul")
    .find("li")
    .find("a")
    .find("#about-link")
    .click();

  decideDelay();
  function burger_become_x() {
    borger_icon_1.css({
      top: "45%",
      transform: "rotate(45deg)"
    });

    borger_icon_2.css({
      top: "45%",
      transform: "rotate(45deg)"
    });

    borger_icon_3.css({
      top: "45%",
      transform: "rotate(135deg)"
    });

    borger_icon_4.css({
      top: "45%",
      transform: "rotate(135deg)"
    });
    $(".inner-element").css({
      width: "74%"
    });
  }

  function burger_middle() {
    borger_icon_1.css({
      top: "50%",
      transform: "rotate(0deg)"
    });

    borger_icon_2.css({
      top: "50%",
      transform: "rotate(0deg)"
    });

    borger_icon_3.css({
      top: "50%",
      transform: "rotate(-180deg)"
    });

    borger_icon_4.css({
      top: "50%",
      transform: "rotate(-180deg)"
    });

    $(".inner-element").css({
      width: "50%"
    });
  }

  function burger_become_menu() {
    borger_icon_1.css({
      top: "38%",
      transform: "rotate(0deg)"
    });

    borger_icon_2.css({
      top: "50%",
      transform: "rotate(0deg)"
    });

    borger_icon_3.css({
      top: "50%",
      transform: "rotate(-180deg)"
    });

    borger_icon_4.css({
      top: "62%",
      transform: "rotate(-180deg)"
    });

    $("#navbar-icon:nth-child(n)").css({
      // width: "50%"
    });
  }

  function burger_hover() {
    borger_icon_1.css({
      top: "18%",
      transform: "rotate(0deg)"
    });

    borger_icon_2.css({
      top: "40%",
      transform: "rotate(0deg)"
    });

    borger_icon_3.css({
      top: "60%",
      transform: "rotate(-180deg)"
    });

    borger_icon_4.css({
      top: "82%",
      transform: "rotate(-180deg)"
    });

    $("#navbar-icon:nth-child(n)").css({
      // width: "50%"
    });
  }

  let menu_toggle = $("#navbar-toggle");

  function checkBox() {
    current_url = window.location.href;
    let current_page = "about";
    if (current_url.includes("#")) {
      let $position = current_url.indexOf("#");
      let $string = current_url.slice($position + 1);

      current_page = $string;
    } else {
      current_page = "about";
    }
    let selector = makeJQSelector(current_page);
    // console.log($("#front").find(selector).length);
    if ($("#front").find(selector).length < 1) {
      boxPageAppend(current_page);
    }
  }
  checkBox();

  function highlight(string) {
    let href1 = "#" + string;
    let item = $("a[href|='" + href1 + "']");
    console.log("item+" + item.attr("href"));
    item.css({
      color: "white"
    });
  }

  function highlightDefault(string) {
    let href1 = "#" + string;
    let item = $("a[href|='" + href1 + "']");
    console.log("item+" + item.attr("href"));
    item.css({
      color: "var(--header-text)"
    });
  }

  menu_toggle.on("hover", function() {
    burger_hover();
  });

  // ! MENU TOGGLE ON CLICK
  menu_toggle.on("vclick click", function() {
    decideDelay();
    transform_rotate += 90;
    let str = "rotate(";
    let str2 = str.concat(transform_rotate, "deg)");

    burger_middle();
    let header = $("#header");
    let headertop = parseInt(header.css("top"));

    current_url = window.location.href;
    let current_page = "about";
    if (current_url.includes("#")) {
      let $position = current_url.indexOf("#");
      let $string = current_url.slice($position + 1);

      current_page = $string;
    } else {
      current_page = "about";
    }

    if (headertop < -700) {
      highlight(current_page);
      checkBox();
      sliderPageHide(current_page);
      sliderPagesDestroy();

      // if (!$("#front").find(selector).length) {
      //   boxPageAppend(current_page);
      // }

      box.addClass("show-top");
      header.css({ top: "0" });
      // setTimeout(function() {
      //   boxPageDestroy("about");
      // }, 700);

      // setTimeout(function() {
      //   menu_toggle.css({ transform: str2 });
      // }, 120);

      setTimeout(burger_become_x, 470);
    } else if (headertop == 0) {
      setTimeout(function() {
        highlightDefault(current_page);
      }, 500);
      boxPageDestroy();
      boxPageAppend(current_page);
      sliderPageShow(current_page);
      removeOffset();
      box.removeClass("show-top");
      box.addClass("show-front");

      header.css({ top: "-100vh" });

      // setTimeout(function() {
      //   menu_toggle.css({ transform: str2 });
      // }, 10);

      setTimeout(burger_become_menu, 470);
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
        .css({});
      // nav.css({"color":string});
    })
    .mouseleave(function() {
      // nav.css({"background":navColor});
      $(this).css({
        "background-color": "inherit"
      });
      $(this)
        .parent()
        .css({});
    });

  let next = $("#next-toggle");

  next
    .on("mouseover", function() {
      let text = $(this).attr("href");
      text = text.replace("#", "");
      $(".next-toggle-before").text(text);
      let item = $(".next-toggle-before");

      let i1 = $("#next-toggle:nth-child(1)");
      i1.animate(
        {
          transform: "rotate(-185deg)"
        },
        200
      );

      let i2 = $("#next-toggle:nth-child(2)");
      i2.animate(
        {
          transform: "rotate(185deg)"
        },
        200
      );

      item.animate(
        {
          opacity: "1",
          right: "80px"
        },
        100
      );
    })
    .on("mouseleave", function() {
      let text = $(this).attr("href");
      text = text.replace("#", "");
      let item = $(".next-toggle-before");
      let i1 = $("#next-toggle:nth-child(1)").animate(
        {
          transform: "rotate(-135deg)"
        },
        200
      );

      let i2 = $("#next-toggle:nth-child(2)").animate(
        {
          transform: "rotate(155deg)"
        },
        200
      );
      item.animate(
        {
          opacity: "0",
          right: "-50px"
        },
        25
      );
    });

  next.on("click", function() {});

  decideDelay();

  function removeOffset(delay = 0) {
    let box = $(".box");
    box.css({
      "transition-delay": "0s",
      "transition-duration": "0s"
    });
    function local() {
      box.css({
        "transition-duration": "var(--default-duration)",
        "transition-delay": "var(--default-delay)",
        "transition-timing-function": "var(--default-timing)"
      });
    }

    box
      .removeClass("show-bottom")
      .removeClass("show-top")
      .removeClass("show-back")
      .removeClass("show-right")
      .removeClass("show-left")
      .removeClass("show-front");
    setTimeout(local(), 50);
  }

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

  function makeJQSelector(string, type = "id") {
    let char = "#";
    if (type == "id") char = "#";
    if (type == "class") char = ".";

    let selector = char + string + "-page";
    return selector;
  }

  function pagePreLoad() {
    let $position = current_url.indexOf("#");
    let $string = current_url.slice($position + 1);

    if (flag !== 1) {
      return;
    } else {
      if (!current_url.includes("#")) {
        $string = "about";
      } else {
        $position = current_url.indexOf("#");
        $string = current_url.slice($position + 1);

        current_page = $string;
        // console.log("CURRENT PAGE   __  _ _ _ " + current_page);
      }
      let wge = slider.children("section").remove();

      sliderPageAppend($string);
      left0($string);
      if (current_page == "contact") {
        hideNext();
      }
    }
    flag++;
  }

  function boxPageAppend(string) {
    let box = $(".box");
    box.css({
      "transition-delay": "0s",
      "transition-duration": "0s"
    });
    function local() {
      box.css({
        "transition-duration": "var(--default-duration)",
        "transition-delay": "var(--default-delay)",
        "transition-timing-function": "var(--default-timing)"
      });
    }
    setTimeout(local(), 10);

    let box_side = box.children("div");
    box_side = box.find("#front");
    // console.log(string + "box_page_append");
    switch (string) {
      case "about":
        box_side.append(
          //   "<section class='page' id='" +
          //     string +
          //     "-page' class='page d-flex justify-content-center align-items-center text-center'><div class='page-bg'></div>" +
          //     "<h2>Skills</h2></section>"
          // );
          "<section id='about-page' class='page d-flex justify-content-center align-items-center text-center'>" +
            "<div class='page-bg'><div class='page-bg-container'></div><div class='page-bg-bg-container'></div></div>" +
            "<div class='page-content'>" +
            "<div class='row page-row'>" +
            "<div   class='page-inner text-center card card-body container-fluid col-md-8 col-sm-12'>" +
            "<h1 class='m-auto pb-5'>Hello, I'm Amir!</h1>" +
            "<p>There is some information about me</p></div> </div> </div></section>"
        );
        break;

      case "skills":
        box_side.append(
          "<section class='page' id='" +
            string +
            "-page' class='page-container d-flex justify-content-center align-items-center text-center'>" +
            "<div class='page-bg'><div class='page-bg-container'></div><div class='page-bg-bg-container'></div></div>" +
            "<div class='page-content'>" +
            "<div class='row page-row'>" +
            "<div   class='page-inner text-center card card-body container-fluid col-md-8 col-sm-12'>" +
            "<h1 class='m-auto pb-5'>Hello, I'm Amir!</h1>" +
            "<p>There is some information about me</p></div> </div> </div></section>"
        );
        break;

      case "portfolio":
        box_side.append(
          "<section class='page' id='" +
            string +
            "-page' class='page-container d-flex justify-content-center align-items-center text-center'>" +
            "<div class='page-bg'><div class='page-bg-container'></div><div class='page-bg-bg-container'></div></div>" +
            "<div class='page-content'>" +
            "<div class='row page-row'>" +
            "<div   class='page-inner text-center card card-body container-fluid col-md-8 col-sm-12'>" +
            "<h1 class='m-auto pb-5'>Hello, I'm Amir!</h1>" +
            "<p>There is some information about me</p></div> </div> </div></section>"
        );
        break;

      case "contact":
        box_side.append(
          "<section class='page' id='" +
            string +
            "-page' class='page-container d-flex justify-content-center align-items-center text-center'>" +
            "<div class='page-bg'><div class='page-bg-container'></div><div class='page-bg-bg-container'></div></div>" +
            "<div class='page-content'>" +
            "<div class='row page-row'>" +
            "<div   class='page-inner text-center card card-body container-fluid col-md-8 col-sm-12'>" +
            "<h1 class='m-auto pb-5'>Hello, I'm Amir!</h1>" +
            "<p>There is some information about me</p></div> </div> </div></section>"
        );
        break;
    }
    left0box(string);
  }

  function sliderPageAppend(string) {
    // let slider = $(".page-slider");
    switch (string) {
      case "about":
        slider.append(
          //   "<section class='page' id='" +
          //     string +
          //     "-page' class='page d-flex justify-content-center align-items-center text-center'><div class='page-bg'></div>" +
          //     "<h2>Skills</h2></section>"
          // );
          "<section id='about-page' class='page d-flex justify-content-center align-items-center text-center'>" +
            "<div class='page-bg'><div class='page-bg-container'></div><div class='page-bg-bg-container'></div></div>" +
            "<div class='page-content'>" +
            "<div class='row page-row'>" +
            "<div   class='page-inner text-center card card-body container-fluid col-md-8 col-sm-12'>" +
            "<h1 class='m-auto pb-5'>Hello, I'm Amir!</h1>" +
            "<p>There is some information about me</p></div> </div> </div></section>"
        );
        break;

      case "skills":
        slider.append(
          "<section class='page' id='" +
            string +
            "-page' class='page-container d-flex justify-content-center align-items-center text-center'>" +
            "<div class='page-bg'><div class='page-bg-container'></div><div class='page-bg-bg-container'></div></div>" +
            "<div class='page-content'>" +
            "<div class='row page-row'>" +
            "<div   class='page-inner text-center card card-body container-fluid col-md-8 col-sm-12'>" +
            "<h1 class='m-auto pb-5'>Hello, I'm Amir!</h1>" +
            "<p>There is some information about me</p></div> </div> </div></section>"
        );
        break;
      case "portfolio":
        slider.append(
          "<section class='page' id='" +
            string +
            "-page' class='page-container d-flex justify-content-center align-items-center text-center'>" +
            "<div class='page-bg'><div class='page-bg-container'></div><div class='page-bg-bg-container'></div></div>" +
            "<div class='page-content'>" +
            "<div class='row page-row'>" +
            "<div   class='page-inner text-center card card-body container-fluid col-md-8 col-sm-12'>" +
            "<h1 class='m-auto pb-5'>Hello, I'm Amir!</h1>" +
            "<p>There is some information about me</p></div> </div> </div></section>"
        );
        break;

      case "contact":
        slider.append(
          "<section class='page' id='" +
            string +
            "-page' class='page-container d-flex justify-content-center align-items-center text-center'>" +
            "<div class='page-bg'><div class='page-bg-container'></div><div class='page-bg-bg-container'></div></div>" +
            "<div class='page-content'>" +
            "<div class='row page-row'>" +
            "<div   class='page-inner text-center card card-body container-fluid col-md-8 col-sm-12'>" +
            "<h1 class='m-auto pb-5'>Hello, I'm Amir!</h1>" +
            "<p>There is some information about me</p></div> </div> </div></section>"
        );
        break;
    }
  }

  function sliderPageHide(string) {
    let selector = "#" + string + "-page";

    let target = $(".page-slider").children(selector);

    $(target).css({
      "transition-duration": "0s",
      "transition-delay": "0s",
      visibility: "hidden",
      display: "none"
    });
  }
  function sliderPageShow(string) {
    let selector = "#" + string + "-page";

    let target = $(".page-slider").children(selector);

    $(target).css({
      "transition-duration": "0s",
      "transition-delay": "0s",
      visibility: "visible",
      display: "block"
    });
  }

  function boxPageDestroy(string) {
    box = $(".box");
    let box_side = box.children("div");
    box_side = box.find("#front");
    let target = box_side.children("section");
    target.remove();
  }

  function sliderPageDestroy(string) {
    let selector = "#" + string + "-page";
    let parent = $(".page-slider");
    let section = parent.find("section");
    // setTimeout(function() {
    parent.find(selector).remove();
    // }, 430);
  }
  function sliderPagesDestroy() {
    let parent = $(".page-slider");
    let section = parent.children("section");
    // setTimeout(function() {

    section.remove();
    // }, 430);
  }

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
        selector = makeJQSelector(mas[i]);
        // console.log("masi " + mas[i]);
        $(selector).remove();
      } else {
        if (slider.children().length > 1) {
          selector = "#" + current_page + "-page";
          $(selector).remove();
        }
      }
    }
  }

  function left100(string) {
    let selector = makeJQSelector(string);

    $(selector).css({
      left: "100vw"
    });
  }

  function left0(string) {
    let selector = "#" + string + "-page";
    selector = slider.find(selector);
    $(selector).css({
      left: "0"
    });
  }

  function left0box(string) {
    let selector = "#" + string + "-page";
    selector = box.find(selector);
    $(selector).css({
      left: "0"
    });
  }
  function box_slider_transition(current_page) {
    sliderPageHide(current_page);
    boxPageAppend(current_page);
    sliderPagesDestroy();
    setTimeout(function() {
      boxPageDestroy(current_page);
    }, 2000);
  }

  function mainRight(current_page, target_page) {
    box.css({
      "transition-duration": "var(--default-duration)",
      "transition-delay": "var(--default-delay)",
      "transition-timing-function": "var(--default-timing)"
    });

    if (current_page == target_page) {
      return;
    } else {
      console.log(
        "current_page = " + current_page + "  target_page = " + target_page
      );
      left100("about");

      checkForSections(current_page);

      removeOffset();

      box_slider_transition(current_page);

      sliderPageAppend(target_page);

      slide_right();

      function addClassShowRight() {
        box.addClass("show-right");
      }

      setTimeout(addClassShowRight, 950);

      setTimeout(function() {
        removeOffset();
      }, 1450);
    }
  }

  function controlNextAppear() {
    $("#next-toggle").animate(
      {
        right: "43px"
      },
      500
    );
  }
  function controlPrevAppear() {
    $("#previous-toggle").animate(
      {
        left: "43px"
      },
      500
    );
  }

  function navbarAppear() {
    $("#navbar-toggle").animate(
      {
        top: "37px"
      },
      500
    );
  }
  function hideNext() {
    $("#next-toggle").css({ display: "none" });
  }
  function showNext() {
    $("#next-toggle").css({ display: "block" });
  }

  function nextDecide() {
    let width = parseInt($(window).width());
    console.log(width);
    if (width < 769) {
      hideNext();
    } else showNext();
  }

  // navItem.on("click touchstart", function() {
  //   current_url = window.location.href;
  //   if (current_url.includes("#")) {
  //     let $position = current_url.indexOf("#");
  //     let $string = current_url.slice($position + 1);

  //     current_page = $string;
  //   } else {
  //     current_page = "about";
  //   }
  //   let href = $(this)
  //     .find("a")
  //     .attr("href");
  //   let target_page = href.replace("#", "");

  //   switch (href) {
  //     case "#about":
  //       mainRight(current_page, "about");
  //       setTimeout(nextDecide, 1000);
  //       break;

  //     case "#skills":
  //       mainRight(current_page, "skills");
  //       setTimeout(nextDecide, 1000);
  //       break;

  //     case "#portfolio":
  //       mainRight(current_page, "portfolio");
  //       setTimeout(nextDecide, 1000);
  //       break;

  //     case "#contact":
  //       mainRight(current_page, "contact");
  //       setTimeout(nextDecide, 1000);
  //       setTimeout(hideNext, 1000);
  //       break;
  //   }
  //   if (current_page == target_page) {
  //     setTimeout(navbarAppear, 1000);
  //     setTimeout(controlNextAppear, 700);
  //     setTimeout(controlPrevAppear, 700);
  //   } else {
  //     setTimeout(function() {
  //       $("#next-toggle").animate(
  //         {
  //           right: "-63px"
  //         },
  //         700
  //       );
  //     }, 500);

  //     setTimeout(function() {
  //       $("#navbar-toggle").animate(
  //         {
  //           top: "-85px"
  //         },
  //         700
  //       );
  //       $("#previous-toggle").animate(
  //         {
  //           left: "-63px"
  //         },
  //         700
  //       );
  //     }, 500);
  //     setTimeout(navbarAppear, 1800);
  //     setTimeout(controlNextAppear, 1800);
  //     setTimeout(controlPrevAppear, 1800);
  //   }
  // });
  navItem.on("touchstart click ", function() {
    current_url = window.location.href;
    if (current_url.includes("#")) {
      let $position = current_url.indexOf("#");
      let $string = current_url.slice($position + 1);

      current_page = $string;
    } else {
      current_page = "about";
    }
    let href = $(this)
      .find("a")
      .attr("href");
    let target_page = href.replace("#", "");
    if (current_page == target_page) {
      setTimeout(navbarAppear, 1100);
      setTimeout(controlNextAppear, 700);
      setTimeout(controlPrevAppear, 700);
    } else {
      setTimeout(function() {
        $("#next-toggle").animate(
          {
            right: "-63px"
          },
          700
        );
      }, 500);

      setTimeout(function() {
        $("#navbar-toggle").animate(
          {
            top: "-115px"
          },
          700
        );
        $("#previous-toggle").animate(
          {
            left: "-63px"
          },
          700
        );
      }, 500);
      setTimeout(navbarAppear, 1800);
      setTimeout(controlNextAppear, 1800);
      setTimeout(controlPrevAppear, 1800);
    }

    switch (href) {
      case "#about":
        mainRight(current_page, "about");
        setTimeout(nextDecide, 1000);
        $("#next-toggle").attr("href", "#skills");
        break;

      case "#skills":
        mainRight(current_page, "skills");
        setTimeout(nextDecide, 1000);
        $("#next-toggle").attr("href", "#portfolio");
        break;

      case "#portfolio":
        mainRight(current_page, "portfolio");
        setTimeout(nextDecide, 1000);
        $("#next-toggle").attr("href", "#contact");
        break;

      case "#contact":
        mainRight(current_page, "contact");
        setTimeout(nextDecide, 1000);
        $("#next-toggle").attr("href", "#about");
        setTimeout(hideNext, 1000);
        break;
    }
  });

  $("#next-toggle").on("touchstart click ", function() {
    current_url = window.location.href;
    let current_page = "about";
    if (current_url.includes("#")) {
      let $position = current_url.indexOf("#");
      let $string = current_url.slice($position + 1);

      current_page = $string;
    } else {
      current_page = "about";
    }
    // console.log("CUrrEnTT pagEeE " + current_page);

    let href = $(this).attr("href");
    // console.log(href + "===============================");

    let target_page = href.replace("#", "");
    // console.log("TARGETTTTT PAGEEEE  E E E E + " + target_page);
    // console.log("CURREBT PAGEEEE  E E E E + " + current_page);
    // if (current_page == target_page) {
    //   setTimeout(navbarAppear, 1100);
    //   setTimeout(controlNextAppear, 700);
    //   setTimeout(controlPrevAppear, 700);
    // } else {
    setTimeout(function() {
      $("#next-toggle").animate(
        {
          right: "-63px"
        },
        700
      );
    }, 500);

    setTimeout(function() {
      $("#navbar-toggle").animate(
        {
          top: "-115px"
        },
        700
      );
      $("#previous-toggle").animate(
        {
          left: "-43px"
        },
        700
      );
    }, 500);
    setTimeout(navbarAppear, 1800);
    setTimeout(controlNextAppear, 1800);
    setTimeout(controlPrevAppear, 1800);
    // }
    switch (current_page) {
      case "about":
        mainRight(current_page, "skills");
        $(this).attr("href", "#skills");
        break;

      case "skills":
        mainRight(current_page, "portfolio");
        $(this).attr("href", "#portfolio");
        break;

      case "portfolio":
        mainRight(current_page, "contact");
        $(this).attr("href", "#contact");
        setTimeout(hideNext, 1000);
        break;

      case "contact":
        mainRight(current_page, "contact");
        break;
    }
  });
});
