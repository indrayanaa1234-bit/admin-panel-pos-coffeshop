# PERANCANGAN SISTEM
# CoffeeShop POS Dashboard

## 1. Deskripsi Sistem

CoffeeShop POS Dashboard merupakan aplikasi Point of Sale (POS) berbasis web yang dirancang untuk membantu proses transaksi penjualan pada kedai kopi. Sistem ini memungkinkan kasir memilih produk, mengelola keranjang pesanan, memproses pembayaran, menyimpan transaksi, melihat riwayat pesanan, memantau statistik penjualan melalui dashboard, serta menghasilkan laporan penjualan.

Sistem ini dibuat menggunakan mock data tanpa database. Seluruh data transaksi dan keranjang disimpan secara lokal menggunakan LocalStorage browser. Dengan pendekatan ini, aplikasi dapat berjalan sebagai simulasi POS sederhana tanpa memerlukan server database.

Sistem juga menggunakan konsep AJAX component untuk navbar. Navbar disimpan dalam file terpisah dan dimuat ke setiap halaman menggunakan JavaScript `fetch()`, sehingga struktur navigasi lebih konsisten dan mudah dikelola.

---

## 2. Tujuan Sistem

Tujuan dari pengembangan CoffeeShop POS Dashboard adalah:

1. Mempermudah proses transaksi penjualan pada kedai kopi.
2. Membantu kasir dalam memilih produk dan mengelola pesanan.
3. Menghitung subtotal, pajak, total pembayaran, dan kembalian secara otomatis.
4. Menyimpan data transaksi secara lokal menggunakan LocalStorage.
5. Menampilkan riwayat transaksi yang telah selesai.
6. Menyediakan dashboard statistik penjualan.
7. Menyediakan laporan penjualan berdasarkan filter waktu.
8. Mendukung fitur cetak laporan dan unduh laporan dalam format CSV.
9. Menerapkan tampilan antarmuka yang modern, rapi, dan mudah digunakan.

---

## 3. Teknologi yang Digunakan

| Teknologi | Fungsi |
|---|---|
| HTML5 | Membentuk struktur halaman web |
| CSS3 | Mengatur tampilan, layout, warna, spacing, dan responsive design |
| JavaScript Vanilla | Mengatur logika aplikasi, transaksi, filter, perhitungan, dan manipulasi DOM |
| LocalStorage | Menyimpan data keranjang dan transaksi secara lokal di browser |
| Chart.js | Menampilkan grafik pada halaman Dashboard dan Laporan |
| Font Awesome | Menampilkan ikon pada navbar, card, tombol, dan komponen UI |
| AJAX Fetch | Memuat komponen navbar dari file terpisah |
| Live Server | Menjalankan project secara lokal agar AJAX `fetch()` dapat berjalan |

---

## 4. Struktur Sistem

Sistem terdiri dari beberapa halaman utama:

1. POS
2. Riwayat Pesanan
3. Dashboard
4. Laporan Penjualan

Setiap halaman menggunakan navbar yang sama melalui sistem AJAX component. Dengan demikian, perubahan pada navbar cukup dilakukan pada file `component/navbar.html`.

---

## 5. Struktur Folder

```text
admin-panel-pos-coffeshop/
│
├── index.html
│
├── component/
│   └── navbar.html
│
├── pages/
│   ├── history.html
│   ├── dashboard.html
│   └── report.html
│
├── css/
│   ├── style.css
│   ├── navbar.css
│   ├── pos.css
│   ├── history.css
│   ├── dashboard.css
│   └── report.css
│
├── js/
│   ├── navbar.js
│   ├── products.js
│   ├── cart.js
│   ├── payment.js
│   ├── history.js
│   ├── dashboard.js
│   └── report.js
│
├── docs/
│   └── perancangan.md
│
└── README.md
```

---

## 6. Perancangan Halaman POS

Halaman POS merupakan halaman utama aplikasi yang digunakan oleh kasir untuk melakukan transaksi penjualan.

### 6.1 Fitur POS

Fitur yang tersedia pada halaman POS:

1. Menampilkan daftar produk.
2. Menampilkan produk berdasarkan kategori.
3. Menambahkan produk ke keranjang.
4. Menambah jumlah produk di keranjang.
5. Mengurangi jumlah produk di keranjang.
6. Menghapus item dari keranjang.
7. Menghapus seluruh isi keranjang.
8. Menghitung subtotal.
9. Menghitung pajak sebesar 10%.
10. Menghitung total pembayaran.
11. Membuka modal pembayaran.
12. Menyimpan transaksi setelah pembayaran berhasil.

