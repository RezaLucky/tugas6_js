import { index, store, destroy } from "./controller.mjs";

const main = () => {
    // Tambahkan dua data baru
    store(
        { nama: 'Data 11', umur: 30, alamat: 'Jl. Data 11', email: 'data11@example.com' },
        { nama: 'Data 12', umur: 31, alamat: 'Jl. Data 12', email: 'data12@example.com' }
    );

    // Tampilkan semua data
    index();

    // Hapus satu data terakhir
    destroy();

    // Tampilkan kembali setelah penghapusan
    index();
};

main();
