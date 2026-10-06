# Audit Website Portofolio Farrel Julio Akbar

Tanggal audit: 2 Oktober 2026  
Website: https://farreljulio.xyz/  
Tujuan: membantu recruiter dan pengunjung nonteknis memahami profil, kemampuan, proses kerja, kontribusi, dan hasil proyek Farrel.

## 1. Ruang lingkup dan dasar penilaian

Audit dilakukan dengan membuka website langsung melalui browser, membaca isi lima halaman utama, memeriksa tampilan desktop, mencoba pilihan ID/EN, memeriksa tujuan tautan proyek, dan membuka PDF pada tombol Download CV. Lima halaman yang diperiksa adalah Home, Resume, Portfolio, Achievements, dan Other Activity. Tidak ditemukan halaman studi kasus internal pada tautan kartu proyek yang tersedia; kartu proyek mengarah langsung ke GitHub.

Acuan profil adalah CV lampiran serta tiga bank data karier. Dua bank data dengan suffix (1) dan (2) identik. Bank data tanpa suffix memiliki pembaruan 20 Agustus 2026 dan digunakan untuk koreksi yang sudah tercatat, termasuk TOEFL 590 dan periode Rajawali. Dokumen tersebut tetap perlu diperbarui untuk perkembangan setelah Agustus. Informasi tentang proyek Olist dan riset forecasting terbaru berasal dari konteks percakapan dan masih memerlukan bahan proyek untuk penulisan studi kasus final.

Audit ini tidak mengukur Lighthouse/Core Web Vitals, menguji perangkat seluler, membuka seluruh repository GitHub, mengaudit kode sumber, atau memvalidasi kredensial sertifikat. Rekomendasi dalam area tersebut adalah pemeriksaan lanjutan, bukan klaim adanya kerusakan. Website belum diubah.

## 2. Diagnosis utama

Visual dasar putih-biru, tipografi, foto profil, dan navigasi sudah memberikan fondasi profesional. Akan tetapi, isi website belum mewakili kekuatan pengalaman Farrel saat ini. Banyak bagian masih berfungsi sebagai kerangka penulisan, daftar teknologi, atau daftar repository. Pengunjung belum memperoleh cerita utuh dari masalah, data, proses, kontribusi pribadi, sampai hasil.

Perbaikan paling penting adalah membangun hubungan antara kemampuan dan bukti: pengalaman Bank Indonesia terhubung ke EWS; pengalaman Telkom terhubung ke RAG dan CDC; penelitian terhubung ke desain eksperimen dan hasil; kemampuan BI terhubung ke dashboard yang terlihat.

| Prioritas | Temuan | Implikasi |
|---|---|---|
| P0 | PDF Download CV masih menyebut mahasiswa tingkat akhir dan IPK 2,96 | Recruiter menerima profil lama meskipun sumber terbaru menyebut sudah lulus dan IPK 3,00 |
| P0 | Bank Indonesia belum tercantum pada halaman Resume dan CV publik yang diperiksa | Pengalaman paling baru dan relevan belum membantu penilaian profil |
| P0 | Other Activity memuat instruksi seperti Include the Bakmi Rempah story | Halaman terlihat belum selesai |
| P1 | Proyek tidak mempunyai thumbnail hasil atau halaman studi kasus internal | Orang awam sulit memahami fungsi proyek dan recruiter sulit menilai kontribusi |
| P1 | Mode bahasa masih bercampur | Pilihan ID/EN belum menghasilkan pengalaman bahasa yang konsisten |
| P1 | Portofolio mengutamakan repository lama, belum memuat EWS dan penelitian secara utuh | Kekuatan profesional tidak menjadi perhatian utama |
| P2 | Banyak kartu, label, dan paragraf yang menjelaskan fungsi halaman | Ruang yang seharusnya berisi bukti pengalaman diisi penjelasan tentang website |

## 3. Koreksi data sebelum revisi visual

