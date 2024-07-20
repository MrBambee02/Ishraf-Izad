class LoadingBar {
    constructor(options = {}) { // Added default options argument
        this.domElement = document.createElement("div");

        // Updated styles with some changes
        this.domElement.style.position = 'fixed';
        this.domElement.style.top = '50%'; // Centered vertically
        this.domElement.style.left = '50%'; // Centered horizontally
        this.domElement.style.transform = 'translate(-50%, -50%)'; // Center using transform for better responsiveness
        this.domElement.style.width = '200px'; // Adjusted width
        this.domElement.style.height = '30px'; // Adjusted height
        this.domElement.style.background = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent black background
        this.domElement.style.display = 'flex';
        this.domElement.style.alignItems = 'center';
        this.domElement.style.justifyContent = 'center';
        this.domElement.style.borderRadius = '5px'; // Added rounded corners
        this.domElement.style.zIndex = '1111';

        const barBase = document.createElement("div");
        barBase.style.background = '#333'; // Changed base color to dark gray
        barBase.style.width = '100%'; // Made base bar full width
        barBase.style.borderRadius = '5px';
        barBase.style.height = '100%'; // Made base bar full height
        this.domElement.appendChild(barBase);

        const bar = document.createElement("div");
        bar.style.background = '#00f'; // Changed progress bar color to blue
        bar.style.borderRadius = '5px';
        bar.style.width = '0'; // Initial width 0
        barBase.appendChild(bar);
        this.progressBar = bar;

        document.body.appendChild(this.domElement);
    }

    set progress(delta) {
        const percent = delta * 100;
        this.progressBar.style.width = `${percent}%`;
    }

    set visible(value) {
        if (value) {
            this.domElement.style.display = 'flex';
        } else {
            this.domElement.style.display = 'none';
        }
    }
}

export { LoadingBar };