### 6.2 Komponen POS

#### a. Navbar

Navbar berisi logo dan menu navigasi:

- POS
- Riwayat
- Dashboard
- Laporan

Navbar dimuat menggunakan AJAX melalui file:

```text
component/navbar.html
```

#### b. Kategori Produk

Kategori produk yang tersedia:

- Semua
- Kopi
- Non-Kopi
- Makanan
- Snack

Kategori digunakan untuk memfilter produk yang tampil di grid produk.

#### c. Daftar Produk

Setiap kartu produk memuat:

- Gambar produk
- Nama produk
- Harga produk
- Tombol tambah produk

#### d. Keranjang Pesanan

Keranjang pesanan menampilkan produk yang dipilih kasir. Informasi yang ditampilkan:

- Gambar produk
- Nama produk
- Harga produk
- Jumlah produk
- Tombol tambah jumlah
- Tombol kurangi jumlah
- Tombol hapus item
- Subtotal
- Pajak
- Total pembayaran
- Tombol proses pembayaran

---

## 7. Perancangan Modal Pembayaran

Modal pembayaran digunakan untuk menyelesaikan transaksi. Modal ini muncul setelah kasir menekan tombol `Proses Pembayaran`.

### 7.1 Informasi Modal Pembayaran

Modal pembayaran memuat:

1. Total pembayaran.
2. Input nama pelanggan opsional.
3. Pilihan metode pembayaran.
4. Input uang diterima.
5. Tombol nominal cepat.
6. Informasi kembalian.
7. Tombol konfirmasi pembayaran.

### 7.2 Metode Pembayaran

Metode pembayaran yang tersedia:

- Tunai
- Kartu
- QRIS

Untuk metode tunai, sistem melakukan validasi uang diterima. Jika uang diterima lebih kecil dari total pembayaran, transaksi tidak dapat diproses.

### 7.3 Hasil Pembayaran

Setelah pembayaran berhasil:

1. Data transaksi disimpan ke LocalStorage.
2. Keranjang dikosongkan.
3. Modal pembayaran ditutup.
4. Transaksi dapat dilihat pada halaman Riwayat, Dashboard, dan Laporan.

---

## 8. Perancangan Halaman Riwayat Pesanan

Halaman Riwayat Pesanan digunakan untuk melihat seluruh transaksi yang telah selesai.

### 8.1 Fitur Riwayat

Fitur pada halaman Riwayat:

1. Menampilkan daftar transaksi.
2. Menampilkan ID invoice.
3. Menampilkan tanggal transaksi.
4. Menampilkan nama pelanggan.
5. Menampilkan metode pembayaran.
6. Menampilkan jumlah item.
7. Menampilkan total pembayaran.
8. Menampilkan detail produk dalam transaksi.
9. Mencari transaksi berdasarkan invoice, pelanggan, metode, atau nama produk.
10. Memfilter transaksi berdasarkan tanggal.
11. Menampilkan empty state jika belum ada transaksi.

### 8.2 Informasi yang Ditampilkan

Informasi transaksi yang ditampilkan pada halaman Riwayat:

- ID invoice
- Tanggal transaksi
- Nama pelanggan
- Metode pembayaran
- Jumlah item
- Total pembayaran
- Nama produk
- Jumlah produk
- Harga produk

---

## 9. Perancangan Halaman Dashboard

Halaman Dashboard digunakan untuk menampilkan ringkasan performa penjualan berdasarkan seluruh transaksi yang tersimpan.

### 9.1 Kartu Statistik

Dashboard memiliki empat kartu statistik utama:

1. Total Pendapatan
2. Total Pesanan
3. Rata-rata Pesanan
4. Total Item Terjual

### 9.2 Grafik dan Ringkasan

Dashboard menampilkan beberapa visualisasi data:

1. Grafik Produk Terlaris
2. Grafik Distribusi Kategori
3. Grafik Metode Pembayaran
4. Detail Produk Terlaris
5. Detail Transaksi Terakhir

### 9.3 Kondisi Data Kosong

Jika belum ada transaksi, dashboard menampilkan nilai statistik `0` dan empty state seperti:

- Belum ada data penjualan
- Belum ada data pembayaran
- Belum ada transaksi

---

## 10. Perancangan Halaman Laporan Penjualan

Halaman Laporan Penjualan digunakan untuk menganalisis transaksi berdasarkan filter waktu tertentu.