| Elemen | Kondisi yang ditemukan | Tindakan |
|---|---|---|
| Status pendidikan | Home dan Resume menyebut student/final-year; PDF publik juga menyebut undergraduate | Gunakan lulusan Sains Data. Status menunggu wisuda hanya dipakai jika masih sesuai pada saat publikasi |
| IPK | PDF publik menunjukkan 2,96; bank data dan CV lampiran menyebut 3,00 | Sinkronkan CV publik dengan IPK final 3,00 bila dicantumkan |
| Bank Indonesia | Belum muncul di Resume dan halaman pertama CV publik | Tambahkan Data Science Intern, pekerjaan monitoring pangan, dashboard, dan analisis regional |
| Awal magang BI | CV lampiran menyebut Maret 2026; bank data menyebut Mei 2026 | Gunakan Mei sebagai acuan sementara dari koreksi bank data, lalu cocokkan dokumen periode sebelum penerbitan CV baru |
| Rajawali Academy | Website dan CV menyebut Juli-Agustus 2024; bank data telah mengoreksi Juli-Desember 2024 | Sinkronkan ke periode dan jabatan IT Specialist Intern yang telah tercatat |
| DAMASKUS | Website menyebut Januari 2024-Present; bank data menyebut sampai Desember 2025 | Koreksi masa kepemimpinan dan gunakan bentuk lampau untuk kontribusi yang sudah berakhir |
| Bakmi Rempah | Website mempunyai periode Januari 2021-Mei 2023, tetapi bank data menyebut tanggal belum dikunci | Jangan memperlakukan tanggal website sebagai kepastian baru |
| Testimoni mentor | Jabatan ditampilkan sebagai Data Analytics & AI Team Lead di Telkom | Jelaskan bahwa itu jabatan pada periode magang. Tidak wajib mengganti konteks testimoni dengan jabatan terbaru |
| RASIO | Website menyebut Top 10; bank data mengonfirmasi finalis | Pertahankan finalis; gunakan Top 10 jika ada bukti yang mendukung |
| Klaim dampak | Bank data mempunyai efisiensi RAG sekitar 30% dan sinkronisasi sampai 2x lebih cepat | Saat dipublikasikan, sertakan konteks baseline dan pengukuran. Jangan samakan klaim CDC profesional dengan hasil tugas akhir |

CV publik juga masih memakai tautan portofolio Notion. Tautan website utama perlu menjadi rujukan yang konsisten. Alamat lengkap tidak diperlukan untuk membantu pengunjung menilai karya; lokasi umum sudah cukup pada profil publik.

## 4. Home

Peran halaman: pengunjung segera memahami siapa Farrel, apa yang bisa dikerjakan, bukti terkuat, dan langkah berikutnya.

| Bagian | Temuan saat ini | Perbaikan yang disarankan |
|---|---|---|
| Label fokus | Data Science, Data Engineering, AI & Automation, ML & Cloud Analytics muncul sekaligus | Jadikan satu identitas utama yang mudah dibaca, kemudian tiga bidang kerja: analytics/BI, data engineering, AI/automation |
| Kalimat pembuka | Membangun sistem cerdas melalui data, otomasi, dan rekayasa strategis masih luas | Nyatakan output nyata: dashboard, integrasi data, chatbot berbasis dokumen, dan monitoring ekonomi |
| Kartu profil | Nama dan fokus mengulang hero; student sudah tidak sesuai | Perbesar foto secara proporsional dan isi ringkasan pengalaman BI/Telkom serta bidang kontribusi |
| Bukti pengalaman | ITERA dan Telkom ada, Bank Indonesia belum ada | Tampilkan pengalaman yang paling relevan dengan label hubungan yang jelas, misalnya Pengalaman magang di Bank Indonesia dan Telkom Indonesia |
| Statistik | 3 Public flagship repos, 2+ Competition proof points, ITERA Study base | Ganti dengan bukti yang bermakna: EWS 9 komoditas, analisis 15 kabupaten/kota, eksperimen 5-80 juta baris. Jelaskan bahwa ini cakupan pekerjaan yang berbeda |
| Featured work | AI ASEAN, IDISbot, Debezium; berupa kartu teks yang langsung menuju GitHub | Utamakan tiga karya yang mewakili BI, engineering, dan AI; gunakan thumbnail nyata dan tautan internal Baca studi kasus |
| Layout featured | Kartu bertumpuk di sisi kiri dengan area kanan yang kurang dimanfaatkan | Gunakan grid seimbang atau satu karya unggulan besar dan dua kartu pendukung; setiap area kosong harus membantu komposisi |
| Testimoni | Bukti mentor relevan, teks panjang dan terdapat kontrol carousel | Gunakan kutipan asli yang lebih singkat, tautan sumber jika ada, dan konteks hubungan. Jika hanya satu testimoni, gunakan kartu statis |
| What each page does | Menjelaskan navigasi yang telah tersedia di header | Ganti dengan ringkasan kemampuan yang langsung terhubung ke karya, atau hapus jika mengulang |
| CTA | Explore portfolio, Download CV, dan email tersedia | Pertahankan aksi utama Lihat proyek, aksi sekunder Download CV, lalu ajakan kontak yang spesifik |

