import os
import shutil
from PIL import Image

# Create directories
os.makedirs("public/projects/ews", exist_ok=True)
os.makedirs("public/projects/cdc", exist_ok=True)
os.makedirs("public/projects/rag", exist_ok=True)
os.makedirs("public/projects/voice", exist_ok=True)
os.makedirs("public/activities", exist_ok=True)

# 1. Update CV file
print("Copying CV...")
shutil.copy2("Farrel_Julio_Akbar_CV_R.pdf", "public/farrel-julio-cv.pdf")

# 2. Update Profile image
print("Processing profile image...")
# Save transparent version
shutil.copy2("extracted_assets/profile_transparent.png", "public/profile-transparent.png")

# Also create a square avatar with a soft gradient background for places that need square profile.jpg
im = Image.open("extracted_assets/profile_transparent.png")
# Crop to upper torso and head (face centered)
# Image size is (1291, 1936)
# Head is around x: 250 to 950, y: 50 to 1100
crop_box = (150, 40, 1150, 1040)
avatar_crop = im.crop(crop_box)
avatar_crop.thumbnail((800, 800), Image.Resampling.LANCZOS)

# Create soft blue gradient background
bg = Image.new("RGBA", avatar_crop.size, (240, 246, 255, 255))
avatar_comp = Image.alpha_composite(bg, avatar_crop)
avatar_comp.convert("RGB").save("public/profile.jpg", "JPEG", quality=95)
avatar_crop.save("public/profile-crop.png", "PNG")

# 3. Project Images
# EWS
print("Copying EWS images...")
shutil.copy2("extracted_assets/page_9_img_1.png", "public/projects/ews/dashboard-monitoring.png")
shutil.copy2("extracted_assets/page_4_img_1.png", "public/projects/ews/risk-heatmap.png")
shutil.copy2("extracted_assets/page_9_img_2.png", "public/projects/ews/pipeline-architecture.png")

# CDC
print("Copying CDC images...")
shutil.copy2("extracted_assets/page_7_img_4.png", "public/projects/cdc/grafana-dashboard.png")
shutil.copy2("extracted_assets/page_7_img_3.png", "public/projects/cdc/cdc-architecture.png")
shutil.copy2("extracted_assets/page_7_img_1.png", "public/projects/cdc/debezium-concept.png")

# RAG
print("Copying RAG images...")
shutil.copy2("extracted_assets/page_8_img_1.png", "public/projects/rag/n8n-agent-workflow.png")
shutil.copy2("extracted_assets/page_8_img_2.png", "public/projects/rag/n8n-ingestion-workflow.png")
shutil.copy2("extracted_assets/page_8_img_3.png", "public/projects/rag/telegram-chat.png")

# Voice MLOps
print("Copying Voice MLOps images...")
shutil.copy2("extracted_assets/page_6_img_1.png", "public/projects/voice/huggingface-ui.png")

# 4. Activities & Leadership Images
print("Copying Activity images...")
shutil.copy2("extracted_assets/page_5_img_2.jpeg", "public/activities/bi-capacity-building.jpg")
shutil.copy2("extracted_assets/page_5_img_1.jpeg", "public/activities/bi-evaluation-meeting.jpg")
shutil.copy2("extracted_assets/page_5_img_3.jpeg", "public/activities/rajawali-team.jpg")
shutil.copy2("extracted_assets/page_3_img_1.jpeg", "public/activities/itera-defense.jpg")
shutil.copy2("extracted_assets/page_3_img_2.png", "public/activities/itera-graduation.png")

print("All assets organized successfully!")
