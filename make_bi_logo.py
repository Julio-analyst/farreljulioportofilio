from PIL import Image, ImageDraw, ImageFont
import os

size = 200
img = Image.new('RGB', (size, size), 'white')
draw = ImageDraw.Draw(img)

draw.ellipse([10, 10, 190, 190], fill='#003D7C')

try:
    font = ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf', 72)
    font_small = ImageFont.truetype('C:/Windows/Fonts/arial.ttf', 18)
except Exception:
    font = ImageFont.load_default()
    font_small = font

bbox = draw.textbbox((0, 0), 'BI', font=font)
w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
draw.text(((size - w) // 2 - 2, (size - h) // 2 - 18), 'BI', fill='white', font=font)

bbox2 = draw.textbbox((0, 0), 'BANK', font=font_small)
w2 = bbox2[2] - bbox2[0]
draw.text(((size - w2) // 2, 138), 'BANK', fill='#A8C5E8', font=font_small)

bbox3 = draw.textbbox((0, 0), 'INDONESIA', font=font_small)
w3 = bbox3[2] - bbox3[0]
draw.text(((size - w3) // 2, 158), 'INDONESIA', fill='#A8C5E8', font=font_small)

out = 'public/logo-bank-indonesia.png'
img.save(out, 'PNG')
print('OK:', os.path.getsize(out), 'bytes ->', out)
