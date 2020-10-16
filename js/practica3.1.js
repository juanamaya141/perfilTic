let matrix = [];

function printMatrix(){
    let html = '';
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            html += `${matrix[i][j]} `;
        }
        html += `<br />`;
    }
    result.innerHTML = html;
}

async function getMatrix(e, form){
    e.preventDefault();
    const n = parseInt(form.elements.N.value);
    const res = await fetch(`php/practica2.3.php?N=${n}`);
    matrix = await res.json();
    printMatrix();
    
}

function doubleMatrix(){
    let matrixTmp = [];
    for (let i = 0; i < matrix.length; i++) {
        let rowTmp = [];
        for (let j = 0; j < matrix.length; j++) {
            rowTmp [j] = matrix[i][j]*2;
        }
        matrixTmp[i] = rowTmp;
    }
    matrix = matrixTmp;
    printMatrix();
}