Urutan yang disarankan: identitas dan manfaat kerja, pengalaman institusi, tiga proyek unggulan bergambar, kemampuan dengan bukti, testimoni, dan kontak.

Contoh arah isi hero, untuk disesuaikan saat penulisan final: Farrel Julio Akbar, lulusan Sains Data dengan pengalaman di Bank Indonesia dan Telkom Indonesia. Saya mengolah data menjadi dashboard, sistem integrasi, dan aplikasi AI untuk membantu pekerjaan dan pengambilan keputusan.

## 5. Resume

Peran halaman: memberikan gambaran karier yang ringkas dengan bukti kontribusi. Nama menu dapat tetap Resume; About & Experience juga bisa dipertimbangkan bila isi diperluas.

| Bagian | Temuan saat ini | Perbaikan yang disarankan |
|---|---|---|
| Judul | A clean snapshot of my background... menjelaskan format halaman | Ganti dengan judul langsung tentang profil atau pengalaman |
| Ringkasan | About, Profile summary, Experience focus, Current direction saling mengulang | Satukan menjadi satu pengantar dan tiga kemampuan utama |
| Identitas | Final-year student muncul berulang | Perbarui menjadi graduate dan hapus label pendidikan lama |
| Pengalaman | Telkom, Rajawali, Bakmi ada; BI belum ada | Susun timeline dengan pengalaman terbaru di atas dan 2-3 kontribusi utama per pengalaman |
| Kedalaman pengalaman | Deskripsi pendek belum menunjukkan ruang lingkup pekerjaan | Jelaskan masalah, tanggung jawab pribadi, output, tools utama, dan tautan studi kasus yang relevan |
| Skills map | Banyak tools, tetapi Power BI dan Looker Studio belum muncul pada kelompok kemampuan yang ditampilkan | Tambahkan BI/visualization dan hubungkan setiap kelompok ke proyek nyata |
| Pendidikan | Aug 2022-Present, Final-year student, dan SMA masih menonjol | Utamakan Sains Data ITERA dan tugas akhir. SMA dapat diringkas atau dihilangkan dari halaman publik |
| Strengths | Pernyataan umum tanpa contoh | Gunakan bukti adaptasi domain BI, implementasi RAG/CDC, dan koordinasi organisasi |
| How to read this resume/Next step | Memuat instruksi kepada pembaca dan janji pengembangan halaman | Hapus; isi langsung dengan informasi profesional yang sudah tersedia |
| CV download | File lama benar-benar terbuka, tetapi isinya tidak terbaru | Ganti dengan versi yang sudah direkonsiliasi; jangan sekadar mengganti nama file |

Kelompok skill yang disarankan:

| Bidang | Kemampuan | Contoh tools | Bukti |
|---|---|---|---|
| Analytics dan BI | Membersihkan data, merancang KPI, menjelaskan hasil | Python, R, SQL, Power BI, Looker Studio | EWS dan dashboard Olist setelah bahan disiapkan |
| Data engineering | Memindahkan, menyinkronkan, dan memantau data | PostgreSQL, ClickHouse, Debezium, PeerDB, Kafka, Docker | CDC dan penelitian perbandingan |
| AI dan automation | Membuat pencarian dokumen dan automasi tugas | n8n, Supabase, OpenAI/Groq, Streamlit | RAG Telkom atau demo yang aman dipublikasikan |
| ML dan delivery | Eksperimen, versioning, deployment, monitoring | scikit-learn, TensorFlow, MLflow, DVC, CI/CD | Voice classification dan eksperimen model |

Hindari persentase skill seperti Python 90%. Kemampuan akan lebih meyakinkan jika pembaca bisa membuka bukti pemakaiannya.

## 6. Portfolio

Peran halaman: membantu pengunjung memilih karya relevan dan memahami kualitas kerja sebelum masuk kode sumber.