### 10.1 Filter Waktu

Filter waktu yang tersedia:

- Hari Ini
- 7 Hari
- 30 Hari
- Semua

Filter ini digunakan untuk menentukan transaksi mana yang dihitung dan ditampilkan pada laporan.

### 10.2 Ringkasan Laporan

Ringkasan laporan menampilkan:

1. Total Pendapatan
2. Total Pesanan
3. Rata-rata per Pesanan

### 10.3 Grafik Laporan

Grafik yang tersedia pada halaman laporan:

1. Produk Terlaris
2. Penjualan per Kategori
3. Metode Pembayaran
4. Detail Transaksi Terakhir

### 10.4 Cetak Laporan

Fitur cetak laporan menggunakan fungsi:

```javascript
window.print();
```

Fitur ini memungkinkan pengguna mencetak laporan langsung dari browser.

### 10.5 Download CSV

Fitur Download CSV digunakan untuk mengunduh data transaksi dalam format `.csv`. Data yang diekspor mencakup:

- ID transaksi
- Tanggal transaksi
- Nama pelanggan
- Metode pembayaran
- Jumlah item
- Subtotal
- Pajak
- Total pembayaran

---

## 11. Struktur Data

### 11.1 Data Produk

Data produk disimpan dalam file `js/products.js`. Contoh struktur data produk:

```json
{
  "id": 1,
  "name": "Espresso",
  "price": 25000,
  "category": "Kopi",
  "image": "https://example.com/espresso.jpg"
}
```

Keterangan:

| Field | Keterangan |
|---|---|
| id | ID unik produk |
| name | Nama produk |
| price | Harga produk |
| category | Kategori produk |
| image | URL gambar produk |

---

### 11.2 Data Keranjang

Data keranjang disimpan pada LocalStorage dengan key `cart`.

Contoh struktur data keranjang:

```json
{
  "id": 1,
  "name": "Espresso",
  "price": 25000,
  "category": "Kopi",
  "image": "https://example.com/espresso.jpg",
  "qty": 2
}
```

Keterangan:

| Field | Keterangan |
|---|---|
| id | ID produk |
| name | Nama produk |
| price | Harga satuan produk |
| category | Kategori produk |
| image | Gambar produk |
| qty | Jumlah produk di keranjang |

---

### 11.3 Data Transaksi

Data transaksi disimpan pada LocalStorage dengan key `transactions`.

Contoh struktur data transaksi:

```json
{
  "id": "INV-1760000000000",
  "date": "7/6/2026 10.30.00",
  "dateISO": "2026-06-07",
  "customer": "Umum",
  "method": "Tunai",
  "items": [
    {
      "id": 1,
      "name": "Espresso",
      "price": 25000,
      "category": "Kopi",
      "image": "https://example.com/espresso.jpg",
      "qty": 2
    }
  ],
  "subtotal": 50000,
  "tax": 5000,
  "total": 55000
}
```

Keterangan:

| Field | Keterangan |
|---|---|
| id | ID invoice transaksi |
| date | Tanggal dan waktu transaksi untuk ditampilkan |
| dateISO | Tanggal transaksi dalam format ISO untuk filter tanggal |
| customer | Nama pelanggan, default `Umum` jika kosong |
| method | Metode pembayaran |
| items | Daftar produk yang dibeli |
| subtotal | Total harga sebelum pajak |
| tax | Pajak 10% |
| total | Total pembayaran setelah pajak |

---

## 12. Penyimpanan Data

Sistem menggunakan LocalStorage untuk menyimpan data lokal.

### 12.1 Key `cart`

Digunakan untuk menyimpan keranjang aktif.

```javascript
localStorage.setItem("cart", JSON.stringify(cart));
```

Membaca data keranjang:

```javascript
JSON.parse(localStorage.getItem("cart")) || [];
```

### 12.2 Key `transactions`

Digunakan untuk menyimpan seluruh transaksi yang telah berhasil diproses.

```javascript
localStorage.setItem("transactions", JSON.stringify(transactions));
```

Membaca data transaksi:

```javascript
JSON.parse(localStorage.getItem("transactions")) || [];
```

### 12.3 Pengosongan Data

Untuk mengosongkan data demo, pengguna dapat menjalankan kode berikut pada Console browser:

```javascript
localStorage.removeItem("cart");
localStorage.removeItem("transactions");
location.reload();
```

---

## 13. Alur Sistem

### 13.1 Alur Transaksi POS

