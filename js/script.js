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
  if (width < 1201) {
    // value = initial - 100 + "ms";
    value = "1330ms";
  } else {
    value = "1330ms";
  }
  console.log(value);
  document.documentElement.style.setProperty("--slider-delay", value);
}

let header_var = "hidden";
var option = 1;
$(window).on("resize", function () { });

ready = $(document).ready(function () {
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
    // '<img alt="solar-system" classs="bg-img" src="icons/solar-system.png" />' +
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

  function scroll(current, target) {
    // target.prop("scrollTop", current.scrollTop);

    // ! target.scrollTop = current.scrollTop;
    console.log("1 tee current" + current.scrollTop);
    // console.log("1 tee target" + target.scrollTop);
    // .prop("scrollLeft", this.scrollLeft);
  }
  function sliderOnScroll() {
    $(".page-slider #skills-page .page-content").on("scroll", function () {
      let target = $(".box__face--front #skills-page .page-content")[0];
      let current = $(".page-slider #skills-page .page-content")[0];
      scroll(current, target);
    });
  }

  function boxOnScroll() {
    $(".box__face--front #skills-page .page-content").on("scroll", function () {
      let current = $(".box__face--front #skills-page .page-content")[0];
      let target = $(".page-slider #skills-page .page-content")[0];
      scroll(current, target);
    });
  }
  sliderOnScroll();
  // boxOnScroll();

  $("body").on("DOMNodeInserted", "#skills-page", function () {
    // boxOnScroll();
    sliderOnScroll();
  });
  // $("body").on("DOMNodeInserted", "#skills-page", function() {

  // });
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
      top: "30%",
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
      top: "70%",
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
      color: "var(--text-danger)"
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

  menu_toggle
    .on("mouseover", function () {
      if (header_var == "hidden") {
        burger_hover();
      } else if (header_var == "shown") {
      }
    })
    .on("mouseleave", function () {
      if (header_var == "hidden") {
        burger_become_menu();
      } else if (header_var == "shown") {
      }
    });
  var listener = '0';
  // ! MENU TOGGLE ON CLICK
  $(document).on("click", "#navbar-toggle", function () {
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
      header_var = "shown";
      highlight(current_page);
      checkBox();
      sliderPageHide(current_page);
      sliderPagesDestroy();
      box.addClass("show-top");
      header.css({ top: "0" });
      setTimeout(burger_become_x, 470);

      $(".page-slider").css({
        visibility: "visible"
      });
    } else if (headertop == 0) {
      header.css({
        "transition-duration": "0s",
        opacity: "0"
      });
      setTimeout(function () {
        header.css({
          opacity: "1",
          "transition-duration": "var(--default-duration)"
        });
      }, 500);
      header_var = "hidden";
      setTimeout(function () {
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
      $(".page-slider").css({
        visibility: "hidden"
      });
    }
  });
  // $(document).on("click", "#navbar-toggle", function () {
  //   console.log('listener' + listener);
  //   let el = $('.page-slider').find('section');
  //   let id = "#" + el.attr('id');
  //   let length = $(id).length;
  //   console.log(length);

  //   if (listener == '0') {
  //     $('.box').addClass("show-top");
  //     $('.page-slider').css({
  //       visibility: "hidden",
  //       display: 'none'
  //     });
  //     if (length == 0) {
  //     }
  //     else {
  //       el.detach();
  //       $('.box .box__face--front').append($(id));
  //     }
  //     // removeOffset();
  //     listener = '1';
  //   } else
  //     if (listener == '1') {
  //       $('.page-slider').css({
  //         visibility: "visible",
  //         display: 'grid'
  //       });
  //       if (length == 0) {
  //       }
  //       else {
  //         el.detach();
  //         $('.page-slider').append(id);
  //       }
  //       // $('.box').removeClass('show-top');
  //       removeOffset();
  //       // $('.box').addClass('show-front');
  //       listener = '0';
  //     }

  //   decideDelay();
  //   transform_rotate += 90;
  //   let str = "rotate(";
  //   let str2 = str.concat(transform_rotate, "deg)");

  //   burger_middle();
  //   let header = $("#header-box");
  //   let headertop = parseInt(header.css("top"));
  // });
  // menu_toggle.on("tap", function() {
  //   menu_toggle.click();
  // });
  let menu_list = $("#nav-list");

  menu_list.on("click", function () {
    menu_toggle.click();
    $(".page-slider").css({
      visibility: "visible"
    });
  });

  let menu_ite = menu_list.find("li");
  let menu_item = menu_ite.find("a");
  let nav = $("#nav");
  let navColor = nav.css("background");

  menu_item
    .mouseenter(function () {
      let txt = this.text;
      let swidth = $(this).css("width");
      let string = "var(--" + txt + "-color)";

      $(this).css({
        // "background-color": "#253155"
      });
      $(this)
        .parent()
        .css({});
      // nav.css({"color":string});
    })
    .mouseleave(function () {
      // nav.css({"background":navColor});
      $(this).css({
        // "background-color": "inherit"
      });
      $(this)
        .parent()
        .css({});
    });

  let next = $("#next-toggle");

  function nextDisableTemporary() {
    let nextt = $(".next-toggle-before");
    setTimeout(function () {
      nextt.addClass("transparent");
    }, 140);
    setTimeout(function () {
      nextt.removeClass("transparent");
    }, 900);
  }
  function previousDisableTemporary() {
    let previouss = $(".previous-toggle-before");
    setTimeout(function () {
      previouss.addClass("transparent");
    }, 140);
    setTimeout(function () {
      previouss.removeClass("transparent");
    }, 900);
  }
  next
    .on("mouseenter", function () {
      current_url = window.location.href;
      if (current_url.includes("#")) {
        let $position = current_url.indexOf("#");
        let $string = current_url.slice($position + 1);

        current_page = $string;
      } else {
        current_page = "about";
      }
      switch (current_page) {
        case "about":
          $(this).attr("href", "#skills");
          break;
        case "skills":
          $(this).attr("href", "#portfolio");
          break;

        case "portfolio":
          $(this).attr("href", "#contact");
          break;
        case "contact":
          $(this).attr("href", "#contact");
          break;
      }

      let text = $(this).attr("href");
      text = text.replace("#", "");
      $(".next-toggle-before").text(text);
      let item = $(".next-toggle-before");

      let i1 = $("#next-toggle .i1");
      i1.css({
        transform: "rotate(65deg)",
        "margin-top": "6px"
      });
      // $("#next-toggle").toggleClass("changed");

      let i2 = $("#next-toggle .i2");
      i2.css({
        transform: "rotate(-65deg)",
        "margin-top": "21px"
      });

      item.animate(
        {
          opacity: "1",
          right: "72px"
        },
        130
      );
    })
    .on("mouseleave", function () {
      let text = $(this).attr("href");
      text = text.replace("#", "");
      let item = $(".next-toggle-before");

      // $("#next-toggle").toggleClass("changed");

      let i1 = $("#next-toggle .i1");
      i1.css({
        transform: "rotate(45deg)",
        "margin-top": "10px"
      });
      // $("#next-toggle").toggleClass("changed");

      let i2 = $("#next-toggle .i2");
      i2.css({
        transform: "rotate(-45deg)",
        "margin-top": "17px"
      });

      item.animate(
        {
          opacity: "0",
          right: "-10px"
        },
        75
      );
    });
  let previous = $("#previous-toggle");
  previous
    .on("mouseover", function () {
      current_url = window.location.href;
      if (current_url.includes("#")) {
        let $position = current_url.indexOf("#");
        let $string = current_url.slice($position + 1);

        current_page = $string;
      } else {
        current_page = "about";
      }
      switch (current_page) {
        case "about":
          $(this).attr("href", "#about");
          break;
        case "skills":
          $(this).attr("href", "#about");
          break;
        case "portfolio":
          $(this).attr("href", "#skills");
          break;
        case "contact":
          $(this).attr("href", "#portfolio");
          break;
      }

      let text = $(this).attr("href");
      text = text.replace("#", "");
      $(".previous-toggle-before").text(text);
      let item = $(".previous-toggle-before");

      let i1 = $("#previous-toggle .i1");
      i1.css({
        transform: "rotate(-65deg)",
        "margin-top": "6px"
      });
      // $("#next-toggle").toggleClass("changed");

      let i2 = $("#previous-toggle .i2");
      i2.css({
        transform: "rotate(65deg)",
        "margin-top": "21px"
      });

      item.animate(
        {
          opacity: "1",
          left: "72px"
        },
        130
      );
    })
    .on("mouseleave", function () {
      let text = $(this).attr("href");
      text = text.replace("#", "");
      let item = $(".previous-toggle-before");

      // $("#next-toggle").toggleClass("changed");

      let i1 = $("#previous-toggle .i1");
      i1.css({
        transform: "rotate(-45deg)",
        "margin-top": "10px"
      });
      // $("#next-toggle").toggleClass("changed");

      let i2 = $("#previous-toggle .i2");
      i2.css({
        transform: "rotate(45deg)",
        "margin-top": "17px"
      });

      item.animate(
        {
          opacity: "0",
          left: "-10px"
        },
        75
      );
    });

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
      if (current_page == "about") {
        hidePrev();
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
          '<div class="copyright">@2019 Amir Kadenov</div>' +
          "<div class='page-bg'></div></div>" +
          "<div class='page-content'>" +
          "<div class='row page-row'>" +
          "<div   class='page-inner text-justify card card-body container-fluid col-md-6 col-sm-12'>" +
          "<h1 class='m-auto p-3'>Hello, I'm Amir.</h1>" +
          "<p>I'm a web developer, living and studying in Almaty, Kazakhstan. My passion is creating and I find happiness in being a better me today than the me yesterday. Feel free to take a look at my skillset on the <a class = 'link-highlighted' href='#skills' title = 'skills'>skills page, </a>" +
          "check my latest projects on the <a class = 'link-highlighted' href='#portfolio' title = 'portfolio'>portfolio page</a> and contact me on the <a class = 'link-highlighted' href='#contact' title = 'contact'>contact page.</a></p></div> </div> </div></section>"
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
          '<div class="copyright">@2019 Amir Kadenov</div>' +
          "<div   class='page-inner text-center card card-body container-fluid col-md-9 col-sm-12'>" +
          " <section class='skills-description'>" +
          '<h1 id = "skills-title" style="margin-left:25% !important">Skills <img class="icon-skills" src="icons/wheels.png" alt="" /></h1>' +
          " <div class='features'>" +
          " <div class='feature-fast'>" +
          "<h2>Fast<img alt='feature fast icon' src='icons/fast.png'></h2>" +
          "<p>Fast load times and lag free interaction, my highest priority.</p>" +
          " </div>" +
          " <div class='feature-responsive'>" +
          "<h2>Responsive <img alt='feature responsive icon' src='icons/responsive.png'></h2>" +
          "<p>My layouts will work on any device, big or small.</p>" +
          " </div>" +
          " <div class='feature-intuitive'>" +
          "<h2>Intuitive<img alt='feature intuitive icon' src='icons/intuitive.png'></h2>" +
          "<p>Strong preference for easy to use, intuitive UX/UI.</p>" +
          " </div>" +
          " <div class='feature-dynamic'>" +
          "<h2>Dynamic<img alt='feature dynamic icon' src='icons/dynamic.png'></h2>" +
          "<p>Websites don't have to be static, I love making pages come to life.</p>" +
          " </div>" +
          "</div><div class='skills-status'><h2>Area <img class='icon-skills' alt='area' src='icons/area.png'></h2><p>The main area of my expertise is front-end development." +
          " Currently I'm learning back-end development with PHP.</p></div></section>" +
          '<div class="skills-content">' +
          ' <section id="front-end" class="skills-container">' +
          '<h2>Front end <img class="icon-skills" src="icons/front-end.png" alt="" /> </h2>' +
          '<div class="tools">' +
          "<figure>" +
          "<figcaption>HTML5</figcaption>" +
          '<img src="icons/html5.png" alt="HTML5" width="auto" height="auto">' +
          " </figure>" +
          " <figure>" +
          "<figcaption>CSS3</figcaption>" +
          '<img src="icons/css3.png" alt="CSS3" width="auto" height="auto">' +
          "</figure>" +
          " <figure>" +
          "<figcaption>Sass</figcaption>" +
          '<img src="icons/sass.png" alt="Sass" width="auto" height="auto">' +
          "</figure>" +
          "<figure>" +
          "<figcaption>JS</figcaption>" +
          '<img src="icons/javascript.png" alt="JS" width="auto" height="auto">' +
          "</figure>" +
          " <figure>" +
          " <figcaption>Bootstrap</figcaption>" +
          ' <img src="icons/bootstrap.png" alt="Bootstrap" width="auto" height="auto">' +
          "</figure>" +
          " <figure>" +
          "<figcaption>JQuery</figcaption>" +
          '<img src="icons/jquery.png" alt="Jquery" width="auto" height="auto">' +
          "</figure>" +
          " </div>" +
          " </section>" +
          ' <section id="back-end" class="skills-container">' +
          ' <h2>Back end <img class="icon-skills" src="icons/back-end.png" alt="" /></h2>' +
          ' <div class="tools">' +
          "<figure>" +
          "<figcaption>PHP7</figcaption>" +
          '<img src="icons/new-php-logo.png" alt="PHP" width="auto" height="auto">' +
          "</figure>" +
          " </div>" +
          "   </section>" +
          ' <section id="other" class="skills-container">' +
          ' <h2>Other <img class="icon-skills" src="icons/other.png" alt="" /></h2>' +
          ' <div class="tools">' +
          "<figure>" +
          "<figcaption>Git</figcaption>" +
          ' <img src="icons/git.png" alt="Git" width="auto" height="auto">' +
          "</figure>" +
          "<figure>" +
          "<figcaption>Github</figcaption>" +
          '<img src="icons/github.png" class="github-icon" alt="Github" width="auto" height="auto">' +
          " </figure>" +
          "<figure>" +
          "<figcaption>Photoshop</figcaption>" +
          '<img src="icons/photoshop.png" alt="Photoshop" width="auto" height="auto">' +
          " </figure>" +
          "  <figure>" +
          " <figcaption>MySQL</figcaption>" +
          ' <img src="icons/mysql.png" alt="MySQL" width="120px" height="auto">' +
          "  </figure>" +
          " <figure>" +
          " <figcaption>C#</figcaption>" +
          ' <img src="icons/C_Sharp_logo.png" alt="C#" width="auto" height="auto">' +
          "</figure>" +
          " </div>" +
          " </section>" +
          " </div></div></div></section>"
        );
        break;

      case "portfolio":
        box_side.append(
          "<section class='page' id='" +
          string +
          "-page' class='page-container d-flex justify-content-center align-items-center text-center'>" +
          "<div class='page-bg'><div class='page-bg-container'></div><div class='page-bg-bg-container'></div></div>" +
          "<div class='page-content'>" +
          '<div class="row page-row">' +
          '<div class="copyright">@2019 Amir Kadenov</div>' +
          '<div class="page-inner text-center card card-body container-fluid col-md-9 col-sm-12">' +
          '<section class="portfolio-description">' +
          '<h1>Portfolio<img class="icon-skills" src="icons/portfolio.png" alt="portfolio-icon" /></h1>' +
          '<div class="portfolio-folders">' +
          ' <div class="folder folder-first folder-1 selected">' +
          '<div class="folder-overlay"></div>' +
          '<img src="icons/folder.png" alt="" />' +
          '<h4>freeCodeCamp learning projects </h4>' +
          ' </div>' +
          '<div class="folder folder-2">' +
          '<div class="folder-overlay"></div>' +
          '<img src="icons/folder.png" alt="" />' +
          ' <h4>PHP projects </h4>' +
          '</div>' +
          '</div>' +
          '</section>' +
          ' <section id="page-1" class="portfolio-content hidden-content">' +
          ' <div class="portfolio-project">' +
          '<img src="img/skyforge.png" alt="" />' +
          ' <h4>Product Landing Page </h4>' +
          '<div class="object-description">' +
          '<h5><a class="link-highlighted" href="https://www.freecodecamp.org"' +
          'target="_blank">freeCodeCamp</a> Responisve Web Design Course Project</h5>' +
          ' <a class="link-highlighted" href="https://codepen.io/M4DA0/pen/bGbLbQe"' +
          ' target="_blank">https://codepen.io/M4DA0/pen/bGbLbQe</a>' +
          '<div class="object-icons">' +
          '<img class="object-icon" src="icons/html-file.png" />' +
          '<img class="object-icon" src="icons/css-file.png" />' +
          '</div>' +
          '</div>' +
          '</div>' +
          ' <div class="portfolio-project">' +
          '<img src="img/technical_documentation_page.png" alt="" />' +
          '<h4>Technical Documentation Page</h4>' +
          ' <div class="object-description">' +
          '<h5><a class="link-highlighted" href="https://www.freecodecamp.org"' +
          'target="_blank">freeCodeCamp</a> Responisve Web Design Course Project</h5>' +
          ' <a class="link-highlighted" href="https://codepen.io/M4DA0/pen/mdybVvw"' +
          'target="_blank">https://codepen.io/M4DA0/pen/mdybVvw</a>' +
          '<div class="object-icons">' +
          '<img class="object-icon" src="icons/html-file.png" />' +
          '<img class="object-icon" src="icons/css-file.png" />' +
          '</div>' +
          ' </div>' +
          ' </div>' +
          '<div class="portfolio-project">' +
          '  <img src="img/survey_form.png" alt="" />' +
          ' <h4>Survey Form</h4>' +
          ' <div class="object-description">' +
          ' <h5><a class="link-highlighted" href="https://www.freecodecamp.org"' +
          'target="_blank">freeCodeCamp</a> Responisve Web Design Course Project</h5>' +
          ' <a class="link-highlighted" href="https://codepen.io/M4DA0/pen/BayBKpq"' +
          ' target="_blank">https://codepen.io/M4DA0/pen/BayBKpq</a>' +
          '<div class="object-icons">' +
          '<img class="object-icon" src="icons/html-file.png" />' +
          '<img class="object-icon" src="icons/css-file.png" />' +
          '</div>' +
          ' </div>' +
          ' </div>' +
          '<div class="portfolio-project">' +
          '<img src="img/tribute_page.png" alt="" />' +
          ' <h4>Tribute Page</h4>' +
          '<div class="object-description">' +
          '<h5><a class="link-highlighted" href="https://www.freecodecamp.org"' +
          '+target="_blank">freeCodeCamp</a> Responisve Web Design Course Project</h5>' +
          '  <a class="link-highlighted" href="https://codepen.io/M4DA0/pen/ExaYKZy"' +
          'target="_blank">https://codepen.io/M4DA0/pen/ExaYKZy</a>' +
          '<div class="object-icons">' +
          ' <img class="object-icon" src="icons/html-file.png" />' +
          '<img class="object-icon" src="icons/css-file.png" />' +
          '</div>' +
          ' </div>' +
          '</div>' +
          '</section>' +
          '<section id="page-2" class="portfolio-content hidden-content">' +
          '<div class="portfolio-project">' +
          '<img src="img/watchshop.jpg" alt="" />' +
          ' <h4>Watch shop</h4>' +
          '<div class="object-description">' +
          '<h5>My first PHP learning project</h5>' +
          ' <a class="link-highlighted" href="https://github.com/M4DA0/WatchShop2018"' +
          'target="_blank">https://github.com/M4DA0/WatchShop2018</a>' +
          ' <div class="object-icons">' +
          '<img class="object-icon" src="icons/html-file.png" />' +
          '<img class="object-icon" src="icons/css-file.png" />' +
          '<img class="object-icon" src="icons/js-file.png" />' +
          '<img class="object-icon" src="icons/php-file.png" />' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</section>' +
          '<section id="page-initial" class="portfolio-content">' +
          '<div class="portfolio-project-initial">' +
          '<img src="img/todolist_home.jpg" alt="" />' +
          ' <h4>To Do List</h4>' +
          '<a id="portfolio_todolist" class="object-description-initial" href="https://github.com/M4DA0/TO-DO-LIST">' +
          ' <img id ="project-todolist" src="/img/todolist_auth.jpg" alt="project image#2">' +
          '<div class="key-words"><span>webapp</span><span>html5</span><span>ui/ux design</span><span>animations</span><span>php</span><span>JS</span></div>' +
          '<div class="more">' +
          '<h5>more...</h5>' +
          '</div>' +
          ' </a>' +
          '</div>' +
          '<div class="portfolio-project-initial">' +
          '<img src="img/portfolio.jpg" alt="" />' +
          ' <h4>Personal Portfolio</h4>' +
          '<a id="portfolio_portfolio" class="object-description-initial" href="https://m4da0.github.io">' +
          ' <img id ="project-todolist" src="/img/portfolio_projects.jpg" alt="project image#2">' +
          '<div class="key-words"><span>webapp</span><span>sass</span><span>ui/ux design</span><span>animations</span><span>html5</span><span>Responsive</span></div>' +
          '<div class="more">' +
          '<h5>more...</h5>' +
          '</div>' +
          ' </a>' +
          '</div>' +
          '</section>' +
          '</div></section>'
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
          '<div class="copyright">@2019 Amir Kadenov</div>' +
          '<div class="page-inner text-center card card-body container-fluid col-md-9 col-sm-12">' +
          ' <section class="contact-content">' +
          '<h1>Contact me</h1>' +
          '<div class="contact-links">' +
          '<a href="mailto:amirkadenov@gmail.com" class="contact-link email">' +
          '<img src="icons/links/mail.png" alt="">' +
          '<p>amirkadenov@gmail.com</p>' +
          ' </a>' +
          '<div class="links">' +
          '<a href="https://vk.com/m4da0" target="_blank" class="contact-link"><img src="icons/links/vk.png"' +
          'alt=""></a>' +
          '<a href="https://www.facebook.com/profile.php?id=100004073934656" target="_blank"' +
          'class="contact-link"><img src="icons/links/facebook.png" alt=""></a>' +
          '<a href="https://github.com/M4DA0" target="_blank" class="contact-link"><img ' +
          'src="icons/links/github.png" alt=""></a>' +
          '<a href="https://twitter.com/Amir41509281" target="_blank" class="contact-link"><img ' +
          'src="icons/links/twitter.png" alt=""></a>' +
          ' </div>' +
          '</div>' +
          ' </section></div> </div></div></section>'
        );
        break;
    }
    left0box(string);
  }

  function sliderPageAppend(string) {
    // let slider = $(".page-slider");
    console.log("yeayeateaeee ++ " + string);
    switch (string) {
      case "about":
        slider.append(
          //   "<section class='page' id='" +
          //     string +
          //     "-page' class='page d-flex justify-content-center align-items-center text-center'><div class='page-bg'></div>" +
          //     "<h2>Skills</h2></section>"
          // );
          "<section id='about-page' class='page d-flex justify-content-center align-items-center text-center'>" +
          '<div class="copyright">@2019 Amir Kadenov</div>' +
          "<div class='page-bg'></div></div>" +
          "<div class='page-content'>" +
          "<div class='row page-row'>" +
          "<div   class='page-inner text-justify card card-body container-fluid col-md-6 col-sm-12'>" +
          "<h1 class='m-auto p-3'>Hello, I'm Amir.</h1>" +
          "<p>I'm a web developer, living and studying in Almaty, Kazakhstan. My passion is creating and I find happiness in being a better me today than the me yesterday. Feel free to take a look at my skillset on the <a class = 'link-highlighted' href='#skills' title = 'skills'>skills page, </a>" +
          "check my latest projects on the <a class = 'link-highlighted' href='#portfolio' title = 'portfolio'>portfolio page</a> and contact me on the <a class = 'link-highlighted' href='#contact' title = 'contact'>contact page.</a></p></div> </div> </div></section>"
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
          '<div class="copyright">@2019 Amir Kadenov</div>' +
          "<div   class='page-inner text-center card card-body container-fluid col-md-9 col-sm-12'>" +
          " <section class='skills-description'>" +
          '<h1 id = "skills-title" style="margin-left:25% !important">Skills <img class="icon-skills" src="icons/wheels.png" alt="" /></h1>' +
          " <div class='features'>" +
          " <div class='feature-fast'>" +
          "<h2>Fast<img alt='feature fast icon' src='icons/fast.png'></h2>" +
          "<p>Fast load times and lag free interaction, my highest priority.</p>" +
          " </div>" +
          " <div class='feature-responsive'>" +
          "<h2>Responsive <img alt='feature responsive icon' src='icons/responsive.png'></h2>" +
          "<p>My layouts will work on any device, big or small.</p>" +
          " </div>" +
          " <div class='feature-intuitive'>" +
          "<h2>Intuitive<img alt='feature intuitive icon' src='icons/intuitive.png'></h2>" +
          "<p>Strong preference for easy to use, intuitive UX/UI.</p>" +
          " </div>" +
          " <div class='feature-dynamic'>" +
          "<h2>Dynamic<img alt='feature dynamic icon' src='icons/dynamic.png'></h2>" +
          "<p>Websites don't have to be static, I love making pages come to life.</p>" +
          " </div>" +
          "</div><div class='skills-status'><h2>Area <img class='icon-skills' alt='area' src='icons/area.png'></h2><p>The main area of my expertise is front-end development." +
          " Currently I'm learning back-end development with PHP.</p></div></section>" +
          '<div class="skills-content">' +
          ' <section id="front-end" class="skills-container">' +
          '<h2>Front end <img class="icon-skills" src="icons/front-end.png" alt="" /> </h2>' +
          '<div class="tools">' +
          "<figure>" +
          "<figcaption>HTML5</figcaption>" +
          '<img src="icons/html5.png" alt="HTML5" width="auto" height="auto">' +
          " </figure>" +
          " <figure>" +
          "<figcaption>CSS3</figcaption>" +
          '<img src="icons/css3.png" alt="CSS3" width="auto" height="auto">' +
          "</figure>" +
          " <figure>" +
          "<figcaption>Sass</figcaption>" +
          '<img src="icons/sass.png" alt="Sass" width="auto" height="auto">' +
          "</figure>" +
          "<figure>" +
          "<figcaption>JS</figcaption>" +
          '<img src="icons/javascript.png" alt="JS" width="auto" height="auto">' +
          "</figure>" +
          " <figure>" +
          " <figcaption>Bootstrap</figcaption>" +
          ' <img src="icons/bootstrap.png" alt="Bootstrap" width="auto" height="auto">' +
          "</figure>" +
          " <figure>" +
          "<figcaption>JQuery</figcaption>" +
          '<img src="icons/jquery.png" alt="Jquery" width="auto" height="auto">' +
          "</figure>" +
          " </div>" +
          " </section>" +
          ' <section id="back-end" class="skills-container">' +
          ' <h2>Back end <img class="icon-skills" src="icons/back-end.png" alt="" /></h2>' +
          ' <div class="tools">' +
          "<figure>" +
          "<figcaption>PHP7</figcaption>" +
          '<img src="icons/new-php-logo.png" alt="PHP" width="auto" height="auto">' +
          "</figure>" +
          " </div>" +
          "   </section>" +
          ' <section id="other" class="skills-container">' +
          ' <h2>Other <img class="icon-skills" src="icons/other.png" alt="" /></h2>' +
          ' <div class="tools">' +
          "<figure>" +
          "<figcaption>Git</figcaption>" +
          ' <img src="icons/git.png" alt="Git" width="auto" height="auto">' +
          "</figure>" +
          "<figure>" +
          "<figcaption>Github</figcaption>" +
          '<img src="icons/github.png" class="github-icon" alt="Github" width="auto" height="auto">' +
          " </figure>" +
          "<figure>" +
          "<figcaption>Photoshop</figcaption>" +
          '<img src="icons/photoshop.png" alt="Photoshop" width="auto" height="auto">' +
          " </figure>" +
          "  <figure>" +
          " <figcaption>MySQL</figcaption>" +
          ' <img src="icons/mysql.png" alt="MySQL" width="120px" height="auto">' +
          "  </figure>" +
          " <figure>" +
          " <figcaption>C#</figcaption>" +
          ' <img src="icons/C_Sharp_logo.png" alt="C#" width="auto" height="auto">' +
          "</figure>" +
          " </div>" +
          " </section>" +
          " </div></div></div></section>"
        );
        break;
      case "portfolio":
        slider.append(
          "<section class='page' id='" +
          string +
          "-page' class='page-container d-flex justify-content-center align-items-center text-center'>" +
          "<div class='page-bg'><div class='page-bg-container'></div><div class='page-bg-bg-container'></div></div>" +
          "<div class='page-content'>" +
          '<div class="row page-row">' +
          '<div class="copyright">@2019 Amir Kadenov</div>' +
          '<div class="page-inner text-center card card-body container-fluid col-md-9 col-sm-12">' +
          '<section class="portfolio-description">' +
          '<h1>Portfolio<img class="icon-skills" src="icons/portfolio.png" alt="portfolio-icon" /></h1>' +
          '<div class="portfolio-folders">' +
          ' <div class="folder folder-first folder-1 selected">' +
          '<div class="folder-overlay"></div>' +
          '<img src="icons/folder.png" alt="" />' +
          '<h4>freeCodeCamp learning projects </h4>' +
          ' </div>' +
          '<div class="folder folder-2">' +
          '<div class="folder-overlay"></div>' +
          '<img src="icons/folder.png" alt="" />' +
          ' <h4>PHP projects </h4>' +
          '</div>' +
          '</div>' +
          '</section>' +
          ' <section id="page-1" class="portfolio-content hidden-content">' +
          ' <div class="portfolio-project">' +
          '<img src="img/skyforge.png" alt="" />' +
          ' <h4>Product Landing Page </h4>' +
          '<div class="object-description">' +
          '<h5><a class="link-highlighted" href="https://www.freecodecamp.org"' +
          'target="_blank">freeCodeCamp</a> Responisve Web Design Course Project</h5>' +
          ' <a class="link-highlighted" href="https://codepen.io/M4DA0/pen/bGbLbQe"' +
          ' target="_blank">https://codepen.io/M4DA0/pen/bGbLbQe</a>' +
          '<div class="object-icons">' +
          '<img class="object-icon" src="icons/html-file.png" />' +
          '<img class="object-icon" src="icons/css-file.png" />' +
          '</div>' +
          '</div>' +
          '</div>' +
          ' <div class="portfolio-project">' +
          '<img src="img/technical_documentation_page.png" alt="" />' +
          '<h4>Technical Documentation Page</h4>' +
          ' <div class="object-description">' +
          '<h5><a class="link-highlighted" href="https://www.freecodecamp.org"' +
          'target="_blank">freeCodeCamp</a> Responisve Web Design Course Project</h5>' +
          ' <a class="link-highlighted" href="https://codepen.io/M4DA0/pen/mdybVvw"' +
          'target="_blank">https://codepen.io/M4DA0/pen/mdybVvw</a>' +
          '<div class="object-icons">' +
          '<img class="object-icon" src="icons/html-file.png" />' +
          '<img class="object-icon" src="icons/css-file.png" />' +
          '</div>' +
          ' </div>' +
          ' </div>' +
          '<div class="portfolio-project">' +
          '  <img src="img/survey_form.png" alt="" />' +
          ' <h4>Survey Form</h4>' +
          ' <div class="object-description">' +
          ' <h5><a class="link-highlighted" href="https://www.freecodecamp.org"' +
          'target="_blank">freeCodeCamp</a> Responisve Web Design Course Project</h5>' +
          ' <a class="link-highlighted" href="https://codepen.io/M4DA0/pen/BayBKpq"' +
          ' target="_blank">https://codepen.io/M4DA0/pen/BayBKpq</a>' +
          '<div class="object-icons">' +
          '<img class="object-icon" src="icons/html-file.png" />' +
          '<img class="object-icon" src="icons/css-file.png" />' +
          '</div>' +
          ' </div>' +
          ' </div>' +
          '<div class="portfolio-project">' +
          '<img src="img/tribute_page.png" alt="" />' +
          ' <h4>Tribute Page</h4>' +
          '<div class="object-description">' +
          '<h5><a class="link-highlighted" href="https://www.freecodecamp.org"' +
          '+target="_blank">freeCodeCamp</a> Responisve Web Design Course Project</h5>' +
          '  <a class="link-highlighted" href="https://codepen.io/M4DA0/pen/ExaYKZy"' +
          'target="_blank">https://codepen.io/M4DA0/pen/ExaYKZy</a>' +
          '<div class="object-icons">' +
          ' <img class="object-icon" src="icons/html-file.png" />' +
          '<img class="object-icon" src="icons/css-file.png" />' +
          '</div>' +
          ' </div>' +
          '</div>' +
          '</section>' +
          '<section id="page-2" class="portfolio-content hidden-content">' +
          '<div class="portfolio-project">' +
          '<img src="img/watchshop.jpg" alt="" />' +
          ' <h4>Watch shop</h4>' +
          '<div class="object-description">' +
          '<h5>My first PHP learning project</h5>' +
          ' <a class="link-highlighted" href="https://github.com/M4DA0/WatchShop2018"' +
          'target="_blank">https://github.com/M4DA0/WatchShop2018</a>' +
          ' <div class="object-icons">' +
          '<img class="object-icon" src="icons/html-file.png" />' +
          '<img class="object-icon" src="icons/css-file.png" />' +
          '<img class="object-icon" src="icons/js-file.png" />' +
          '<img class="object-icon" src="icons/php-file.png" />' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</section>' +
          '<section id="page-initial" class="portfolio-content">' +
          '<div class="portfolio-project-initial">' +
          '<img src="img/todolist_home.jpg" alt="" />' +
          ' <h4>To Do List</h4>' +
          '<a id="portfolio_todolist" class="object-description-initial" href="https://github.com/M4DA0/TO-DO-LIST">' +
          ' <img id ="project-todolist" src="/img/todolist_auth.jpg" alt="project image#2">' +
          '<div class="key-words"><span>webapp</span><span>html5</span><span>ui/ux design</span><span>animations</span><span>php</span><span>JS</span></div>' +
          '<div class="more">' +
          '<h5>more...</h5>' +
          '</div>' +
          ' </a>' +
          '</div>' +
          '<div class="portfolio-project-initial">' +
          '<img src="img/portfolio.jpg" alt="" />' +
          ' <h4>Personal Portfolio</h4>' +
          '<a id="portfolio_portfolio" class="object-description-initial" href="https://m4da0.github.io">' +
          ' <img id ="project-todolist" src="/img/portfolio_projects.jpg" alt="project image#2">' +
          '<div class="key-words"><span>webapp</span><span>sass</span><span>ui/ux design</span><span>animations</span><span>html5</span><span>Responsive</span></div>' +
          '<div class="more">' +
          '<h5>more...</h5>' +
          '</div>' +
          ' </a>' +
          '</div>' +
          '</section>' +
          '</div></section>'
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
          '<div class="page-inner text-center card card-body container-fluid col-md-9 col-sm-12">' +
          ' <section class="contact-content">' +
          '<div class="copyright">@2019 Amir Kadenov</div>' +
          '<h1>Contact me<img class="icon-skills" src="icons/portfolio.png" alt="portfolio-icon" /></h1>' +
          '<div class="contact-links">' +
          '<a href="mailto:amirkadenov@gmail.com" class="contact-link email">' +
          '<img src="icons/links/mail.png" alt="">' +
          '<p>amirkadenov@gmail.com</p>' +
          ' </a>' +
          '<div class="links">' +
          '<a href="https://vk.com/m4da0" target="_blank" class="contact-link"><img src="icons/links/vk.png"' +
          'alt=""></a>' +
          '<a href="https://www.facebook.com/profile.php?id=100004073934656" target="_blank"' +
          'class="contact-link"><img src="icons/links/facebook.png" alt=""></a>' +
          '<a href="https://github.com/M4DA0" target="_blank" class="contact-link"><img ' +
          'src="icons/links/github.png" alt=""></a>' +
          '<a href="https://twitter.com/Amir41509281" target="_blank" class="contact-link"><img ' +
          'src="icons/links/twitter.png" alt=""></a>' +
          ' </div>' +
          '</div>' +
          ' </section></div></div> </div></section>'
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
      display: "flex"
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
    setTimeout(function () {
      boxPageDestroy(current_page);
    }, 2000);
  }

  function sliderPageAdjust() {
    let slider = $(".page-slider");
    slider.children("section").css({
      left: "-100vw"
    });
  }

  function mainLeft(current_page, target_page) {
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
      sliderPageAdjust();

      slide_right();

      function addClassShowLeft() {
        box.addClass("show-left");
      }

      setTimeout(addClassShowLeft, 1000);

      setTimeout(function () {
        removeOffset();
      }, 1900);
      $(".page-slider").css({
        visibility: "visible"
      });
    }
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

      setTimeout(addClassShowRight, 1000);

      setTimeout(function () {
        removeOffset();
      }, 1900);
    }
  }

  function controlNextAppear() {
    $("#next-toggle").animate(
      {
        right: "0px"
      },
      500
    );
  }
  function controlPrevAppear() {
    $("#previous-toggle").animate(
      {
        left: "0px"
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
    $("#next-toggle").css({ display: "flex" });
  }
  function hidePrev() {
    $("#previous-toggle").css({ display: "none" });
  }
  function showPrev() {
    $("#previous-toggle").css({ display: "flex" });
  }

  function nextDecide() {
    let width = parseInt($(window).width());
    console.log(width);
    if (width < 769) {
      hideNext();
      hidePrev();
    } else {
      showNext();
      showPrev();
    }
  }

  navItem.on("click", function () {
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
      setTimeout(function () {
        $("#next-toggle").animate(
          {
            right: "-293px"
          },
          700
        );
      }, 500);

      setTimeout(function () {
        $("#navbar-toggle").animate(
          {
            top: "-115px"
          },
          700
        );
        $("#previous-toggle").animate(
          {
            left: "-293px"
          },
          700
        );
      }, 500);
      setTimeout(navbarAppear, 2050);
      setTimeout(controlNextAppear, 2050);
      setTimeout(controlPrevAppear, 2050);
    }

    switch (href) {
      case "#about":
        if (
          current_page == "skills" ||
          current_page == "portfolio" ||
          current_page == "contact"
        ) {
          mainLeft(current_page, "about");
        } else {
          mainRight(current_page, "about");
        }
        setTimeout(nextDecide, 1000);
        setTimeout(hidePrev, 1000);
        $("#next-toggle").attr("href", "#skills");
        break;

      case "#skills":
        if (current_page == "about") {
          mainRight(current_page, "skills");
        } else if (current_page == "portfolio" || current_page == "contact") {
          mainLeft(current_page, "skills");
        }
        setTimeout(nextDecide, 1000);
        $("#next-toggle").attr("href", "#portfolio");
        break;

      case "#portfolio":
        if (current_page == "about" || current_page == "skills") {
          mainRight(current_page, "portfolio");
        } else if (current_page == "contact") {
          mainLeft(current_page, "portfolio");
        }
        setTimeout(nextDecide, 1000);
        $("#next-toggle").attr("href", "#contact");
        break;

      case "#contact":
        if (
          current_page == "skills" ||
          current_page == "portfolio" ||
          current_page == "about"
        ) {
          mainRight(current_page, "contact");
        } else {
          mainRight(current_page, "contact");
        }
        setTimeout(nextDecide, 1000);
        $("#next-toggle").attr("href", "#about");
        setTimeout(hideNext, 1000);
        break;
    }
  });

  let option_link = "";
  $(document).on("click", "section#about-page a", function () {
    option = 2;
    setTimeout(function () {
      option = 1;
    }, 600);
    // setTimeout(function () {
    let hr = $(this).attr('href');
    option_link = hr;
    let flagg = $("#next-toggle").attr("href");
    console.log(flagg + " flag33333");
    console.log("qwqweqweqweqwe" + next.attr("href"));
    $("#next-toggle").click();

    // document.getElementById("next-toggle").setAttribute("href", "#skills");
    // console.log("qwqweqweqweqwe" + next.attr("href"));
    // document.getElementById("next-toggle").click();

  });

  $("#next-toggle").on("click", function () {
    $(".page-slider").animate(
      {
        visibility: "visible"
      },
      5
    );
    decideDelay();
    current_url = window.location.href;
    let current_page = "about";
    if (current_url.includes("#")) {
      let $position = current_url.indexOf("#");
      let $string = current_url.slice($position + 1);

      current_page = $string;
    } else {
      current_page = "about";
    }

    switch (current_page) {
      case "about":
        if (option == 2) {
          href = option_link;
        } else if (option == 1) {
          href = "#skills";
        }
        break;
      case "skills":
        href = "#portfolio";
        break;

      case "portfolio":
        href = "#contact";
        break;
      case "contact":
        href = "#contact";
        break;
    }
    // if (option == 2) {
    //   href = "#portfolio";
    // } else {
    //   href = $(this).attr("href");
    // }
    console.log("option ++++++++----------" + option);

    let target_page = href.replace("#", "");
    console.log("target-page ++++++++---------" + target_page);
    setTimeout(function () {
      $("#next-toggle").animate(
        {
          right: "-293px"
        },
        700
      );
    }, 500);

    setTimeout(function () {
      $("#navbar-toggle").animate(
        {
          top: "-115px"
        },
        700
      );
      $("#previous-toggle").animate(
        {
          left: "-293px"
        },
        700
      );
    }, 500);
    setTimeout(navbarAppear, 2050);
    setTimeout(controlNextAppear, 2050);
    setTimeout(controlPrevAppear, 2050);

    // }
    switch (current_page) {
      case "about":
        mainRight(current_page, target_page);
        next.mouseleave();
        nextDisableTemporary();
        setTimeout(nextDecide, 1000);
        // function e1() {
        //   $(this).attr("href", "#portfolio");
        // }
        // setTimeout(e1, 0);
        break;

      case "skills":
        mainRight(current_page, target_page);
        next.mouseleave();
        nextDisableTemporary();
        setTimeout(nextDecide, 1000);
        // function e2() {
        //   $(this).attr("href", "#contact");
        // }
        // setTimeout(e2, 0);
        break;

      case "portfolio":
        mainRight(current_page, "contact");
        next.mouseleave();
        nextDisableTemporary();
        setTimeout(nextDecide, 1000);
        // function e3() {
        //   $(this).attr("href", "#about");
        // }
        // setTimeout(e3, 0);
        setTimeout(hideNext, 1000);
        break;

      case "contact":
        mainRight(current_page, target_page);
        break;
    }
    $(".page-slider").css({
      visibility: "visible"
    });
  });
  $("#previous-toggle").on("click", function () {
    $(".page-slider").animate(
      {
        visibility: "visible"
      },
      5
    );
    decideDelay();
    current_url = window.location.href;
    let current_page = "about";
    if (current_url.includes("#")) {
      let $position = current_url.indexOf("#");
      let $string = current_url.slice($position + 1);

      current_page = $string;
    } else {
      current_page = "about";
    }

    switch (current_page) {
      case "about":
        $(this).attr("href", "#about");
        break;
      case "skills":
        $(this).attr("href", "#about");
        break;
      case "portfolio":
        $(this).attr("href", "#skills");
        break;
      case "contact":
        $(this).attr("href", "#portfolio");
        break;
    }

    let href = $(this).attr("href");

    let target_page = href.replace("#", "");

    setTimeout(function () {
      $("#next-toggle").animate(
        {
          right: "-163px"
        },
        700
      );
    }, 500);

    setTimeout(function () {
      $("#navbar-toggle").animate(
        {
          top: "-115px"
        },
        700
      );
      $("#previous-toggle").animate(
        {
          left: "-143px"
        },
        700
      );
    }, 500);
    setTimeout(navbarAppear, 1950);
    setTimeout(controlNextAppear, 1950);
    setTimeout(controlPrevAppear, 1950);
    $(".page-slider").animate(
      {
        visibility: "visible"
      },
      1
    );
    switch (current_page) {
      case "about":
        mainLeft(current_page, "about");
        previous.mouseleave();
        // function e1() {
        //   $(this).attr("href", "#portfolio");
        // }
        // setTimeout(e1, 0);
        setTimeout(hidePrev, 1000);
        break;

      case "skills":
        mainLeft(current_page, "about");
        previous.mouseleave();
        previousDisableTemporary();
        setTimeout(nextDecide, 1000);
        setTimeout(hidePrev, 1000);
        break;

      case "portfolio":
        mainLeft(current_page, "skills");
        previous.mouseleave();
        previousDisableTemporary();
        setTimeout(nextDecide, 1000);
        break;

      case "contact":
        mainLeft("contact", "portfolio");
        previous.mouseleave();
        previousDisableTemporary();
        setTimeout(nextDecide, 1000);
        break;
    }
  });

  let folder = $('.folder');
  $(document).on('click', '.folder', function () {
    if ($(this).hasClass('selected')) {

      return false;
    }
    else {
      console.log('NicE')
      $('.portfolio-folders').children('.folder').removeClass('selected');
      $(this).addClass('selected');

      if ($(this).hasClass('folder-1')) {
        $('section #page-2').addClass('hidden-content');
        $('section #page-1').removeClass('hidden-content');
      } else if ($(this).hasClass('folder-2')) {
        $('section #page-1').addClass('hidden-content');
        $('section #page-2').removeClass('hidden-content');
      }
    }
  })

  $(document).on('mouseover', ".portfolio-project", function () {
    console.log('AAAAAAAAAAAAAAAAAAA')
    $(this).find('.object-description').css({
      top: "25%",
      cursor: "initial"
    })
  });
  $(document).on('mouseleave', ".portfolio-project", function () {
    console.log('AAAAAAAAAAAAAAAAAAA')
    $(this).find('.object-description').css({
      top: "70%",
      cursor: 'pointer'
    })
  });
  function portfolioHover() {
    let portf_pr = $(".portfolio-project-initial");
    portf_pr.on('mouseover', portf_pr, function () {
      let obj_desc = $(this).find(".object-description-initial");
      obj_desc.css({
        top: "8%",
      })
    }).on('mouseleave', portf_pr, function () {
      let obj_desc = $(this).find(".object-description-initial");
      obj_desc.css({
        top: "100%",
      })
    });
  }
  portfolioHover();

  $('body').on('DOMNodeInserted', 'section', function () {
    portfolioHover();
  });

  // let todo = $("#portfolio_todolist");
  // $(portf_pr).on('mouseover', portf_pr, function () {
  //   let obj_desc = $(this).find(".object-description-initial");
  //   obj_desc.css({
  //     top: "8%",
  //   })
  // }).on('mouseleave', portf_pr, function () {
  //   let obj_desc = $(this).find(".object-description-initial");
  //   obj_desc.css({
  //     top: "100%",
  //   })
  // })
  // let todo2 = $("#portfolio_portfolio");
  // $(todo2).on('mouseover', function () {
  //   let obj_desc = $(this).find(".object-description-initial");
  //   obj_desc.css({
  //     top: "8%",
  //   })
  // })
});
