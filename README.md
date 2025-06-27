

<img src="https://magic-image-sigma.vercel.app/example/example-2.png" alt="hero image">


## Magic Image
---
> Magic Image adalah aplikasi web ringan berbasis Next.js yang memungkinkan pengguna untuk mengunggah berbagai format gambar dan mengonversinya ke format WebP yang lebih ringkas dan cepat.

## Fitur Utama 

- **Upload Multi-format:** Mendukung PNG, JPEG, GIF, TIFF, SVG
- **Konversi Instan ke WebP:** Konversi cepat dan efisien
- **Quality Slider:** Atur tingkat kompresi (0-100)
- **Download Langsung:** Unduh hasil konversi dengan mudah
- **Error Handling:** Peringatan untuk format tidak didukung atau ukuran file berlebih
- **Responsif:** Tampilan optimal di desktop, tablet, dan mobile

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

