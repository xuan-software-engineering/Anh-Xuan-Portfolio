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
