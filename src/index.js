const headTitle = document.getElementById("head-title");
const headContent = document.getElementById("head-body");
const headLink = document.getElementById("head-link");
const overHead = document.querySelector(".over-head");
const overContent = document.querySelector(".over-content");

let headlines = [
  {
    title: "Meet the boss",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ratione saepe quae repellendus eius voluptas.",
    link: "Learn more",
  },
  {
    title: "Covid-19",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ratione saepe quae repellendus eius voluptas.",
    link: "Response",
  },
  {
    title: "Stories of change",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ratione saepe quae repellendus eius voluptas.",
    link: "Read stories",
  },
];

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
  headTitle.textContent = headlines[counter - 1].title;
  headContent.textContent = headlines[counter - 1].content;
  headLink.textContent = headlines[counter - 1].link;
}, 5000);

// overHead.addEventListener("mouseover", () => {
//   overContent.style.display = "block";
// });

// overHead.addEventListener("mouseout", () => {
//   overContent.style.display = "block";
// });