1. Kasir membuka halaman POS.
2. Sistem menampilkan seluruh produk.
3. Kasir memilih kategori produk jika diperlukan.
4. Kasir menambahkan produk ke keranjang.
5. Sistem menyimpan keranjang ke LocalStorage.
6. Sistem menghitung subtotal, pajak, dan total pembayaran.
7. Kasir menekan tombol `Proses Pembayaran`.
8. Sistem menampilkan modal pembayaran.
9. Kasir memilih metode pembayaran.
10. Jika metode tunai, kasir mengisi uang diterima.
11. Sistem menghitung kembalian.
12. Kasir menekan tombol `Konfirmasi Pembayaran`.
13. Sistem memvalidasi pembayaran.
14. Sistem menyimpan transaksi ke LocalStorage dengan key `transactions`.
15. Sistem mengosongkan keranjang.
16. Transaksi dapat dilihat di Riwayat, Dashboard, dan Laporan.

### 13.2 Alur Riwayat

1. Pengguna membuka halaman Riwayat.
2. Sistem membaca data dari LocalStorage `transactions`.
3. Sistem menampilkan daftar transaksi.
4. Pengguna dapat mencari transaksi melalui input pencarian.
5. Pengguna dapat memfilter transaksi berdasarkan tanggal.

### 13.3 Alur Dashboard

1. Pengguna membuka halaman Dashboard.
2. Sistem membaca data transaksi dari LocalStorage.
3. Sistem menghitung total pendapatan, total pesanan, rata-rata pesanan, dan total item terjual.
4. Sistem mengelompokkan data produk, kategori, dan metode pembayaran.
5. Sistem menampilkan data dalam bentuk kartu statistik dan grafik.

### 13.4 Alur Laporan

1. Pengguna membuka halaman Laporan.
2. Sistem membaca data transaksi dari LocalStorage.
3. Pengguna memilih filter waktu.
4. Sistem menyaring transaksi berdasarkan filter.
5. Sistem menghitung ringkasan laporan.
6. Sistem menampilkan grafik dan detail transaksi.
7. Pengguna dapat mencetak laporan atau mengunduh CSV.

---

## 14. Use Case

### 14.1 Aktor

Aktor utama dalam sistem ini adalah Kasir atau Admin kedai kopi.

### 14.2 Use Case Kasir/Admin

| Use Case | Deskripsi |
|---|---|
| Melihat produk | Kasir melihat daftar produk yang tersedia |
| Memfilter kategori | Kasir memilih kategori produk tertentu |
| Menambah produk ke keranjang | Kasir menambahkan produk yang dipesan pelanggan |
| Mengubah jumlah produk | Kasir menambah atau mengurangi jumlah item |
| Menghapus item | Kasir menghapus item dari keranjang |
| Memproses pembayaran | Kasir menyelesaikan transaksi pembayaran |
| Melihat riwayat | Kasir melihat transaksi yang telah selesai |
| Melihat dashboard | Admin melihat ringkasan statistik penjualan |
| Membuat laporan | Admin melihat laporan berdasarkan periode waktu |
| Mencetak laporan | Admin mencetak laporan penjualan |
| Mengunduh CSV | Admin mengunduh data transaksi dalam format CSV |

---

## 15. Perancangan Antarmuka

### 15.1 Konsep UI

Tampilan aplikasi menggunakan konsep modern dashboard dengan warna utama hijau gelap dan aksen kuning muda.

Warna utama:

| Variabel | Warna | Fungsi |
|---|---|---|
| `--primary` | Hijau gelap | Tombol utama, ikon aktif, teks penting |
| `--secondary` | Kuning muda | Menu aktif dan aksen UI |
| `--bg` | Abu kehijauan muda | Latar belakang halaman |
| `--border` | Abu muda | Garis pembatas card dan input |
| `--text` | Gelap | Teks utama |

### 15.2 Font

Aplikasi menggunakan font:

```text
Poppins
```

Font digunakan secara konsisten pada seluruh halaman.

### 15.3 Komponen UI

Komponen utama UI:

- Navbar
- Product card
- Cart panel
- Payment modal
- Search box
- Date filter
- Statistic card
- Chart card
- Report card
- Button filter
- Empty state

---

## 16. Validasi Sistem

Validasi yang diterapkan pada sistem:

