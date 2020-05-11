var rectangle = new Rectangle(3, 5);
rectangle.increaseSize(0.3);

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  increaseSize(percentage) {
    this.width *= percentage;
    this.height *= percentage;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  scaleWidthAndHeightByFactor(percentage) {
    this.width *= percentage;
    this.height *= percentage;
  }
}

var rectangle = new Rectangle(3, 5);
rectangle.scaleWidthAndHeightByFactor(0.3);
