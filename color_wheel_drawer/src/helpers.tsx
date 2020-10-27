const drawComplementaryColors: () => object = function (
): object {
    console.log("drawComplementaryColors called");
    let randomColor = Math.floor(Math.random()*16777215);
    let complementaryColor = 0xffffff ^ randomColor;

    console.log("drawn color: " + randomColor.toString(16));
    console.log("complementary color: " + complementaryColor.toString(16));

    return {
        background: "#"+complementaryColor.toString(16),
        color: "#"+randomColor.toString(16)
      }
}

export default drawComplementaryColors;