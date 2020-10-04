const headTitle = document.getElementById("head-title");
const headContent = document.getElementById("head-body");
const headLink = document.getElementById("head-link");
const overHead = document.querySelector(".over-head");
const overContent = document.querySelector(".over-content");

let headlines = [
  {
    title: "Feeding Program",
    content:
      "Providing nutritious meals to less fortunate children under our program.",
    link: "Learn more",
  },
  {
    title: "Covid-19",
    content: "Progress made in our Covid-19 Response in the local community.",
    link: "Response",
  },
  {
    title: "Water and Sanitation",
    content:
      "Providing access to safe drinking water and adherence to good hygiene practises.",
    link: "Read More",
  },
  {
    title: "Agricultural Activities",
    content:
      "We are focused on building our economic activity through practising agriculture",
    link: "Read More",
  },
];

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
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
