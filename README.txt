==========================================================
  MY-PORTFOLIO - Website Portfolio Cá Nhân
  Deploy trên GitHub Pages
==========================================================

CẤU TRÚC THƯ MỤC:
  my-portfolio/
  ├── index.html       (Trang chủ)
  ├── about.html       (Giới thiệu)
  ├── contact.html     (Liên hệ)
  ├── css/style.css    (Định dạng giao diện)
  ├── js/script.js     (JavaScript)
  └── images/avatar.jpg (Ảnh chân dung)

CÁCH CHẠY LOCAL:
  Mở trực tiếp file index.html bằng trình duyệt.

CÁCH DEPLOY LÊN GITHUB PAGES:
  1. Tạo repo trên GitHub tên: my-portfolio
  2. Chạy các lệnh:
       git init
       git add .
       git commit -m "Deploy portfolio"
       git branch -M main
       git remote add origin https://github.com/<username>/my-portfolio.git
       git push -u origin main
  3. Vào Settings → Pages → Branch: main / (root) → Save
  4. Truy cập: https://<username>.github.io/my-portfolio/

LƯU Ý:
  - Thay "Nguyễn Văn A" bằng tên thật của bạn trong các file .html
  - Thay ảnh avatar.jpg bằng ảnh chân dung thật của bạn
  - Thay <username> bằng tên tài khoản GitHub của bạn
==========================================================
