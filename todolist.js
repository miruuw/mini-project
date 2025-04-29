const fs = require('fs');
const readlineSync = require('readline-sync');

const FILENAME = 'todolist.txt';

function bacaFile(){
    if (!fs.existsSync(FILENAME)) {
        return [];
    }
    const data = fs.readFileSync(FILENAME, 'utf8');
    return data.split('\n').filter(Boolean);
}

function tulisFile(tugas){
    fs.writeFileSync(FILENAME, tugas.join('\n'));
}

function tampilkanTugas(tugas){
    console.log("\n--- Daftar Tugas ---");
    if (tugas.length === 0) {
        console.log("Tidak ada tugas.");
    } else {
        tugas.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}

// Main Program
while (true) {
    const tugas = bacaFile();

    console.log("\n--- Pilihan ---");
    console.log("1. Tambah Tugas");
    console.log("2. Hapus Tugas");
    console.log("3. Lihat Semua Tugas");
    console.log("4. Keluar");

    const pilihan = readlineSync.question("Pilih menu (1-4): ");

    if (pilihan === '1') {
        const tugasBaru = readlineSync.question("Tuliskan tugas baru: ");
        tugas.push(tugasBaru);
        tulisFile(tugas);
    } else if (pilihan === '2'){
        tampilkanTugas(tugas);
        const no = parseInt(readlineSync.question("Masukkan nomor tugas yang mau dihapus: "),10);
        if (no > 0 && no <= tugas.length){
            tugas.splice(no - 1, 1);
            tulisFile(tugas);
            console.log("Tugas berhasil dihapus.");
        } else {
            console.log("Nomor tidak valid.");
        }
    } else if (pilihan === '3') {
        tampilkanTugas(tugas);
    } else if (pilihan === '4') {
        console.log("Keluar dari program");
        break;
    } else {
        console.log("Pilihan tidak valid.");
    }
}