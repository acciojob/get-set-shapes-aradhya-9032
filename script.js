class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    getArea() {
        return this._width * this._height;
    }
}

class Square extends Rectangle {
    // The constructor for Square can be omitted, as it will use the constructor of the parent class (Rectangle).

    getPerimeter() {
        return 4 * this.width; // Corrected the formula here
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
