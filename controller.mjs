import users from "./data.mjs";

// Menampilkan semua data
const index = () => {
    console.log("Data Pengguna:");
    users.map((user, index) => {
        console.log(`${index + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
    });
};

// Menambahkan data baru
const store = (user1, user2) => {
    users.push(user1, user2);
    console.log("Data berhasil ditambahkan!");
};

// Menghapus data terakhir
const destroy = () => {
    users.pop();
    console.log("Data terakhir berhasil dihapus!");
};

export { index, store, destroy };
