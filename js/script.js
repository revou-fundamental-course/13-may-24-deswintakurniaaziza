// Elemen input
const alasInput = document.getElementById('alas');
const tinggiInput = document.getElementById('tinggi');

const sisiAInput = document.getElementById('sisiA');
const sisiBInput = document.getElementById('sisiB');
const sisiCInput = document.getElementById('sisiC');

// Elemen tombol hitung
const hitungLuasButton = document.getElementById('hitung');

// Event listener untuk tombol hitung luas segitiga
hitungLuasButton.addEventListener('click', function() {
    // Ambil nilai alas dan tinggi dari input
    const alas = parseFloat(alasInput.value);
    const tinggi = parseFloat(tinggiInput.value);

    // Hitung luas segitiga
    const luas = 0.5 * alas * tinggi;

    // Tampilkan hasil berupa alert
    const rumus = 'Luas = 1/2 × alas × tinggi';
    const nilai = `Luas = 1/2 x ${alas} x ${tinggi}`;
    const hasil = `Luas = ${luas}`;
    const output = `${rumus}\n${nilai}\n${hasil}`;
    alert(output);
});

// Elemen tombol reset luas segitiga
const resetLuasButton = document.getElementById('resetLuas');

// Event listener untuk tombol reset luas segitiga
resetLuasButton.addEventListener('click', function() {
    // Reset nilai input
    alasInput.value = '';
    tinggiInput.value = '';
});

// Elemen tombol untuk perhitungan keliling segitiga
const hitungKelilingButton = document.getElementById('hitungKel');

// Event listener untuk tombol hitung keliling segitiga
hitungKelilingButton.addEventListener('click', function() {
    // Ambil nilai sisi-sisi dari input
    const sisiA = parseFloat(sisiAInput.value);
    const sisiB = parseFloat(sisiBInput.value);
    const sisiC = parseFloat(sisiCInput.value);

    // Hitung keliling segitiga
    const keliling = sisiA + sisiB + sisiC;

    // Tampilkan hasil berupa alert
    const rumus = 'Keliling = sisi A + sisi B + sisi C';
    const nilai = `Keliling = ${sisiA} + ${sisiB} + ${sisiC}`;
    const hasil = `Keliling = ${keliling}`;
    const output = `${rumus}\n${nilai}\n${hasil}`;
    alert(output);
});

// Elemen tombol reset keliling segitiga
const resetKelilingButton = document.getElementById('resetKel');

// Event listener untuk tombol reset keliling segitiga
resetKelilingButton.addEventListener('click', function() {
    // Reset nilai input
    sisiAInput.value = '';
    sisiBInput.value = '';
    sisiCInput.value = '';
});
