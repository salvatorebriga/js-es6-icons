const icon = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
];

const filter = document.getElementById("filter");
const iconContainer = document.getElementById("icon-container");

window.addEventListener("load", () => {
  const filterValue = document.getElementById("filter").value;
  changeContent(filterValue);
});

filter.addEventListener("change", () => {
  const filterValue = document.getElementById("filter").value;
  changeContent(filterValue);
});

function changeContent(filter) {
  iconContainer.innerHTML = "";
  icon.forEach((element) => {
    const div = document.createElement("div");
    const i = document.createElement("i");
    const h3 = document.createElement("h3");
    switch (filter) {
      case "all":
        div.classList.add("col");
        i.classList.add(`${element.family}`);
        i.classList.add(`${element.prefix}${element.name}`);
        i.style.color = element.color;
        h3.innerText = element.name;
        div.appendChild(i);
        div.appendChild(h3);
        iconContainer.appendChild(div);

      case "animal":
        if (element.type === filter) {
          div.classList.add("col");
          i.classList.add(`${element.family}`);
          i.classList.add(`${element.prefix}${element.name}`);
          i.style.color = element.color;
          h3.innerText = element.name;
          div.appendChild(i);
          div.appendChild(h3);
          iconContainer.appendChild(div);
        }

      case "vegetable":
        if (element.type === filter) {
          div.classList.add("col");
          i.classList.add(`${element.family}`);
          i.classList.add(`${element.prefix}${element.name}`);
          i.style.color = element.color;
          h3.innerText = element.name;
          div.appendChild(i);
          div.appendChild(h3);
          iconContainer.appendChild(div);
        }

      case "user":
        if (element.type === filter) {
          div.classList.add("col");
          i.classList.add(`${element.family}`);
          i.classList.add(`${element.prefix}${element.name}`);
          i.style.color = element.color;
          h3.innerText = element.name;
          div.appendChild(i);
          div.appendChild(h3);
          iconContainer.appendChild(div);
        }
    }
  });
}