| Bagian | Temuan saat ini | Perbaikan yang disarankan |
|---|---|---|
| Pembuka | Mengklaim project dapat dibaca sebagai kasus nyata, tetapi kartu belum berisi studi kasus | Gunakan pembuka singkat dan buktikan melalui isi detail proyek |
| Proyek unggulan | Hanya tiga repository lama yang diberi sorotan | Kurasi proyek berdasarkan relevansi karier dan kekuatan bukti |
| Thumbnail | Tidak ada gambar proyek pada kartu | Gunakan screenshot dashboard/aplikasi, grafik hasil eksperimen, atau diagram arsitektur yang sesuai |
| Nama proyek | Nama teknis repository mendominasi, misalnya debezium-cdc-mirroring | Judul utama menjelaskan manfaat; nama repository menjadi metadata atau tautan sekunder |
| Ringkasan | Ada deskripsi singkat dan tech tags, tetapi masalah, peran, hasil, serta status belum jelas | Tambahkan satu kalimat tujuan, kontribusi pribadi singkat, hasil/cakupan, tahun, dan status |
| Tautan | Semua kartu proyek menuju GitHub | Aksi utama menuju studi kasus internal; GitHub/demo menjadi aksi lanjutan |
| Media placeholder | Images, video, and detail links can be added later dan Ready for media assets later terlihat | Hapus semua catatan pengerjaan dari halaman publik |
| Repository library | Ada 14 tautan repo, dengan beberapa proyek utama muncul kembali | Letakkan koleksi lengkap sebagai bagian sekunder. Kurasi utama harus tetap mudah dipindai |
| Utility/fork | Profile README dan snake animation masuk daftar proyek | Pindahkan ke tautan profil GitHub; jangan memberi bobot setara dengan proyek profesional |
| Kategori | Kelompok AI/ML dan engineering sudah tersedia | Pertahankan kategorisasi, tambahkan BI/analytics karena penting untuk profil; filter sederhana hanya jika jumlah proyek memang membutuhkannya |

Kartu proyek ideal memuat: thumbnail, kategori, judul yang menjelaskan fungsi, satu kalimat masalah/solusi, kontribusi atau hasil terukur, 3-5 tools utama, dan tombol Baca studi kasus.

### Kurasi karya untuk versi awal

| Urutan | Karya | Cerita yang perlu dibangun | Visual utama | Bukti/status yang perlu dilengkapi |
|---|---|---|---|---|
| 1 | Food Price Monitoring dan EWS | Bagaimana data harga diubah menjadi pemantauan risiko kenaikan harga pangan | Dashboard dan contoh status 9 komoditas | Output yang boleh dibagikan dan penjelasan peran pribadi |
| 2 | Penelitian PeerDB vs Debezium | Bagaimana memilih pendekatan integrasi data berdasarkan pengujian 5-80 juta baris | Grafik perbandingan dan dua arsitektur sistem | Tabel hasil kedua tools, definisi metrik, repository, dan detail paper jika sudah dikonfirmasi |
| 3 | RAG Chatbot Automation | Bagaimana pengguna mencari pedoman internal melalui pertanyaan bahasa sehari-hari | Contoh tanya-jawab dan alur pencarian dokumen | Contoh dokumen publik/sintetis dan baseline klaim efisiensi |
| 4 | Olist DWH dan Power BI | Bagaimana data transaksi lintas tabel menjadi KPI penjualan, pengiriman, dan ulasan | Dashboard Executive Summary dan diagram DWH | Sumber laporan dan screenshot final; fakta proyek ini berasal dari konteks percakapan |
| 5 | ML voice classification dan MLOps | Bagaimana model dilatih, diuji, disimpan versinya, dan dijalankan sebagai aplikasi | Hasil evaluasi, UI, dan diagram workflow | Dataset, label target, metrik, split, model, repository final |
| 6 | Impact of AI in ASEAN | Bagaimana hasil analisis/forecasting diterjemahkan menjadi infografik kompetisi | Infografik final dan grafik hasil | Dataset, asumsi, model, validasi, dan sertifikat finalis |

EWS, RAG, dan CDC cukup menjadi tiga sorotan Home. Portfolio dapat memuat enam karya utama. Analisis siklus bisnis/PDRB bisa ditambahkan dengan status R&D/prototype setelah bahan hasilnya jelas. Proyek terbaru tidak otomatis layak mendapat status selesai atau production.

### Perlakuan terhadap 14 repository yang tampil saat ini

Nama dan ringkasan berikut berasal dari website, bukan audit isi kode GitHub.

