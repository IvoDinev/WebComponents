class ShapeCircle extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        //Create the circle
        const circle = document.createElement('span');
        circle.setAttribute('class', 'circle-class');
        circle.setAttribute('color', 'red');
        let color = this.getAttribute('color');
        if (color === "random") {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            color = "#" + randomColor;
        }

        // Create some CSS to apply to the shadow dom
        const style = document.createElement('style');
        style.textContent = `.circle-class {
            height: 25px;
            width: 25px;
            border-radius: 50%;
            border: 3px solid black;
            display: inline-block;
            background-color: ${color}
        }`;

        // Attach the created elements to the shadow dom
        shadow.appendChild(style);
        console.log(style.isConnected);
        shadow.appendChild(circle);
    }
}

// Define the new element
customElements.define('shape-circle', ShapeCircle);