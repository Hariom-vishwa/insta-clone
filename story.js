const storyObj = [
  {
    proPic:
      "https://images.unsplash.com/photo-1723300677966-ab58ec1d0b2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    storyImg:
      "https://images.unsplash.com/photo-1723300677966-ab58ec1d0b2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Eden",
    time: "2h ",
  },
  {
    proPic:
      "https://images.unsplash.com/photo-1715229436824-35096fb8c476?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    storyImg:
      "https://images.unsplash.com/photo-1724759401545-f0d37d5bbd27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "George",
    time: "22min ",
  },
  {
    proPic:
      "https://images.unsplash.com/photo-1724767928970-85c8743cf01d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    storyImg:
      "https://images.unsplash.com/photo-1724690950856-7d782d532f5f?q=80&w=1897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Selena",
    time: "43min ",
  },
  {
    proPic:
      "https://images.unsplash.com/photo-1724086575243-6796fc662673?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    storyImg:
      "https://images.unsplash.com/photo-1683009427041-d810728a7cb6?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jacey",
    time: "4h ",
  },
  {
    proPic:
      "https://images.unsplash.com/photo-1724533572525-cc0123a872e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    storyImg:
      "https://images.unsplash.com/photo-1682687982141-0143020ed57a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Katrina",
    time: "5h ",
  },
  {
    proPic:
      "https://images.unsplash.com/photo-1596332545213-bd505a37ece2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    storyImg:
      "https://images.unsplash.com/photo-1724814816550-195cfd07ec88?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jasmine",
    time: "3min ",
  },
  {
    proPic:
      "https://images.unsplash.com/photo-1724186329819-0813fc014615?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    storyImg:
      "https://images.unsplash.com/photo-1714912213756-821842ebe76a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Alanna",
    time: "5h",
  },
  {
    proPic:
      "https://images.unsplash.com/photo-1569270905928-ae249df9fead?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    storyImg:
      "https://images.unsplash.com/photo-1601647021419-23e842a6e43d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Kierra",
    time: "3min ago",
  },
];

// Instagram Story

const storyCont = document.querySelector("#storiesCont");

function initStory() {
  storyObj.forEach((value, index) => {
    const story = document.createElement("div");
    story.classList.add("stories");

    story.innerHTML = `<img src="${value.proPic}" id="${index}" alt="">`;
    storyCont.appendChild(story);
  });

  // Add event listener to the parent container
  storyCont.addEventListener("click", function (dets) {
      document.querySelector("#idDets").innerHTML = `
      <img src="${storyObj[dets.target.id].proPic}" alt="">
      <h5>${storyObj[dets.target.id].name}</h5>
      <h6>${storyObj[dets.target.id].time}</h6>
      `;
      document.querySelector("#storyPg").style.display = "block";
      document.querySelector("#storyPg").style.transform = "scale(1)";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector("#wholeStory").style.backgroundImage = `url(${
        storyObj[dets.target.id].storyImg
      })`;
      setTimeout(function () {
        document.querySelector("body").style.overflow = "auto";
        document.querySelector("#storyPg").style.display = "none";
        document.querySelector("#storyPg").style.transform = "scale(0)";
      }, 5000);
  });
}

initStory();
