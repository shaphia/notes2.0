document.addEventListener("DOMContentLoaded", () => {
    loadMathNotes();  // Load the list of Math notes when the page loads
});

// List of Maths notes
const mathNotes = [
    { title: "Algebra - Basics", content: "Understand the basics of algebraic expressions and equations." },
    { title: "Calculus - Limits", content: "Learn about limits and their significance in calculus." },
    { title: "Trigonometry - Introduction", content: "Introduction to trigonometric functions and their applications." },
    { title: "Geometry - Shapes", content: "Properties of different geometrical shapes and theorems." },
    { title: "Statistics - Probability", content: "Fundamentals of probability and statistics." }
];

// Function to load and display the Maths notes
function loadMathNotes() {
    const notesList = document.getElementById("math-notes-list");
    notesList.innerHTML = "";  // Clear existing content
    mathNotes.forEach(note => {
        const noteItem = document.createElement("li");
        noteItem.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
        `;
        notesList.appendChild(noteItem);
    });
}

// Function to filter/search Maths notes
function searchMathNotes() {
    const searchValue = document.getElementById("math-search-input").value.toLowerCase();
    const filteredNotes = mathNotes.filter(note => note.title.toLowerCase().includes(searchValue));

    const notesList = document.getElementById("math-notes-list");
    notesList.innerHTML = "";  // Clear the notes list
    filteredNotes.forEach(note => {
        const noteItem = document.createElement("li");
        noteItem.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
        `;
        notesList.appendChild(noteItem);
    });
}

