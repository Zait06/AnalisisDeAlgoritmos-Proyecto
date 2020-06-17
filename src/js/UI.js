export class UI {

    constructor() {
        this.result = document.getElementById('result');
    }

    render(Area) {
        
        console.log(`El area del rectangulo es: ${Area}`);
        this.result.textContent = `El area del rectangulo es: ${Area}`;
    }
}