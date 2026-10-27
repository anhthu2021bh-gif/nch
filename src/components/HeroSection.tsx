import React from 'react';
import { Search, MapPin, CheckCircle2, Shield, ArrowRight, Award } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedLocation: string;
  setSelectedLocation: (loc: string) => void;
  onSearchSubmit: () => void;
  onQuickFilter: (filterKey: string, filterVal: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  selectedLocation,
  setSelectedLocation,
  onSearchSubmit,
  onQuickFilter,
}) => {
  const locations = [
    'Tất cả địa điểm',
    'Hà Nội',
    'TP. Hồ Chí Minh',
    'Đà Nẵng',
    'Cần Thơ',
    'Hải Phòng',
    'Bình Dương',
  ];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearchSubmit();
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-8 pb-14 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headline, Search Bar & Quick Filters */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-100/70 px-3 py-1 rounded-md">
              <Shield className="w-3.5 h-3.5" />
              <span>Nền tảng việc làm minh bạch · 100% không qua trung gian</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Nối cơ hội – <br />
                <span className="text-blue-600">Đổi cuộc đời</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Cầu nối tuyển dụng trực tiếp dành cho mọi lứa tuổi, đặc biệt là sinh viên mới ra trường và người chưa có kinh nghiệm. Cam kết không thu phí đặt cọc, thông tin xác thực, đẩy nhanh ứng tuyển.
              </p>
            </div>

            {/* Prominent Search Container */}
            <div className="bg-white p-2.5 sm:p-3 rounded-2xl shadow-lg border border-slate-200 max-w-2xl">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="flex-1 flex items-center gap-2.5 px-3 py-2 bg-slate-50 rounded-xl border border-slate-200/80">
                  <Search className="w-5 h-5 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Tên công việc, ngành nghề hoặc kỹ năng..."
                    className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>

                <div className="sm:w-48 flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-200/80">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm text-slate-700 focus:outline-none"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={onSearchSubmit}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span>Tìm việc ngay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Filter Buttons for Students & Inexperienced */}
              <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-500 font-medium">Gợi ý nhanh:</span>
                <button
                  onClick={() => onQuickFilter('experience', 'Không yêu cầu kinh nghiệm')}
                  className="px-2.5 py-1 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 rounded-md font-medium transition-colors"
                >
                  Không yêu cầu kinh nghiệm
                </button>
                <button
                  onClick={() => onQuickFilter('type', 'Thực tập')}
                  className="px-2.5 py-1 bg-blue-50 text-blue-800 hover:bg-blue-100 rounded-md font-medium transition-colors"
                >
                  Thực tập sinh
                </button>
                <button
                  onClick={() => onQuickFilter('type', 'Bán thời gian')}
                  className="px-2.5 py-1 bg-amber-50 text-amber-800 hover:bg-amber-100 rounded-md font-medium transition-colors"
                >
                  Part-time cho sinh viên
                </button>
                <button
                  onClick={() => onQuickFilter('training', 'true')}
                  className="px-2.5 py-1 bg-purple-50 text-purple-800 hover:bg-purple-100 rounded-md font-medium transition-colors"
                >
                  Đào tạo từ đầu
                </button>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Trực tiếp doanh nghiệp</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>0đ Chi phí đặt cọc giữ chỗ</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Hỗ trợ tạo CV chuyên nghiệp</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Photography */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/10] bg-slate-100">
                <img
                  src="/src/assets/images/hero_career_connect_1792587977947.jpg"
                  alt="Nhóm bạn trẻ sinh viên và ứng viên tự tin trao đổi cơ hội nghề nghiệp"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/20">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                    Sứ mệnh cộng đồng
                  </p>
                  <p className="text-sm font-medium mt-0.5">
                    "Trao cơ hội thực chiến – Định hình tương lai vững vàng"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
