import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-base">
                N
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Nối cơ hội – Đổi cuộc đời
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Nền tảng việc làm minh bạch, trực tiếp cho mọi lứa tuổi và sinh viên mới ra trường. Cam kết 100% không qua trung gian, không thu phí đặt cọc và đẩy lùi lừa đảo tuyển dụng.
            </p>

            <div className="pt-2 flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Chung tay xây dựng môi trường lao động an toàn</span>
            </div>
          </div>

          {/* Quick Links: Dành cho ứng viên */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">
              Dành cho ứng viên
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectTab('jobs')}
                  className="hover:text-white transition-colors"
                >
                  Tìm việc làm không cần kinh nghiệm
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('cv-builder')}
                  className="hover:text-white transition-colors"
                >
                  Tạo CV sinh viên & Portfolio Google Sites
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('salary')}
                  className="hover:text-white transition-colors"
                >
                  Bảng tra cứu & so sánh mức lương
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('safe-hub')}
                  className="hover:text-white transition-colors"
                >
                  Cẩm nang phòng tránh lừa đảo tuyển dụng
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('reviews')}
                  className="hover:text-white transition-colors"
                >
                  Xem đánh giá nhà tuyển dụng
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links: Dành cho doanh nghiệp */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">
              Nhà tuyển dụng
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectTab('employer-portal')}
                  className="hover:text-white transition-colors"
                >
                  Đăng tin tuyển dụng trực tiếp
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('employer-portal')}
                  className="hover:text-white transition-colors"
                >
                  Quản lý hồ sơ ứng viên
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('employer-portal')}
                  className="hover:text-white transition-colors"
                >
                  Quy chuẩn tuyển dụng minh bạch
                </button>
              </li>
              <li>
                <span className="text-emerald-400 font-medium">
                  Miễn phí đăng tin 100%
                </span>
              </li>
            </ul>
          </div>

          {/* Contact & Hotline */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">
              Hỗ trợ ứng viên 24/7
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Hotline: <strong>1900 8888</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>hotro@noicohoi-doicuocdoi.vn</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Hà Nội & TP. Hồ Chí Minh, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 Nối cơ hội – Đổi cuộc đời. Nền tảng hướng nghiệp & việc làm an toàn cho người Việt.</p>
          <p className="flex items-center gap-1">
            <span>Phát triển vì cộng đồng người tìm việc</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
