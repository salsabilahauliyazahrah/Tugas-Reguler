function shout() {
    alert("Hai, Selamat datang di Sistem Sederhana");
}

//Menu Makanan
function tampilMenu() {
    alert("Input Jumlah Pesanan agar di hitung otomatis oleh sistem");

    document.getElementById("halamanAwal").style.display = "none";
    document.getElementById("menuMakanan").style.display = "block";
}

function hitungTotal() {
    let bakso = parseInt(document.getElementById("bakso").value) || 0;
    let soto = parseInt(document.getElementById("soto").value) || 0;
    let mie = parseInt(document.getElementById("mie").value) || 0;

    let hargaBakso = 12000;
    let hargaSoto = 10000;
    let hargaMie = 15000;

    let total = (bakso * hargaBakso) + (soto * hargaSoto) + (mie * hargaMie);

    let diskon = 0;
    if (total > 50000) {
        diskon = total * 0.10;
    }

    let bayar = total - diskon;

    document.getElementById("total").value = total;
    document.getElementById("diskon").value = diskon;
    document.getElementById("bayar").value = bayar;
}

function resetData() {
    document.getElementById("bakso").value = 0;
    document.getElementById("soto").value = 0;
    document.getElementById("mie").value = 0;
    document.getElementById("total").value = 0;
    document.getElementById("diskon").value = 0;
    document.getElementById("bayar").value = 0;
}

//Calculator
function tampilkanCalculator() {
    alert("Inputan pertama dan kedua harus lebih dari 0")

    document.getElementById("halamanAwal").style.display = "none";
    document.getElementById("menuMakanan").style.display = "none";
    document.getElementById("tampilkanCalculator").style.display = "block";
}

function hitungHasil() {
    let angka1 = document.getElementById("angka1").value;
    let angka2 = document.getElementById("angka2").value;
    let operator = document.getElementById("operator").value;

    if (angka1 === "" || angka2 === "") {
        alert("Inputan pertama dan kedua harus lebih dari 0");
        return;
    }

    angka1 = parseFloat(angka1);
    angka2 = parseFloat(angka2);

    let hasil = 0; 

    if (operator === "+") {
        hasil = angka1 + angka2;
    } else if (operator === "-") {
        hasil = angka1 - angka2;
    } else if (operator === "*") {
        hasil = angka1 * angka2;
    } else if (operator === "/") {
        if (angka2 === 0) {
            alert("Tidak bisa membagi dengan nol");
            return;
        }
        hasil = angka1 / angka2;
    }

    document.getElementById("hasil").value = hasil;
}

function resetHasil() {
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";
    document.getElementById("operator").value = "+";
    document.getElementById("hasil").value = "";
}