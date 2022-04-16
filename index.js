document.getElementById("user-input")
.addEventListener('keyup', function(event) {
  if (event.code === 'Enter')
  {
    document.querySelector('form').calculate();
    event.preventDefault();
  }
});

function calculate() {
    userInput = document.getElementById('user-input').value;
      ceToFa = userInput * 1.8 + 32
      ceToFa = ceToFa.toFixed(3)
      faToCe = userInput - 32
      faToCe *= 5
      faToCe /= 9
      faToCe = faToCe.toFixed(3)
        document.getElementById('temp').innerHTML = userInput + " celcius" + " = " + ceToFa + " farenheit" + " | " + userInput + " farenheit" + " = " + faToCe + " celcius";

      meterToFeet = userInput * 3.28084
      meterToFeet = meterToFeet.toFixed(3)
      feetToMeter = userInput * 0.3048
      feetToMeter = feetToMeter.toFixed(3)
        document.getElementById('length').innerHTML = userInput + " meters" + " = " + meterToFeet + " feet" + " | " + userInput + " feet" + " = " + feetToMeter + " meters";

      centToIn = userInput * 0.393701
      centToIn = centToIn.toFixed(3)
      inchToCent = userInput / 0.393701
      inchToCent = inchToCent.toFixed(3)
        document.getElementById('centIn').innerHTML = userInput + " centimeters" + " = " + centToIn + "  inches" + " | " + userInput + " inches" + " = " + inchToCent + "  centimeters";

      litreToGallon = userInput * 0.264172
      litreToGallon = litreToGallon.toFixed(3)
      gallonToLitre = userInput * 3.785412
      gallonToLitre = gallonToLitre.toFixed(3)
        document.getElementById('volume').innerHTML = userInput + " litres" + " = " + litreToGallon + " gallons" + " | " + userInput + " gallons" + " = " + gallonToLitre + " litres";
    
      kiloToPound = userInput * 2.2046226
      kiloToPound = kiloToPound.toFixed(3)
      poundToKilo = userInput * 0.45359237
      poundToKilo = poundToKilo.toFixed(3)
        document.getElementById('mass').innerHTML = userInput + " kilos" + " = " + kiloToPound + " pounds" + " | " + userInput + " pounds" + " = " + poundToKilo + " kilos";
    
      gramToOz = userInput * 0.035274
      gramToOz = gramToOz.toFixed(3)
      ounToGm = userInput * 28.34952
      ounToGm = ounToGm.toFixed(3)
        document.getElementById('gramOz').innerHTML = userInput + " grams" + " = " + gramToOz + " ounces" + " | " + userInput + " ounces" + " = " + ounToGm + " grams";
      
      event.preventDefault()
  }


 




