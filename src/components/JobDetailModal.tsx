import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  DollarSign, 
  Clock, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Bookmark, 
  BookmarkCheck, 
  Phone, 
  Mail, 
  Building, 
  AlertTriangle,
  Globe,
  Upload,
  FileCheck
} from 'lucide-react';
import { Job, CandidateProfile } from '../types';

interface JobDetailModalProps {
  job: Job | null;
  onClose: () => void;
  candidateProfile: CandidateProfile;
  isSaved: boolean;
  onToggleSave: (jobId: string) => void;
  onSubmitApplication: (applicationData: {
    jobId: string;
    jobTitle: string;
    companyName: string;
    candidateName: string;
    candidateEmail: string;
    candidatePhone: string;
    portfolioUrl: string;
    introNote: string;
    cvFileName: string;
  }) => void;
  hasApplied: boolean;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({
  job,
  onClose,
  candidateProfile,
  isSaved,
  onToggleSave,
  onSubmitApplication,
  hasApplied,
}) => {
  if (!job) return null;

  const [activeTab, setActiveTab] = useState<'details' | 'apply'>('details');
  const [candidateName, setCandidateName] = useState(candidateProfile.fullName || '');
  const [candidateEmail, setCandidateEmail] = useState(candidateProfile.email || '');
  const [candidatePhone, setCandidatePhone] = useState(candidateProfile.phone || '');
  const [portfolioUrl, setPortfolioUrl] = useState(candidateProfile.portfolioUrl || '');
  const [introNote, setIntroNote] = useState(
    'Em là sinh viên mới tốt nghiệp rất quan tâm đến vị trí này của Quý công ty. Với tinh thần học hỏi cao và các kiến thức đã tích lũy trong trường, em mong muốn có cơ hội được tham gia phỏng vấn và cống hiến cho công ty.'
  );
  const [cvFileName, setCvFileName] = useState('CV_NguyenVanHung_ChuanHoa.pdf');
  const [agreedNoFee, setAgreedNoFee] = useState(true);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedNoFee) {
      alert('Vui lòng xác nhận quy tắc không nộp tiền cọc để bảo vệ an toàn!');
      return;
    }

    onSubmitApplication({
      jobId: job.id,
      jobTitle: job.title,
      companyName: job.company,
      candidateName,
      candidateEmail,
      candidatePhone,
      portfolioUrl,
      introNote,
      cvFileName,
    });

