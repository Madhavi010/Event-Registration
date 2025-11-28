const form = document.getElementById("eventForm");
const list = document.getElementById("list");

// Load saved participants
let participants = JSON.parse(localStorage.getItem("participants")) || [];
displayList();

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const person = { name, email };
    participants.push(person);

    // Save in localStorage
    localStorage.setItem("participants", JSON.stringify(participants));

    displayList();
    form.reset();
});

// Show participants
function displayList() {
    list.innerHTML = "";
    participants.forEach((p, index) => {
        list.innerHTML += `<li>${p.name} - ${p.email}</li>`;
    });
}
