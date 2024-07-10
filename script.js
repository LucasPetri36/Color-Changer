function colorChanger(){
   let color = document.getElementById('color').value;
   color = color.toLowerCase();

   switch(color){
    case 'blue':
    document.body.style.backgroundColor = 'blue';
    document.getElementById('texto').innerHTML = ""
    break;
    case 'red':
    document.body.style.backgroundColor = 'red';
    document.getElementById('texto').innerHTML = ""
    break;
    case 'green':
    document.body.style.backgroundColor = 'green';
    document.getElementById('texto').innerHTML = ""
    break;
    case 'yellow':
    document.body.style.backgroundColor = 'yellow';
    document.getElementById('texto').innerHTML = ""
    break;
    case 'orange':
    document.body.style.backgroundColor = 'orangeRed';
    document.getElementById('texto').innerHTML = ""
    break;
    case 'black':
    document.body.style.backgroundColor = 'black';
    document.getElementById('texto').innerHTML = ""
    break;
    case 'pink':
    document.body.style.backgroundColor = 'pink';
    document.getElementById('texto').innerHTML = ""
    break;
    case 'purple':
    document.body.style.backgroundColor = 'purple';
    document.getElementById('texto').innerHTML = ""
    break;
    case 'grey':
    document.body.style.backgroundColor = 'grey';
    document.getElementById('texto').innerHTML = ""
    break;
    case 'white':
    document.body.style.backgroundColor = 'white';
    document.getElementById('texto').innerHTML = ""
    break;
    default:
        document.getElementById('texto').innerHTML = 'This color does not exist bro.'
    break;
}

}