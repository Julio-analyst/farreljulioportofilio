import fitz  # PyMuPDF
import os

doc = fitz.open("Portofolio.pdf")
os.makedirs("extracted_assets", exist_ok=True)

print(f"Total pages: {len(doc)}")
for i, page in enumerate(doc):
    image_list = page.get_images(full=True)
    print(f"Page {i+1} has {len(image_list)} images")
    
    # Also render page preview as high-res png to see what each slide looks like
    pix = page.get_pixmap(dpi=150)
    pix.save(f"extracted_assets/page_{i+1}.png")
    
    for img_index, img in enumerate(image_list):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        img_filename = f"extracted_assets/page_{i+1}_img_{img_index+1}.{image_ext}"
        with open(img_filename, "wb") as f:
            f.write(image_bytes)

print("Extraction complete!")
