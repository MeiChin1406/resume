# 🌟 TIỆN ÍCH CHATBOT AI NÓI HÌNH ĐẠI DIỆN KỸ THUẬT SỐ CÁ NHÂN (AI TALKING AVATAR RESUME CHATBOT)
Dành cho trang web Sơ Yếu Lý Lịch Cá Nhân của **Lâm Mỹ Kim (林美金 / Mei Chin)**:
👉 GitHub Repo: [https://github.com/MeiChin1406/resume](https://github.com/MeiChin1406/resume)

---

## 🚀 1. Tổng Quan Tính Năng Tiện Ích

Tiện ích **AI Talking Avatar Chatbot** được thiết kế hiện đại, tinh tế theo phong cách **Glassmorphism Purple Violet** đồng bộ hoàn toàn với giao diện hồ sơ của Lâm Mỹ Kim:

1. **Hình Đại Diện AI 2.5D Chuyển Động & Nói Trực Quan (Interactive Talking Avatar):**
   - Khuôn mặt đại diện đồ họa 2.5D SVG sắc nét với biểu cảm tự nhiên, chớp mắt ngẫu nhiên theo nhịp sinh học.
   - **Đồng bộ khẩu hình môi khi nói (Lip-sync Animation):** Khẩu hình miệng co giãn, chuyển động mượt mà theo từng âm tiết khi phát giọng nói.
   - Hiệu ứng hào quang phát sáng (Halo Glow) và thanh hiển thị sóng âm thanh 7 dải (Audio Waveform Visualizer) khi đang phát âm.
   - Khung phụ đề thời gian thực (Live Subtitle) hiển thị văn bản đang được trợ lý AI đọc.

2. **Công Nghệ Giọng Nói Đa Ngôn Ngữ (Bilingual Web Speech AI Engine):**
   - **Text-to-Speech (TTS):** Tự động nhận diện và phát âm giọng nói tự nhiên:
     - 🇻🇳 **Tiếng Việt:** Giọng đọc truyền cảm, rõ ràng, chuẩn tiếng Việt.
     - 🇹🇼 **Tiếng Trung (Phồn thể / 國語):** Giọng đọc bản địa chuẩn Đài Loan, trôi chảy.
   - **Speech-to-Text (Voice Microphone STT):** Nhà tuyển dụng có thể nhấn nút Micro và nói câu hỏi trực tiếp bằng giọng nói, hệ thống sẽ tự động chuyển hóa thành văn bản và trả lời bằng giọng nói!
   - Nút bật/tắt âm thanh (Mute/Unmute) và nút "Nghe lại" (Replay Audio) tiện lợi trên từng tin nhắn.

3. **Bộ Tri Thức CV Chuyên Sâu Tích Hợp (Domain Knowledge Base):**
   - Tích hợp 100% dữ liệu hồ sơ cá nhân của Lâm Mỹ Kim:
     - ✅ **Kinh nghiệm phòng sạch & Thao tác máy bán dẫn:** Cleanroom Class 1000/10000, đồ bảo hộ ESD, máy sản xuất, soi kính hiển vi QC loại bỏ 100% lỗi, đóng gói quét barcode, tiêu chuẩn 5S & SOP.
     - ✅ **Kinh nghiệm cửa hàng tiện lợi Hi-Life:** Thu ngân máy POS (tiền mặt, thẻ EasyCard 悠遊卡, Line Pay, thu hộ phí sinh hoạt), quản lý kho hàng hóa FIFO (nhập trước xuất trước), pha chế Hi Café, kiểm đếm phân loại bưu kiện EC (Shopee, Momo).
     - ✅ **Khả năng ngôn ngữ:** Tiếng Việt bản ngữ + Tiếng Trung lưu loát (hơn 5 năm sống và làm việc thực tế tại Đài Loan, giao tiếp tốt với cấp trên và tổ trưởng người Đài).
     - ✅ **Điều kiện & Nguyện vọng làm việc:** Có bằng lái xe máy tại Đài Loan, phương tiện tự túc, đi làm đúng giờ, sẵn sàng làm ca ngày/đêm và tăng ca (OT).
     - ✅ **Liên kết trực tiếp:** Nút liên kết chuyển hướng tức thì đến hồ sơ ứng tuyển chính thức trên **104 人力銀行** (`https://pda.104.com.tw/profile/share/gy5rruUGl8pMuGpytkreUsxHZbQNLokr`) và nút xuất file in PDF.

4. **Tương Tác Cuộn Trang Thông Minh (Smart Page Scrolling Navigation):**
   - Mỗi câu trả lời của Chatbot đều có kèm các nút hành động (Action Buttons). Khi người dùng nhấp vào, trang web sẽ tự động cuộn mượt mà đến đúng vị trí đề mục tương ứng (`#experience`, `#skills`, `#about`, `#job-preference`...) và làm nổi bật phần đó.

5. **Hoạt Động Hoàn Hảo Trên GitHub Pages (Client-side 100% Zero-cost):**
   - Không cần thuê máy chủ backend, không sợ lộ API key bí mật, tải nhanh tức thì, tương thích tuyệt đối cả trên máy tính (Desktop) và điện thoại di động (Mobile).

---

## 📁 2. Cấu Trúc Các Tệp Tin Trong Dự Án

```
├── index.html            # Trang sơ yếu lý lịch chính đã tích hợp tiện ích Chatbot & nút bấm Hero
├── avatar-widget.css     # Toàn bộ CSS phong cách Glassmorphism, Animation, Avatar & Chat Modal
├── avatar-widget.js      # Bộ máy AI tri thức CV, TTS phát giọng nói, STT nhận diện micro, Lip-sync
├── serve.ps1             # Script xem trước cục bộ (Local preview server)
└── README.md             # Tài liệu hướng dẫn sử dụng và cập nhật
```

---

## 🛠️ 3. Cách Đưa Tiện Ích Lên GitHub Pages (3 Bước Đơn Giản)

Để trang web của bạn tại `https://meichin1406.github.io/resume/` hiển thị tính năng mới, bạn chỉ cần tải 3 file sau lên kho lưu trữ GitHub `MeiChin1406/resume`:

### Cách 1: Tải lên trực tiếp trên giao diện trình duyệt GitHub:
1. Mở kho lưu trữ của bạn: [https://github.com/MeiChin1406/resume](https://github.com/MeiChin1406/resume)
2. Nhấn vào nút **Add file** -> chọn **Upload files**.
3. Kéo thả 3 file:
   - `avatar-widget.css`
   - `avatar-widget.js`
   - `index.html`
4. Nhập tiêu đề commit (ví dụ: `Add AI Talking Avatar Chatbot Widget`) rồi bấm **Commit changes**.
5. Đợi khoảng 1-2 phút, GitHub Pages sẽ tự động cập nhật phiên bản mới tại `https://meichin1406.github.io/resume/`.

### Cách 2: Sử dụng Git CLI (nếu có cài Git):
```bash
git add index.html avatar-widget.css avatar-widget.js
git commit -m "Feat: Integrate AI Digital Resume Talking Avatar Chatbot"
git push origin main
```

---

## ⚙️ 4. Tùy Chỉnh Nâng Cao (Customization)

### Thay đổi câu hỏi hoặc bổ sung tri thức:
Mở file `avatar-widget.js`, tìm đến mảng `RESUME_KNOWLEDGE`:
- Bạn có thể thêm câu hỏi mới vào mục `qa` cho cả 2 ngôn ngữ `vi` (Tiếng Việt) và `zh` (Tiếng Trung).
- Mỗi mục gồm:
  - `triggers`: Các từ khóa người dùng có thể gõ hoặc nói.
  - `response`: Câu trả lời của AI Mei Chin (hỗ trợ in đậm `**`).
  - `actions`: Các nút bấm điều hướng người xem đến các phần tương ứng trên CV.

### Bật/Tắt chế độ toàn màn hình sân khấu (Stage Mode):
- Người dùng có thể nhấn vào nút biểu tượng phóng to ở góc trên thanh tiêu đề của Chatbot để chuyển đổi giữa chế độ hội thoại nhỏ gọn và chế độ sân khấu mở rộng (Stage Expanded).
