const loadBuddies = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => displayBuddies(data));
};
loadBuddies();
function displayBuddies(data) {
  const personDiv = document.getElementById("person");
  data.results.forEach((person) => {
    const singleDiv = document.createElement("div");
    singleDiv.classList.add("single-person");
    // adding name
    const name = document.createElement("p");
    name.innerText = `Name: ${person.name.title} ${person.name.first} ${person.name.last}`;
    singleDiv.appendChild(name);

    // adding email
    const email = document.createElement("p");
    email.innerText = "Email: " + person.email;
    singleDiv.appendChild(email);

    personDiv.appendChild(singleDiv);
  });
}
