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
  fillSelect();
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
    if (filter === "all") {
      createDiv(element);
    }
    if (filter === element.type) {
      createDiv(element);
    }
  });
}

function fillSelect() {
  const newOption = ["all"];
  icon.forEach((element) => {
    if (!newOption.includes(element.type)) {
      newOption.push(element.type);
    }
  });
  createOption(newOption);
}

function createOption(selectOption) {
  const select = document.getElementById("filter");
  selectOption.forEach((element) => {
    const option = document.createElement("option");
    option.value = element;
    option.innerHTML = element;
    select.appendChild(option);
  });
}

function createDiv(element) {
  const div = document.createElement("div");
  const i = document.createElement("i");
  const h3 = document.createElement("h3");

  div.classList.add("col");
  i.classList.add(`${element.family}`);
  i.classList.add(`${element.prefix}${element.name}`);
  i.style.color = element.color;
  h3.innerHTML = element.name;
  h3.innerHTML = h3.innerHTML.toUpperCase();
  div.appendChild(i);
  div.appendChild(h3);
  iconContainer.appendChild(div);
}
