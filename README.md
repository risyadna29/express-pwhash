# 🔐 Proyek Hands-On: Password Hashing dengan Express, Prisma & Bcrypt

Selamat datang di sesi *hands-on* untuk materi *password hashing*! Proyek ini adalah starter kit dasar yang akan kita gunakan untuk mempraktikkan cara mengamankan password pengguna secara benar.

## 🎯 Tujuan

- Memahami mengapa menyimpan password dalam bentuk *plain text* berbahaya.
- Mengimplementasikan proses *hashing* password saat registrasi menggunakan `bcrypt`.
- Mengimplementasikan proses verifikasi password saat login menggunakan `bcrypt`.
- Mengintegrasikan logika ini dalam sebuah aplikasi ExpressJS dengan database menggunakan Prisma ORM.

## 🛠️ Kebutuhan Sistem

Pastikan Anda sudah menginstal perangkat lunak berikut di komputer Anda:
- **Node.js** (versi 16 atau lebih baru)
- **NPM** (biasanya sudah terinstal bersama Node.js)
- **Git** (untuk mengunduh proyek dari GitHub)
- **Teks Editor** (seperti VS Code)
- **API Client** (seperti Postman atau Thunder Client di VS Code) untuk menguji endpoint.

## 🚀 Langkah-langkah Setup Awal

Ikuti langkah-langkah ini di terminal Anda untuk menyiapkan proyek sebelum sesi dimulai.

### 1. Clone Repositori Ini
```bash
git clone [URL_GITHUB_ANDA]
cd hashing-hands-on
```

### 2. Install Semua Dependensi
Perintah ini akan mengunduh semua *library* yang dibutuhkan oleh proyek dari `package.json`.
```bash
npm install
```

### 3. Siapkan Environment Variable
Proyek ini menggunakan file `.env` untuk menyimpan konfigurasi, terutama URL database. Buat salinan dari file contoh:
```bash
# Untuk Windows (Command Prompt)
copy .env.example .env

# Untuk macOS / Linux / Git Bash
cp .env.example .env
```
> File `.env` sudah dikonfigurasi untuk menggunakan database SQLite, jadi Anda tidak perlu mengubah apa pun.

### 4. Buat dan Migrasi Database
Perintah ini akan membuat database SQLite dan tabel `User` sesuai dengan skema di `prisma/schema.prisma`.
```bash
npx prisma migrate dev
```
Jika berhasil, Anda akan melihat sebuah folder `prisma` berisi file `dev.db`.

---

## 📝 Sesi Hands-On: Apa yang Akan Kita Buat?

Pada sesi kali ini, kita akan fokus pada file `src/server.js` untuk membangun dua *endpoint* API yang krusial untuk autentikasi.

### **1. Endpoint Registrasi (`POST /register`)**
Tujuan dari endpoint ini adalah untuk membuat pengguna baru dengan aman.
- Menerima `email` dan `password` dari *body request*.
- **Meng-hash** `password` yang diterima menggunakan `bcrypt` untuk mengubahnya menjadi string yang aman.
- Menyimpan `email` dan **password yang sudah di-hash** ke dalam database menggunakan Prisma.
- Kita akan membuktikan bahwa data yang tersimpan di database bukanlah password asli pengguna.

### **2. Endpoint Login (`POST /login`)**
Endpoint ini bertugas untuk memverifikasi kredensial pengguna saat mereka mencoba masuk.
- Menerima `email` dan `password` dari pengguna.
- Mencari pengguna di database berdasarkan `email` mereka.
- Jika pengguna ditemukan, kita akan menggunakan `bcrypt.compare()` untuk **membandingkan** `password` yang baru dimasukkan dengan *hash* yang tersimpan di database.
- Memberikan respons berhasil jika cocok, atau gagal jika tidak cocok.

Melalui dua fungsi ini, kita akan melihat secara langsung alur kerja pengamanan password yang benar, di mana aplikasi tidak pernah menyimpan atau melihat password mentah pengguna setelah proses registrasi.

---

**Selamat mengikuti sesi hands-on teman-teman!** 🎉
