document.addEventListener("DOMContentLoaded", () => {
    loadNotes();  // Load the list of notes when the page loads
});

// List of notes (can later be fetched from a database)
const notes = [
    { title: "Maths - Algebra Basics", content: "Learn about the basics of algebra." },
    { title: "Science - Physics", content: "Introduction to Newton's laws of motion." },
    { title: "Maths - Calculus", content: "Differentiation and Integration basics." },
    { title: "History - World War II", content: "Key events of World War II." },
];

// Function to load and display the notes
function loadNotes() {
    const notesList = document.getElementById("notes-list");
    notesList.innerHTML = "";  // Clear existing content
    notes.forEach(note => {
        const noteCard = document.createElement("div");
        noteCard.classList.add("feature-card");
        noteCard.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
        `;
        notesList.appendChild(noteCard);
    });
}

// Function to filter/search notes
function searchNotes() {
    const searchValue = document.getElementById("search-input").value.toLowerCase();
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchValue));

    const notesList = document.getElementById("notes-list");
    notesList.innerHTML = "";  // Clear the notes list
    filteredNotes.forEach(note => {
        const noteCard = document.createElement("div");
        noteCard.classList.add("feature-card");
        noteCard.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
        `;
        notesList.appendChild(noteCard);
    });
}
