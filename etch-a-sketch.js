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
    const userInput = prompt("Enter number of squares per side (1-100):",);
    const size = Number(userInput);
    if (isNaN(size) || size < 1 || size > 100) {
        console.log('User input in not a number, retrigger event');
        alert("Please enter a number between 1 - 100");
        sizer.dispatchEvent(new Event("click"));
    } else {
        console.log(`The user entered ${size}`);
        container.textContent = '';
        const newHeightAndWidth = 1024 / size;
        console.log(`New height and width is ${newHeightAndWidth}`);
        const totalBoxes = size * size;

        for (i = 1; i < totalBoxes; i++) {
            const newDiv = document.createElement("div");
            newDiv.className = "grid";
            newDiv.style.height = `${newHeightAndWidth}px`;
            newDiv.style.width = `${newHeightAndWidth}px`;
            container.appendChild(newDiv);

            //retrigger the eventlistener so the user can draw again
            const sketch = document.querySelectorAll('.grid');
            sketch.forEach(sketch => {
            sketch.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "black";
    })
})

        };
    };
});