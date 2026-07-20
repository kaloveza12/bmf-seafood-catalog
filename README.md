# BMF Seafood Price Catalog

เว็บไซต์รายการราคาของ BMF Seafood: https://price.bmf-seafood.com

## จุดที่ใช้แก้ไขเว็บไซต์

เว็บไซต์นี้ยังไม่มีหน้าหลังบ้านแบบฟอร์มสำเร็จรูป เนื้อหาเว็บไซต์อยู่ใน GitHub repository:

https://github.com/kaloveza12/bmf-seafood-catalog

- `index.html` — หน้าเว็บ รายการสินค้า หมวดหมู่ ข้อความ ปุ่ม และรูปแบบการแสดงผล
- `assets/` — รูปภาพที่ฝากไว้กับเว็บไซต์โดยตรง
- `CNAME` — โดเมน `price.bmf-seafood.com` ห้ามลบ

## วิธีบอก Codex หรือแชทใหม่ให้แก้เว็บ

คัดลอกข้อความนี้ไปใช้ได้เลย:

> ช่วยแก้เว็บไซต์ https://price.bmf-seafood.com จาก GitHub repository https://github.com/kaloveza12/bmf-seafood-catalog โดยดึง branch main ล่าสุดก่อนแก้ สินค้าอยู่ในตัวแปร `products` ภายใน `index.html` และรูปที่ฝากกับเว็บอยู่ในโฟลเดอร์ `assets` กรุณารักษาไฟล์ `CNAME` และตรวจเว็บจริงหลังเผยแพร่

## การเพิ่มรูปสินค้า

1. แปลงรูปเป็น WebP และตั้งชื่อไฟล์ภาษาอังกฤษที่อ่านเข้าใจง่าย
2. ใส่รูปใน `assets/`
3. เพิ่มรายการใหม่ในตัวแปร `products` ภายใน `index.html`
4. กำหนดหมวดด้วย `categories` เช่น `pork`, `beef`, `frozen`, `seafood`, `meatballs`, `fried` หรือ `sauce`
5. ใช้ `fit:'contain'` สำหรับภาพใบราคา เพื่อไม่ให้ข้อความหรือราคาถูกตัด
6. ตรวจสอบหน้าเว็บและไฟล์รูป ก่อนส่งขึ้น branch `main`

