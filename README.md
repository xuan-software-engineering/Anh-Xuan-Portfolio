# My Portfolio - React + Vite

Dự án portfolio cá nhân được xây dựng với React, Vite và Tailwind CSS.

## 🚀 Tính năng

- Responsive design với Tailwind CSS
- React 19 với Vite
- ESLint configuration
- CI/CD pipeline tự động

## 🛠️ Cài đặt và chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Preview build
npm run preview

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## 🔄 CI/CD Pipeline

Dự án này sử dụng GitHub Actions để tự động hóa quy trình development:

### GitHub Actions Workflow

- **Lint & Test**: Kiểm tra code quality và build project
- **Deploy**: Tự động deploy lên GitHub Pages khi push vào main branch

### Quy trình hoạt động

1. **Push code** vào `main` branch
2. **GitHub Actions** tự động trigger
3. **Lint & Test** job chạy trước
4. **Deploy** job chạy sau khi test thành công
5. **Website** được deploy lên `gh-pages` branch
6. **GitHub Pages** serve website từ `gh-pages` branch

### Các platform deployment khác

#### Netlify

- Kết nối repository với Netlify
- Sử dụng file `netlify.toml` để cấu hình

#### Vercel

- Kết nối repository với Vercel
- Sử dụng file `vercel.json` để cấu hình

## 📁 Cấu trúc dự án

```
src/
├── components/     # React components
├── hooks/         # Custom hooks
├── assets/        # Static assets
└── App.jsx        # Main App component
```

## 🚀 Deployment

### GitHub Pages (Chính)

- **URL**: https://nguyenleanhxuan.github.io/Anh-Xuan-Portfolio
- **Tự động deploy** qua GitHub Actions khi push vào `main` branch
- **Branch**: `gh-pages`

### Các platform khác

- **Netlify**: Kết nối repository và sử dụng `netlify.toml`
- **Vercel**: Kết nối repository và sử dụng `vercel.json`

## 🔧 Troubleshooting

### Nếu deployment thất bại:

1. **Kiểm tra GitHub Actions**:

   - Vào tab Actions trong repository
   - Xem log của workflow để tìm lỗi

2. **Kiểm tra cấu hình**:

   - Đảm bảo `base: "/Anh-Xuan-Portfolio/"` trong `vite.config.js`
   - Kiểm tra `homepage` trong `package.json`

3. **Chạy deploy script thủ công**:

   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

4. **Kiểm tra GitHub Pages settings**:
   - Settings > Pages > Source: GitHub Actions
   - Đảm bảo repository có quyền deploy
