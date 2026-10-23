# For Ibrut ♡ — Happy Birthday

Website ulang tahun interaktif dari Bobi untuk Ibrut. Dibuat dengan HTML, CSS, dan JavaScript biasa; tidak membutuhkan framework atau database.

## Yang ada di website

- Layar pembuka dengan amplop animasi yang bisa dibuka.
- Hero romantis, ornamen bergerak, dan transisi scroll.
- Surat ulang tahun personal dari Bobi.
- Galeri enam foto, dengan opsi menambahkan foto sementara di browser.
- Kue interaktif: nyalakan lilin, buat permintaan, lalu tiup lilinnya.
- Efek confetti, hati yang muncul saat layar disentuh, dan tombol musik mengambang.
- Responsif untuk HP dan desktop.
- Musik lokal: `assets/music/beranjak-dewasa.mp3` (Beranjak Dewasa — Nadin Amizah), dari file yang diberikan pengguna.

## Cara melihat website

1. Ekstrak ZIP ini.
2. Buka `index.html` di browser.
3. Tekan **Buka kejutan ini** untuk memulai.
4. Tekan tombol musik jika lagu belum mulai. Browser biasanya membatasi autoplay audio sebelum ada interaksi.

Foto dan file musik sudah berada di folder `assets/`. Internet hanya dibutuhkan untuk memuat font Google. Browser mungkin memblokir autoplay audio; bila lagu belum mulai, tekan tombol musik.

## Mengedit website

- Ucapan, bagian halaman, dan susunan foto: `index.html`.
- Desain dan animasi: `css/style.css`.
- Interaksi dan musik: `js/script.js`.
- Foto: folder `assets/images/`.

## Deploy gratis dengan GitHub Pages

Upload isi folder project ke repository GitHub. Lalu buka **Settings → Pages**, pilih **Deploy from a branch**, pilih branch `main` dan folder `/ (root)`, kemudian simpan. Setelah proses deploy selesai, GitHub akan menampilkan alamat website.

Catatan: foto tambahan yang dipilih melalui tombol galeri hanya ditampilkan di sesi browser saat itu; agar permanen dan terlihat oleh pengunjung lain, tambahkan file ke `assets/images/` dan edit `index.html`. Project ini sudah disiapkan, tetapi belum diunggah atau dipublikasikan ke GitHub Pages.


Catatan musik: website mencoba memutar lagu otomatis ketika dibuka. Browser dapat memblokir autoplay bersuara; jika itu terjadi, tekan tombol musik ♫ di pojok kanan bawah atau tombol lagu di bagian bawah halaman. Foto dan ucapan tampil langsung tanpa perlu membuka amplop.
