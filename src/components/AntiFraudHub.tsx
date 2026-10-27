import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  PhoneCall, 
  Send, 
  FileWarning, 
  Search,
  Lock,
  Eye,
  Check
} from 'lucide-react';

export const AntiFraudHub: React.FC = () => {
  // Scam detector checklist state
  const [checkedFlags, setCheckedFlags] = useState<{ [key: string]: boolean }>({
    depositMoney: false,
    appTask: false,
    telegramOnly: false,
    keepOriginalId: false,
    tooHighSalary: false,
    noTaxId: false,
    vagueAddress: false,
  });

  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportCompanyName, setReportCompanyName] = useState('');
  const [reportDetails, setReportDetails] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);

  const toggleFlag = (key: string) => {
    setCheckedFlags(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const activeFlagsCount = Object.values(checkedFlags).filter(Boolean).length;

  let riskLevel: 'safe' | 'warning' | 'danger' = 'safe';
  if (activeFlagsCount === 0) {
    riskLevel = 'safe';
  } else if (activeFlagsCount <= 1) {
    riskLevel = 'warning';
  } else {
    riskLevel = 'danger';
  }

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReportSubmitted(true);
    setTimeout(() => {
      setReportCompanyName('');
      setReportDetails('');
      setReportSubmitted(false);
      setReportModalOpen(false);
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner with Verification Image */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8 p-6 sm:p-8 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Cẩm nang bảo vệ ứng viên & An toàn thông tin</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Phòng Tránh Lừa Đảo Tuyển Dụng & Bảo Vệ Quyền Lợi
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
              Sinh viên mới ra trường và người chưa có kinh nghiệm thường là đối tượng dễ bị các đối tượng lừa đảo nhắm tới với các chiêu trò tinh vi. Nền tảng "Nối cơ hội – Đổi cuộc đời" cam kết loại bỏ các bên trung gian mờ ám, kết nối trực tiếp với doanh nghiệp thật.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                Nguyên tắc 3 KHÔNG khi tìm việc
              </span>
              <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                Bộ công cụ tự kiểm tra tin giả
              </span>
              <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                Đường dây nóng hỗ trợ 24/7
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 h-48 lg:h-full relative overflow-hidden bg-slate-100">
            <img
              src="/src/assets/images/safe_job_verification_1792587979567.jpg"
              alt="Màn hình hệ thống xác thực việc làm an toàn và chứng chỉ bảo mật"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white/90 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Interactive Tool: Công cụ kiểm tra dấu hiệu lừa đảo */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-bold text-slate-900">
              Công Cụ Đánh Giá Dấu Hiệu Đáng Ngờ Của Tin Tuyển Dụng
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            Bạn đang phân vân về một lời mời tuyển dụng nhận được trên mạng xã hội? Hãy tick chọn các dấu hiệu bên dưới để hệ thống phân tích mức độ an toàn:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Checkboxes List */}
          <div className="lg:col-span-7 space-y-3">
            {[
              {
                id: 'depositMoney',
                title: 'Yêu cầu chuyển tiền trước (Tiền cọc, đồng phục, phí làm thẻ)',
                desc: 'Nhà tuyển dụng yêu cầu nộp vài trăm nghìn đến vài triệu để giữ chỗ hoặc may đồng phục trước ngày đi làm.'
              },
              {
                id: 'appTask',
                title: 'Yêu cầu nạp tiền vào app / website để "làm nhiệm vụ sinh lời"',
                desc: 'Hứa hẹn hoàn tiền gốc + hoa hồng khi bấm like video, đánh giá sản phẩm Shopee, Lazada, TikTok.'
              },
              {
                id: 'keepOriginalId',
                title: 'Yêu cầu giữ lại bản gốc Căn cước công dân (CCCD / CMND)',
                desc: 'Vi phạm nghiêm trọng pháp luật. Doanh nghiệp chỉ có quyền đối chiếu bản gốc hoặc nhận bản photo công chứng.'
              },
              {
                id: 'telegramOnly',
                title: 'Chỉ liên lạc qua Telegram, Zalo cá nhân, không có email công ty',
                desc: 'Người tuyển dụng từ chối phỏng vấn trực tiếp tại trụ sở, dùng tài khoản ảo không rõ danh tính.'
              },
              {
                id: 'tooHighSalary',
                title: 'Mức lương cao bất thường so với yêu cầu (Việc nhẹ lương 30-50 triệu)',
                desc: 'Không yêu cầu bằng cấp, kỹ năng hay kinh nghiệm nhưng hứa hẹn thu nhập cao phi thực tế.'
              },
              {
                id: 'vagueAddress',
                title: 'Địa chỉ công ty mập mờ hoặc hẹn phỏng vấn tại quán cà phê',
                desc: 'Không có biển hiệu công ty, không tra cứu được mã số thuế trên Cổng thông tin Quốc gia.'
              }
            ].map(item => (
              <label
                key={item.id}
                onClick={() => toggleFlag(item.id)}
                className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  checkedFlags[item.id]
                    ? 'border-rose-300 bg-rose-50/70'
                    : 'border-slate-200 hover:bg-slate-50 bg-white'
                }`}
              >
                <input
                  type="checkbox"
                  checked={checkedFlags[item.id]}
                  onChange={() => {}}
                  className="mt-1 rounded text-rose-600 focus:ring-rose-500"
                />
                <div className="space-y-0.5">
                  <p className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </label>
            ))}
          </div>

          {/* Results Gauge / Verdict */}
          <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Kết quả đánh giá rủi ro
            </h4>

            {riskLevel === 'safe' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-emerald-700 font-bold text-base">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                  <span>Chưa phát hiện dấu hiệu lừa đảo điển hình</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hiện bạn chưa tick chọn dấu hiệu cảnh báo nào. Tuy nhiên, hãy luôn duy trì sự tỉnh táo: luôn ký kết hợp đồng lao động rõ ràng và không bao giờ giao chìa khóa tài khoản ngân hàng hoặc mã OTP cho bất kỳ ai.
                </p>
              </div>
            )}

            {riskLevel === 'warning' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-amber-700 font-bold text-base">
                  <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                  <span>Cảnh báo: Có 1 dấu hiệu nghi vấn!</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tin tuyển dụng này có dấu hiệu thiếu minh bạch. Bạn nên yêu cầu cung cấp Mã số thuế doanh nghiệp, địa chỉ văn phòng cụ thể và kiểm tra trên trang <strong>dangkykinhdoanh.gov.vn</strong> trước khi nộp hồ sơ.
                </p>
              </div>
            )}

            {riskLevel === 'danger' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-rose-700 font-bold text-base">
                  <ShieldAlert className="w-6 h-6 text-rose-600 shrink-0" />
                  <span>NGUY CƠ LỪA ĐẢO CỰC KỲ CAO ({activeFlagsCount} dấu hiệu)!</span>
                </div>
                <p className="text-xs text-rose-800 leading-relaxed font-medium bg-rose-100/60 p-3 rounded-xl border border-rose-200">
                  <strong>Khuyến cáo khẩn cấp:</strong> Tuyệt đối KHÔNG chuyển bất kỳ khoản tiền nào, KHÔNG gửi ảnh hai mặt CCCD và KHÔNG tham gia các nhóm Telegram yêu cầu nạp tiền. Hãy dừng ngay việc liên lạc để bảo vệ bản thân!
                </p>
              </div>
            )}

            <div className="pt-3 border-t border-slate-200 space-y-2">
              <button
                onClick={() => setReportModalOpen(true)}
                className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <FileWarning className="w-4 h-4" />
                <span>Báo cáo tin tuyển dụng lừa đảo</span>
              </button>
              <p className="text-[11px] text-center text-slate-400">
                Ban quản trị sẽ xác minh và cảnh báo cộng đồng trong 24h
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Cạm bẫy lừa đảo phổ biến nhất */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          6 Cạm Bẫy Tuyển Dụng Phổ Biến Cần Cảnh Giác
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-700">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-rose-600 block">Cạm bẫy 01</span>
            <h4 className="font-bold text-slate-900 text-sm">Thu phí hồ sơ, tiền cọc đồng phục</h4>
            <p className="text-slate-600 leading-relaxed">
              Các đối tượng mạo danh công ty lớn, hứa hẹn vào làm ngay nhưng bắt ứng viên chuyển trước 300k - 2 triệu để làm hồ sơ, cấp thẻ nhân viên. Sau khi nhận tiền, họ lập tức chặn số.
            </p>
            <div className="pt-1 text-emerald-700 font-semibold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>Công ty chuẩn: Không bao giờ thu tiền cọc</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-rose-600 block">Cạm bẫy 02</span>
            <h4 className="font-bold text-slate-900 text-sm">Tuyển CTV like video, giật đơn sàn TMĐT</h4>
            <p className="text-slate-600 leading-relaxed">
              Đánh trúng tâm lý sinh viên muốn kiếm tiền online. Ban đầu cho rút vài chục nghìn để tạo niềm tin, sau đó yêu cầu nạp tiền hàng chục triệu để "nâng cấp đơn hàng" rồi chiếm đoạt trắng trợn.
            </p>
            <div className="pt-1 text-emerald-700 font-semibold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>Nguyên tắc: Tuyệt đối không nạp tiền làm nhiệm vụ</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-rose-600 block">Cạm bẫy 03</span>
            <h4 className="font-bold text-slate-900 text-sm">Bán hàng đa cấp biến tướng</h4>
            <p className="text-slate-600 leading-relaxed">
              Quảng cáo tuyển nhân viên văn phòng, nhập liệu hoặc lễ tân, nhưng khi đến phỏng vấn lại dẫn dụ tham gia các buổi hội thảo làm giàu, bắt mua gói sản phẩm giá cao để trở thành đại lý.
            </p>
            <div className="pt-1 text-emerald-700 font-semibold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>Cảnh giác: Công việc đòi hỏi mua hàng để vào làm</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-rose-600 block">Cạm bẫy 04</span>
            <h4 className="font-bold text-slate-900 text-sm">Thu giữ Căn cước công dân gốc</h4>
            <p className="text-slate-600 leading-relaxed">
              Lợi dụng sự thiếu hiểu biết của sinh viên để thu giữ giấy tờ tùy thân gốc, sau đó ép buộc làm việc tăng ca không lương hoặc sử dụng CCCD để vay tiền qua app đen trực tuyến.
            </p>
            <div className="pt-1 text-emerald-700 font-semibold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>Chỉ cung cấp bản photo công chứng, không đưa bản gốc</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-rose-600 block">Cạm bẫy 05</span>
            <h4 className="font-bold text-slate-900 text-sm">Chiêu dụ làm việc tại biên giới / Campuchia</h4>
            <p className="text-slate-600 leading-relaxed">
              Hứa hẹn sang nước ngoài làm "nhân viên kỹ thuật IT, chăm sóc khách hàng game" lương $1,500 - $3,000/tháng, bao ăn ở vé máy bay. Thực chất là đưa vào các đường dây lừa đảo cưỡng bức lao động.
            </p>
            <div className="pt-1 text-emerald-700 font-semibold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>Cực kỳ nguy hiểm: Không đi theo lời rủ rê xuất ngoại mờ ám</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-rose-600 block">Cạm bẫy 06</span>
            <h4 className="font-bold text-slate-900 text-sm">Đánh cắp tài khoản ngân hàng & OTP</h4>
            <p className="text-slate-600 leading-relaxed">
              Gửi link tuyển dụng giả mạo ngân hàng hoặc yêu cầu quét mã QR, tải ứng dụng lạ (file .apk) để cài mã độc chiếm quyền điều khiển điện thoại và rút cạn tiền tiết kiệm.
            </p>
            <div className="pt-1 text-emerald-700 font-semibold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>Không cài app ngoài App Store / CH Play</span>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Hotline Assistance */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold">
            Cần Trợ Giúp Hoặc Xác Minh Doanh Nghiệp?
          </h3>
          <p className="text-xs sm:text-sm text-blue-200 max-w-xl leading-relaxed">
            Nếu bạn nghi ngờ một tin tuyển dụng nào đó hoặc cần hỗ trợ kiểm tra tính pháp lý của doanh nghiệp trước khi đi phỏng vấn, đội ngũ hỗ trợ cộng đồng của chúng tôi luôn sẵn sàng hỗ trợ miễn phí.
          </p>
        </div>
        <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
          <a
            href="tel:19008888"
            className="px-5 py-3 bg-white text-blue-950 font-bold text-xs sm:text-sm rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4 text-blue-600" />
            <span>Hotline: 1900 8888 (Miễn phí)</span>
          </a>
        </div>
      </div>

      {/* Report Modal */}
      {reportModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FileWarning className="w-5 h-5 text-rose-600" />
              <span>Gửi báo cáo tin tuyển dụng vi phạm</span>
            </h3>

            {reportSubmitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <p className="text-sm font-bold text-slate-900">Đã tiếp nhận báo cáo!</p>
                <p className="text-xs text-slate-500">
                  Cảm ơn bạn đã chung tay bảo vệ cộng đồng tìm việc làm an toàn.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReportSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Tên doanh nghiệp / Cá nhân khả nghi *
                  </label>
                  <input
                    type="text"
                    required
                    value={reportCompanyName}
                    onChange={(e) => setReportCompanyName(e.target.value)}
                    placeholder="Ví dụ: Công ty TNHH Tuyển dụng ABC..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Mô tả hành vi lừa đảo / bằng chứng liên hệ *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={reportDetails}
                    onChange={(e) => setReportDetails(e.target.value)}
                    placeholder="Mô tả cụ thể: Yêu cầu nạp tiền, link Telegram, số điện thoại, số tài khoản nhận tiền..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:outline-none leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setReportModalOpen(false)}
                    className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 font-medium"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-rose-600 text-white rounded-lg font-bold hover:bg-rose-700"
                  >
                    Gửi phản ánh ngay
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