| Repository | Perlakuan yang disarankan |
|---|---|
| impact-of-ai-asean | Pertahankan sebagai karya analisis dan komunikasi data; hubungkan ke prestasi RASIO |
| IDISbot | Pertahankan sebagai demo AI; bedakan dengan RAG internal Telkom |
| RAGSYSTEM-renewabledocument | Jadikan proyek pendukung atau contoh domain RAG, setelah penggunaan dokumen dan output diperiksa |
| gender-detection-cnn-streamlit | Hubungkan ke studi kasus computer vision bila memang aplikasi dari model yang sama |
| gender-detection-cnn | Jangan duplikasi sebagai karya terpisah bila merupakan baseline dari aplikasi di atas; verifikasi hubungan terlebih dahulu |
| gender-voice-detection | Pertahankan sebagai proyek audio ML; jangan gabungkan dengan computer vision hanya karena label proyek mirip |
| Riau-Temp-GWL-Regression | Proyek pendukung statistik dengan visual data, evaluasi regresi, dan batas interpretasi |
| lampung-rumah-knn-classifier | Proyek pembelajaran klasifikasi; jelaskan target prediksi dan dataset |
| debezium-cdc-mirroring | Kandidat bukti implementasi CDC; jangan dianggap otomatis mewakili seluruh eksperimen tugas akhir |
| cdc-psql-clickhouse | Hubungkan ke cerita integrasi database bila peran dan batas sistem sudah diperiksa |
| flink-datastream-monitoring | Proyek streaming/monitoring pendukung; tampilkan flow serta dashboard hasil |
| hadoop-food-trade-analysis | Proyek big data pendukung dengan pertanyaan analisis dan hasil yang jelas |
| Julio-analyst | Cukup sebagai tautan profil GitHub |
| snk | Hilangkan dari kurasi profesional karena merupakan utility/fork profil |

## 7. Template halaman detail proyek

Setiap studi kasus mempunyai dua kedalaman baca. Bagian awal membantu pengunjung awam memahami manfaat dan melihat hasil. Bagian berikutnya memberikan detail bagi recruiter teknis. Pengunjung tidak perlu membaca seluruh metodologi untuk memahami tujuan proyek.

| Urutan | Isi wajib | Pertanyaan yang dijawab |
|---|---|---|
| 1 | Judul, ringkasan manfaat, thumbnail utama | Proyek ini melakukan apa? |
| 2 | Tahun, konteks, peran, tim, dan status | Ini proyek pribadi, akademik, atau pekerjaan? Apa yang Farrel kerjakan? |
| 3 | Masalah dan pengguna | Mengapa perlu dibuat, dan siapa yang terbantu? |
| 4 | Hasil akhir | Seperti apa dashboard, aplikasi, grafik, atau sistemnya? |
| 5 | Data masuk | Datanya dari mana, periode dan cakupannya berapa, apa target/outputnya? |
| 6 | Alur kerja | Apa yang terjadi dari data awal sampai hasil akhir? |
| 7 | Kontribusi pribadi | Tahap mana yang dikerjakan sendiri, bersama tim, mentor, atau vendor? |
| 8 | Tech stack beserta fungsi | Mengapa tool tertentu dipakai dan apa perannya? |
| 9 | Evaluasi dan hasil | Bagaimana kualitas diuji, apa pembandingnya, apa temuan utamanya? |
| 10 | Keterbatasan dan pembelajaran | Apa batas eksperimen dan keputusan teknis yang dipelajari? |
| 11 | Bukti lanjutan | Di mana demo, repository, laporan, paper, atau sertifikat yang relevan? |

### Contoh isi yang mudah dipahami: CDC

Judul: Sinkronisasi Data Database Secara Hampir Real Time.

Ringkasan: sistem menangkap perubahan pada database sumber dan mengirimkannya ke database tujuan agar data analitik tetap mengikuti perubahan tanpa menunggu pemindahan data secara berkala.

CDC adalah metode integrasi data yang menangkap perubahan database. Pada detail, jelaskan bahwa penelitian Farrel memakai beban insert-only. Jangan menampilkan hasil tersebut seolah-olah telah membuktikan performa update/delete, multi-node, atau seluruh kondisi produksi.

| Komponen | Fungsi dalam penjelasan |
|---|---|
| PostgreSQL | Database sumber; database tujuan disesuaikan dengan implementasi yang benar-benar dipakai |
| PeerDB | Jalur replikasi yang diuji dalam eksperimen PeerDB |
| Debezium | Menangkap perubahan database dalam jalur Debezium |
| Kafka/Kafka Connect | Membawa perubahan dan menghubungkan komponen pada jalur Debezium sesuai arsitektur aktual |
| ClickHouse | Database analitik pada implementasi yang menggunakan ClickHouse; jangan diasumsikan sebagai tujuan semua repo |
| Docker | Menjalankan komponen pada lingkungan container yang konsisten |
| Prometheus/Grafana dan monitoring lain | Mengumpulkan dan menampilkan metrik yang benar-benar dipantau |

