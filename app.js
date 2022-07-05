let sound = document.querySelector("#sound");
let boxs = document.querySelectorAll(".box");
let btns = document.querySelectorAll(".btns");
let pomodoro = document.querySelector(".btn-pomodoro");
let shortBreak = document.querySelector(".btn-shortBreak");
let longBreak = document.querySelector(".btn-longBreak");
// ---------------------
let closeBtn = document.querySelector(".close__settingBtn");
let settingBtn = document.querySelector(".setting__btn");
let applyBtn = document.querySelector(".apply__btn");
//---------------
let setting = document.querySelector(".setting");
let pomodoro__time = document.querySelector(".pomodoro__time");
let shortBreak__time = document.querySelector(".shortBreak__time");
let longBreak__time = document.querySelector(".longBreak__time");
let pomodoro__pause = document.querySelector(".pomodoro__pause");
let shortBreak__pause = document.querySelector(".shortBreak__pause");
let longBreak__pause = document.querySelector(".longBreak__pause");
let min_form = document.querySelector("#pomodora__time");
let shortBreak__from = document.querySelector("#pomodora__shortBreak");
let longBreak__from = document.querySelector("#pomodora__longBreak");
//------------------------
let fontBox = document.querySelector(".setting__fonts-box");
let fonts = document.querySelectorAll(".font__box");
let colorBox = document.querySelector(".setting__colors-box");
let colors = document.querySelectorAll(".color__box");
//-----------------------
let min = 25;
let secs = Number(00);
let shortBreak__min = 5;
let longBreak__min = 15;
let IS_RUN = false;

