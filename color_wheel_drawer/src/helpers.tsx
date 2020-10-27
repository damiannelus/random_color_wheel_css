const drawComplementaryColors: () => object = function (
): object {
    console.log("drawComplementaryColors called");
    let randomColorRGB = {
        r: Math.floor(Math.random()*255),
        g: Math.floor(Math.random()*255),
        b: Math.floor(Math.random()*255)
    };
    let complementaryColorRGB = {
        r: 255 - randomColorRGB.r,
        g: 255 - randomColorRGB.g,
        b: 255 - randomColorRGB.b
    };

    let randomColor = RGBColorToHexColor(randomColorRGB);
    let complementaryColor = RGBColorToHexColor(complementaryColorRGB);

    console.log("drawn color: " + randomColor);
    console.log("complementary color: " + complementaryColor);

    return {
        background: complementaryColor,
        color: randomColor
      }
}

interface ColorRGB {
    r: number,
    g: number,
    b: number
}

// const RGBColorToHexColor: (RGBColor: object) => String = function (
//     // RGBColor: object
// ): String {
//     return "#"+RGBtoHEX(RGBColor.r)+RGBtoHEX(RGBColor.g)+RGBtoHEX(RGBColor.b)
// }

const RGBColorToHexColor = function (RGBColor: ColorRGB): String {
    return "#"+RGBtoHEX(RGBColor.r)+RGBtoHEX(RGBColor.g)+RGBtoHEX(RGBColor.b)
}

const RGBtoHEX: (RGB: number) => String = function (
    RGB: number
): String {
  let hex = Number(RGB).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
}


export default drawComplementaryColors;