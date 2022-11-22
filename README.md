# Case

Please read [CASE.md](CASE.md)

# Kontribusi

Please read [CONTRIBUTING.md](CONTRIBUTING.md)

# Inisialisasi Setup Awal Sebelumnya

Cuma beritau, gak usah dilakukan lagi

Inisialiasi sequelize

```bash
npx sequelize init
```

Membuat model dan migration

```json
{
  "name": "string",
  "description": "string/varchar",
  "price": "integer/number"
}
```

```bash
npx sequelize model:generate --name Product --attributes name:string,description:string,price:integer
```

# Langkah-langkah

### Clone Repository

```bash
git clone git@github.com:synrgy-5-fsw-1-cihuy/sapi-3-pattern.git
```

### Buka folder yang sudah diclone

Buka pake vscode kalian

### Install dependencies / libs

```
npm install
```

### Ganti config di src/config/database.json

Gak usah diganti gapapa, pake punya saya

```json
{
  "development": {
    "username": "punyamu",
    "password": "punyamu",
    "database": "punyamu",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

### Migrasi DB

```bash
npx sequelize db:migrate
```

### Menjalankan server

```bash
npm run dev
```

### Tambahkan handler di file src/controllers/product.controller.js

Sesuai CRUD

Request / Response lihat di [DOCS](DOCS.md)

# Folder Structure

MVC tapi gak pake V jadi MC karena gak ada view tapi return JSON

```bash
src/
├─ config/
├─ controllers/
├─ db/
│  ├─ migrations/
│  ├─ models/
├─ routes/
├─ app.js
├─ server.js
```
