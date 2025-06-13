

# 🎨 Magic Image

<figure>
<img src="/public/example/example.png" width="800px" />
<figcaption align="center">image preview</figcaption>
</figure>
Magic Image adalah aplikasi web ringan berbasis Next.js yang memungkinkan pengguna untuk mengunggah berbagai format gambar dan mengonversinya ke format WebP yang lebih ringkas dan cepat.

## 🌟 Fitur Utama (v1.0)

- **Upload Multi-format:** Mendukung PNG, JPEG, GIF, TIFF, SVG
- **Konversi Instan ke WebP:** Konversi cepat dan efisien
- **Quality Slider:** Atur tingkat kompresi (0-100)
- **Download Langsung:** Unduh hasil konversi dengan mudah
- **Error Handling:** Peringatan untuk format tidak didukung atau ukuran file berlebih
- **Responsif:** Tampilan optimal di desktop, tablet, dan mobile

## 🛠️ Tech Stack

- **Framework:** Next.js v15.3.3 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4.1
- **Image Processing:** Sharp
- **Form Handling:** React Hook Form
- **File Upload:** Multer (opsional)
- **Deployment:** Vercel

## 🎨 Desain UI/UX

### Warna
- Background: `#F7F7F7`
- Secondary: `#696B6C`
- Accent: `#4353FF`
- Text Primary: `#1F232E`
- Text Secondary: `#696B6C`

### Typography
- Font Primary: Inter/Poppins/Haura (Google Fonts)
- Icons: React icons(Phosphor icons)

## 📁 Struktur Folder

```
/app
  ├─ /api
  │   └─convert  
  │    │   └─route.ts
  ├─ /about
  │   └─ page.tsx
  ├─ layout.tsx
  └─ page.tsx     ← Landing page
/components
  ├─ upload
  │   └─ActionBar.tsx
  │   └─CardUploadImageWrapper.tsx
  │   └─SelectedImagesList.tsx
  │   └─UploadPlaceHolder.tsx
  ├─ LottieAnimation.tsx
  ├─ layout
  │   └─header
  │   │    └─headerWrapper.tsx
  │   └─footer
  │   │    └─footerWrapper.tsx
/lib
  ├─ sharp-convert-image.ts ← fungsi pakai `sharp`
 
/public
  └─ (favicon, og image, dsb)
```

## 📝 CHANGELOG

### [Unreleased]
- Menambahkan batasan upload maksimal 10 gambar
- Perbaikan UI/UX pada mobile view
- Optimasi performa konversi gambar

### [v1.0.0] - 14 june 2025
#### Added
- Fitur upload multi-format gambar (PNG, JPEG, GIF, TIFF, SVG)
- Konversi gambar ke format WebP
- Quality slider untuk mengatur tingkat kompresi
- Fitur download hasil konversi
- Error handling untuk format tidak didukung
- Responsive design untuk desktop dan mobile

#### Changed
- Refactor struktur folder untuk organisasi kode yang lebih baik
- Optimasi performa konversi gambar menggunakan Sharp
- Peningkatan UI/UX pada komponen upload

#### Fixed
- Perbaikan bug pada mobile menu
- Perbaikan layout pada berbagai ukuran layar
- Perbaikan error handling untuk file yang tidak valid

### [v0.1.0] - 02 june 2025
#### Added
- Setup awal proyek Next.js dengan TypeScript
- Implementasi Tailwind CSS
- Setup ESLint dan Prettier
- Struktur folder dasar
- Routing dasar (home, about, contact)
- Layout dasar (header, footer)

