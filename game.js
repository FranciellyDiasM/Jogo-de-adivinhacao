
function generateAllColors() {
  const colors = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque",
    "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue",
    "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan",
    "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki",
    "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon",
    "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet",
    "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick", "FloralWhite",
    "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray",
    "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki",
    "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral",
    "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGreen", "LightPink",
    "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue",
    "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine",
    "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue",
    "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream",
    "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab",
    "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise",
    "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue",
    "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown",
    "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray",
    "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise",
    "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
  ];
  return colors;
}

const allColors = generateAllColors();
const randomColors = allColors.sort(() => 0.5 - Math.random()).slice(0, 10); //gerar 10 cores

const colorOptionsDiv = document.getElementById("colorOptions");
colorOptionsDiv.textContent = `Opções de cores: ${randomColors.join(", ")}`; //mostrar as aleatorias

const secretColor = randomColors[Math.floor(Math.random() * randomColors.length)];
console.log(`Cor secreta: ${secretColor}`); // escolher a cor

// Função de adivinha
function guessColor() {
  const userColor = document.getElementById("colorInput").value.trim();
  const feedback = document.getElementById("feedback");

  if (!userColor) {
    feedback.textContent = "Digite uma cor:";
    return;
  }

  if (userColor.toLowerCase() === secretColor.toLowerCase()) {
    document.body.style.backgroundColor = secretColor;
    feedback.textContent = `Parabéns! Você acertou! A cor era ${secretColor}.`;
  } else {
    const hint = userColor.toLowerCase() < secretColor.toLowerCase() ? "vem depois" : "vem antes";
    feedback.textContent = `Errou! A cor secreta ${hint} de ${userColor} na ordem alfabética.`;
  }
}
