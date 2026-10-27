import React, { useState } from 'react';
import { 
  Star, 
  MessageSquare, 
  ThumbsUp, 
  Building, 
  ShieldCheck, 
  Plus, 
  Search, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { CompanyReview } from '../types';

interface RecruitmentReviewsProps {
  reviews: CompanyReview[];
  onAddReview: (review: Omit<CompanyReview, 'id' | 'date'>) => void;
}

export const RecruitmentReviews: React.FC<RecruitmentReviewsProps> = ({
  reviews,
  onAddReview,
}) => {
  const [filterQuery, setFilterQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  // New review form state
  const [companyName, setCompanyName] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [rating, setRating] = useState(5);
  const [transparencyRating, setTransparencyRating] = useState(5);
  const [interviewExperienceRating, setInterviewExperienceRating] = useState(5);
  const [comment, setComment] = useState('');
  const [pros, setPros] = useState('');
  const [cons, setCons] = useState('');
  const [authorAlias, setAuthorAlias] = useState('');

  const filteredReviews = reviews.filter((rev) => {
    if (!filterQuery.trim()) return true;
    const q = filterQuery.toLowerCase();
    return (
      rev.companyName.toLowerCase().includes(q) ||
      rev.jobRole.toLowerCase().includes(q) ||
      rev.comment.toLowerCase().includes(q)
    );
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddReview({
      companyName,
      jobRole,
      rating,
      transparencyRating,
      interviewExperienceRating,
      comment,
      pros,
      cons,
      isVerifiedApplicant: true,
      authorAlias: authorAlias || 'Ứng viên ẩn danh',
    });

    // Reset
    setCompanyName('');
    setJobRole('');
    setComment('');
    setPros('');
    setCons('');
    setAuthorAlias('');
    setModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-100/70 px-3 py-1 rounded-md">
            <Star className="w-3.5 h-3.5 fill-blue-600" />
            <span>Cộng đồng ứng viên chia sẻ thực tế</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Đánh Giá Trải Nghiệm Tuyển Dụng
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            Xem trải nghiệm thực tế từ các ứng viên đã tham gia phỏng vấn: mức độ rõ ràng của thông tin lương thưởng, thái độ tiếp đón của nhà tuyển dụng và văn hóa doanh nghiệp.
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Viết đánh giá nhà tuyển dụng</span>
        </button>
      </div>

      {/* Search Filter Bar */}
      <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2 max-w-md">
        <Search className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
        <input
          type="text"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          placeholder="Tìm theo tên công ty hoặc vị trí đã phỏng vấn..."
          className="w-full text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none bg-transparent"
        />
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredReviews.map((rev) => (
          <article
            key={rev.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all space-y-4"
          >
            <div className="space-y-3">
              {/* Header: Company & Role */}
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-1">
                    {rev.companyName}
                  </h3>
                  <div className="flex items-center text-amber-500 text-xs font-bold shrink-0">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
                    <span>{rev.rating}.0</span>
                  </div>
                </div>

                <p className="text-xs font-semibold text-blue-700">
                  {rev.jobRole}
                </p>

                {/* Sub-ratings */}
                <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-1">
                  <span>Minh bạch: <strong>{rev.transparencyRating}/5</strong></span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>Thái độ PV: <strong>{rev.interviewExperienceRating}/5</strong></span>
                </div>
              </div>

              {/* Comment text */}
              <p className="text-xs text-slate-700 leading-relaxed italic">
                "{rev.comment}"
              </p>

              {/* Pros & Cons */}
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                {rev.pros && (
                  <div>
                    <span className="font-bold text-emerald-800 block text-[11px]">Ưu điểm:</span>
                    <span className="text-slate-600">{rev.pros}</span>
                  </div>
                )}
                {rev.cons && (
                  <div>
                    <span className="font-bold text-amber-800 block text-[11px]">Cần lưu ý:</span>
                    <span className="text-slate-600">{rev.cons}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Footer info: Author & verified check */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span className="font-medium text-slate-700 flex items-center gap-1">
                {rev.isVerifiedApplicant && (
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                )}
                <span>{rev.authorAlias}</span>
              </span>
              <span>{rev.date}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Add Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Chia sẻ trải nghiệm ứng tuyển & phỏng vấn
            </h3>
            <p className="text-xs text-slate-500">
              Đánh giá của bạn giúp sinh viên và cộng đồng người tìm việc nắm rõ độ tin cậy và minh bạch của doanh nghiệp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Tên doanh nghiệp tuyển dụng *
                </label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Ví dụ: Công ty Công nghệ An Khang Soft..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Vị trí bạn đã ứng tuyển / phỏng vấn *
                </label>
                <input
                  type="text"
                  required
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  placeholder="Ví dụ: Thực tập sinh Frontend, Nhân viên kho bãi..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Đánh giá chung</label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full px-2 py-1.5 border border-slate-300 rounded-lg"
                  >
                    <option value={5}>5 sao - Xuất sắc</option>
                    <option value={4}>4 sao - Tốt</option>
                    <option value={3}>3 sao - Bình thường</option>
                    <option value={2}>2 sao - Kém</option>
                    <option value={1}>1 sao - Rất tệ</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Minh bạch lương</label>
                  <select
                    value={transparencyRating}
                    onChange={(e) => setTransparencyRating(Number(e.target.value))}
                    className="w-full px-2 py-1.5 border border-slate-300 rounded-lg"
                  >
                    <option value={5}>5/5 - Rất rõ ràng</option>
                    <option value={4}>4/5 - Tốt</option>
                    <option value={3}>3/5 - Tạm được</option>
                    <option value={1}>1/5 - Mập mờ</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Thái độ phỏng vấn</label>
                  <select
                    value={interviewExperienceRating}
                    onChange={(e) => setInterviewExperienceRating(Number(e.target.value))}
                    className="w-full px-2 py-1.5 border border-slate-300 rounded-lg"
                  >
                    <option value={5}>5/5 - Lịch sự, tôn trọng</option>
                    <option value={4}>4/5 - Thân thiện</option>
                    <option value={3}>3/5 - Bình thường</option>
                    <option value={1}>1/5 - Thiếu tôn trọng</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Nhận xét chi tiết về quy trình tuyển dụng *
                </label>
                <textarea
                  rows={3}
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Chia sẻ về câu hỏi phỏng vấn, thời gian trả kết quả, có bị yêu cầu nộp phí cọc không..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Điểm cộng</label>
                  <input
                    type="text"
                    value={pros}
                    onChange={(e) => setPros(e.target.value)}
                    placeholder="Ví dụ: Đón tiếp niềm nở, hỏi đúng chuyên môn..."
                    className="w-full px-2.5 py-1.5 border border-slate-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Điểm trừ / Góp ý</label>
                  <input
                    type="text"
                    value={cons}
                    onChange={(e) => setCons(e.target.value)}
                    placeholder="Ví dụ: Phản hồi kết quả hơi chậm..."
                    className="w-full px-2.5 py-1.5 border border-slate-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Biệt danh của bạn (có thể để ẩn danh)
                </label>
                <input
                  type="text"
                  value={authorAlias}
                  onChange={(e) => setAuthorAlias(e.target.value)}
                  placeholder="Ví dụ: Cựu sinh viên K18, Ứng viên giấu tên..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 font-medium"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700"
                >
                  Đăng đánh giá
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
