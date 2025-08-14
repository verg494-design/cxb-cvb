/*
  # Seed Initial Data

  1. Initial Setup
    - Create default profile
    - Create default admin user
    - Create sample categories and configurations

  2. Sample Data
    - Add basic packages and add-ons
    - Create sample cards and pockets
*/

-- Insert default profile
INSERT INTO profiles (
  full_name,
  email,
  phone,
  company_name,
  website,
  address,
  bank_account,
  authorized_signer,
  bio,
  income_categories,
  expense_categories,
  project_types,
  event_types,
  asset_categories,
  sop_categories,
  project_status_config,
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
  'Vena Pictures adalah studio fotografi profesional yang mengkhususkan diri dalam dokumentasi pernikahan dan acara spesial.',
  '["DP Proyek", "Pelunasan Proyek", "Penjualan Produk", "Lain-lain"]'::jsonb,
  '["Gaji Freelancer", "Transportasi", "Peralatan", "Marketing", "Operasional", "Lain-lain"]'::jsonb,
  '["Pernikahan", "Prewedding", "Engagement", "Birthday", "Corporate Event", "Graduation", "Family Portrait"]'::jsonb,
  '["Meeting Klien", "Survey Lokasi", "Workshop", "Libur", "Lainnya"]'::jsonb,
  '["Kamera", "Lensa", "Lighting", "Audio", "Komputer", "Software", "Transportasi", "Lainnya"]'::jsonb,
  '["Fotografi", "Videografi", "Editing", "Administrasi", "Marketing", "Umum"]'::jsonb,
  '[
    {"id": "status_1", "name": "Dikonfirmasi", "color": "#3b82f6", "note": "Proyek telah dikonfirmasi dan siap dikerjakan", "subStatuses": []},
    {"id": "status_2", "name": "Briefing", "color": "#8b5cf6", "note": "Tahap briefing dengan klien", "subStatuses": [{"name": "Briefing Awal", "note": "Diskusi konsep dan ekspektasi"}, {"name": "Finalisasi Brief", "note": "Konfirmasi detail akhir"}]},
    {"id": "status_3", "name": "Produksi", "color": "#f97316", "note": "Tahap pelaksanaan shooting", "subStatuses": [{"name": "Persiapan", "note": "Setup peralatan dan lokasi"}, {"name": "Shooting", "note": "Proses pengambilan gambar"}]},
    {"id": "status_4", "name": "Post-Produksi", "color": "#06b6d4", "note": "Tahap editing dan finishing", "subStatuses": [{"name": "Seleksi Foto", "note": "Pemilihan foto terbaik"}, {"name": "Editing", "note": "Proses editing foto"}, {"name": "Review Klien", "note": "Klien review hasil editing"}]},
    {"id": "status_5", "name": "Cetak", "color": "#eab308", "note": "Tahap pencetakan produk fisik", "subStatuses": [{"name": "Persiapan Cetak", "note": "Persiapan file untuk cetak"}, {"name": "Proses Cetak", "note": "Pencetakan di vendor"}, {"name": "Quality Check", "note": "Pengecekan kualitas hasil cetak"}]},
    {"id": "status_6", "name": "Dikirim", "color": "#10b981", "note": "Produk dalam pengiriman", "subStatuses": []},
    {"id": "status_7", "name": "Selesai", "color": "#10b981", "note": "Proyek telah selesai dan diserahkan", "subStatuses": []},
    {"id": "status_8", "name": "Dibatalkan", "color": "#ef4444", "note": "Proyek dibatalkan", "subStatuses": []}
  ]'::jsonb,
  'Halo tim! 📸\n\nProyek baru telah masuk:\n- Klien: [NAMA_KLIEN]\n- Acara: [NAMA_PROYEK]\n- Tanggal: [TANGGAL_ACARA]\n- Lokasi: [LOKASI]\n\nMohon persiapkan diri dan peralatan yang diperlukan. Detail lengkap bisa dilihat di aplikasi.\n\nTerima kasih! 🙏',
  '📜 SYARAT DAN KETENTUAN UMUM\n\n📅 JADWAL DAN WAKTU\n- Jadwal pemotretan yang telah disepakati tidak dapat diubah kecuali atas persetujuan kedua belah pihak\n- Keterlambatan dari pihak klien dapat mempengaruhi durasi dan hasil pemotretan\n- Force majeure (bencana alam, pandemi, dll.) dapat menjadi alasan penundaan tanpa penalti\n\n💰 PEMBAYARAN\n- Uang muka (DP) minimal 30% dari total biaya\n- Pelunasan dilakukan maksimal H-3 sebelum hari pelaksanaan\n- Pembayaran melalui transfer bank ke rekening yang telah ditentukan\n- Bukti transfer wajib disimpan sebagai bukti pembayaran\n\n📦 HASIL DAN PENYERAHAN\n- Hasil foto/video akan diserahkan sesuai dengan paket yang dipilih\n- Waktu pengerjaan dihitung setelah hari pelaksanaan\n- Revisi minor dapat dilakukan maksimal 2x tanpa biaya tambahan\n- Revisi major atau perubahan konsep akan dikenakan biaya tambahan\n\n⏱ HAK CIPTA DAN PENGGUNAAN\n- Hak cipta foto/video tetap milik Vena Pictures\n- Klien berhak menggunakan hasil untuk keperluan pribadi\n- Penggunaan komersial memerlukan izin tertulis dari Vena Pictures\n- Vena Pictures berhak menggunakan hasil untuk portofolio dan promosi\n\n➕ LAIN-LAIN\n- Klien wajib menyediakan akses yang memadai ke lokasi pemotretan\n- Biaya transportasi dan akomodasi (jika diperlukan) ditanggung klien\n- Kerusakan atau kehilangan peralatan akibat kelalaian klien menjadi tanggung jawab klien\n- Segala bentuk perubahan atau tambahan diluar kontrak akan dikenakan biaya sesuai kesepakatan'
) ON CONFLICT DO NOTHING;

