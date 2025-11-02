// Fungsi untuk menampilkan peringatan setelah form dikirim
function validateForm() {
    // Ambil elemen form dan input
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Validasi untuk memastikan semua field diisi
    if (name === "" || email === "" || message === "") {
        alert("Semua field harus diisi!");
        return false;  // Mencegah form untuk terkirim jika ada field kosong
    }

    // Tampilkan alert sukses
    document.getElementById('alertSuccess').style.display = 'block';

    // Mencegah form agar tidak terkirim ke server (untuk keperluan demo)
    return false;
}
