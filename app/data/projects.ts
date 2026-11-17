export interface PreviewScreenshot {
  url: string;
  caption: string;
}

export interface ProjectItem {
  id: number;
  slug: string;
  title: string;
  year: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  previewDomain: string;
  previewImages: PreviewScreenshot[];
  tags: string[];
  repoUrl: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    slug: "dapute",
    title: "Dapute",
    year: "2025–2026",
    subtitle: "Artisan Bakery & Hampers E-Commerce",
    description:
      "Platform e-commerce kue kering & hampers artisan berdesain Forest Brutalist dengan integrasi pembayaran Midtrans Snap, kalkulasi ongkir otomatis Biteship API, serta dashboard operasional toko.",
    longDescription:
      "Dapute adalah aplikasi e-commerce full-stack untuk brand kue kering & panggangan artisan made-to-order yang menangani seluruh perjalanan pelanggan dalam satu alur terpadu—mulai dari eksplorasi katalog koleksi signature, manajemen keranjang belanja real-time dengan penguncian snapshot harga, kalkulasi tarif pengiriman reguler maupun instan otomatis via Biteship API, hingga pembayaran online multi-channel melalui Midtrans Snap. Dibangun di atas Laravel 13 dan Livewire 3 dengan pola arsitektur Action Pattern (satu class = satu use case bisnis) serta identitas visual Forest Brutalist (#012d1d & #b9d94c), Dapute juga menyediakan dashboard operasional untuk Owner dan Admin Logistik termasuk manajemen antrean pesanan (Order Queue), pemrosesan webhook idempotent dengan row-locking database, serta ekspor laporan keuangan bulanan ke PDF dan Excel.",
    features: [
      "Katalog produk dinamis & keranjang belanja real-time berbasis Livewire 3 (CartDrawer) dengan penguncian snapshot harga",
      "Checkout terintegrasi Biteship API untuk estimasi ongkos kirim otomatis (reguler & instan), request pickup, serta pelacakan pengiriman",
      "Pembayaran online multi-channel via Midtrans Snap dengan verifikasi signature & pemrosesan webhook idempotent (lockForUpdate)",
      "Halaman Transaction Ledger (Order History) interaktif dengan fitur Track Package, Order Pulse, konfirmasi terima, & pembatalan pesanan",
      "Dashboard operasional Owner & Admin berbasis RBAC (Spatie Permission) dengan Order Queue dan ekspor laporan keuangan bulanan PDF/Excel",
      "Arsitektur bersih Action Pattern (Laravel 13) berpadu sistem desain Forest Brutalist yang tegas, kontras tinggi, dan responsif",
    ],
    image: "/assets/projects/dapute/dapute-card-cover.jpg",
    previewDomain: "dapute.com",
    previewImages: [
      {
        url: "/assets/projects/dapute/dapute-cover.png",
        caption: "Katalog Koleksi 'Dapute Signature' & Filter Produk Hampers Artisan",
      },
      {
        url: "/assets/projects/dapute/dapute-orders.png",
        caption: "Transaction Ledger — Riwayat Pesanan, Order Pulse & Pelacakan Paket",
      },
      {
        url: "/assets/projects/dapute/dapute-checkout.png",
        caption: "Shipping Details — Pilih Kurir Biteship, Alamat & Order Blueprint",
      },
    ],
    tags: [
      "Laravel 13",
      "Livewire 3",
      "Tailwind CSS 4",
      "Supabase (PostgreSQL)",
      "Midtrans Snap",
      "Biteship API",
    ],
    repoUrl: "https://github.com/Llorente14/Dapute.git",
  },
  {
    id: 2,
    slug: "flexy",
    title: "Flexy",
    year: "2025–2026",
    subtitle: "Footwear Archive & E-Commerce",
    description:
      "Platform e-commerce sneaker & footwear bergaya minimalis monokrom dengan katalog interaktif, autentikasi JWT berjenjang, serta konsol admin real-time untuk inventaris dan analitik penjualan.",
    longDescription:
      "Flexy adalah platform e-commerce sepatu kurasi (Curated Footwear Archive) yang memadukan estetika monokrom minimalis dengan sistem manajemen toko berskala penuh. Pelanggan dapat menjelajahi koleksi sepatu berdasarkan kategori, gender, brand, maupun rentang harga, memilih ukuran EU secara real-time, dan mengelola Shopping Bag beserta kupon promo. Di sisi operasional, Flexy menyediakan Admin Dashboard Console terintegrasi database MongoDB real-time untuk memantau metrik penjualan, mengelola produk, serta mengontrol stok per SKU lengkap dengan peringatan stok menipis (low-stock alert) dan riwayat audit inventaris.",
    features: [
      "Eksplorasi katalog sepatu multi-filter (kategori, gender, rentang harga, brand) & pemilihan ukuran EU real-time",
      "Shopping Bag interaktif dengan kalkulasi ringkasan pesanan otomatis dan dukungan kode kupon promosi",
      "Autentikasi pengguna & member access aman dengan proteksi sesi JWT berjenjang (Tiered JWT Protection)",
      "Admin Dashboard Console real-time untuk ringkasan metrik pendapatan, total pesanan, dan tren penjualan",
      "Manajemen inventaris & kontrol stok per ukuran SKU dilengkapi batas peringatan stok minimum (Alert Threshold) & log audit",
      "Manajemen katalog produk lengkap (CRUD produk, pengaturan harga ritel, serta toggle status aktif/nonaktif di toko)",
    ],
    image: "/assets/projects/flexy/flexy-card-cover.jpg",
    previewDomain: "flexy-footwear.vercel.app",
    previewImages: [
      {
        url: "/assets/projects/flexy/flexy-cover.png",
        caption: "Hero Landing Page — 'Step Into Your Style' Minimalist Monochrome Aesthetic",
      },
      {
        url: "/assets/projects/flexy/flexy-catalog.png",
        caption: "Katalog Sepatu Lengkap dengan Filter Kategori, Gender, Harga & Brand",
      },
      {
        url: "/assets/projects/flexy/flexy-product.png",
        caption: "Halaman Detail Produk, Galeri Sudut Sepatu & Pemilihan Ukuran (EU Size)",
      },
      {
        url: "/assets/projects/flexy/flexy-cart.png",
        caption: "Shopping Bag, Ringkasan Pesanan & Fitur Kupon Promosi",
      },
      {
        url: "/assets/projects/flexy/flexy-auth.png",
        caption: "Halaman Member Access & Login dengan Proteksi JWT Berjenjang",
      },
      {
        url: "/assets/projects/flexy/flexy-admin.png",
        caption: "Admin Dashboard Console — Ringkasan Metrik & Analitik Penjualan",
      },
      {
        url: "/assets/projects/flexy/flexy-stock.png",
        caption: "Inventory & Stock Control — Pemantauan SKU, Alert Threshold & Audit History",
      },
      {
        url: "/assets/projects/flexy/flexy-manage.png",
        caption: "Catalog & Product Management — Kelola Produk, Harga & Status Toko",
      },
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "JWT Auth"],
    repoUrl: "https://github.com/Mikeee636/Flexy.git",
  },
  {
    id: 3,
    slug: "payngo",
    title: "Pay&Go",
    year: "2025–2026",
    subtitle: "Smart POS & Retail System",
    description:
      "Sistem kasir pintar (Point of Sale) dan manajemen ritel terpadu dengan pemindaian QR/Barcode via webcam secara langsung, multi-metode pembayaran, serta laporan transaksi dan stok real-time.",
    longDescription:
      "Pay&Go adalah aplikasi Point of Sale (POS) dan sistem manajemen operasional toko ritel modern yang dirancang untuk mempercepat transaksi kasir sekaligus memudahkan pengawasan inventaris oleh administrator. Dilengkapi pemindai QR/Barcode real-time menggunakan kamera/webcam langsung di layar kasir, kalkulasi PPN (VAT 11%) serta kembalian otomatis, dukungan pembayaran Cash, QRIS, maupun Debit, hingga manajemen produk, kategori, karyawan, dan laporan penjualan menyeluruh.",
    features: [
      "Menu Transaksi Kasir (POS) dengan pemindaian kode QR/Barcode produk secara real-time melalui Webcam aktif",
      "Keranjang belanja kasir otomatis dengan perhitungan diskon, PPN (VAT 11%), nominal uang diterima, dan kembalian instan",
      "Dukungan metode pembayaran lengkap (Cash, QRIS, Debit), fitur buka laci kasir (Cash Drawer), & cetak struk",
      "Dashboard Summary Administrator untuk memantau Total Revenue, jumlah transaksi, unit terjual, dan produk terlaris",
      "Manajemen inventaris produk, kode barcode, kategori barang, stok, serta pengelolaan akun karyawan/kasir",
      "Riwayat transaksi lengkap (Transaction History) dengan pencarian nomor invoice, filter metode bayar, dan laporan penjualan",
    ],
    image: "/assets/projects/payngo/payngo-card-cover.jpg",
    previewDomain: "payngo-pos.vercel.app",
    previewImages: [
      {
        url: "/assets/projects/payngo/payngo-cover.png",
        caption: "Halaman Login Kasir & Administrator Pay&Go Retail System",
      },
      {
        url: "/assets/projects/payngo/payngo-pos-scanner.png",
        caption: "Menu Kasir (POS) — Keranjang Belanja, Pemindai QR Webcam Aktif & Pembayaran",
      },
      {
        url: "/assets/projects/payngo/payngo-dashboard.png",
        caption: "Dashboard Summary Admin — Ringkasan Pendapatan, Transaksi Baru & Produk Terlaris",
      },
      {
        url: "/assets/projects/payngo/payngo-products.png",
        caption: "Manage Products — Tabel Inventaris Produk, Kode Barcode, Stok & Kategori",
      },
      {
        url: "/assets/projects/payngo/payngo-history.png",
        caption: "Transaction History — Riwayat Pembelian Pelanggan & Pencarian Invoice",
      },
    ],
    tags: ["Laravel", "PHP", "JavaScript", "Tailwind CSS", "QR/Barcode Scanner"],
    repoUrl: "https://github.com/Mikeee636/Pay-Go.git",
  },
];
