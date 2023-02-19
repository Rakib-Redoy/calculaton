let serial = 0;







document.getElementById('triangle-btn').addEventListener('click', function(){
    serial += 1;
    const base = getValue('base-c1-value');
    const height = getValue('height-c1-value');
    if(base == "" || height == "" 
     || base <= 0 || height <= 0
     || isNaN(base) || isNaN(height)){
        alert('Please Enter A Valid Number')
    }
    else{
        const triangleArea = tripleMultiplication(base, height).toFixed(2);
        const name = document.getElementById('triangle-card').innerText;
        displayData(name, triangleArea);
        const textOne = document.getElementById('text1-card1');
        textOne.innerText= base;
        const textTwo = document.getElementById('text2-card1');
        textTwo.innerText = height;
    }
    const element = document.getElementById('base-c1-value');
    element.value = "";
    const element2 = document.getElementById('height-c1-value');
    element2.value = "";
    
})
document.getElementById('rectangle-btn').addEventListener('click', function(){
    serial += 1;
    const width = getValue('width-c2-value');
    const length = getValue('length-c2-value');
    if(width == "" || length == "" 
        || width <= 0 || length <= 0
        || isNaN(width) || isNaN(length)){
        alert('Please Enter A Valid Number')
    }
    else{
        const rectangleArea = doubleMultiplication(width, length).toFixed(2);
        const name = document.getElementById('Rectangle-card').innerText;
        displayData(name, rectangleArea);
        const textOne = document.getElementById('text1-card2');
        textOne.innerText= width;
        const textTwo = document.getElementById('text2-card2');
        textTwo.innerText = length;
    }
    const element = document.getElementById('width-c2-value');
    element.value = "";
    const element2 = document.getElementById('length-c2-value');
    element2.value = "";
})
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    serial += 1;
    const base = getValue('base-c3-value');
    const height = getValue('height-c3-value');
    if(base == "" || height == "" 
     || base <= 0 || height <= 0
     || isNaN(base) || isNaN(height)){
        alert('Please Enter A Valid Number')
    }
    else{
        const parallelogramArea = doubleMultiplication(base, height).toFixed(2);
        const name = document.getElementById('parallelogram-card').innerText;
        displayData(name, parallelogramArea);
        const textOne = document.getElementById('text1-card3');
        textOne.innerText= base;
        const textTwo = document.getElementById('text2-card3');
        textTwo.innerText = height;
    }
    const element = document.getElementById('base-c3-value');
    element.value = "";
    const element2 = document.getElementById('height-c3-value');
    element2.value = "";
})


document.getElementById('rhombus-btn').addEventListener('click', function(){
    serial += 1;
    const dOne = getValue('d1-c4-value');
    const dTwo = getValue('d2-c4-value');
    if(dOne == "" || dTwo == "" 
     || dOne <= 0 || dTwo <= 0
     || isNaN(dOne) || isNaN(dTwo)){
        alert('Please Enter A Valid Number')
    }
    else{
        const rhombusArea = tripleMultiplication(dOne, dTwo).toFixed(2);
        const name = document.getElementById('rhombus-card').innerText;
        displayData(name, rhombusArea);
        const textOne = document.getElementById('text1-card4');
        textOne.innerText= dOne;
        const textTwo = document.getElementById('text2-card4');
        textTwo.innerText = dTwo;
    }
    const element = document.getElementById('d1-c4-value');
    element.value = "";
    const element2 = document.getElementById('d2-c4-value');
    element2.value = "";
})


document.getElementById('pentagon-btn').addEventListener('click', function(){
    serial += 1;
    const perimeter = getValue('perimeter-value');
    const apothem = getValue('apothem-value');
    
    if(perimeter == "" || apothem == "" 
     || perimeter <= 0 || apothem <= 0
     || isNaN(perimeter) || isNaN(apothem)){
        alert('Please Enter A Valid Number')
    }
    else{
        const pentagonArea = tripleMultiplication(perimeter, apothem).toFixed(2);
        const name = document.getElementById('pentagon-card').innerText;
        displayData(name, pentagonArea);
        const textOne = document.getElementById('text1-card5');
        textOne.innerText= perimeter;
        const textTwo = document.getElementById('text2-card5');
        textTwo.innerText = apothem;
    }
    const element = document.getElementById('perimeter-value');
    element.value = "";
    const element2 = document.getElementById('apothem-value');
    element2.value = "";
})


document.getElementById('ellipse-btn').addEventListener('click', function(){
    serial += 1;
    const valueOne = getValue('a-value');
    const valueTwo = getValue('b-value');
    if(valueOne == "" || valueTwo == "" 
     || valueOne <= 0 || valueTwo <= 0
     || isNaN(valueOne) || isNaN(valueTwo)){
        alert('Please Enter A Valid Number')
    }
    else{
        const ellipseArea = pieCalculation(valueOne, valueTwo);
        const name = document.getElementById('ellipse-card').innerText;
        displayData(name, ellipseArea);
        const textOne = document.getElementById('text1-card6');
        textOne.innerText= valueOne;
        const textTwo = document.getElementById('text2-card6');
        textTwo.innerText = valueTwo;
    }
    const element = document.getElementById('a-value');
    element.value = "";
    const element2 = document.getElementById('b-value');
    element2.value = "";
})







function displayData(name, result){
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = 
    `
        <td>${serial}</td>
        <td>${name}</td>
        <td>${result}cm <sup>2</sup></td>
        <td>
            <button class="convert-btn">Convert m<sup>2</sup></button>
        </td>
    `;
    container.appendChild(tr);
}
        
function getValue(id){
    const getStringValue = document.getElementById(id).value;
    const getNumberValue = parseFloat(getStringValue);
    return getNumberValue;
}
function tripleMultiplication(p1, p2){
    const multiplication = 0.5 * p1 * p2;
    return multiplication;
}
function doubleMultiplication (p1, p2){
    const multiplication = p1 * p2;
    return multiplication;
}
function pieCalculation(p1, p2){
    const pie = 3.1416;
    const multiplication = pie * p1 * p2;
    const result = multiplication.toFixed(2);
    return result;
}
const changeColor = document.querySelectorAll('.change-color');
const colors = ['#2ecc71', '#16a085', '#0097e6', '#9c88ff', '#d2dae2'];
let element = 0;

for (let i = 0; i < changeColor.length; i++) {
    changeColor[i].addEventListener('mouseover', function() {
    element = (element + 1) % colors.length;
    changeColor[i].style.backgroundColor = colors[element];
  });
}
