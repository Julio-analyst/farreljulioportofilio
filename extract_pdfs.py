import pypdf

def dump_pdf(filename, outname):
    print(f"Reading {filename}...")
    reader = pypdf.PdfReader(filename)
    print(f"Total pages: {len(reader.pages)}")
    with open(outname, "w", encoding="utf-8") as f:
        for i, page in enumerate(reader.pages):
            f.write(f"\n--- PAGE {i+1} ---\n")
            text = page.extract_text()
            f.write(text or "[No text found on page]")
    print(f"Wrote to {outname}")

dump_pdf("Farrel_Julio_Akbar_CV_R.pdf", "scratch_cv_text.txt")
dump_pdf("Portofolio.pdf", "scratch_portfolio_text.txt")
