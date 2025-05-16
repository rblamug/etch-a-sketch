const container = document.querySelector('#container');

for (let i = 1; i <=256; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "grid";
    container.appendChild(newDiv);
}

const sketch = document.querySelectorAll('.grid');
sketch.forEach(sketch => {
    sketch.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "black";
    })
})

// Button click to ask canvas size
const sizer = document.querySelector('button')
sizer.addEventListener("click", () => {
    const size = prompt("Enter number of squares per side:");
})