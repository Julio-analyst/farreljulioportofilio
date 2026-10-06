"""
Script untuk memindahkan semua asset dari extracted_assets ke public/
dengan struktur folder yang rapi dan nama file yang bersih.
"""
import shutil
import os

SRC = "extracted_assets"
DST = "public"

moves = [
    # --- ACTIVITIES ---
    # MagangBI
    (f"{SRC}/MagangBI/foto leif.JPG",                              f"{DST}/activities/bi/bi-field-visit.jpg"),
    (f"{SRC}/MagangBI/magang bi 2.jpeg",                           f"{DST}/activities/bi/bi-team.jpg"),
    (f"{SRC}/MagangBI/WhatsApp Image 2026-10-05 at 13.44.23.jpeg", f"{DST}/activities/bi/bi-office.jpg"),

    # Damaskus
    (f"{SRC}/damaskus/damaskus 1.jpeg",                                     f"{DST}/activities/damaskus/damaskus-1.jpg"),
    (f"{SRC}/damaskus/WhatsApp Image 2026-10-05 at 14.11.06.jpeg",          f"{DST}/activities/damaskus/damaskus-2.jpg"),

    # First Gathering D'23
    (f"{SRC}/firstgathering23/WhatsApp Image 2026-10-05 at 14.09.26.jpeg",  f"{DST}/activities/first-gathering/first-gathering-1.jpg"),

    # HMSD (Himpunan Mahasiswa Sains Data)
    (f"{SRC}/HMSD/hmsd 1.jpeg",  f"{DST}/activities/hmsd/hmsd-1.jpg"),
    (f"{SRC}/HMSD/hmsd 2.jpeg",  f"{DST}/activities/hmsd/hmsd-2.jpg"),

    # Bakmi Rempah
    (f"{SRC}/bakmi rempah/Screenshot 2026-10-05 135943.png",  f"{DST}/activities/bakmi-rempah/bakmi-1.jpg"),
    (f"{SRC}/bakmi rempah/Screenshot 2026-10-05 140049.png",  f"{DST}/activities/bakmi-rempah/bakmi-2.jpg"),
    (f"{SRC}/bakmi rempah/Screenshot 2026-10-05 140127.png",  f"{DST}/activities/bakmi-rempah/bakmi-3.jpg"),

    # --- CERTIFICATES ---
    # Sertifikat Lomba
    (f"{SRC}/sertifikat lomba/035INFU24_Farrel Julio Akbar_Finalist.pdf",   f"{DST}/certificates/lomba/infu24-finalist.pdf"),
    (f"{SRC}/sertifikat lomba/CERTIF BCC.pdf",                              f"{DST}/certificates/lomba/bcc-certificate.pdf"),
    (f"{SRC}/sertifikat lomba/Sertifikat_lomba_compressed.pdf",             f"{DST}/certificates/lomba/lomba-combined.pdf"),

    # Sertifikat Course (DQLab & PCPM)
    (f"{SRC}/sertifikat course/Data Preparation in Data Science using R certificate-DQLABDTWR1KNNFHT.pdf",  f"{DST}/certificates/course/dqlab-data-prep-r.pdf"),
    (f"{SRC}/sertifikat course/Data Visualization in Data Science using R certificate-DQLABDTVISEMSTOB.pdf", f"{DST}/certificates/course/dqlab-data-viz-r.pdf"),
    (f"{SRC}/sertifikat course/Data Wrangling Python certificate-DQLABDTWP1KOVTRC.pdf",                     f"{DST}/certificates/course/dqlab-data-wrangling-python.pdf"),
    (f"{SRC}/sertifikat course/R for Data Professional - Part 3 certificate-DQLABRFDPGLOHWB.pdf",           f"{DST}/certificates/course/dqlab-r-professional-3.pdf"),
    (f"{SRC}/sertifikat course/Statistics using R for Data Science.pdf",                                     f"{DST}/certificates/course/dqlab-statistics-r.pdf"),
    (f"{SRC}/sertifikat course/merge_pcpm.pdf",                                                              f"{DST}/certificates/course/pcpm-certificate.pdf"),

    # TOEFL
    (f"{SRC}/toefl/Toefl.pdf",  f"{DST}/certificates/toefl/toefl-certificate.pdf"),
]

copied = 0
skipped = 0
errors = 0

for src_path, dst_path in moves:
    if not os.path.exists(src_path):
        print(f"  [SKIP-NOSRC] {src_path}")
        skipped += 1
        continue

    os.makedirs(os.path.dirname(dst_path), exist_ok=True)

    if os.path.exists(dst_path):
        print(f"  [EXISTS]     {dst_path}")
        skipped += 1
        continue

    try:
        shutil.copy2(src_path, dst_path)
        size_kb = os.path.getsize(dst_path) // 1024
        print(f"  [OK] {src_path}  -->  {dst_path}  ({size_kb} KB)")
        copied += 1
    except Exception as e:
        print(f"  [ERROR] {src_path}: {e}")
        errors += 1

print(f"\n✅ Done: {copied} copied, {skipped} skipped, {errors} errors")

# ---- Cek duplikat: file di extracted_assets root yang sudah ada di public ----
print("\n--- Cek file di root extracted_assets yang sudah ada di public ---")
root_files = [f for f in os.listdir(SRC) if os.path.isfile(os.path.join(SRC, f))]
for f in sorted(root_files):
    size = os.path.getsize(os.path.join(SRC, f)) // 1024
    print(f"  [ROOT] {f}  ({size} KB)")
print(f"\nTotal file di root extracted_assets: {len(root_files)}")
print("File-file page_*.png & page_*_img_*.* ini adalah hasil extract PDF portofolio")
print("dan bisa dihapus jika sudah tidak dibutuhkan.")
