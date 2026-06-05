# PERANCANGAN SISTEM
# CoffeeShop POS Dashboard

## 1. Deskripsi Sistem

CoffeeShop POS Dashboard merupakan aplikasi Point of Sale (POS) berbasis web yang digunakan untuk membantu proses transaksi penjualan pada kedai kopi. Sistem ini memungkinkan kasir untuk memilih produk, mengelola pesanan, melakukan pembayaran, melihat riwayat transaksi, memantau statistik penjualan, dan menghasilkan laporan.

Karena project ini menggunakan mock data tanpa database, seluruh data akan disimpan menggunakan LocalStorage browser.

---

# 2. Tujuan Sistem

- Mempermudah proses transaksi penjualan.
- Menyimpan data transaksi secara lokal.
- Menampilkan riwayat transaksi.
- Menyediakan dashboard statistik penjualan.
- Menghasilkan laporan penjualan.

---

# 3. Teknologi yang Digunakan

| Teknologi | Fungsi |
|------------|---------|
| HTML5 | Struktur halaman |
| CSS3 | Styling UI |
| JavaScript (Vanilla JS) | Logika aplikasi |
| LocalStorage | Penyimpanan data lokal |
| Chart.js | Grafik Dashboard |
| Font Awesome / Lucide | Icon |

---

# 4. Struktur Halaman

## 4.1 POS

Halaman utama transaksi.

### Fitur

- Menampilkan daftar produk
- Filter kategori
- Menambah produk ke keranjang
- Mengubah jumlah item
- Menghapus item
- Menghitung subtotal
- Menghitung pajak 10%
- Menghitung total pembayaran
- Tombol proses pembayaran

### Komponen

#### Navbar
- Logo
- POS
- Riwayat
- Dashboard
- Laporan

#### Kategori
- Semua
- Kopi
- Non-Kopi
- Makanan
- Snack

#### Daftar Produk
Setiap kartu produk berisi:

- Gambar Produk
- Nama Produk
- Harga Produk
- Tombol Tambah (+)

#### Keranjang Pesanan

Menampilkan:

- Produk yang dipilih
- Jumlah item
- Tombol tambah jumlah
- Tombol kurangi jumlah
- Tombol hapus item
- Subtotal
- Pajak
- Total
- Tombol Bayar

---

# 5. Riwayat Pesanan

Halaman untuk melihat transaksi yang telah selesai.

## Fitur

- Menampilkan daftar transaksi
- Pencarian transaksi
- Filter tanggal
- Detail transaksi

## Informasi yang Ditampilkan

- ID Pesanan
- Tanggal
- Produk
- Jumlah Item
- Total Pembayaran

---

# 6. Dashboard

Halaman ringkasan statistik penjualan.

## Kartu Statistik

### Total Pendapatan

Menampilkan total pendapatan seluruh transaksi.

### Total Pesanan

Menampilkan jumlah transaksi.

### Rata-rata Pesanan

Rata-rata nilai transaksi.

### Total Item Terjual

Jumlah seluruh produk yang berhasil dijual.

---

## Grafik Produk Terlaris

Menampilkan:

- Nama Produk
- Jumlah Penjualan

Menggunakan Chart.js Bar Chart.

---

## Grafik Distribusi Kategori

Menampilkan:

- Kopi
- Non-Kopi
- Makanan
- Snack

Menggunakan Pie Chart.

---

# 7. Laporan Penjualan

Halaman analisis penjualan.

## Filter Waktu

- Hari Ini
- 7 Hari
- 30 Hari
- Semua

## Ringkasan

### Total Pendapatan
Jumlah seluruh pendapatan.

### Total Pesanan
Jumlah transaksi.

### Rata-rata Pesanan
Rata-rata nilai transaksi.

---

## Fitur

### Cetak Laporan

Menggunakan:

```javascript
window.print();
```

### Export CSV

Mengunduh data transaksi dalam format CSV.

---

# 8. Struktur Data

## Produk

```json
{
  "id": 1,
  "nama": "Espresso",
  "kategori": "Kopi",
  "harga": 25000,
  "gambar": "espresso.jpg"
}
```

---

## Keranjang

```json
{
  "id": 1,
  "nama": "Espresso",
  "harga": 25000,
  "qty": 2
}
```

---

## Transaksi

```json
{
  "id": "TRX001",
  "tanggal": "2026-06-03",
  "items": [
    {
      "nama": "Espresso",
      "qty": 2,
      "harga": 25000
    }
  ],
  "subtotal": 50000,
  "pajak": 5000,
  "total": 55000
}
```

---

# 9. Penyimpanan Data

## LocalStorage

### products

Menyimpan daftar produk.

```javascript
localStorage.setItem("products", JSON.stringify(products));
```

---

### cart

Menyimpan keranjang aktif.

```javascript
localStorage.setItem("cart", JSON.stringify(cart));
```

---

### orders

Menyimpan seluruh transaksi.

```javascript
localStorage.setItem("orders", JSON.stringify(orders));
```

---

# 10. Alur Sistem

## Proses Transaksi

1. Kasir memilih produk
2. Produk masuk ke keranjang
3. Sistem menghitung subtotal
4. Sistem menghitung pajak 10%
5. Sistem menghitung total
6. Kasir menekan tombol bayar
7. Transaksi disimpan ke LocalStorage
8. Keranjang dikosongkan
9. Dashboard dan laporan diperbarui

---

# 11. Struktur Folder

```text
coffeeshop-pos/
│
├── index.html
│
├── pages/
│   ├── pos.html
│   ├── history.html
│   ├── dashboard.html
│   └── report.html
│
├── css/
│   ├── style.css
│   ├── pos.css
│   ├── history.css
│   ├── dashboard.css
│   └── report.css
│
├── js/
│   ├── products.js
│   ├── cart.js
│   ├── history.js
│   ├── dashboard.js
│   ├── report.js
│   └── storage.js
│
├── assets/
│   ├── images/
│   └── icons/
│
└── PERANCANGAN.md
```

---

# 12. Use Case

## Kasir

### Kelola Pesanan

- Melihat produk
- Menambah produk
- Mengubah jumlah produk
- Menghapus produk

### Pembayaran

- Menghitung total
- Menyimpan transaksi

### Riwayat

- Melihat transaksi sebelumnya

### Dashboard

- Melihat statistik penjualan

### Laporan

- Mencetak laporan
- Mengunduh laporan CSV

---

# 13. Target Hasil

Sistem POS yang:

- Responsive
- Modern UI
- Mudah digunakan
- Data tersimpan di browser
- Tidak memerlukan database
- Mirip 95% dengan desain Figma