Tampilkan arsitektur PeerDB dan Debezium secara terpisah. Hindari menggambar PeerDB, Debezium, Kafka, dan Flink sebagai satu rangkaian wajib jika sebenarnya berada pada eksperimen atau implementasi berbeda.

Hasil penelitian yang tercatat menunjukkan PeerDB lebih baik pada beban kecil dan Debezium pada beban besar dalam konfigurasi pengujian tersebut. Grafik final perlu memakai nilai kedua tools untuk setiap skenario dari data penelitian asli. Nilai pemenang saja tidak cukup untuk membuat grafik komparasi lengkap.

### Contoh alur konseptual: EWS

| Tahap | Isi penjelasan untuk pembaca awam |
|---|---|
| Data sumber | Harga pangan dari PIHPS |
| Pengolahan | Validasi, pembersihan, dan penyusunan data untuk analisis |
| Indikator | Menghitung perubahan harga dan seberapa besar fluktuasinya |
| Skor | Menggabungkan indikator menjadi ukuran kewaspadaan |
| Tampilan | Menampilkan tren dan kategori Normal, Waspada, atau Peringatan pada dashboard |
| Penggunaan | Membantu analis menentukan komoditas yang perlu diperiksa lebih lanjut |

Bagian teknis menjelaskan CQGR/CAGR, volatilitas, PCA, Q-IPA/A-IPA, periode hitung, serta batas status. Gunakan kategori yang tidak tumpang tindih: Normal <0,5; Waspada 0,5 sampai <1; Peringatan >=1. Sistem menghasilkan dukungan monitoring; jangan mengklaim sudah menurunkan inflasi tanpa bukti evaluasi.

### Contoh alur konseptual: RAG

Tampilkan dua alur yang berhubungan: pengolahan dokumen menjadi potongan teks dan representasi yang bisa dicari; lalu pertanyaan pengguna, pencarian potongan relevan, penyusunan jawaban, dan penyampaian ke pengguna. Pisahkan jalur knowledge base dari jalur pertanyaan agar diagram tidak memberi kesan seluruh dokumen diproses ulang pada setiap chat.

Pada stack, jelaskan peran n8n sebagai pengatur workflow, Supabase sebagai penyimpanan sesuai implementasi aktual, model AI sebagai penyusun jawaban, dan Telegram/Streamlit/web sebagai antarmuka. OpenAI dan Groq dapat menjadi pilihan model pada tahap berbeda; jangan menganggap semua layanan berjalan dalam satu urutan tanpa mengecek workflow.

## 8. Achievements

| Bagian | Temuan saat ini | Perbaikan yang disarankan |
|---|---|---|
| RASIO dan Enterns | Pencapaian relevan, tetapi belum terlihat sertifikat atau karya | Tampilkan penyelenggara, tahun, posisi/peran, gambar bukti, dan tautan karya |
| Magang Telkom | Ditempatkan sebagai achievement | Jadikan pengalaman di Resume. Prestasi dari magang dapat ditampilkan bila ada pengakuan atau hasil khusus yang jelas |
| Why this section matters | Menjelaskan mengapa halaman prestasi penting | Hapus dan gunakan ruang untuk prestasi atau bukti |
| Future proof section | Hackathon wins dan recognition masih berupa rencana kategori | Hapus dari publik sampai ada hasil nyata |
| Sertifikat | Ada 13 kartu, sebagian besar pembelajaran DQLab | Utamakan beberapa yang relevan dan kelompokkan sisanya agar tidak mendominasi halaman |
| Verifikasi | Nama/ID tertulis, tidak ditemukan tautan kredensial atau tombol bukti pada konten halaman | Tambahkan tautan valid jika tersedia, atau PDF/gambar sertifikat yang benar-benar dimiliki |
| Publikasi | Bank data menyebut artikel JACOST, tetapi detail belum dikunci | Masukkan setelah judul, status terbit, DOI, dan tautan dikonfirmasi |

Urutan yang disarankan: prestasi kompetisi, publikasi jika sudah pasti, lalu sertifikasi terpilih. Jangan menulis seluruh sertifikat belajar sebagai bukti tingkat keahlian profesional yang setara.

## 9. Other Activity

