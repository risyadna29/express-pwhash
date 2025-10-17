# 🔐 Proyek Hands-On: Password Hashing dengan Express, Prisma, & Bcrypt

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

**Selamat mengikuti sesi hands-on, teman-teman!**
