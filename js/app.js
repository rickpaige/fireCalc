function conversion() {
  var ft = Number(prompt('Enter feet: '));
  var inch = Number(prompt('Enter inches: '));
  var num;
  switch (inch) {
    case 0:
      inch = .00;
      num = Number(ft + inch);
      return num;
      break;
    case 1:
      inch = .08;
      num = Number(ft + inch);
      return num;
      break;
    case 2:
      inch = .16;
      num = Number(ft + inch);
      return num;
      break;
    case 3:
      inch = .25;
      num = Number(ft + inch);
      return num;
      break;
    case 4:
      inch = .33;
      num = Number(ft + inch);
      return num;
      break;
    case 5:
      inch = .41;
      num = Number(ft + inch);
      return num;
      break;
    case 6:
      inch = .50;
      num = Number(ft + inch);
      return num;
      break;
    case 7:
      inch = .58;
      num = Number(ft + inch);
      return num;
      break;
    case 8:
      inch = .66;
      num = Number(ft + inch);
      return num;
      break;
    case 9:
      inch = .75;
      num = Number(ft + inch);
      return num;
      break;
    case 10:
      inch = .83;
      num = Number(ft + inch);
      return num;
      break;
    case 11:
      inch = .91;
      num = Number(ft + inch);
      return num;
      break;
    default:
      console.log('Invalid Entry.');
  }

}

function fireCalc() {
  m1 = Number(conversion());
  m2 = Number(conversion());
  m3 = conversion();
  let sum = (m1 * m2 * m3) / 128; 

  document.body.innerHTML = `<ul>
   <div id="measurement">
    <li class="measurement">Measurement 1: ${m1}</li>
    <li class="measurement">Measurement 2: ${m2}</li>
    <li class="measurement">Measurement 3: ${m3}</li>
   </div>
    <li id="equation">(${m1} * ${m2} * ${m3}) / 128</li> 
    <li id="sum">${sum}</li>
    
    </ul>`
  


}

fireCalc();