Halaman ini paling jelas menunjukkan isi yang belum selesai. Teks Share experiments, Show committee roles, Include the Bakmi Rempah story, dan Reserve space for mentoring merupakan arahan menulis. Ganti dengan pengalaman aktual.

| Bagian | Perbaikan |
|---|---|
| Nama halaman | Gunakan Activities & Leadership atau Leadership & Business bila itu isi utamanya |
| MAGENTA 22 | Cerita peran ketua, koordinasi 5 divisi/27 panitia, dan 140+ peserta; sertakan foto yang relevan |
| First Gathering D'23 | Tampilkan pengelolaan 15 staf dan 250+ peserta, masalah koordinasi, serta hasil |
| DAMASKUS | Tampilkan kepemimpinan komunitas, tanggung jawab, dan periode yang sudah dikoreksi |
| Bakmi Rempah | Jelaskan hubungan usaha keluarga, peran pengelolaan, keputusan operasional, dan pembelajaran bisnis |
| Learning in public | Tampilkan tautan tulisan/catatan yang benar-benar ada; jika belum ada, hilangkan bagian ini |
| Future activities | Hapus kategori mentoring/speaking sampai ada kegiatan nyata |

Setiap aktivitas cukup mempunyai foto, tahun/periode, peran, tanggung jawab, hasil yang dapat dijelaskan, dan satu pembelajaran. Hubungkan organisasi ke kerja: koordinasi tim, komunikasi, prioritas, dan pengambilan keputusan. Hindari galeri foto tanpa keterangan.

## 10. Arah visual

Pertahankan identitas putih-biru agar terasa sebagai pengembangan website yang sama. Perubahan utama terletak pada komposisi dan bukti visual.

| Elemen | Arah |
|---|---|
| Warna | Biru sebagai aksen utama, teks gelap, latar terang. Warna status digunakan khusus untuk data/status |
| Hero | Foto yang proporsional, pengantar konkret, dan dua CTA yang jelas |
| Card proyek | Thumbnail rasio konsisten, judul singkat, manfaat, hasil/cakupan, tech tags secukupnya |
| Layout Portfolio | Grid dua kolom desktop dan satu kolom mobile sebagai rancangan awal; satu studi kasus unggulan dapat lebih besar |
| Detail proyek | Gambar hasil tampil di awal; teks dibuat singkat per bagian dan mudah dipindai |
| Typography | Teks utama minimal sekitar 16px, label terbaca, judul tidak memenuhi terlalu banyak baris |
| Surface | Kurangi kartu di dalam kartu, pill yang berlebihan, dan efek bayangan yang sama pada semua bagian |
| Gambar | Gunakan karya asli: screenshot, diagram, grafik, infografik, sertifikat, dan foto aktivitas |
| Caption | Setiap gambar menjelaskan apa yang dilihat dan apa yang penting |
| Motion | Gunakan perpindahan ringan dan hover yang membantu navigasi. Konten penting harus tetap terlihat jika animasi gagal |
| Konsistensi | Ukuran tombol, spacing, radius, kategori, dan label tautan sama antarhalaman |

Foto stok dekoratif tidak membantu menunjukkan kompetensi data. Untuk proyek institusi, gunakan materi yang memang boleh dipublikasikan; demo dengan data publik/sintetis diberi label jelas agar tidak disalahpahami sebagai screenshot produksi.

## 11. Bahasa, navigasi, dan metadata

| Elemen | Temuan/aksi |
|---|---|
| ID/EN | Pilihan bahasa berfungsi, tetapi judul, isi kartu, CTA, dan paragraf masih bercampur. Terjemahkan seluruh copy per mode |
| Penanda bahasa | Pada pemeriksaan mode ID, atribut bahasa dokumen masih en. Sesuaikan dengan bahasa halaman |
| Pilihan bahasa antarhalaman | Mode ID terlihat bertahan saat pindah kembali ke Home, meskipun parameter URL tidak selalu ada. Uji ulang setelah implementasi agar perilaku konsisten |
| Nama menu | Achievement/Achievements berubah menurut mode. Gunakan label yang konsisten dan terjemahan yang tepat |
| Contact | Saat ini membuka email. Nama Email me dapat lebih spesifik, atau pertahankan Contact dengan tujuan yang jelas |
| Tombol proyek | Baca studi kasus untuk halaman internal; Lihat kode dan Buka demo untuk tujuan eksternal |
| Metadata | Judul halaman berbeda sudah ada. Deskripsi Home masih menjelaskan desain bilingual white-blue; ubah menjadi ringkasan profil profesional |
| Semantik heading | Pada Resume, About memakai H3 sebelum bagian H2. Rapikan hierarki heading sesuai struktur konten |
| Mobile | Belum diuji. Periksa navbar lima menu, pilihan bahasa, tombol kontak, kartu proyek, tabel, dan diagram pada layar kecil |
| Accessibility | Periksa kontras aktual, navigasi keyboard, focus state, alt text, reduced motion, dan zoom setelah revisi |
| Performa | Ukur setelah implementasi, terutama saat menambah screenshot. Optimalkan ukuran gambar dan lazy loading bagian bawah |

