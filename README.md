# Hệ Thống Biểu Quyết EVNCHP

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-4.0-green.svg)
![Platform](https://img.shields.io/badge/platform-Web-orange.svg)

## 📋 Mô tả

Hệ thống Biểu quyết điện tử cho Tổng Công ty Thủy điện và Điện lực miền Trung (EVNCHP) - một ứng dụng web hoàn chỉnh hỗ trợ quá trình biểu quyết trực tuyến cho Hội đồng Quản trị.

## ✨ Tính năng chính

### 🏠 Dashboard
- Thống kê tổng quan phiếu biểu quyết
- Theo dõi dự thảo tờ trình cần góp ý
- Giao diện trực quan với biểu đồ

### 📝 Quản lý Dự thảo Tờ trình
- ✅ Tạo và quản lý dự thảo tờ trình
- ✅ Đính kèm file tài liệu
- ✅ Thiết lập thời hạn góp ý
- ✅ Thu thập và hiển thị góp ý công khai
- ✅ Thống nhất/góp ý dự thảo
- ✅ Đóng góp ý (chỉ người tạo)

### 🗳️ Biểu quyết điện tử
- ✅ Tạo phiếu biểu quyết với nhiều tùy chọn
- ✅ Phân công người biểu quyết
- ✅ Thời hạn biểu quyết tự động
- ✅ Thu thập ý kiến và lý do
- ✅ Thống kê kết quả real-time

### ⚡ Quản lý Biểu quyết
- ✅ Danh sách phiếu đang mở
- ✅ Kết thúc biểu quyết
- ✅ Xem chi tiết và trạng thái
- ✅ Xuất báo cáo kết quả

### 📚 Lịch sử Biểu quyết
- ✅ Xem lại các phiếu đã hoàn thành
- ✅ Thống kê chi tiết với biểu đồ
- ✅ Theo dõi quá trình biểu quyết
- ✅ Tài liệu đính kèm

### 📁 Tủ tài liệu
- ✅ Quản lý tài liệu theo năm
- ✅ Upload/Download file
- ✅ Phân loại tài liệu

### 👥 Quản trị Hệ thống
- ✅ Quản lý người dùng
- ✅ Phân quyền module
- ✅ Quản lý phiếu biểu quyết
- ✅ Thống kê và báo cáo

## 🛠️ Công nghệ sử dụng

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework CSS**: Bootstrap 5.3
- **Icons**: Font Awesome 6
- **Charts**: Chart.js (planned)
- **Storage**: LocalStorage (demo), có thể mở rộng với backend
- **Responsive**: Mobile-first design

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống
- Web browser hiện đại (Chrome, Firefox, Safari, Edge)
- Không cần server backend (chạy được offline)

### Chạy dự án
1. Clone repository:
```bash
git clone https://github.com/[your-username]/htbieuquyet-evnchp.git
cd htbieuquyet-evnchp
```

2. Mở file `index.html` bằng web browser hoặc sử dụng live server:
```bash
# Nếu có Python
python -m http.server 8000

# Nếu có Node.js
npx serve .

# Hoặc mở trực tiếp file index.html
```

3. Truy cập: `http://localhost:8000` (nếu dùng server) hoặc mở trực tiếp file

## 👤 Tài khoản demo

| Username | Password | Vai trò | Mô tả |
|----------|----------|---------|--------|
| `admin` | `admin` | Admin | Toàn quyền quản trị |
| `demo` | `demo` | User | Quyền cơ bản |
| `Lê Văn Thuyết - CT HĐQT` | `user123` | User | Chủ tịch HĐQT |

## 📖 Hướng dẫn sử dụng

### Đăng nhập
1. Mở ứng dụng
2. Nhập username và password
3. Click "Đăng nhập"

### Tạo dự thảo tờ trình (Admin)
1. Vào module "Dự thảo tờ trình"
2. Click "Tạo dự thảo mới"
3. Điền thông tin và đính kèm file
4. Thiết lập thời hạn góp ý
5. Lưu dự thảo

### Biểu quyết
1. Vào module "Biểu quyết"
2. Chọn phiếu cần biểu quyết
3. Chọn ý kiến và nhập lý do (nếu có)
4. Submit biểu quyết

### Quản trị (Admin)
1. Vào module "Quản trị"
2. Quản lý người dùng, phân quyền
3. Theo dõi và quản lý phiếu biểu quyết

## 📁 Cấu trúc dự án

```
HTBIEUQUYET_V4/
├── index.html              # Trang chính
├── css/
│   └── style.css          # CSS tùy chỉnh
├── js/
│   └── app.js             # JavaScript chính
├── README.md              # Tài liệu dự án
└── .gitignore            # Git ignore file
```

## 🔧 Tùy chỉnh

### Thay đổi màu sắc chủ đạo
Chỉnh sửa CSS variables trong `css/style.css`:
```css
:root {
    --primary-blue: #1e40af;
    --primary-blue-darker: #1a3690;
    --primary-blue-darkest: #152b71;
}
```

### Thêm người dùng mới
Chỉnh sửa mảng `users` trong `js/app.js`:
```javascript
users: [
    { 
        id: 10, 
        username: 'newuser', 
        password: 'password', 
        role: 'User', 
        permissions: {...}
    }
]
```

## 🚧 Roadmap

- [ ] **Backend Integration**: REST API với Node.js/Express
- [ ] **Database**: MongoDB/MySQL integration
- [ ] **Authentication**: JWT tokens, OAuth
- [ ] **Real-time**: WebSocket cho cập nhật real-time
- [ ] **Mobile App**: React Native/Flutter
- [ ] **Advanced Charts**: Nhiều loại biểu đồ thống kê
- [ ] **Email Notifications**: Thông báo qua email
- [ ] **Digital Signature**: Chữ ký số cho biểu quyết
- [ ] **Audit Trail**: Log chi tiết mọi hoạt động

## 🤝 Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án này được phân phối dưới license MIT. Xem file `LICENSE` để biết thêm chi tiết.

## 📞 Liên hệ

- **Tổ chức**: Tổ CNTT – P4 - EVNCHP
- **Email**: [your-email@evnchp.vn]
- **Website**: [https://evnchp.vn]

## 🙏 Acknowledgments

- Bootstrap team cho CSS framework
- Font Awesome cho icon set
- Chart.js cho charting library
- Tất cả thành viên HĐQT EVNCHP đã góp ý trong quá trình phát triển

---

⭐ **Đừng quên star dự án nếu bạn thấy hữu ích!**
