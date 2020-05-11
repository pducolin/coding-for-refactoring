function Adjust(rectangle) {
  rectangle.Size = Size.S;

  rectangle.HasError = false;

  rectangle.IsSquare = false;

  if (rectangle.Width >= 10000) rectangle.Size = Size.L;

  if (rectangle.Height <= 100) rectangle.HasError = true;

  if (rectangle.Width === rectangle.Height) rectangle.IsSquare = true;

  if (rectangle.Width >= 20000) rectangle.Size = Size.XL;

  if (rectangle.Height <= 200) rectangle.Size = Size.M;

  if (rectangle.Width <= 300) rectangle.HasError = true;
}

function Adjust_new(rectangle) {
  rectangle.Size = Size.S;

  rectangle.HasError = false;

  rectangle.IsSquare = false;

  if (rectangle.Width >= 10000) rectangle.Size = Size.L;

  if (rectangle.Height <= 100) rectangle.HasError = true;

  if (rectangle.Width === rectangle.Height) rectangle.IsSquare = true;

  if (rectangle.Width >= 20000) rectangle.Size = Size.XL;

  if (rectangle.Height <= 200) rectangle.Size = Size.M;

  if (rectangle.Width <= 300) rectangle.HasError = true;
}

import fc from "fast-check";

function test() {
  fc.assert(
    fc.property(fc.integer(0, 30000), fc.integer(0, 30000), (width, height) => {
      let rectangle = {
        TotalPurchases: totalPurchases,
        RecentOrders: recentOrders,
        LovesJavaScript: lovesJavaScript,
        KnowsCobol: knowsCobol,
      };
      let rectangle_expected = JSON.parse(JSON.stringify(rectangle));
      Adjust(rectangle_expected);
      Adjust_new(rectangle);
      expect(rectangle.Size).toBe(rectangle_expected.Size);
      expect(rectangle.HasError).toBe(rectangle_expected.HasError);
      expect(rectangle.IsSquare).toBe(rectangle_expected.IsSquare);
    })
  );
}

function Adjust_new(rectangle) {
  AdjustSize(rectangle);
  AdjustHasError(rectangle);
  AdjustIsSquare(rectangle);
}

function AdjustSize(rectangle) {
  if (rectangle.Height <= 200) rectangle.Size = Size.M;
  else if (rectangle.Width >= 20000) rectangle.Size = Size.XL;
  else if (rectangle.Width >= 10000) rectangle.Size = Size.L;
  else rectangle.Size = Size.S;
}

function AdjustHasError(rectangle) {
  if (rectangle.Height <= 100 || rectangle.Width <= 300)
    rectangle.HasError = true;
  else rectangle.HasError = false;
}

function AdjustIsSquare(rectangle) {
  if (rectangle.Width === rectangle.Height) rectangle.IsSquare = true;
  else rectangle.IsSquare = false;
}
