# Hướng dẫn đóng góp

Cảm ơn bạn quan tâm đến việc đóng góp cho Hệ thống Biểu quyết EVNCHP!

## Cách đóng góp

### 1. Fork Repository
- Fork repository này về tài khoản GitHub của bạn
- Clone repository đã fork về máy local

### 2. Tạo Branch mới
```bash
git checkout -b feature/ten-tinh-nang-moi
```

### 3. Thực hiện thay đổi
- Viết code theo coding standards
- Test kỹ lưỡng trước khi commit
- Viết commit message rõ ràng

### 4. Commit và Push
```bash
git add .
git commit -m "feat: mô tả tính năng mới"
git push origin feature/ten-tinh-nang-moi
```

### 5. Tạo Pull Request
- Tạo Pull Request từ branch của bạn về main branch
- Mô tả chi tiết những thay đổi đã thực hiện
- Link đến issue liên quan (nếu có)

## Coding Standards

### HTML
- Sử dụng indentation 2 spaces
- Đặt tên class theo BEM convention
- Đảm bảo semantic HTML

### CSS
- Sử dụng CSS Grid/Flexbox cho layout
- Mobile-first responsive design
- Đặt tên class có ý nghĩa

### JavaScript
- Sử dụng ES6+ syntax
- Viết functions có tên rõ ràng
- Comment cho logic phức tạp
- Validate input từ user

## Báo cáo Bug

Khi báo cáo bug, hãy bao gồm:
- Mô tả chi tiết bug
- Các bước để reproduce
- Expected behavior
- Screenshots (nếu có)
- Thông tin về browser/OS

## Đề xuất tính năng

Trước khi đề xuất tính năng mới:
- Kiểm tra xem đã có issue tương tự chưa
- Mô tả rõ tính năng và lý do cần thiết
- Đưa ra wireframe/mockup nếu có thể

## Review Process

- Tất cả Pull Request cần được review
- Maintainer sẽ review trong vòng 2-3 ngày
- Có thể yêu cầu thay đổi trước khi merge

## Liên hệ

Nếu có câu hỏi, hãy tạo issue hoặc liên hệ qua email.
