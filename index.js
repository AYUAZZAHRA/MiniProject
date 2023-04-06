function luassegitiga()
{
    const alas = parseFloat(document.getElementById('alas').value); 
    const tinggi = parseFloat(document.getElementById('tinggi').value); 

    luas = 0.5*alas*tinggi;
    const result = 'Luas Segitiga = ${luas}';
    document.getElementById('output').textContent = result;
    return false;
}

function ulang2(){
    document.getElementById('FormHitung').reset();
}

function kelilingsegitiga()
{
    const s1 = parseFloat(document.getElementById('s1').value); 
    const s2 = parseFloat(document.getElementById('s2').value); 
    const s3 = parseFloat(document.getElementById('s3').value);

    kel = s1 + s2 + s3;
    const result = 'Keliling Segitiga = ${kel}';
    document.getElementById('outputkel').textContent = result;
    return false;
}

function keliling(){
    document.getElementById("FormKelSegitiga").reset();
}

