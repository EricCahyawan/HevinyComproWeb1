# Perbaikan pengindeksan Heviny

Domain utama: **https://heviny.com**. Domain `hevinycosmetics.com` dan varian `www` diarahkan permanen ke domain utama, dengan path dan query tetap dipertahankan.

## Perilaku URL

| Jenis URL | Respons |
| --- | --- |
| Feed WordPress, termasuk `?feed=rss2&amp;portfolio-cat=perawatan-tubuh-en&lang=en` | 410 Gone + noindex |
| Produk WordPress yang dikenali, termasuk `cgi-sys/suspendedpage.cgi?portfolio=body-scrub&lang=en` | 301 ke `/produk` dengan kategori dan pencarian produk yang sesuai |
| Arsip `?post_type=portfolio&lang=en` | 301 ke katalog |
| ID WordPress lama tanpa pengganti terverifikasi, termasuk `page_id=1476` dan `p=1583` | 410 Gone |
| `suspendedpage.cgi` tanpa produk yang dapat dipetakan | 410 Gone |
| Halaman atau slug artikel yang tidak tersedia | 404 Not Found |
| Halaman aktif | 200, canonical sesuai halaman di HTML awal |

Feed dan halaman yang sudah dihapus memang tidak perlu masuk indeks. Jangan memblokirnya di robots.txt: Google perlu membaca respons 410. Tambahkan pemetaan di `src/seoRouting.ts` jika kemudian ditemukan pengganti yang tepat untuk ID WordPress lama.

## Verifikasi dan penerapan

Jalankan `npm run lint`, `npm run build`, lalu `npm run test:seo`. Tes SEO memeriksa hasil build, sehingga build perlu dijalankan terlebih dahulu.

Deploy seluruh proyek ke Vercel melalui proses deployment yang biasa digunakan. `middleware.ts` harus ikut dideploy; mengunggah folder `dist` saja ke hosting statis tidak menerapkan respons 301/410. Build membuat HTML tiap halaman di `dist/__pages`, dengan pemetaan di `vercel.json`. Server Express juga memakai aturan status yang sama.

Setelah deployment, pastikan URL berikut memberikan respons sesuai tabel menggunakan pemeriksaan HTTP atau fitur Inspect URL:

- `https://heviny.com/?feed=rss2&amp;portfolio-cat=perawatan-tubuh-en&lang=en`
- `https://heviny.com/cgi-sys/suspendedpage.cgi?portfolio=body-scrub&lang=en`
- `https://heviny.com/produk`
- `https://hevinycosmetics.com/produk`
- `https://heviny.com/sitemap.xml`

Di Google Search Console:

1. Gunakan properti `heviny.com` dan kirim sitemap `https://heviny.com/sitemap.xml`.
2. Periksa URL yang gagal dengan pengujian langsung setelah deployment, lalu jalankan **Validasi perbaikan** pada masalah asal.
3. Minta pengindeksan untuk halaman aktif yang penting, seperti beranda, produk, dan artikel. Feed serta URL 410 tidak perlu diminta pengindeksannya.

Angka “tertunda” pada riwayat validasi menunjukkan URL yang belum diperiksa dalam proses validasi tersebut. Itu tidak membuktikan semua proses pengindeksan situs berhenti. Tangkapan layar belum menampilkan nama masalah asal, sehingga hasil validasi akhirnya perlu diperiksa di Search Console.

Rujukan: [laporan pengindeksan Google](https://support.google.com/webmasters/answer/7440203?hl=id) dan [panduan perpindahan URL Google](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).