-- Insert default admin user
INSERT INTO users (
  email,
  password,
  full_name,
  role,
  permissions
) VALUES (
  'admin@venapictures.com',
  'admin123',
  'Admin Vena Pictures',
  'Admin',
  '[]'::jsonb
) ON CONFLICT (email) DO NOTHING;

-- Insert sample packages
INSERT INTO packages (
  name,
  price,
  physical_items,
  digital_items,
  processing_time,
  photographers,
  videographers
) VALUES 
(
  'Paket Basic Wedding',
  5000000,
  '[{"name": "Album 20x30 (20 halaman)", "price": 500000}, {"name": "Flashdisk Custom", "price": 100000}]'::jsonb,
  '["300+ foto edit terbaik", "File RAW (opsional)", "Online gallery"]'::jsonb,
  '14 hari kerja',
  '2 Fotografer',
  '1 Videografer'
),
(
  'Paket Premium Wedding',
  8000000,
  '[{"name": "Album 30x40 (30 halaman)", "price": 800000}, {"name": "Mini album 20x20", "price": 300000}, {"name": "Flashdisk Custom", "price": 100000}]'::jsonb,
  '["500+ foto edit terbaik", "Video highlight 3-5 menit", "File RAW", "Online gallery"]'::jsonb,
  '21 hari kerja',
  '3 Fotografer',
  '2 Videografer'
) ON CONFLICT DO NOTHING;

-- Insert sample add-ons
INSERT INTO add_ons (name, price) VALUES 
('Drone Photography', 1000000),
('Same Day Edit Video', 1500000),
('Extra Album Copy', 500000),
('Engagement Session', 2000000)
ON CONFLICT DO NOTHING;

-- Insert sample cards
INSERT INTO cards (
  card_holder_name,
  bank_name,
  card_type,
  last_four_digits,
  expiry_date,
  balance,
  color_gradient
) VALUES 
(
  'Vena Pictures',
  'BCA',
  'Debit',
  '1234',
  '12/26',
  15000000,
  'from-blue-500 to-sky-400'
),
(
  'Vena Pictures',
  'Tunai',
  'Debit',
  'CASH',
  '',
  2000000,
  'from-green-500 to-emerald-400'
) ON CONFLICT DO NOTHING;

-- Insert sample financial pockets
INSERT INTO financial_pockets (
  name,
  description,
  icon,
  type,
  amount,
  goal_amount
) VALUES 
(
  'Dana Darurat',
  'Simpanan untuk keperluan mendesak',
  'piggy-bank',
  'Nabung & Bayar',
  5000000,
  10000000
),
(
  'Upgrade Peralatan',
  'Tabungan untuk membeli peralatan baru',
  'lock',
  'Terkunci',
  3000000,
  15000000
) ON CONFLICT DO NOTHING;