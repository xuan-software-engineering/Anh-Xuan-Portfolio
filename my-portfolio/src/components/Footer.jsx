export default function Footer() {
  return (
    <footer className="py-4 sm:py-6 text-center bg-orange-100 shadow-inner border-t border-orange-100">
      <p className="text-gray-600">
        © {new Date().getFullYear()} Nguyễn Lê Anh Xuân. All rights reserved.
      </p>
    </footer>
  );
}
