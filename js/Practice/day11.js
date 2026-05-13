const btn = document.querySelector("#my-btn");

btn.addEventListener("click", () => {
  console.log("Button clicked!");
});

// You can attach multiple listeners — all run
btn.addEventListener("click", () => {
  console.log("Second handler also fires");
});

btn.addEventListener("click", (e) => {
  console.log(e.type);            // "click"
  console.log(e.target);          // the <button> element
  console.log(e.target.textContent);   // its text
  console.log(e.clientX, e.clientY);   // mouse coordinates
});

// Input — e.target.value is what the user typed
const input = document.querySelector("#name-input");
input.addEventListener("input", (e) => {
  console.log("User typed:", e.target.value);
});

// Keyboard — e.key is which key
document.addEventListener("keydown", (e) => {
  console.log("Pressed:", e.key);   // "a", "Enter", "ArrowUp"
});




const form = document.querySelector("#login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();     // stop the page reload
  console.log("Custom form handling here");
  // ... validate, send via fetch, etc.
});

// Links
const link = document.querySelector("a");
link.addEventListener("click", (e) => {
  e.preventDefault();     // don't navigate
  console.log("Intercepted");
});

// Right-click — disable browser menu (rarely good UX, but you can)
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});




// Mouse Events

const box = document.querySelector("#box");

box.addEventListener("click",        () => console.log("click"));
box.addEventListener("dblclick",     () => console.log("double click"));
box.addEventListener("mouseover",    () => box.classList.add("hover"));
box.addEventListener("mouseout",     () => box.classList.remove("hover"));
box.addEventListener("contextmenu",  (e) => {
  e.preventDefault();
  console.log("right-clicked at", e.clientX, e.clientY);
});


//  Bubbling & Event Delegation


// WITHOUT delegation — one listener per item, repeated work
document.querySelectorAll("#todo-list li").forEach(li => {
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });
});

