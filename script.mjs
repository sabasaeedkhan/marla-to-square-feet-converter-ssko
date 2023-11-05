function doConvert(event)
 {
    event.preventDefault();
    // Get the value of marla input
    var marla = parseFloat(document.getElementById("marla").value);
    
    // Conversion factor: 1 marla is equal to 272.251 square feet
    var squareFeet = marla * 272.251;
    
    // Display the result on the screen
    document.getElementById("result").innerHTML = marla + " marla = " + squareFeet + " Square Feet.";
}