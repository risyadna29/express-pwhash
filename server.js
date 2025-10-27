const express = require('express');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --REGISTER
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

// --VALIDASI INPUT
if (!username || !password) {
    return res.status(400).json({ message: 'Username dan password wajib diisi!'})
}

// --CEK USERNAME YANG SUDAH ADA
const existingUser = await prisma.user.findUnique ({
    where: { username },
})

if (existingUser) {
    return res.status(400).json({ message: 'Username sudah terdaftar!'})
};

// --HASHED PASSWORD
const hashedPassword = await bcrypt.hash(password, 10); 

await prisma.user.create({
    data: {
        username,
        password: hashedPassword,
    },
});

res.json({ message: 'Registrasi berhasil!'});

});

// --LOGIN
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const User = await prisma.user.findUnique ({
        where: { username },
    })
    if (!User) {
        return res.status(400).json({ message: 'User tidak ditemukan!'})
    }

    const isMatch = await bcrypt.compare(password, User.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Password tidak sesuai!'})
    }

    res.json({message: `Selamat datang, ${username}!`})

});




app.listen(3000, () => console.log('Server berjalan di http://localhost:3000'));