# BMF SEO, Search Console และ GA4

## GA4

1. เจ้าของเว็บสร้างหรือเลือก GA4 property ที่ต้องการใช้กับ `price.bmf-seafood.com`
2. คัดลอก Web stream Measurement ID รูปแบบ `G-XXXXXXXXXX`
3. ใส่ค่าในตัวแปร `configuredId` ที่ไฟล์ `analytics.js` เพียงจุดเดียว
4. เปิด GA4 DebugView หรือ Realtime แล้วทดสอบ event `line_click` และ `order_click`

สคริปต์จะไม่โหลด Google Analytics จนกว่าจะมี Measurement ID ที่ถูกต้อง จึงไม่มี placeholder ID หรือการส่งข้อมูลไปผิด property

ใน GA4 ให้ตรวจ AI referral ที่ Reports > Acquisition โดยกรอง source เช่น `chatgpt.com`, `perplexity.ai` และ `gemini.google.com` เท่าที่แหล่งที่มาส่ง referrer มาให้ เบราว์เซอร์หรือแอปบางชนิดอาจไม่ส่ง referrer จึงไม่สามารถวัด AI referral ได้ครบทั้งหมด

## Google Search Console

1. เพิ่ม Domain property สำหรับ `bmf-seafood.com` (แนะนำ) หรือ URL-prefix property `https://price.bmf-seafood.com/`
2. ยืนยัน ownership ด้วย DNS record ตามค่าที่ Google ให้ เจ้าของโดเมนต้องทำขั้นตอนนี้เอง
3. ส่ง sitemap: `https://price.bmf-seafood.com/sitemap.xml`
4. ใช้ URL Inspection กับหน้าแรกและหน้าบริการใหม่ทั้ง 6 หน้า แล้วขอจัดทำดัชนี
5. ตรวจ Page indexing, Crawl stats และ Enhancements หลังเผยแพร่ 7–14 วัน

## ข้อมูลที่รอเจ้าของยืนยัน

- ที่อยู่เต็มและพิกัด Google Maps
- เวลาทำการ
- หลักฐานพื้นที่/เงื่อนไขจัดส่งที่เปลี่ยนจากข้อมูลปัจจุบัน
- รีวิว ผลงานลูกค้า และกรณีศึกษาที่ได้รับอนุญาตให้นำมาเผยแพร่
- GA4 Measurement ID และสิทธิ์ Search Console

จนกว่าจะยืนยัน ข้อมูลเหล่านี้จะไม่ถูกสร้างขึ้นเองและจะไม่ถูกใส่ใน structured data
