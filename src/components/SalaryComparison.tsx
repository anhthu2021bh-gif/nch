import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  HelpCircle, 
  Info, 
  CheckCircle, 
  ShieldAlert, 
  Building2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SALARY_BENCHMARKS } from '../data/mockData';
import { CATEGORIES_LIST } from '../data/categories';
import { IndustryCategory } from '../types';

export const SalaryComparison: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<IndustryCategory>(
    'Công nghệ thông tin và kỹ thuật số'
  );
  const [userExpLevel, setUserExpLevel] = useState<'fresh' | 'junior' | 'mid'>('fresh');

  const currentBenchmark = SALARY_BENCHMARKS.find(
    (b) => b.category === selectedCategory
  ) || SALARY_BENCHMARKS[0];

  const categoryDetail = CATEGORIES_LIST.find(
    (c) => c.id === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-100/70 px-3 py-1 rounded-md">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Minh bạch thông tin thu nhập thị trường</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          So Sánh Mức Lương Theo Ngành & Cấp Bậc
        </h2>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Tham khảo mặt bằng thu nhập thực tế giữa các vị trí và ngành nghề để tự tin định giá bản thân, tránh bị ép giá hoặc rơi vào các bẫy tuyển dụng "việc nhẹ lương trăm triệu" phi thực tế.
        </p>
      </div>

      {/* Category selector row */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES_LIST.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              {cat.shortName}
            </button>
          );
        })}
      </div>

      {/* Main Comparison Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Benchmark Cards & Bar Comparison */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {currentBenchmark.category}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Vị trí tiêu biểu: <strong className="text-slate-800">{currentBenchmark.role}</strong>
              </p>
            </div>
            <div className="text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
              Nhu cầu tuyển dụng: <strong className="text-blue-700">{currentBenchmark.popularDemand}</strong>
            </div>
          </div>

          {/* 3-Tier Salary Benchmark Display */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Level 1: Sinh viên / Mới tốt nghiệp */}
            <div className={`p-4 rounded-xl border transition-all ${
              userExpLevel === 'fresh' ? 'border-blue-600 bg-blue-50/50 shadow-xs' : 'border-slate-200 bg-slate-50/60'
            }`}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 block mb-1">
                Mới tốt nghiệp / Chưa KN
              </span>
              <p className="text-2xl font-black text-slate-900 tabular-nums">
                {currentBenchmark.freshGradAvg} <span className="text-sm font-semibold text-slate-500">triệu/tháng</span>
              </p>
              <p className="text-xs text-slate-600 mt-2">
                Biên độ: <strong>{currentBenchmark.freshGradMin} - {currentBenchmark.freshGradMax} triệu</strong>
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                (Thường kèm hỗ trợ đào tạo nghiệp vụ từ đầu)
              </p>
            </div>

            {/* Level 2: Có 1 - 2 năm kinh nghiệm */}
            <div className={`p-4 rounded-xl border transition-all ${
              userExpLevel === 'junior' ? 'border-blue-600 bg-blue-50/50 shadow-xs' : 'border-slate-200 bg-slate-50/60'
            }`}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                Kinh nghiệm 1 - 2 năm
              </span>
              <p className="text-2xl font-black text-slate-900 tabular-nums">
                {Math.round((currentBenchmark.freshGradAvg + currentBenchmark.experiencedAvg) / 2)} <span className="text-sm font-semibold text-slate-500">triệu/tháng</span>
              </p>
              <p className="text-xs text-slate-600 mt-2">
                Biên độ: <strong>{currentBenchmark.freshGradMax} - {Math.round(currentBenchmark.experiencedAvg * 0.9)} triệu</strong>
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                (Đã độc lập xử lý được các đầu việc chính)
              </p>
            </div>

            {/* Level 3: Từ 3 năm / Trưởng nhóm */}
            <div className={`p-4 rounded-xl border transition-all ${
              userExpLevel === 'mid' ? 'border-blue-600 bg-blue-50/50 shadow-xs' : 'border-slate-200 bg-slate-50/60'
            }`}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                Kinh nghiệm từ 3+ năm
              </span>
              <p className="text-2xl font-black text-slate-900 tabular-nums">
                {currentBenchmark.experiencedAvg} <span className="text-sm font-semibold text-slate-500">triệu/tháng</span>
              </p>
              <p className="text-xs text-slate-600 mt-2">
                Biên độ: <strong>{currentBenchmark.experiencedAvg} - {currentBenchmark.experiencedAvg + 8} triệu</strong>
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                (Quản lý dự án, cố vấn nhân sự cấp dưới)
              </p>
            </div>
          </div>

          {/* Visual Percentage Progression Bar */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Lộ trình tăng trưởng thu nhập theo thâm niên
            </h4>
            <div className="space-y-2">
              <div className="flex items-center text-xs">
                <span className="w-40 text-slate-600">Khởi điểm (0 - 1 năm):</span>
                <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden ml-2">
                  <div 
                    className="bg-blue-500 h-full rounded-full" 
                    style={{ width: `${Math.min(100, (currentBenchmark.freshGradAvg / 35) * 100)}%` }}
                  ></div>
                </div>
                <span className="w-20 text-right font-bold text-slate-800 ml-2 tabular-nums">
                  {currentBenchmark.freshGradAvg} tr
                </span>
              </div>

              <div className="flex items-center text-xs">
                <span className="w-40 text-slate-600">Phát triển (2 - 3 năm):</span>
                <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden ml-2">
                  <div 
                    className="bg-indigo-500 h-full rounded-full" 
                    style={{ width: `${Math.min(100, (((currentBenchmark.freshGradAvg + currentBenchmark.experiencedAvg) / 2) / 35) * 100)}%` }}
                  ></div>
                </div>
                <span className="w-20 text-right font-bold text-slate-800 ml-2 tabular-nums">
                  {Math.round((currentBenchmark.freshGradAvg + currentBenchmark.experiencedAvg) / 2)} tr
                </span>
              </div>

              <div className="flex items-center text-xs">
                <span className="w-40 text-slate-600">Vững vàng (3+ năm):</span>
                <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden ml-2">
                  <div 
                    className="bg-purple-600 h-full rounded-full" 
                    style={{ width: `${Math.min(100, (currentBenchmark.experiencedAvg / 35) * 100)}%` }}
                  ></div>
                </div>
                <span className="w-20 text-right font-bold text-slate-800 ml-2 tabular-nums">
                  {currentBenchmark.experiencedAvg} tr
                </span>
              </div>
            </div>
          </div>

          {/* Industry Insight */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
            <span className="font-bold text-slate-900 block">Đặc thù thị trường:</span>
            <p className="leading-relaxed">{currentBenchmark.notes}</p>
          </div>
        </div>

        {/* Right Column: Salary Negotiation Tips & Safe Guidance */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4 text-xs">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900">
                Bí quyết đàm phán lương cho sinh viên mới ra trường
              </h3>
            </div>

            <ul className="space-y-2.5 text-slate-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Nêu khoảng lương thay vì một con số cứng:</strong> Ví dụ thay vì nói "Em muốn 8 triệu", hãy trao đổi "Khoảng mong muốn của em là từ 7 - 9 triệu tùy theo chế độ phụ cấp và đào tạo".
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Lương thử việc tối thiểu 85%:</strong> Theo Bộ luật Lao động Việt Nam, tiền lương của người lao động trong thời gian thử việc do hai bên thỏa thuận nhưng ít nhất phải bằng 85% mức lương của công việc đó.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Tính cả phúc lợi phi tiền mặt:</strong> Xem xét hỗ trợ ăn trưa, vé gửi xe, máy tính làm việc và đặc biệt là cơ hội được mentor chỉ dạy trực tiếp.
                </span>
              </li>
            </ul>
          </div>

          {/* Anti-Scam Salary Warning Callout */}
          <div className="bg-rose-50 border border-rose-200 p-5 rounded-2xl space-y-2 text-xs">
            <div className="flex items-center gap-2 text-rose-800 font-bold">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>Cảnh giác với "Bẫy lương ảo"</span>
            </div>
            <p className="text-rose-700 leading-relaxed">
              Nếu bạn thấy tin tuyển dụng quảng cáo: <em>"Không cần bằng cấp, làm tại nhà 2 tiếng/ngày, lương 20 - 50 triệu/tháng"</em>, đây <strong>100% là chiêu trò lừa đảo</strong> để dụ nạp tiền làm nhiệm vụ hoặc cướp tài khoản ngân hàng. Hãy luôn đối chiếu với mặt bằng thực tế ở bảng trên!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