Tidak perlu menambah halaman kontak tersendiri hanya untuk alamat email. Lima halaman utama dapat dipertahankan, dengan tambahan detail studi kasus sebagai kebutuhan utama.

## 12. Urutan pengerjaan

| Tahap | Pekerjaan | Hasil yang bisa diperiksa |
|---|---|---|
| 1 | Rekonsiliasi profil dan CV, tambahkan BI, perbaiki periode, hapus placeholder | Profil dan CV publik konsisten serta tidak ada catatan pengerjaan |
| 2 | Pilih enam proyek dan kumpulkan bahan | Daftar proyek, kontribusi, hasil, screenshot, data/metrik, serta link bukti |
| 3 | Buat satu template detail dan selesaikan EWS, CDC, RAG | Tiga studi kasus yang mudah dipahami dan dapat dipakai berulang |
| 4 | Perbarui Portfolio dan Home menggunakan studi kasus yang selesai | Karya utama terlihat dan pengunjung tetap berada di website saat memahami proyek |
| 5 | Rapikan Resume, Achievements, dan Activities | Timeline, bukti prestasi, dan cerita kepemimpinan lengkap |
| 6 | Lengkapi bahasa dan verifikasi tampilan/tautan | ID/EN konsisten, CV terbaru terbuka, semua gambar dan tautan berfungsi |

### Kriteria selesai

1. Pengunjung dapat menjelaskan siapa Farrel dan bidang kontribusinya dari layar awal.
2. Setiap proyek unggulan menunjukkan hasil visual, masalah, kontribusi, alur, stack dengan fungsi, dan evaluasi.
3. Repository menjadi bukti lanjutan; penjelasan utama tetap tersedia di website.
4. Tidak ada teks rencana pengembangan, instruksi penulisan, atau klaim hasil yang belum memiliki dasar.
5. CV publik, Resume, dan kartu profil tidak saling bertentangan.
6. Bahasa, tampilan mobile, navigasi, dan media diperiksa setelah implementasi.

## 13. Bahan yang perlu disiapkan untuk implementasi

Bahan terpenting adalah screenshot hasil EWS, hasil benchmark CDC lengkap, contoh/demo RAG yang bisa dipublikasikan, dashboard serta laporan Olist, repository final model ML, dan foto/bukti aktivitas. Untuk tiap proyek, catat bagian yang dikerjakan Farrel dan bagian yang dikerjakan tim/mentor/vendor. Untuk EWS, pisahkan pengembangan prototype analitik Farrel dari implementasi website oleh vendor agar kontribusi dijelaskan akurat.

Kode sumber website dan akses hosting diperlukan saat benar-benar mengedit situs. Audit ini sudah dapat dipakai untuk merancang isi tanpa akses tersebut. Data yang belum pasti ditandai untuk dikonfirmasi saat relevan, sehingga proses tidak perlu dimulai dengan meminta ulang seluruh riwayat karier.

## 14. Sumber acuan

- Observasi browser langsung pada https://farreljulio.xyz/ beserta /resume, /portfolio, /achievements, /other-activity dan PDF /farrel-julio-cv.pdf pada 2 Oktober 2026.
- Farrel Julio Akbar-resume-01-07-2026- general.pdf, lampiran pengguna.
- Bank_Data_Karier_Farrel_Julio_Akbar.md, pembaruan 20 Agustus 2026.
- Bank_Data_Karier_Farrel_Julio_Akbar(1).md dan Bank_Data_Karier_Farrel_Julio_Akbar(2).md, keduanya identik dan berisi pembaruan 13 Agustus 2026.
- Konteks percakapan pengguna untuk Olist DWH/Power BI dan perkembangan riset ekonomi terbaru; bahan proyek belum ditarik atau diverifikasi dalam audit ini.
