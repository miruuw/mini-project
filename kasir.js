class Kasir {
    constructor(){
        this.barang = [];
        this.harga = [];
    }

    tambahBarang(nama, harga) {
        this.barang.push(nama);
        this.harga.push(harga);
    }

    totalBelanja(){
        return this.harga.reduce((a, b) => a + b, 0);
    }

    hitungDiskon(total){
        return total > 500000 ? total * 0.1 : 0;
    }

    cetakStruk(){
        console.log("\n--- Struk Belanja ---");
        this.barang.forEach((item, index)=> {
            console.log(`${item}: Rp ${this.harga[index]}`);
        });

        const total = this.totalBelanja();
        const diskon = this.hitungDiskon(total);
        const totalBayar = total - diskon;

        console.log(`\n Total: Rp ${total}`);
        console.log(`Diskon: Rp ${diskon}`);
        console.log(`Total Bayar: Rp ${totalBayar}`);

        return totalBayar;
    }

    bayar(totalBayar){
        const readlineSync = require('readline-sync');
        const pembayaran = parseInt(readlineSync.question("\n Masukkan uang pembayaran: Rp"), 10);

        if(pembayaran >= totalBayar){
            console.log(`Kembalian: Rp ${pembayaran - totalBayar}`);
        } else {
            console.log(`Uang kurang: Rp ${totalBayar - pembayaran}`);
        }

    }
}

// Main Program
const readlineSync = require('readline-sync');
const kasir = new Kasir();
const jumlah = parseInt(readlineSync.question("Input jumlah barang: "), 10);

for (let i = 0; i < jumlah; i++){
    const nama = readlineSync.question(`Nama Barang ${i + 1}: `);
    const harga = parseInt(readlineSync.question(`Harga Barang ${i + 1}: `), 10);
    kasir.tambahBarang(nama, harga);
}

const totalBayar = kasir.cetakStruk();
kasir.bayar(totalBayar);