1. Tombol pembayaran tidak aktif jika keranjang kosong.
2. Pembayaran tunai tidak dapat diproses jika uang diterima kurang dari total pembayaran.
3. Keranjang kosong ditampilkan dengan empty state.
4. Riwayat kosong ditampilkan dengan empty state.
5. Dashboard dan laporan menampilkan nilai 0 jika belum ada transaksi.
6. Filter tanggal menggunakan `dateISO` agar data lebih stabil.
7. Data pelanggan kosong ditampilkan sebagai pelanggan umum.

---

## 17. Batasan Sistem

Sistem memiliki batasan sebagai berikut:

1. Tidak menggunakan database.
2. Data hanya tersimpan pada browser yang digunakan.
3. Data akan hilang jika LocalStorage browser dibersihkan.
4. Sistem belum memiliki autentikasi pengguna.
5. Sistem belum memiliki manajemen stok.
6. Sistem belum memiliki fitur edit produk.
7. Sistem belum memiliki struk pembayaran permanen.
8. Sistem belum terhubung dengan printer kasir.
9. AJAX navbar perlu dijalankan melalui server lokal seperti Live Server, bukan langsung melalui `file:///`.

---

## 18. Cara Menjalankan Sistem

Langkah menjalankan sistem:

1. Buka folder project menggunakan Visual Studio Code.
2. Pastikan extension Live Server sudah terpasang.
3. Klik kanan pada `index.html`.
4. Pilih `Open with Live Server`.
5. Aplikasi akan terbuka melalui alamat seperti:

```text
http://127.0.0.1:5500/
```

Sistem tidak disarankan dibuka langsung melalui file lokal seperti:

```text
file:///C:/...
```

karena AJAX `fetch()` untuk navbar dapat gagal dimuat.

---

## 19. Pengujian Sistem

### 19.1 Pengujian POS

| Skenario | Hasil yang Diharapkan |
|---|---|
| Menambah produk | Produk masuk ke keranjang |
| Menambah qty | Jumlah produk bertambah |
| Mengurangi qty | Jumlah produk berkurang |
| Menghapus item | Item hilang dari keranjang |
| Menghapus semua item | Keranjang menjadi kosong |
| Memilih kategori | Produk tampil sesuai kategori |

### 19.2 Pengujian Pembayaran

| Skenario | Hasil yang Diharapkan |
|---|---|
| Pembayaran tunai cukup | Transaksi berhasil disimpan |
| Pembayaran tunai kurang | Sistem menolak transaksi |
| Pembayaran QRIS | Transaksi berhasil disimpan |
| Pembayaran kartu | Transaksi berhasil disimpan |
| Nama pelanggan kosong | Sistem menyimpan sebagai pelanggan umum |

### 19.3 Pengujian Riwayat

| Skenario | Hasil yang Diharapkan |
|---|---|
| Belum ada transaksi | Muncul empty state |
| Ada transaksi | Data transaksi tampil |
| Search invoice | Transaksi sesuai keyword tampil |
| Search produk | Transaksi yang memuat produk tampil |
| Filter tanggal | Transaksi sesuai tanggal tampil |

### 19.4 Pengujian Dashboard

| Skenario | Hasil yang Diharapkan |
|---|---|
| Belum ada transaksi | Semua statistik bernilai 0 |
| Ada transaksi | Statistik dan grafik berubah sesuai data |
| Produk terjual | Grafik produk terlaris tampil |
| Kategori terjual | Distribusi kategori tampil |
| Metode pembayaran | Grafik metode pembayaran tampil |

### 19.5 Pengujian Laporan

| Skenario | Hasil yang Diharapkan |
|---|---|
| Filter Hari Ini | Hanya transaksi hari ini dihitung |
| Filter 7 Hari | Transaksi 7 hari terakhir dihitung |
| Filter 30 Hari | Transaksi 30 hari terakhir dihitung |
| Filter Semua | Semua transaksi dihitung |
| Cetak laporan | Dialog print browser terbuka |
| Download CSV | File CSV berhasil diunduh |

---

## 20. Target Hasil

Target akhir sistem adalah aplikasi POS kedai kopi berbasis web yang:

1. Responsive pada layar desktop dan laptop.
2. Memiliki UI modern dan konsisten.
3. Mudah digunakan oleh kasir.
4. Dapat menyimpan data transaksi di browser.
5. Dapat menampilkan riwayat transaksi.
6. Dapat menampilkan dashboard statistik penjualan.
7. Dapat menghasilkan laporan penjualan.
8. Dapat mencetak dan mengunduh laporan CSV.
9. Tidak memerlukan database untuk simulasi penggunaan.
10. Siap digunakan sebagai project web front-end berbasis HTML, CSS, dan JavaScript.
