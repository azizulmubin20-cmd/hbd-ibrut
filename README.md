# Website Ulang Tahun Ibrut — dari Bobi ♡

Website statis yang responsif untuk HP dan laptop. Tidak membutuhkan server atau database.

## Foto yang sudah disimpan
Enam foto yang dikirim Bobi sudah dimasukkan ke folder `photos/` dan dipasang di galeri website. Saat mengunggah website, unggah folder `photos/` juga agar foto tampil untuk semua orang.

## Cara melihat
1. Ekstrak ZIP.
2. Buka `index.html` di browser (Chrome/Edge).
3. Ketuk tombol untuk surat, pilih foto, mainkan musik, dan interaksi kue.

## Cara menambahkan foto supaya ikut tampil ketika link dibagikan
Pemilih foto di website hanya menampilkan foto sementara di browser yang sedang dipakai. Agar foto permanen dan terlihat oleh semua orang:
1. Letakkan foto pilihanmu ke folder `photos/`.
2. Buka `index.html`, cari bagian galeri yang berisi kartu foto placeholder.
3. Untuk mengganti placeholder, ubah isi `<div class="photo-frame">...` menjadi `<div class="photo-frame"><img src="photos/nama-foto.jpg" alt="Foto Ibrut"></div>`.
4. Ubah `nama-foto.jpg` sesuai nama file yang benar. Kamu bisa duplikasi satu blok `<div class="photo-card"...>` untuk menambah foto.
5. Simpan dan upload seluruh folder, termasuk `photos/`, ke layanan hosting.

## Publikasi gratis dengan GitHub Pages
1. Buat akun atau masuk ke https://github.com/
2. Buat repository baru, misalnya `birthday-ibrut`. Untuk paling mudah, pilih **Public**.
3. Unggah `index.html` dan folder `photos/` (jika sudah ada foto). Pastikan `index.html` berada di root repository.
4. Buka **Settings → Pages**.
5. Pada **Build and deployment**, pilih **Deploy from a branch**, pilih branch `main` dan folder `/(root)`, lalu tekan **Save**.
6. Tunggu proses publikasi. GitHub akan menampilkan URL website di halaman Pages, biasanya `https://USERNAME.github.io/birthday-ibrut/`.
7. Buka link itu di HP untuk mengetes, lalu kirim ke Ibrut lewat WhatsApp.

## Catatan
- Musik dibuat dengan Web Audio di browser, jadi tidak perlu mengunggah lagu. Pengguna perlu mengetuk tombol musik agar browser mengizinkan audio.
- Foto yang dipilih lewat tombol di website tidak otomatis terunggah ke internet; tambahkan foto ke folder `photos/` untuk membuatnya permanen.
- Jangan mengunggah foto pribadi yang tidak mendapat izin.
