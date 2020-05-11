class Rectangle {
  // helper functions BEGIN
  scaleWidthByFactor(scalingFactor) {
    this.width *= scalingFactor;
  }
  scaleHeightByFactor(scalingFactor) {
    this.height *= scalingFactor;
  }
  // helper functions END

  // frequently used functions BEGIN
  ScaleWidthAndHeightByFactor(scalingFactor) {
    this.scaleWidthByFactor(scalingFactor);
    this.scaleHeightByFactor(scalingFactor);
  }
  // frequently used functions END
}

class Rectangle {
  // scaling functions BEGIN
  ScaleWidthAndHeightByFactor(scalingFactor) {
    this.scaleWidthByFactor(scalingFactor);
    this.scaleHeightByFactor(scalingFactor);
  }
  scaleWidthByFactor(scalingFactor) {
    this.width *= scalingFactor;
  }
  scaleHeightByFactor(scalingFactor) {
    this.height *= scalingFactor;
  }
  // scaling functions END
}
