/*
  # Insert Default Profile

  1. New Data
    - Insert a default profile record with basic company information
    - Set up default categories for income, expenses, project types, etc.
    - Configure default project status workflow
    - Set up default notification and security settings

  2. Purpose
    - Ensures the application has a profile to work with on first load
    - Prevents the PGRST116 error when fetching profile data
    - Provides sensible defaults for a photography business
*/

INSERT INTO profiles (
  full_name,
  email,
  phone,
  company_name,
  website,
  address,
  bank_account,
  authorized_signer,
  id_number,
  bio,
  income_categories,
  expense_categories,
  project_types,
  event_types,
  asset_categories,
  sop_categories,
  project_status_config,
  notification_settings,
  security_settings,
  briefing_template,
  terms_and_conditions
) VALUES (
  'Admin Vena Pictures',
  'admin@venapictures.com',
  '+62812345678',
  'Vena Pictures',
  'https://venapictures.com',
  'Jakarta, Indonesia',
  'BCA 1234567890 a.n. Vena Pictures',
  'Admin Vena Pictures',
  '',
  'Vena Pictures adalah studio fotografi profesional yang mengkhususkan diri dalam dokumentasi pernikahan dan acara spesial.',
  '["DP Proyek", "Pelunasan Proyek", "Penjualan Produk", "Lain-lain"]'::jsonb,
  '["Gaji Freelancer", "Transportasi", "Peralatan", "Marketing", "Operasional", "Lain-lain"]'::jsonb,
  '["Pernikahan", "Prewedding", "Engagement", "Birthday Party", "Corporate Event", "Graduation", "Family Portrait", "Lainnya"]'::jsonb,
  '["Meeting Klien", "Survey Lokasi", "Libur", "Workshop", "Lainnya"]'::jsonb,
  '["Kamera", "Lensa", "Lighting", "Audio", "Aksesoris", "Komputer", "Software", "Lainnya"]'::jsonb,
  '["Fotografi", "Videografi", "Editing", "Administrasi", "Marketing", "Umum"]'::jsonb,
  '[
    {
      "id": "status_1",
      "name": "Dikonfirmasi",
      "color": "#3b82f6",
      "note": "Proyek telah dikonfirmasi dan siap untuk persiapan",
      "subStatuses": [
        {"name": "Menunggu DP", "note": "Menunggu pembayaran uang muka dari klien"},
        {"name": "Persiapan Tim", "note": "Mengatur tim dan peralatan untuk proyek"}
      ]
    },
    {
      "id": "status_2", 
      "name": "Dalam Proses",
      "color": "#8b5cf6",
      "note": "Proyek sedang dalam tahap pelaksanaan",
      "subStatuses": [
        {"name": "Pemotretan", "note": "Sedang melakukan sesi pemotretan"},
        {"name": "Editing", "note": "Proses editing foto dan video"},
        {"name": "Review Klien", "note": "Menunggu review dan approval dari klien"}
      ]
    },
    {
      "id": "status_3",
      "name": "Revisi",
      "color": "#f97316", 
      "note": "Proyek memerlukan revisi berdasarkan feedback klien",
      "subStatuses": [
        {"name": "Revisi Minor", "note": "Perbaikan kecil pada hasil editing"},
        {"name": "Revisi Mayor", "note": "Perubahan signifikan yang diperlukan"}
      ]
    },
    {
      "id": "status_4",
      "name": "Siap Kirim",
      "color": "#06b6d4",
      "note": "Hasil sudah final dan siap untuk dikirim ke klien",
      "subStatuses": [
        {"name": "Persiapan Pengiriman", "note": "Menyiapkan paket untuk pengiriman"},
        {"name": "Menunggu Pelunasan", "note": "Menunggu pembayaran final sebelum pengiriman"}
      ]
    },
    {
      "id": "status_5",
      "name": "Dikirim",
      "color": "#eab308",
      "note": "Hasil telah dikirim ke klien",
      "subStatuses": [
        {"name": "Dalam Perjalanan", "note": "Paket sedang dalam perjalanan ke klien"},
        {"name": "Menunggu Konfirmasi", "note": "Menunggu konfirmasi penerimaan dari klien"}
      ]
    },
    {
      "id": "status_6",
      "name": "Selesai", 
      "color": "#10b981",
      "note": "Proyek telah selesai dan klien puas dengan hasilnya",
      "subStatuses": []
    },
    {
      "id": "status_7",
      "name": "Dibatalkan",
      "color": "#ef4444",
      "note": "Proyek dibatalkan oleh klien atau vendor",
      "subStatuses": []
    }
  ]'::jsonb,
  '{"newProject": true, "paymentConfirmation": true, "deadlineReminder": true}'::jsonb,
  '{"twoFactorEnabled": false}'::jsonb,
  'Halo tim! 

Briefing untuk proyek: [NAMA_PROYEK]
Klien: [NAMA_KLIEN]
Tanggal: [TANGGAL_ACARA]
Lokasi: [LOKASI]

Detail penting:
- [DETAIL_1]
- [DETAIL_2]
- [DETAIL_3]

Pastikan semua peralatan sudah disiapkan dan tim sudah koordinasi.

Terima kasih!',
  '📜 SYARAT DAN KETENTUAN UMUM

📅 JADWAL DAN WAKTU
- Jadwal pemotretan yang telah disepakati tidak dapat diubah kecuali ada kesepakatan baru dari kedua belah pihak
- Keterlambatan dari pihak klien dapat mempengaruhi hasil dan jadwal penyerahan
- Vendor berhak membatalkan sesi jika cuaca tidak mendukung (untuk outdoor shoot)

💰 PEMBAYARAN
- Uang muka (DP) minimal 30% dari total biaya harus dibayar untuk mengkonfirmasi booking
- Pelunasan dilakukan maksimal H-3 sebelum hari pelaksanaan
- Pembayaran dapat dilakukan melalui transfer bank ke rekening yang telah ditentukan
- Biaya tambahan di luar paket akan dikenakan sesuai kesepakatan

📦 HASIL DAN PENYERAHAN
- Hasil foto akan diserahkan dalam bentuk digital melalui Google Drive atau media penyimpanan lainnya
- Waktu penyerahan sesuai dengan yang tercantum dalam paket yang dipilih
- Klien berhak mendapat 1x revisi minor tanpa biaya tambahan
- Revisi mayor atau tambahan akan dikenakan biaya sesuai kesepakatan

⏱ PEMBATALAN
- Pembatalan dari pihak klien: DP yang sudah dibayar tidak dapat dikembalikan
- Pembatalan H-7 sebelum acara: klien wajib membayar 50% dari total biaya
- Pembatalan dari pihak vendor karena force majeure: DP akan dikembalikan 100%

➕ LAIN-LAIN
- Vendor berhak menggunakan hasil foto untuk keperluan promosi dan portofolio
- Klien bertanggung jawab atas keamanan dan akses lokasi pemotretan
- Hal-hal yang belum diatur akan diselesaikan secara musyawarah'
) ON CONFLICT (id) DO NOTHING;