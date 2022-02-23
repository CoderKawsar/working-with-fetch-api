const user = { id: 11, name: "Kawsar Ahmed", job: "programmer" };

const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

const shop = {
  name: "Alia Shop",
  address: "Ranbir Road",
  profit: 15000,
  owner: {
    name: "alia",
    profession: "actor",
  },
  products: ["laptop", "mobile", "pepsi"],
  isExpensive: false,
};

const shopStrigified = JSON.stringify(shop);
// console.log(shopStrigified);

function loadNames(data) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}

function displayUsers(data) {
  const ul = document.getElementById("user-names");
  for (let user of data) {
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}

(function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
})();

function displayPosts(posts) {
  const postContainer = document.getElementById("post-container");
  for (const post of posts) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>`;
    postContainer.appendChild(div);
  }
}