    setSubmittedSuccess(true);
    setTimeout(() => {
      // Keep state clear
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-md">
              {job.category}
            </span>
            {job.noFeeCommitment && (
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-md flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Không thu phí</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(job.id)}
              className={`p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors ${
                isSaved ? 'text-amber-600' : ''
              }`}
              title={isSaved ? 'Đã lưu' : 'Lưu tin tuyển dụng'}
            >
              {isSaved ? (
                <BookmarkCheck className="w-5 h-5 fill-amber-500 text-amber-500" />
              ) : (
                <Bookmark className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Main Title & Key Specs */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
              {job.title}
            </h2>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-700">
              <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-slate-500" />
                <span>{job.company}</span>
              </span>
              <span className="text-emerald-700 font-bold text-base tabular-nums">
                {job.salaryMin} – {job.salaryMax} triệu VNĐ / tháng
              </span>
            </div>

            {/* Unboxed metadata row */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{job.location} ({job.address})</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{job.type}</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1 font-medium text-slate-800">
                <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                <span>{job.experience}</span>
              </span>
            </div>
          </div>

          {/* Tab buttons */}
          <div className="flex items-center gap-2 border-b border-slate-200">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-2.5 text-xs sm:text-sm font-semibold transition-colors border-b-2 ${
                activeTab === 'details'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Chi tiết công việc & Quyền lợi
            </button>
            <button
              onClick={() => setActiveTab('apply')}
              className={`pb-2.5 text-xs sm:text-sm font-semibold transition-colors border-b-2 ${
                activeTab === 'apply'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Ứng tuyển trực tiếp {hasApplied && '(Đã nộp)'}
            </button>
          </div>

          {activeTab === 'details' ? (
            <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
              {/* Fresh grad & Zero exp callout */}
              {job.suitableForFreshGrads && (
                <div className="bg-blue-50/80 border border-blue-200 p-4 rounded-xl flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5 text-xs">
                    <p className="font-bold text-blue-900">
                      Vị trí lý tưởng cho sinh viên mới ra trường và người chưa có kinh nghiệm
                    </p>
                    <p className="text-blue-700">
                      Doanh nghiệp cam kết quy trình tuyển dụng trực tiếp, đào tạo chỉ việc từ bước cơ bản và không thu bất kỳ khoản phí cọc hay lệ phí hồ sơ nào.
                    </p>
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Mô tả tổng quan vị trí
                </h4>
                <p className="text-slate-700">{job.description}</p>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Nhiệm vụ & Trách nhiệm chính
                </h4>
                <ul className="space-y-1.5 list-disc list-inside text-slate-700">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Yêu cầu ứng viên
                </h4>
                <ul className="space-y-1.5 list-disc list-inside text-slate-700">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Quyền lợi & Chế độ đãi ngộ
                </h4>
                <ul className="space-y-1.5 list-disc list-inside text-slate-700">
                  {job.benefits.map((ben, i) => (
                    <li key={i}>{ben}</li>
                  ))}
                </ul>
              </div>

              {/* Company contact info */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                <h4 className="font-bold text-slate-900">Thông tin liên hệ trực tiếp của doanh nghiệp:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span>Email: <strong>{job.contactEmail}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span>Hotline: <strong>{job.contactPhone}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Direct Application Form */
            <div>
              {submittedSuccess || hasApplied ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-900">
                    Ứng tuyển thành công!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto">
                    Hồ sơ của bạn đã được chuyển thẳng tới bộ phận nhân sự của <strong>{job.company}</strong> mà không qua bất kỳ khâu trung gian nào. Nhà tuyển dụng sẽ phản hồi qua email hoặc số điện thoại trong vòng 1-3 ngày làm việc.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors mt-2"
                  >
                    Đóng cửa sổ
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4">
                  <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Lưu ý bảo vệ ứng viên:</strong> Doanh nghiệp này cam kết 100% không thu bất kỳ khoản phí nào. Tuyệt đối từ chối nếu có bất kỳ yêu cầu chuyển tiền cọc hoặc nạp tiền làm nhiệm vụ.
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Họ và tên của bạn *
                      </label>
                      <input
                        type="text"
                        required
                        value={candidateName}
                        onChange={(e) => setCandidateName(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Số điện thoại liên hệ *
                      </label>
                      <input
                        type="tel"
                        required
                        value={candidatePhone}
                        onChange={(e) => setCandidatePhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email nhận thông báo phỏng vấn *
                      </label>
                      <input
                        type="email"
                        required
                        value={candidateEmail}
                        onChange={(e) => setCandidateEmail(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                        <Globe className="w-3.5 h-3.5 text-blue-600" />
                        <span>Link Portfolio / Google Sites (nếu có)</span>
                      </label>
                      <input
                        type="url"
                        value={portfolioUrl}
                        onChange={(e) => setPortfolioUrl(e.target.value)}
                        placeholder="https://sites.google.com/view/ten-ban"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Attached CV */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Hồ sơ CV đính kèm
                    </label>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <FileCheck className="w-5 h-5 text-blue-600 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-slate-800 truncate">
                          {cvFileName}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          Hồ sơ chuẩn hóa đã sẵn sàng gửi trực tiếp
                        </p>
                      </div>
                      <label className="cursor-pointer px-2.5 py-1 text-xs bg-white border border-slate-300 rounded-md hover:bg-slate-50 font-medium text-slate-700 flex items-center gap-1">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Đổi file CV</span>
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              setCvFileName(e.target.files[0].name);
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>

                  {/* Cover letter / Intro */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Lời giới thiệu / Thư ứng tuyển ngắn
                    </label>
                    <textarea
                      rows={3}
                      value={introNote}
                      onChange={(e) => setIntroNote(e.target.value)}
                      placeholder="Nêu bật lý do bạn phù hợp, tinh thần sẵn sàng học hỏi..."
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  {/* Anti-fraud agreement checkbox */}
                  <label className="flex items-start gap-2 pt-2 cursor-pointer text-xs text-slate-700">
                    <input
                      type="checkbox"
                      checked={agreedNoFee}
                      onChange={(e) => setAgreedNoFee(e.target.checked)}
                      className="mt-0.5 rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span>
                      Tôi hiểu rằng việc ứng tuyển là <strong>hoàn toàn miễn phí</strong>. Nếu doanh nghiệp yêu cầu đặt cọc giữ chỗ hay nạp tiền, tôi sẽ từ chối và báo cáo ngay cho ban quản trị.
                    </span>
                  </label>

                  <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setActiveTab('details')}
                      className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800"
                    >
                      Quay lại xem chi tiết
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors shadow-sm flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Gửi hồ sơ trực tiếp tới nhà tuyển dụng</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Hạn nộp hồ sơ: <strong>{job.deadline}</strong>
          </span>

          <div className="flex items-center gap-3">
            {activeTab === 'details' && (
              <button
                onClick={() => setActiveTab('apply')}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
              >
                {hasApplied ? 'Xem lại hồ sơ đã nộp' : 'Ứng tuyển ngay bây giờ'}
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
