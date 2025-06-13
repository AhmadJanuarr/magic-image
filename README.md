

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

