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