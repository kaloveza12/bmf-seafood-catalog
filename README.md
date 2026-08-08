# BMF Seafood Price Catalog

เว็บไซต์รายการราคาของ BMF Seafood: https://price.bmf-seafood.com

## จุดที่ใช้แก้ไขเว็บไซต์

เว็บไซต์นี้ยังไม่มีหน้าหลังบ้านแบบฟอร์มสำเร็จรูป เนื้อหาเว็บไซต์อยู่ใน GitHub repository:

https://github.com/kaloveza12/bmf-seafood-catalog

- `index.html` — หน้าเว็บ รูปแบบการแสดงผล และรายการสำรองกรณีโหลดข้อมูลไม่สำเร็จ
- `catalog.json` — รายการสินค้าหลักที่หลังบ้านใช้แก้ไข
- `.pages.yml` — การตั้งค่าหน้าหลังบ้าน Pages CMS
- `admin.html` — หน้าทางเข้าสู่ระบบหลังบ้าน
- `assets/` — รูปภาพที่ฝากไว้กับเว็บไซต์โดยตรง
- `CNAME` — โดเมน `price.bmf-seafood.com` ห้ามลบ

## วิธีบอก Codex หรือแชทใหม่ให้แก้เว็บ

คัดลอกข้อความนี้ไปใช้ได้เลย:

> ช่วยแก้เว็บไซต์ https://price.bmf-seafood.com จาก GitHub repository https://github.com/kaloveza12/bmf-seafood-catalog โดยดึง branch main ล่าสุดก่อนแก้ สินค้าหลักอยู่ใน `catalog.json` รูปอยู่ใน `assets` และ `index.html` มีข้อมูลสำรอง กรุณารักษาไฟล์ `CNAME` และตรวจเว็บจริงหลังเผยแพร่

## การเพิ่มรูปสินค้า

1. แปลงรูปเป็น WebP และตั้งชื่อไฟล์ภาษาอังกฤษที่อ่านเข้าใจง่าย
2. ใส่รูปใน `assets/`
3. เพิ่มหรือแก้รายการใน `catalog.json` ผ่าน Pages CMS
4. กำหนดหมวดด้วย `categories` เช่น `pork`, `beef`, `frozen`, `seafood`, `meatballs`, `fried` หรือ `sauce`
5. ใช้ `fit:'contain'` สำหรับภาพใบราคา เพื่อไม่ให้ข้อความหรือราคาถูกตัด
6. ตรวจสอบหน้าเว็บและไฟล์รูป ก่อนส่งขึ้น branch `main`

## หน้าหลังบ้าน

- ทางเข้า: https://price.bmf-seafood.com/admin.html
- ระบบจัดการ: https://app.pagescms.org/
- เข้าสู่ระบบด้วยบัญชี GitHub ที่มีสิทธิ์แก้ repository นี้
- การบันทึกแต่ละครั้งจะสร้าง commit ใน branch `main` และ GitHub Pages จะเผยแพร่เว็บใหม่อัตโนมัติ
