/**
 * ============================================================================
 * AI DIGITAL RESUME TALKING AVATAR CHATBOT WIDGET
 * For: Lâm Mỹ Kim (林美金 / Mei Chin) - Digital Resume
 * GitHub: https://github.com/MeiChin1406/resume
 * ============================================================================
 */

(function () {
  'use strict';

  // --- KNOWLEDGE BASE (Bilingual Vietnamese & Traditional Chinese) ---
  const RESUME_KNOWLEDGE = {
    vi: {
      profile: {
        name: "Lâm Mỹ Kim (林美金 / Mei Chin)",
        title: "Kỹ thuật viên Thao tác máy & Kiểm tra chất lượng (QC) / Nhân viên Dịch vụ chuỗi cửa hàng",
        location: "TP. Đào Viên, Đài Loan (Khu vực Trung Lịch / Bình Trấn / Bát Đức)",
        experienceYears: "5+ năm sinh sống và làm việc thực tế tại Đài Loan",
        languages: "Tiếng Việt (Bản ngữ), Tiếng Trung (Lưu loát nghe nói trong giao tiếp & sản xuất)",
        driving: "Có bằng lái xe máy hạng nặng tại Đài Loan, phương tiện tự túc, đi làm đúng giờ",
        status: "Đang đi làm, sẵn sàng nhận việc ngay sau khi trúng tuyển"
      },
      greetings: [
        "Xin chào quý nhà tuyển dụng! Tôi là **AI Lâm Mỹ Kim (Mei Chin)**. Rất vui được đồng hành và giới thiệu đến quý vị về kinh nghiệm, kỹ năng làm việc và nguyện vọng nghề nghiệp của tôi. Quý vị muốn tìm hiểu về phần nào trước ạ?",
        "Chào bạn! Tôi là hình đại diện số của **Lâm Mỹ Kim (Mei Chin)**. Với hơn 5 năm kinh nghiệm làm việc tại Đài Loan trong môi trường phòng sạch công nghệ cao và chuỗi cửa hàng bán lẻ, tôi luôn sẵn sàng giải đáp mọi thắc mắc của bạn!"
      ],
      topics: [
        { id: "intro", label: "Giới thiệu bản thân", query: "Giới thiệu bản thân" },
        { id: "cleanroom", label: "Kinh nghiệm phòng sạch & QC", query: "Kinh nghiệm phòng sạch và thao tác máy" },
        { id: "retail", label: "Kinh nghiệm cửa hàng tiện lợi POS", query: "Kinh nghiệm làm việc tại cửa hàng tiện lợi" },
        { id: "skills", label: "Kỹ năng & Tác phong", query: "Các kỹ năng nổi bật và năng lực chuyên môn" },
        { id: "chinese", label: "Khả năng Tiếng Trung", query: "Trình độ tiếng Trung và giao tiếp" },
        { id: "shifts", label: "Ca làm việc & Nguyện vọng", query: "Nguyện vọng ca làm việc và tăng ca" },
        { id: "edu", label: "Học vấn & Bằng cấp", query: "Trình độ học vấn" },
        { id: "contact", label: "Liên hệ & Phỏng vấn", query: "Cách liên hệ và đặt lịch phỏng vấn" }
      ],
      qa: [
        {
          triggers: ["gioi thieu", "ban than", "la ai", "ten gi", "meichin", "my kim", "profile", "thong tin"],
          response: `Tôi là **Lâm Mỹ Kim (林美金 / Mei Chin)**, hiện đang sinh sống và làm việc tại Đào Viên, Đài Loan. 
Tôi có hơn **5 năm kinh nghiệm** làm việc thực tế tại Đài Loan:
- **3+ năm** làm việc tại nhà máy sản xuất công nghệ cao quy mô lớn (>500 người) ở Trung Lịch (thao tác máy, QC phòng sạch Class 1000/10000, đồ bảo hộ ESD, tuân thủ nghiêm ngặt 5S & SOP).
- **1 năm 8 tháng** làm nhân viên cửa hàng tiện lợi Hi-Life tại Bình Trấn (thu ngân POS, pha chế cà phê, quản lý hàng hóa FIFO, logistics EC).
Tôi tự túc phương tiện đi lại, tiếng Trung giao tiếp lưu loát và sẵn sàng đi làm ngay!`,
          actions: [
            { text: "👉 Xem phần Giới thiệu trên CV", target: "#about" },
            { text: "👉 Xem Kinh nghiệm chi tiết", target: "#experience" }
          ]
        },
        {
          triggers: ["phong sach", "cleanroom", "thao tac may", "qc", "ban dan", "dien tu", "esd", "5s", "sop", "uph", "kinh nghiem 1"],
          response: `**Kinh nghiệm sản xuất phòng sạch & Thao tác máy (2021 – Nay):**
- **Môi trường:** Phòng sạch tiêu chuẩn (Cleanroom Class 1000/10000), mặc trang phục phòng sạch chống tĩnh điện toàn thân (ESD).
- **Vận hành:** Thao tác máy sản xuất theo đúng bảng hướng dẫn công việc chuẩn (SOP), duy trì tỷ lệ đạt năng suất UPH ca cao và ổn định.
- **Kiểm soát chất lượng (QC):** Soi kính hiển vi và kiểm tra mắt thường phát hiện chính xác linh kiện nứt mẻ, sai lệch, dị vật; ngăn chặn 100% lỗi lọt sang công đoạn sau.
- **Đóng gói & Barcode:** Quét mã vạch, phân loại thành phẩm, dán tem nhãn chính xác.
- **Kỷ luật:** Nắm vững và thực hành chuẩn 5S hàng ngày, tuân thủ an toàn lao động tuyệt đối.`,
          actions: [
            { text: "👉 Cuộn đến Kinh nghiệm phòng sạch", target: "#experience" },
            { text: "👉 Xem Biểu đồ hiệu suất QC", target: "#chart-card-1" }
          ]
        },
        {
          triggers: ["cua hang", "tien loi", "hi-life", "pos", "thu ngan", "ca phe", "fifo", "ec", "shopee", "hang hoa", "kinh nghiem 2"],
          response: `**Kinh nghiệm làm việc tại Cửa hàng tiện lợi Hi-Life (2019 – 2021, 1 năm 8 tháng):**
- **Thu ngân POS:** Sử dụng thành thạo máy POS, thanh toán tiền mặt, thẻ EasyCard (悠遊卡), Line Pay, thu hộ tiền điện/nước/bảo hiểm và các dịch vụ công ích.
- **Quản lý hàng hóa FIFO:** Nhận hàng, kiểm đếm số lượng, sắp xếp lên quầy theo nguyên tắc "Nhập trước xuất trước" (FIFO), kiểm tra hạn sử dụng hàng ngày.
- **Pha chế & Đồ ăn:** Nấu và pha chế Hi Café theo định lượng, làm nóng thức ăn nhanh phục vụ khách.
- **Logistics E-Commerce:** Tiếp nhận, quét mã vạch và phân loại bưu kiện mua hàng online (Shopee, Momo...) chính xác, không nhầm lẫn.
- **Giao tiếp khách hàng:** Thái độ vui vẻ, niềm nở, xử lý khéo léo yêu cầu của khách hàng.`,
          actions: [
            { text: "👉 Xem chi tiết kinh nghiệm Hi-Life", target: "#experience" },
            { text: "👉 Xem Kỹ năng dịch vụ", target: "#skills" }
          ]
        },
        {
          triggers: ["ky nang", "the manh", "diem manh", "so truong", "tai sao chon", "competency", "strength"],
          response: `**Những ưu thế nổi bật của tôi:**
1. **Tay chân nhanh nhẹn & khéo léo:** Thao tác máy chuẩn xác, quen việc sản xuất nhanh, tiếp thu quy trình mới rất mau lẹ.
2. **Kỷ luật an toàn tuyệt đối:** Tuân thủ nghiêm ngặt quy định phòng sạch và an toàn lao động, tỷ lệ chuyên cần cao, không đi trễ về sớm.
3. **Tiếng Trung lưu loát:** Nghe nói tốt, trao đổi công việc mượt mà với cấp trên, tổ trưởng và đồng nghiệp người Đài Loan.
4. **Chủ động phương tiện:** Tự có xe máy bằng lái, độc lập đi lại, đáp ứng ca xoay và ca đêm.`,
          actions: [
            { text: "👉 Xem bảng Kỹ năng chuyên môn", target: "#skills" },
            { text: "👉 Xem Điểm mạnh cá nhân", target: "#why-choose-me" }
          ]
        },
        {
          triggers: ["tieng trung", "ngon ngu", "giao tiep", "tieng hoa", "dai loan", "tieng viet"],
          response: `**Về năng lực ngôn ngữ của tôi:**
- **Tiếng Việt:** Tiếng mẹ đẻ, thành thạo nghe - nói - đọc - viết.
- **Tiếng Trung (Hoa ngữ):** Lưu loát nghe nói. Với hơn 5 năm sống và làm việc tại Đài Loan, tôi giao tiếp hoàn toàn thuận tiện trong sinh hoạt lẫn môi trường làm việc, hiểu rõ các thuật ngữ sản xuất, máy móc, báo cáo sự cố ca làm việc và tiếp nhận chỉ thị từ cấp trên bằng tiếng Trung.`,
          actions: [
            { text: "👉 Xem phần Kỹ năng ngôn ngữ", target: "#skills" }
          ]
        },
        {
          triggers: ["ca lam", "tang ca", "ot", "nguyen vong", "luong", "dia diem", "dao vien", "trung lich", "binh tran", "ca dem", "xoay ca"],
          response: `**Nguyện vọng và điều kiện làm việc:**
- **Vị trí mong muốn:** Công nhân thao tác máy (作業員), Nhân viên kiểm tra chất lượng (品管/品檢 QC), Đóng gói (包裝員), hoặc Nhân viên chuỗi cửa hàng (門市人員).
- **Ca làm việc:** Có thể làm ca ngày hoặc ca đêm, sẵn sàng tăng ca (OT) theo sắp xếp của dây chuyền sản xuất.
- **Địa điểm:** TP. Đào Viên (khu vực Trung Lịch, Bình Trấn, Bát Đức...) hoặc lân cận có thể tự di chuyển bằng xe máy.
- **Thời gian đi làm:** Sẵn sàng nhận việc ngay sau khi trúng tuyển!`,
          actions: [
            { text: "👉 Xem bảng Nguyện vọng nghề nghiệp", target: "#job-preference" }
          ]
        },
        {
          triggers: ["hoc van", "bang cap", "truong hoc", "tu nhien", "education"],
          response: `**Trình độ học vấn:**
- **Học vấn cao nhất:** Tốt nghiệp Trung học Phổ thông (Cấp 3).
- **Ban chuyên môn:** Ban Tự nhiên (Toán, Lý, Hóa), rèn luyện nền tảng tính toán số học tỉ mỉ và tư duy logic rõ ràng.
- Rèn luyện đức tính chịu khó tìm tòi, kiên nhẫn và trách nhiệm cao trong mọi công việc được giao.`,
          actions: [
            { text: "👉 Xem mục Học vấn trên CV", target: "#education" }
          ]
        },
        {
          triggers: ["lien he", "tuyen dung", "phong van", "104", "sdt", "dien thoai", "email", "cv", "pdf"],
          response: `**Thông tin kết nối & Phỏng vấn:**
Quý nhà tuyển dụng có thể liên hệ trực tiếp với tôi qua:
- **104 人力銀行 (104 Job Bank):** Nhấp vào nút bên dưới để xem hồ sơ và gửi lời mời phỏng vấn.
- **Hồ sơ trực tuyến:** Xem trực tiếp trên trang cá nhân GitHub Pages này.
- **Xuất file CV:** Quý vị có thể tải hoặc in hồ sơ PDF trực tiếp từ nút trên trang.
Tôi rất mong có cơ hội được tham gia phỏng vấn trực tiếp tại quý công ty!`,
          actions: [
            { text: "🔗 Mở hồ sơ 104 人力銀行", href: "https://pda.104.com.tw/profile/share/gy5rruUGl8pMuGpytkreUsxHZbQNLokr", external: true },
            { text: "📄 In / Lưu CV dạng PDF", target: "print" }
          ]
        }
      ],
      fallback: "Cảm ơn quý vị đã quan tâm! Quý vị có thể hỏi tôi về: **kinh nghiệm phòng sạch & thao tác máy**, **kinh nghiệm cửa hàng tiện lợi POS**, **khả năng tiếng Trung**, **nguyện vọng ca làm việc**, hoặc **đặt lịch phỏng vấn qua 104**. Quý vị cũng có thể chọn nhanh các gợi ý bên dưới ạ!"
    },

    zh: {
      profile: {
        name: "林美金 (Lin Mei-jin / Mei Chin)",
        title: "高科技製造產線作業員 / 品檢品管員 / 門市服務人員",
        location: "台灣桃園市 (中壢區 / 平鎮區 / 八德區周邊)",
        experienceYears: "在台工作生活深耕 5 年以上",
        languages: "越文 (母語精通)、中文 (聽說流暢，無障礙溝通)",
        driving: "備有台灣普通重型機車駕照，交通完全自理，通勤守時",
        status: "目前在職中，錄取後可隨時到職上線"
      },
      greetings: [
        "您好！我是**林美金 (Mei Chin)** 的 AI 數位語音化身。非常榮幸能為您介紹我的工作經歷、專業專長與求職意向。請問您想先了解哪一部分呢？",
        "主管您好！我是林美金的 AI 個人履歷助手。我在台灣有超過 5 年的高科技無塵室產線操作、QC目檢與連鎖超商服務實務經驗，隨時為您解答疑問！"
      ],
      topics: [
        { id: "intro", label: "自我介紹", query: "自我介紹" },
        { id: "cleanroom", label: "無塵室與QC檢驗經驗", query: "無塵室與產線機台操作經驗" },
        { id: "retail", label: "門市POS與超商經驗", query: "便利商店門市工作經驗" },
        { id: "skills", label: "專長技能與特質", query: "個人核心優勢與工作技能" },
        { id: "chinese", label: "中文溝通能力", query: "中文聽說與溝通能力" },
        { id: "shifts", label: "工作條件與輪班", query: "希望工作條件與配合加班意願" },
        { id: "edu", label: "學歷背景", query: "學歷資料" },
        { id: "contact", label: "聯絡方式與面試", query: "聯絡方式與預約面試" }
      ],
      qa: [
        {
          triggers: ["自我介紹", "介紹", "是誰", "名字", "美金", "林美金", "meichin", "簡介"],
          response: `您好！我是**林美金 (Mei Chin)**，目前居住在桃園市。
我在台灣已有超過 **5年** 的穩定工作與生活經驗：
- **3年以上**：桃園中壢大型高科技製造廠（500人以上）作業員兼品檢員，長期在無塵室（Cleanroom Class 1000/10000）著靜電無塵服作業，嚴格落實 5S 與 SOP。
- **1年8個月**：萊爾富超商門市專職人員，熟練操作 POS 機收銀、Hi Café 咖啡調製、FIFO 商品效期管理與 EC 網購包裹處理。
我自備重機駕照與機車，中文溝通流利，出勤守時，錄取後能迅速到職！`,
          actions: [
            { text: "👉 前往個人簡介專區", target: "#about" },
            { text: "👉 查看詳細工作經歷", target: "#experience" }
          ]
        },
        {
          triggers: ["無塵室", "產線", "機台", "作業員", "品檢", "qc", "半導體", "電子", "esd", "5s", "sop", "uph"],
          response: `**高科技製造廠／無塵室與產線經歷 (2021 至今)：**
- **作業環境：** 嚴格遵循標準無塵室（Cleanroom）規範，穿著全套連身靜電防護無塵服（ESD）。
- **機台操作：** 熟練遵守標準作業程序書（SOP）操作設備，維持高且穩定的每小時產出目標（UPH）。
- **外觀目視檢驗 (QC)：** 使用顯微鏡與目視雙重把關，精確剔除刮傷、裂痕、雜質等不良品，確保零瑕疵流入下一站。
- **條碼包裝：** 掃描條碼防呆檢驗、產品裝箱與成品貼標，作業仔細無誤。
- **5S與工安：** 落實整理、整頓、清掃、清潔、素養，具備高度自主安全保護意識。`,
          actions: [
            { text: "👉 查看完整經歷列表", target: "#experience" },
            { text: "👉 查看 QC 檢驗成效圖表", target: "#chart-card-1" }
          ]
        },
        {
          triggers: ["超商", "門市", "便利商店", "萊爾富", "pos", "收銀", "咖啡", "fifo", "包裹", "取貨", "客訴"],
          response: `**萊爾富便利商店門市專職經驗 (2019 – 2021，共1年8個月)：**
- **POS 機收銀結帳：** 熟練操作 POS 系統處理現金、悠遊卡、行動支付（Line Pay 等），並代收水電瓦斯各項生活帳單。
- **先進先出 (FIFO)：** 點收每日配送商品，依「先進先出」原則陳列上架，每日定時檢查並下架即期鮮食。
- **現煮咖啡與熟食：** 依SOP調製 Hi Café 咖啡與茶飲，烘烤熟食熱狗、地瓜，確保食品衛生。
- **EC網購電商包裹：** 點收並精準分類蝦皮、momo 等網購包裹，條碼刷讀核對身份取件，零遺失紀錄。
- **顧客應對：** 親切熱忱服務客人，具備良好耐心與應對能力。`,
          actions: [
            { text: "👉 查看超商實務職責", target: "#experience" },
            { text: "👉 查看門市專長清單", target: "#skills" }
          ]
        },
        {
          triggers: ["專長", "技能", "優勢", "優點", "為什麼選你", "強項", "特質"],
          response: `**我的四大核心競爭優勢：**
1. **手腳俐落敏捷：** 手部動作靈巧精確，製程熟悉度高，能迅速上手新機台與作業工序。
2. **落實工安紀律：** 嚴格落實無塵室與安全規範，自我保護意識高，出勤紀錄優良無缺勤。
3. **在台中文流暢：** 聽說溝通無障礙，與台籍主管、領班及產線同仁皆能融洽合作。
4. **交通自理到職快：** 自備重機與駕照，通勤準時獨立，錄取後能隨時配合上線輪班。`,
          actions: [
            { text: "👉 瀏覽核心技能矩陣", target: "#skills" },
            { text: "👉 瀏覽個人優勢", target: "#why-choose-me" }
          ]
        },
        {
          triggers: ["中文", "語言", "溝通", "越文", "聽說", "中文好嗎"],
          response: `**語言與溝通能力：**
- **越文：** 母語，聽、說、讀、寫精通。
- **中文 (國語)：** 流暢聽說能力。在台灣生活與工作超過5年，日常對話無障礙，完全能理解產線主管與領班的工作指導、SOP解說與安全指令，並能清楚用中文回報機台與產品狀況。`,
          actions: [
            { text: "👉 查看語言專長", target: "#skills" }
          ]
        },
        {
          triggers: ["輪班", "加班", "希望條件", "待遇", "上班地點", "中壢", "平鎮", "桃園", "夜班", "日班", "到職日"],
          response: `**希望工作條件與意願：**
- **應徵職類：** 產線作業員、品管／品檢人員、包裝員、門市服務員。
- **上班班別：** 日班、夜班、輪班皆可配合，可配合產線常態加班（配合度極高）。
- **希望地點：** 桃園市（中壢區、平鎮區、八德區或周邊鄰近區域均可自騎機車通勤）。
- **到職日期：** 目前在職中，錄取後可依公司規定迅速到職！`,
          actions: [
            { text: "👉 查看求職條件細節", target: "#job-preference" }
          ]
        },
        {
          triggers: ["學歷", "學校", "畢業", "高中", "自然組", "education"],
          response: `**學歷背景資料：**
- **最高學歷：** 越南公立高中學校 普通科畢業。
- **專長修習：** 自然組（數理化科學基礎，培養扎實的數字計算與條理邏輯能力）。
- 養成踏實求知、細緻耐性與高度責任感之個人工作特質。`,
          actions: [
            { text: "👉 查看學歷資料", target: "#education" }
          ]
        },
        {
          triggers: ["聯絡", "面試", "電話", "104", "求職", "信箱", "pdf", "預約"],
          response: `**預約面試與聯繫方式：**
誠摯期盼能加入貴公司團隊穩定貢獻！您可以透過以下方式聯繫我：
- **104 人力銀行：** 請點擊下方按鈕前往 104 查看完整履歷並發送面試邀請。
- **線上履歷：** 本 GitHub Pages 網頁提供即時互動與數據圖表。
- **列印紙本：** 可直接透過頁面右上角或下方按鈕匯出 PDF 列印檔案。`,
          actions: [
            { text: "🔗 前往 104 人力銀行", href: "https://pda.104.com.tw/profile/share/gy5rruUGl8pMuGpytkreUsxHZbQNLokr", external: true },
            { text: "📄 匯出 / 列印 PDF 檔案", target: "print" }
          ]
        }
      ],
      fallback: "感謝您的提問！您可以詢問我關於：**無塵室與產線機台經驗**、**超商門市與收銀技能**、**中文溝通能力**、**希望上班條件與輪班加班意願**，或**透過104人力銀行預約面試**。您也可以直接點選下方的常用主題按鈕！"
    }
  };

  // --- STATE MANAGEMENT ---
  const state = {
    isOpen: false,
    isExpanded: false,
    isMuted: false,
    isSpeaking: false,
    isListening: false,
    currentLang: 'vi', // defaults to vi, synced with window.currentLang
    speechVoice: null,
    speechRate: 1.0,
    recognition: null,
    lipSyncInterval: null,
    blinkInterval: null
  };

  // Check language from page if exists
  if (typeof window.currentLang !== 'undefined') {
    state.currentLang = window.currentLang;
  }

  // --- DOM GENERATION ---
  function buildWidgetDOM() {
    // 1. Floating Action Button
    const fabContainer = document.createElement('div');
    fabContainer.className = 'avatar-fab-container';
    fabContainer.id = 'avatar-fab-root';

    fabContainer.innerHTML = `
      <div class="avatar-fab-callout" id="avatar-fab-callout">
        <i class="fa-solid fa-wand-magic-sparkles wave-icon"></i>
        <span id="avatar-fab-callout-text">Hỏi AI Mei Chin</span>
      </div>
      <button class="avatar-fab-btn" id="avatar-fab-btn" title="Trò chuyện với AI Avatar Mei Chin" aria-label="Open AI Avatar Chatbot">
        <div class="fab-pulse-ring"></div>
        <img class="fab-avatar-img" src="https://avatars.githubusercontent.com/u/338122076?v=4" alt="Mei Chin AI Avatar">
        <div class="fab-status-dot"></div>
      </button>
    `;

    // 2. Overlay
    const overlay = document.createElement('div');
    overlay.className = 'avatar-modal-overlay';
    overlay.id = 'avatar-modal-overlay';

    // 3. Modal Card
    const card = document.createElement('div');
    card.className = 'avatar-chat-card';
    card.id = 'avatar-chat-card';

    card.innerHTML = `
      <!-- Header -->
      <div class="avatar-chat-header">
        <div class="avatar-header-profile">
          <div class="avatar-header-thumb">
            <img src="https://avatars.githubusercontent.com/u/338122076?v=4" alt="Mei Chin">
          </div>
          <div class="avatar-header-info">
            <h4>
              <span>Lâm Mỹ Kim</span>
              <span class="avatar-badge-ai">AI Voice</span>
            </h4>
            <div class="avatar-header-status">
              <span class="status-indicator-dot"></span>
              <span id="avatar-status-text">Sẵn sàng trò chuyện</span>
            </div>
          </div>
        </div>
        <div class="avatar-header-actions">
          <button class="avatar-btn-icon" id="btn-toggle-mute" title="Bật/Tắt giọng nói" aria-label="Toggle Voice Mute">
            <i class="fa-solid fa-volume-high"></i>
          </button>
          <button class="avatar-btn-icon" id="btn-toggle-expand" title="Phóng to / Thu nhỏ" aria-label="Toggle Full Screen">
            <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
          </button>
          <button class="avatar-btn-icon" id="btn-close-chat" title="Đóng" aria-label="Close Chat">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Avatar Interactive Stage -->
      <div class="avatar-stage-container" id="avatar-stage">
        <div class="avatar-halo-glow"></div>
        
        <div class="avatar-canvas-wrapper" id="avatar-canvas-wrapper">
          <!-- 2.5D Animated SVG Face of Mei Chin with Lip-sync and Blinking Eyes -->
          <svg class="avatar-svg-face" id="avatar-svg" viewBox="0 0 160 160" width="100%" height="100%">
            <defs>
              <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#261c36" />
                <stop offset="100%" stop-color="#140d1e" />
              </linearGradient>
              <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#ffe8dc" />
                <stop offset="100%" stop-color="#fed7c3" />
              </linearGradient>
              <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#7c3aed" />
                <stop offset="100%" stop-color="#4c1d95" />
              </linearGradient>
            </defs>

            <!-- Hair Back -->
            <path d="M 40 70 C 25 90, 20 130, 32 145 C 38 135, 42 110, 48 95 Z" fill="url(#hairGrad)" />
            <path d="M 120 70 C 135 90, 140 130, 128 145 C 122 135, 118 110, 112 95 Z" fill="url(#hairGrad)" />

            <!-- Torso / Cleanroom Suit / Professional Attire -->
            <path d="M 42 160 C 44 135, 60 120, 80 120 C 100 120, 116 135, 118 160 Z" fill="url(#suitGrad)" />
            <!-- Neck collar & ID badge -->
            <path d="M 68 120 L 80 135 L 92 120 Z" fill="#ffffff" />
            <rect x="74" y="136" width="12" height="15" rx="2" fill="#10b981" />
            <circle cx="80" cy="143" r="2.5" fill="#ffffff" />

            <!-- Neck -->
            <rect x="71" y="105" width="18" height="20" rx="4" fill="url(#skinGrad)" />

            <!-- Face Shape -->
            <path id="avatar-head" d="M 46 68 C 46 40, 114 40, 114 68 C 114 96, 102 118, 80 118 C 58 118, 46 96, 46 68 Z" fill="url(#skinGrad)" />

            <!-- Cheeks blush -->
            <circle cx="58" cy="85" r="7" fill="#f43f5e" opacity="0.18" />
            <circle cx="102" cy="85" r="7" fill="#f43f5e" opacity="0.18" />

            <!-- Eyebrows -->
            <path d="M 54 57 Q 65 54 74 58" stroke="#332244" stroke-width="2.5" stroke-linecap="round" fill="none" />
            <path d="M 86 58 Q 95 54 106 57" stroke="#332244" stroke-width="2.5" stroke-linecap="round" fill="none" />

            <!-- Eyes Left & Right -->
            <g id="avatar-eyes">
              <!-- Left Eye -->
              <ellipse id="avatar-eye-l-white" cx="64" cy="67" rx="6.5" ry="5.5" fill="#ffffff" />
              <circle id="avatar-pupil-l" cx="65" cy="67" r="3.5" fill="#2d1b4e" />
              <circle cx="66" cy="65.5" r="1.3" fill="#ffffff" />
              <path id="avatar-eyelid-l" d="M 57 67 Q 64 62 71 67" stroke="#332244" stroke-width="2" stroke-linecap="round" fill="none" />

              <!-- Right Eye -->
              <ellipse id="avatar-eye-r-white" cx="96" cy="67" rx="6.5" ry="5.5" fill="#ffffff" />
              <circle id="avatar-pupil-r" cx="95" cy="67" r="3.5" fill="#2d1b4e" />
              <circle cx="96" cy="65.5" r="1.3" fill="#ffffff" />
              <path id="avatar-eyelid-r" d="M 89 67 Q 96 62 103 67" stroke="#332244" stroke-width="2" stroke-linecap="round" fill="none" />
            </g>

            <!-- Nose -->
            <path d="M 79 72 Q 82 78 77 81 Q 81 81 83 80" stroke="#d4957e" stroke-width="1.8" stroke-linecap="round" fill="none" />

            <!-- Mouth (Morphable during speech for lip-sync!) -->
            <path id="avatar-mouth" d="M 71 95 Q 80 100 89 95" stroke="#be123c" stroke-width="2.8" stroke-linecap="round" fill="#e11d48" />

            <!-- Hair Front & Bangs -->
            <path d="M 44 65 C 43 32, 117 32, 116 65 C 112 50, 95 44, 80 44 C 65 44, 48 50, 44 65 Z" fill="url(#hairGrad)" />
            <!-- Soft bangs strands -->
            <path d="M 50 48 Q 62 60 72 52" stroke="#1d142b" stroke-width="3" stroke-linecap="round" fill="none" />
            <path d="M 72 50 Q 82 62 92 50" stroke="#1d142b" stroke-width="3" stroke-linecap="round" fill="none" />
            <path d="M 88 49 Q 100 58 110 52" stroke="#1d142b" stroke-width="3" stroke-linecap="round" fill="none" />
          </svg>
        </div>

        <!-- Audio Waveform Visualizer -->
        <div class="avatar-waveform-bar" id="avatar-waveform">
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
        </div>

        <!-- Real-time Live Subtitle -->
        <div class="avatar-live-subtitle" id="avatar-live-subtitle">
          <span>Xin chào! Hãy hỏi tôi bất cứ điều gì về hồ sơ này.</span>
        </div>
      </div>

      <!-- Chat Stream Body -->
      <div class="avatar-chat-body" id="avatar-chat-body">
        <!-- Messages will be appended here -->
      </div>

      <!-- Quick Suggested Question Chips -->
      <div class="avatar-quick-chips-wrapper">
        <div class="avatar-chips-label">
          <i class="fa-regular fa-lightbulb"></i>
          <span id="avatar-chips-title">Gợi ý câu hỏi nhanh:</span>
        </div>
        <div class="avatar-chips-carousel" id="avatar-chips-container">
          <!-- Chips injected dynamically based on current language -->
        </div>
      </div>

      <!-- Footer & Input Area -->
      <div class="avatar-chat-footer">
        <button class="avatar-mic-btn" id="btn-mic" title="Nói với AI Mei Chin (Microphone)" aria-label="Speech to Text Microphone">
          <i class="fa-solid fa-microphone"></i>
        </button>
        <div class="avatar-input-wrapper">
          <input type="text" class="avatar-text-input" id="avatar-input-field" placeholder="Hỏi về kinh nghiệm, phòng sạch, ca làm...">
          <button class="avatar-send-btn" id="btn-send-msg" title="Gửi câu hỏi" aria-label="Send Message">
            <i class="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(fabContainer);
    document.body.appendChild(overlay);
    document.body.appendChild(card);
  }

  // --- AUDIO & SPEECH SYNTHESIS ENGINE (TTS) ---
  function initSpeechEngine() {
    if (!('speechSynthesis' in window)) return;

    function populateVoices() {
      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) return;

      const isZh = state.currentLang === 'zh';
      let match = null;

      if (isZh) {
        // Preferred Traditional Chinese voices for Taiwan
        match = voices.find(v => v.lang === 'zh-TW') ||
                voices.find(v => v.name.includes('Taiwan') || v.name.includes('Hanhan') || v.name.includes('Yating') || v.name.includes('HsiaoChen')) ||
                voices.find(v => v.lang.startsWith('zh'));
      } else {
        // Preferred Vietnamese voices
        match = voices.find(v => v.lang === 'vi-VN') ||
                voices.find(v => v.lang.startsWith('vi')) ||
                voices.find(v => v.name.toLowerCase().includes('vietnam') || v.name.toLowerCase().includes('hoaimy'));
      }

      state.speechVoice = match || voices[0];
    }

    populateVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = populateVoices;
    }
  }

  function speakText(text) {
    if (state.isMuted || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel(); // Stop any pending speech

    // Clean markdown tags for clear speech
    const cleanSpeech = text
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/<[^>]*>/g, '')
      .replace(/[#*`_>•\-]/g, ' ')
      .replace(/👉/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanSpeech);
    initSpeechEngine(); // refresh voice match for current lang
    if (state.speechVoice) {
      utterance.voice = state.speechVoice;
      utterance.lang = state.currentLang === 'zh' ? 'zh-TW' : 'vi-VN';
    }
    utterance.rate = state.speechRate;
    utterance.pitch = 1.05;

    utterance.onstart = function () {
      state.isSpeaking = true;
      const stage = document.getElementById('avatar-stage');
      if (stage) stage.classList.add('speaking');
      startLipSync();
      updateSubtitle(cleanSpeech);
    };

    utterance.onend = function () {
      stopSpeakingState();
    };

    utterance.onerror = function () {
      stopSpeakingState();
    };

    window.speechSynthesis.speak(utterance);
  }

  function stopSpeakingState() {
    state.isSpeaking = false;
    const stage = document.getElementById('avatar-stage');
    if (stage) stage.classList.remove('speaking');
    stopLipSync();
  }

  function updateSubtitle(text) {
    const sub = document.getElementById('avatar-live-subtitle');
    if (!sub) return;
    // Show truncated or neat excerpt
    if (text.length > 75) {
      sub.innerHTML = `<span>"${text.substring(0, 72)}..."</span>`;
    } else {
      sub.innerHTML = `<span>"${text}"</span>`;
    }
  }

  // --- LIP SYNC & BLINK ANIMATION ---
  function startLipSync() {
    stopLipSync();
    const mouth = document.getElementById('avatar-mouth');
    if (!mouth) return;

    const shapes = [
      "M 70 94 Q 80 104 90 94 Q 80 97 70 94", // Open wide
      "M 72 95 Q 80 101 88 95",              // Slight smile
      "M 74 93 Q 80 106 86 93 Q 80 98 74 93", // 'O' shape
      "M 69 94 Q 80 103 91 94 Q 80 96 69 94"  // Syllable movement
    ];
    let idx = 0;

    state.lipSyncInterval = setInterval(() => {
      idx = (idx + 1) % shapes.length;
      mouth.setAttribute('d', shapes[idx]);
    }, 140);
  }

  function stopLipSync() {
    if (state.lipSyncInterval) {
      clearInterval(state.lipSyncInterval);
      state.lipSyncInterval = null;
    }
    const mouth = document.getElementById('avatar-mouth');
    if (mouth) {
      mouth.setAttribute('d', "M 71 95 Q 80 100 89 95"); // return to pleasant smile
    }
  }

  function startBlinkAnimation() {
    stopBlinkAnimation();
    const eyeL = document.getElementById('avatar-eyelid-l');
    const eyeR = document.getElementById('avatar-eyelid-r');
    const pupilL = document.getElementById('avatar-pupil-l');
    const pupilR = document.getElementById('avatar-pupil-r');

    function blink() {
      if (!eyeL || !eyeR) return;
      // Close eyes
      eyeL.setAttribute('d', "M 57 67 Q 64 68 71 67");
      eyeR.setAttribute('d', "M 89 67 Q 96 68 103 67");
      if (pupilL) pupilL.style.opacity = '0';
      if (pupilR) pupilR.style.opacity = '0';

      setTimeout(() => {
        // Open eyes
        eyeL.setAttribute('d', "M 57 67 Q 64 62 71 67");
        eyeR.setAttribute('d', "M 89 67 Q 96 62 103 67");
        if (pupilL) pupilL.style.opacity = '1';
        if (pupilR) pupilR.style.opacity = '1';
      }, 180);
    }

    state.blinkInterval = setInterval(() => {
      if (Math.random() > 0.3) {
        blink();
      }
    }, 3800);
  }

  function stopBlinkAnimation() {
    if (state.blinkInterval) {
      clearInterval(state.blinkInterval);
      state.blinkInterval = null;
    }
  }

  // --- SPEECH RECOGNITION (STT - Micro) ---
  function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const micBtn = document.getElementById('btn-mic');
    if (!SpeechRecognition) {
      if (micBtn) {
        micBtn.style.opacity = '0.5';
        micBtn.title = "Trình duyệt chưa hỗ trợ nhận diện giọng nói (Web Speech API)";
      }
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = function () {
      state.isListening = true;
      if (micBtn) micBtn.classList.add('listening');
      const statusText = document.getElementById('avatar-status-text');
      if (statusText) {
        statusText.textContent = state.currentLang === 'zh' ? '正在聆聽您的語音...' : 'Đang lắng nghe bạn nói...';
      }
    };

    recognition.onresult = function (event) {
      const transcript = event.results[0][0].transcript;
      const input = document.getElementById('avatar-input-field');
      if (input && transcript) {
        input.value = transcript;
        handleUserSubmit(transcript);
      }
    };

    recognition.onerror = function () {
      state.isListening = false;
      if (micBtn) micBtn.classList.remove('listening');
      updateStatusReady();
    };

    recognition.onend = function () {
      state.isListening = false;
      if (micBtn) micBtn.classList.remove('listening');
      updateStatusReady();
    };

    state.recognition = recognition;
  }

  function toggleVoiceInput() {
    if (!state.recognition) {
      initSpeechRecognition();
    }
    if (!state.recognition) return;

    if (state.isListening) {
      state.recognition.stop();
    } else {
      state.recognition.lang = state.currentLang === 'zh' ? 'zh-TW' : 'vi-VN';
      try {
        state.recognition.start();
      } catch (err) {
        console.warn('Recognition start error:', err);
      }
    }
  }

  // --- NLP INTENT & MATCHING LOGIC ---
  function normalizeText(text) {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s\u4e00-\u9fa5]/gi, ' ')
      .trim();
  }

  function findBestAnswer(query) {
    const lang = state.currentLang;
    const kb = RESUME_KNOWLEDGE[lang] || RESUME_KNOWLEDGE.vi;
    const normalized = normalizeText(query);

    let bestMatch = null;
    let highestScore = 0;

    for (const item of kb.qa) {
      let score = 0;
      for (const trigger of item.triggers) {
        const normTrigger = normalizeText(trigger);
        if (normalized.includes(normTrigger)) {
          score += (normTrigger.length > 3 ? 3 : 1);
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (highestScore > 0 && bestMatch) {
      return {
        text: bestMatch.response,
        actions: bestMatch.actions || []
      };
    }

    // Check if user asked in the opposite language
    const otherLang = lang === 'vi' ? 'zh' : 'vi';
    const otherKb = RESUME_KNOWLEDGE[otherLang];
    for (const item of otherKb.qa) {
      for (const trigger of item.triggers) {
        if (normalized.includes(normalizeText(trigger))) {
          // Switch current language dynamically to match user
          setLanguage(otherLang);
          return {
            text: item.response,
            actions: item.actions || []
          };
        }
      }
    }

    return {
      text: kb.fallback,
      actions: []
    };
  }

  // --- CHAT UI RENDERING ---
  function appendMessage(role, text, actions = []) {
    const chatBody = document.getElementById('avatar-chat-body');
    if (!chatBody) return;

    const row = document.createElement('div');
    row.className = `avatar-msg-row ${role}`;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    if (role === 'bot') {
      let actionsHtml = '';
      if (actions && actions.length > 0) {
        actionsHtml = '<div class="avatar-msg-actions">';
        actions.forEach(act => {
          if (act.external) {
            actionsHtml += `<a href="${act.href}" target="_blank" rel="noopener noreferrer" class="avatar-action-btn">${act.text}</a>`;
          } else if (act.target === 'print') {
            actionsHtml += `<button type="button" class="avatar-action-btn" data-action="print">${act.text}</button>`;
          } else {
            actionsHtml += `<button type="button" class="avatar-action-btn" data-scroll="${act.target}">${act.text}</button>`;
          }
        });
        actionsHtml += '</div>';
      }

      // Convert simple markdown bold and newlines
      const formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');

      row.innerHTML = `
        <img class="avatar-msg-avatar" src="https://avatars.githubusercontent.com/u/338122076?v=4" alt="Mei Chin">
        <div class="avatar-msg-content">
          <div class="avatar-msg-bubble">
            ${formattedText}
            ${actionsHtml}
          </div>
          <div style="display:flex; align-items:center; justify-content:space-between;">
            <button class="avatar-speak-btn" data-speak="${encodeURIComponent(text)}" title="Nghe lại câu trả lời này">
              <i class="fa-solid fa-volume-high"></i> <span>Nghe</span>
            </button>
            <span class="avatar-msg-time">${timeStr}</span>
          </div>
        </div>
      `;
    } else {
      row.innerHTML = `
        <div class="avatar-msg-content">
          <div class="avatar-msg-bubble">
            ${text.replace(/\n/g, '<br>')}
          </div>
          <span class="avatar-msg-time">${timeStr}</span>
        </div>
      `;
    }

    chatBody.appendChild(row);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Attach click listeners for action buttons
    row.querySelectorAll('.avatar-action-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const scrollTarget = btn.getAttribute('data-scroll');
        const action = btn.getAttribute('data-action');
        if (action === 'print') {
          window.print();
        } else if (scrollTarget) {
          const el = document.querySelector(scrollTarget);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            el.style.transition = 'box-shadow 0.4s ease';
            el.style.boxShadow = '0 0 0 4px var(--avatar-primary)';
            setTimeout(() => { el.style.boxShadow = ''; }, 2000);
          }
        }
      });
    });

    // Attach listen button
    row.querySelectorAll('.avatar-speak-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const speakVal = decodeURIComponent(btn.getAttribute('data-speak'));
        speakText(speakVal);
      });
    });
  }

  function handleUserSubmit(query) {
    if (!query || !query.trim()) return;
    const cleanQuery = query.trim();

    const input = document.getElementById('avatar-input-field');
    if (input) input.value = '';

    appendMessage('user', cleanQuery);

    // AI Processing
    const answer = findBestAnswer(cleanQuery);

    setTimeout(() => {
      appendMessage('bot', answer.text, answer.actions);
      speakText(answer.text);
    }, 280);
  }

  function renderChips() {
    const container = document.getElementById('avatar-chips-container');
    const label = document.getElementById('avatar-chips-title');
    if (!container) return;

    const kb = RESUME_KNOWLEDGE[state.currentLang] || RESUME_KNOWLEDGE.vi;
    if (label) {
      label.textContent = state.currentLang === 'zh' ? '熱門提問推薦：' : 'Gợi ý câu hỏi nhanh:';
    }

    container.innerHTML = '';
    kb.topics.forEach(t => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'avatar-chip';
      chip.innerHTML = `<i class="fa-regular fa-comment-dots"></i> <span>${t.label}</span>`;
      chip.addEventListener('click', () => {
        handleUserSubmit(t.query);
      });
      container.appendChild(chip);
    });
  }

  function updateStatusReady() {
    const statusText = document.getElementById('avatar-status-text');
    if (statusText) {
      statusText.textContent = state.currentLang === 'zh' ? '語音助手在線中' : 'Sẵn sàng trò chuyện';
    }
  }

  function setLanguage(lang) {
    state.currentLang = lang;
    renderChips();
    updateStatusReady();

    const callout = document.getElementById('avatar-fab-callout-text');
    if (callout) {
      callout.textContent = lang === 'zh' ? '詢問 AI 美金' : 'Hỏi AI Mei Chin';
    }

    const input = document.getElementById('avatar-input-field');
    if (input) {
      input.placeholder = lang === 'zh' ? '詢問關於無塵室、技能、加班輪班...' : 'Hỏi về kinh nghiệm, phòng sạch, ca làm...';
    }
  }

  // --- UI TOGGLE & CONTROLS ---
  function openChat() {
    state.isOpen = true;
    const card = document.getElementById('avatar-chat-card');
    const overlay = document.getElementById('avatar-modal-overlay');
    if (card) card.classList.add('active');
    if (overlay) overlay.classList.add('active');

    startBlinkAnimation();

    // If chat is empty, send initial welcome message
    const chatBody = document.getElementById('avatar-chat-body');
    if (chatBody && chatBody.children.length === 0) {
      const kb = RESUME_KNOWLEDGE[state.currentLang] || RESUME_KNOWLEDGE.vi;
      const welcome = kb.greetings[Math.floor(Math.random() * kb.greetings.length)];
      appendMessage('bot', welcome);
      speakText(welcome);
    }
  }

  function closeChat() {
    state.isOpen = false;
    const card = document.getElementById('avatar-chat-card');
    const overlay = document.getElementById('avatar-modal-overlay');
    if (card) card.classList.remove('active');
    if (overlay) overlay.classList.remove('active');

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    stopSpeakingState();
    stopBlinkAnimation();
  }

  function toggleExpand() {
    state.isExpanded = !state.isExpanded;
    const card = document.getElementById('avatar-chat-card');
    const btn = document.getElementById('btn-toggle-expand');
    if (card) card.classList.toggle('stage-expanded', state.isExpanded);
    if (btn) {
      btn.innerHTML = state.isExpanded ?
        '<i class="fa-solid fa-down-left-and-up-right-to-center"></i>' :
        '<i class="fa-solid fa-up-right-and-down-left-from-center"></i>';
    }
  }

  function toggleMute() {
    state.isMuted = !state.isMuted;
    const btn = document.getElementById('btn-toggle-mute');
    if (btn) {
      btn.innerHTML = state.isMuted ?
        '<i class="fa-solid fa-volume-xmark" style="color:#ef4444;"></i>' :
        '<i class="fa-solid fa-volume-high"></i>';
      btn.title = state.isMuted ? 'Đã tắt tiếng' : 'Đang bật tiếng';
    }
    if (state.isMuted && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      stopSpeakingState();
    }
  }

  // --- INITIALIZATION ---
  function init() {
    buildWidgetDOM();
    initSpeechEngine();
    renderChips();

    // Event Listeners
    const fabBtn = document.getElementById('avatar-fab-btn');
    const fabCallout = document.getElementById('avatar-fab-callout');
    const closeBtn = document.getElementById('btn-close-chat');
    const overlay = document.getElementById('avatar-modal-overlay');
    const expandBtn = document.getElementById('btn-toggle-expand');
    const muteBtn = document.getElementById('btn-toggle-mute');
    const micBtn = document.getElementById('btn-mic');
    const sendBtn = document.getElementById('btn-send-msg');
    const inputField = document.getElementById('avatar-input-field');

    if (fabBtn) fabBtn.addEventListener('click', openChat);
    if (fabCallout) fabCallout.addEventListener('click', openChat);
    if (closeBtn) closeBtn.addEventListener('click', closeChat);
    if (overlay) overlay.addEventListener('click', closeChat);
    if (expandBtn) expandBtn.addEventListener('click', toggleExpand);
    if (muteBtn) muteBtn.addEventListener('click', toggleMute);
    if (micBtn) micBtn.addEventListener('click', toggleVoiceInput);

    if (sendBtn) {
      sendBtn.addEventListener('click', () => {
        if (inputField) handleUserSubmit(inputField.value);
      });
    }

    if (inputField) {
      inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleUserSubmit(inputField.value);
        }
      });
    }

    // Hook to main page language switch if available
    const originalSwitchLang = window.switchLanguage;
    if (typeof originalSwitchLang === 'function') {
      window.switchLanguage = function (lang) {
        originalSwitchLang(lang);
        setLanguage(lang);
      };
    }

    // Public API
    window.MeiChinAvatar = {
      open: openChat,
      close: closeChat,
      setLanguage: setLanguage,
      ask: handleUserSubmit,
      speak: speakText
    };
  }

  // Load when document is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