shortBreak__time.textContent = `0${shortBreak__min}:0${secs}`;
longBreak__time.textContent = `${longBreak__min}:0${secs}`;
pomodoro.addEventListener("click", () => {
  boxs.forEach((box) => {
    box.classList.remove("active");
  });
  btns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
  boxs[0].classList.add("active");
  btns[0].classList.add("active-btn");
});
shortBreak.addEventListener("click", () => {
  boxs.forEach((box) => {
    box.classList.remove("active");
  });
  btns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
  boxs[1].classList.add("active");
  btns[1].classList.add("active-btn");
});
longBreak.addEventListener("click", () => {
  boxs.forEach((box) => {
    box.classList.remove("active");
  });
  btns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
  boxs[2].classList.add("active");
  btns[2].classList.add("active-btn");
});
closeBtn.addEventListener("click", () => {
  setting.classList.add("activeSetting");
});
settingBtn.addEventListener("click", () => {
  setting.classList.remove("activeSetting");
});
window.addEventListener("load", () => {
  pomodoro__time.textContent = `${min}:0${secs}`;
});
applyBtn.addEventListener("click", () => {
  setting.classList.add("activeSetting");
  min = min_form.value;
  pomodoro__time.textContent = `${min}:00`;
  shortBreak__min = shortBreak__from.value;
  shortBreak__time.textContent = `${shortBreak__min}:00`;
  longBreak__min = longBreak__from.value;
  longBreak__time.textContent = `${longBreak__min}:00`;
});
//----------------------- timers
let timer;
pomodoro__pause.addEventListener("click", () => {
  IS_RUN = !IS_RUN;
  shortBreak.style = "display:none";
  longBreak.style = "display:none";
  settingBtn.style.display = "none";
  if (IS_RUN) {
    pomodoro__pause.textContent = "Pause";
    timer = setInterval(() => {
      pomodoro__time.textContent =
        min < 10 || secs < 10 ? `0${min}:0${secs}` : `${min}:${secs}`;
      if (min < 10) {
        pomodoro__time.textContent = `0${min}:${secs}`;
      }
      if (secs < 10) {
        pomodoro__time.textContent = `${min}:0${secs}`;
      }
      secs--;
      if (secs < 0) {
        min--;
        secs = 59;
      }
      if (min < 0) {
        shortBreak.style = "display:inline-block";
        longBreak.style = "display:inline-block";
        pomodoro__pause.textContent = "START";
        settingBtn.style.display = "block";
        sound.play();
        clearInterval(timer);
      }
    }, 1000);
  } else {
    console.log("Pause");
    pomodoro__pause.textContent = "Start";
    clearInterval(timer);
  }
});
let shortTimer;
shortBreak__pause.addEventListener("click", () => {
  pomodoro.style = "display:none";
  longBreak.style = "display:none";
  settingBtn.style.display = "none";
  shortBreak__pause.style.display = "none";
  shortTimer = setInterval(() => {
    shortBreak__time.textContent =
      shortBreak__min < 10 || secs < 10
        ? `0${shortBreak__min}:0${secs}`
        : `${shortBreak__min}:${secs}`;
    if (shortBreak__min < 10) {
      shortBreak__time.textContent = `0${shortBreak__min}:${secs}`;
    }
    if (secs < 10) {
      shortBreak__time.textContent = `${shortBreak__min}:0${secs}`;
    }
    secs--;
    if (secs < 0) {
      shortBreak__min--;
      secs = 59;
    }
    if (shortBreak__min < 0) {
      pomodoro.style = "display:inline-block";
      longBreak.style = "display:inline-block";
      shortBreak__pause.style.display = "block";
      settingBtn.style.display = "block";
      sound.play();
      clearInterval(shortTimer);
    }
  }, 1000);
});
let longTimer;
longBreak__pause.addEventListener("click", () => {
  pomodoro.style = "display:none";
  shortBreak.style = "display:none";
  settingBtn.style.display = "none";
  longBreak__pause.style.display = "none";
  longTimer = setInterval(() => {
    longBreak__time.textContent =
      longBreak__min < 10 || secs < 10
        ? `0${longBreak__min}:0${secs}`
        : `${longBreak__min}:${secs}`;
    if (longBreak__min < 10) {
      longBreak__time.textContent = `0${longBreak__min}:${secs}`;
    }
    if (secs < 10) {
      longBreak__time.textContent = `${longBreak__min}:0${secs}`;
    }
    secs--;
    if (secs < 0) {
      longBreak__min--;
      secs = 59;
    }
    if (longBreak__min < 0) {
      pomodoro.style = "display:inline-block";
      shortBreak.style = "display:inline-block";
      longBreak__pause.style.display = "block";
      settingBtn.style.display = "block";
      sound.play();

      clearInterval(longTimer);
    }
  }, 1000);
});

fontBox.addEventListener("click", function (e) {
  fonts.forEach((font) => {
    font.classList.remove("activeFont");
  });

  switch (e.target.classList[0]) {
    case "font__1":
      e.target.classList.add("activeFont");
      document.querySelector("body").style = "font-family:Righteous";
      break;
    case "font__2":
      e.target.classList.add("activeFont");
      document.querySelector("body").style = "font-family:Kanit";
      break;
    case "font__3":
      e.target.classList.add("activeFont");
      document.querySelector("body").style = "font-family:Indie Flower";
      break;
    default:
      document.querySelector("body").style = "font-family:Kanit";
  }
});
colorBox.addEventListener("click", function (e) {
  colors.forEach((color) => {
    color.classList.remove("activeFont");
  });

  switch (e.target.classList[0]) {
    case "color__1":
      e.target.classList.add("activeFont");
      document.documentElement.setAttribute("style", "--mainColor:#1e2140;");
      break;
    case "color__2":
      e.target.classList.add("activeFont");
      document.documentElement.setAttribute(
        "style",
        "--mainColor:rgb(57, 58, 93);"
      );

      break;
    case "color__3":
      e.target.classList.add("activeFont");

      document.documentElement.setAttribute(
        "style",
        "--mainColor:rgb(78, 38, 38);"
      );
      break;
  }
});
