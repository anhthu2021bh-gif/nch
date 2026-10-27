import React, { useState, useMemo } from 'react';
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Clock, 
  GraduationCap, 
  Bookmark, 
  BookmarkCheck, 
  ShieldCheck, 
  CheckCircle, 
  Filter, 
  RotateCcw,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Job, IndustryCategory, ExperienceLevel, JobType } from '../types';
import { CATEGORIES_LIST } from '../data/categories';

interface JobSearchAndListProps {
  jobs: Job[];
  savedJobIds: string[];
  onToggleSaveJob: (jobId: string) => void;
  onSelectJob: (job: Job) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedLocation: string;
  setSelectedLocation: (loc: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onOpenCvBuilder: () => void;
}

export const JobSearchAndList: React.FC<JobSearchAndListProps> = ({
  jobs,
  savedJobIds,
  onToggleSaveJob,
  onSelectJob,
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
  searchQuery,
  setSearchQuery,
  onOpenCvBuilder,
}) => {
  const [selectedExperience, setSelectedExperience] = useState<string>('all');
  const [selectedSalary, setSelectedSalary] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [onlyTraining, setOnlyTraining] = useState<boolean>(false);
  const [showFiltersMobile, setShowFiltersMobile] = useState<boolean>(false);

  // Filtered jobs calculation
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Keyword search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = job.title.toLowerCase().includes(query);
        const matchCompany = job.company.toLowerCase().includes(query);
        const matchDesc = job.description.toLowerCase().includes(query);
        const matchReq = job.requirements.some(r => r.toLowerCase().includes(query));
        if (!matchTitle && !matchCompany && !matchDesc && !matchReq) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'all' && job.category !== selectedCategory) {
        return false;
      }

      // Location filter
      if (selectedLocation !== 'Tất cả địa điểm' && !job.location.includes(selectedLocation)) {
        return false;
      }

      // Experience filter
      if (selectedExperience !== 'all') {
        if (selectedExperience === 'no_exp' && job.experience !== 'Không yêu cầu kinh nghiệm') {
          return false;
        }
        if (selectedExperience === 'fresh_grad' && job.experience !== 'Dưới 1 năm / Mới tốt nghiệp' && job.experience !== 'Không yêu cầu kinh nghiệm') {
          return false;
        }
        if (selectedExperience === 'experienced' && (job.experience === 'Không yêu cầu kinh nghiệm' || job.experience === 'Dưới 1 năm / Mới tốt nghiệp')) {
          return false;
        }
      }

      // Salary filter
      if (selectedSalary !== 'all') {
        if (selectedSalary === 'under_7' && job.salaryMax > 7) return false;
        if (selectedSalary === '7_12' && (job.salaryMin > 12 || job.salaryMax < 7)) return false;
        if (selectedSalary === '12_20' && (job.salaryMin > 20 || job.salaryMax < 12)) return false;
        if (selectedSalary === 'above_20' && job.salaryMax < 20) return false;
      }

      // Job Type filter
      if (selectedType !== 'all') {
        if (selectedType === 'full_time' && job.type !== 'Toàn thời gian') return false;
        if (selectedType === 'part_time' && job.type !== 'Bán thời gian') return false;
        if (selectedType === 'intern' && job.type !== 'Thực tập') return false;
      }

      // Only training provided
      if (onlyTraining && !job.trainingProvided) {
        return false;
      }

      return true;
    });
  }, [jobs, searchQuery, selectedCategory, selectedLocation, selectedExperience, selectedSalary, selectedType, onlyTraining]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedLocation('Tất cả địa điểm');
    setSelectedExperience('all');
    setSelectedSalary('all');
    setSelectedType('all');
    setOnlyTraining(false);
  };

  const hasActiveFilters = 
    searchQuery !== '' || 
    selectedCategory !== 'all' || 
    selectedLocation !== 'Tất cả địa điểm' || 
    selectedExperience !== 'all' || 
    selectedSalary !== 'all' || 
    selectedType !== 'all' || 
    onlyTraining;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 5.2 Phân loại ngành nghề - 7 Khối ngành chính */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Phân loại theo khối ngành
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Tiếp cận các vị trí tuyển dụng trực tiếp phù hợp với chuyên môn đào tạo
            </p>
          </div>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
            >
              <span>Xem tất cả ngành ({jobs.length})</span>
            </button>
          )}
        </div>

        {/* Category Horizontal Scroll / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
            }`}
          >
            <span className="text-xs font-bold leading-snug">Tất cả ngành nghề</span>
            <span className={`text-[11px] mt-2 ${selectedCategory === 'all' ? 'text-blue-100' : 'text-slate-400'}`}>
              {jobs.length} vị trí
            </span>
          </button>

          {CATEGORIES_LIST.map((cat) => {
            const count = jobs.filter((j) => j.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(isSelected ? 'all' : cat.id)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                }`}
              >
                <span className="text-xs font-bold leading-snug line-clamp-2">
                  {cat.shortName}
                </span>
                <span className={`text-[11px] mt-2 ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                  {count} tin tuyển
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Filter Sidebar + Job Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Filter Column (Desktop) */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-500" />
                <span className="text-sm font-bold text-slate-900">Bộ lọc nâng cao</span>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1 font-medium"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Đặt lại</span>
                </button>
              )}
            </div>

            <div className="space-y-5 pt-4">
              {/* Kinh nghiệm (Trọng tâm cho sinh viên / người chưa có kinh nghiệm) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Yêu cầu kinh nghiệm
                </label>
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="exp"
                      checked={selectedExperience === 'all'}
                      onChange={() => setSelectedExperience('all')}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span>Tất cả mức kinh nghiệm</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-emerald-800 font-semibold bg-emerald-50/70 p-1.5 rounded cursor-pointer">
                    <input
                      type="radio"
                      name="exp"
                      checked={selectedExperience === 'no_exp'}
                      onChange={() => setSelectedExperience('no_exp')}
                      className="text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>Không yêu cầu kinh nghiệm</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="exp"
                      checked={selectedExperience === 'fresh_grad'}
                      onChange={() => setSelectedExperience('fresh_grad')}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span>Dưới 1 năm / Mới tốt nghiệp</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="exp"
                      checked={selectedExperience === 'experienced'}
                      onChange={() => setSelectedExperience('experienced')}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span>Có từ 1 - 2 năm kinh nghiệm</span>
                  </label>
                </div>
              </div>

              {/* Mức lương */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Khoảng mức lương (tháng)
                </label>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="salary"
                      checked={selectedSalary === 'all'}
                      onChange={() => setSelectedSalary('all')}
                      className="text-blue-600"
                    />
                    <span>Tất cả mức lương</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="salary"
                      checked={selectedSalary === 'under_7'}
                      onChange={() => setSelectedSalary('under_7')}
                      className="text-blue-600"
                    />
                    <span>Dưới 7 triệu VNĐ</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="salary"
                      checked={selectedSalary === '7_12'}
                      onChange={() => setSelectedSalary('7_12')}
                      className="text-blue-600"
                    />
                    <span>7 – 12 triệu VNĐ</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="salary"
                      checked={selectedSalary === '12_20'}
                      onChange={() => setSelectedSalary('12_20')}
                      className="text-blue-600"
                    />
                    <span>12 – 20 triệu VNĐ</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="salary"
                      checked={selectedSalary === 'above_20'}
                      onChange={() => setSelectedSalary('above_20')}
                      className="text-blue-600"
                    />
                    <span>Trên 20 triệu VNĐ</span>
                  </label>
                </div>
              </div>

              {/* Hình thức làm việc */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Hình thức làm việc
                </label>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      checked={selectedType === 'all'}
                      onChange={() => setSelectedType('all')}
                      className="text-blue-600"
                    />
                    <span>Tất cả hình thức</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      checked={selectedType === 'full_time'}
                      onChange={() => setSelectedType('full_time')}
                      className="text-blue-600"
                    />
                    <span>Toàn thời gian (Full-time)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      checked={selectedType === 'part_time'}
                      onChange={() => setSelectedType('part_time')}
                      className="text-blue-600"
                    />
                    <span>Bán thời gian (Part-time)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      checked={selectedType === 'intern'}
                      onChange={() => setSelectedType('intern')}
                      className="text-blue-600"
                    />
                    <span>Thực tập sinh (Internship)</span>
                  </label>
                </div>
              </div>

              {/* Cam kết hỗ trợ đặc biệt */}
              <div className="pt-2 border-t border-slate-100">
                <label className="flex items-start gap-2.5 text-xs text-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={onlyTraining}
                    onChange={(e) => setOnlyTraining(e.target.checked)}
                    className="mt-0.5 rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span>Chỉ hiện việc có kèm <strong>Đào tạo từ đầu (On-the-job training)</strong></span>
                </label>
              </div>
            </div>
          </div>

          {/* Quick Callout for CV Creation */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-5 rounded-2xl shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-300" />
              <h3 className="text-sm font-bold">Chưa có kinh nghiệm?</h3>
            </div>
            <p className="text-xs text-blue-100 leading-relaxed">
              Đừng lo lắng! Ứng dụng cung cấp công cụ hướng dẫn viết CV dành riêng cho sinh viên và người mới đi làm lần đầu.
            </p>
            <button
              onClick={onOpenCvBuilder}
              className="w-full py-2 bg-white text-blue-800 hover:bg-blue-50 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Tạo CV mẫu ngay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>

        {/* Right Job Results Column */}
        <main className="lg:col-span-9 space-y-4">
          {/* Results Summary Bar */}
          <div className="flex items-center justify-between pb-2 text-xs sm:text-sm text-slate-500">
            <div>
              Hiển thị <span className="font-bold text-slate-900 tabular-nums">{filteredJobs.length}</span> cơ hội việc làm minh bạch
              {selectedCategory !== 'all' && (
                <span> trong <strong>{selectedCategory}</strong></span>
              )}
            </div>
            <div className="text-slate-400 text-xs hidden sm:block">
              Cập nhật trực tiếp từ nhà tuyển dụng
            </div>
          </div>

          {/* Jobs Listing */}
          {filteredJobs.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">
                  Không tìm thấy việc làm phù hợp
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Hãy thử nới lỏng các tiêu chí lọc như mức lương, địa điểm hoặc xóa từ khóa tìm kiếm để xem thêm nhiều cơ hội.
                </p>
              </div>
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Xóa toàn bộ bộ lọc</span>
              </button>
            </div>
          ) : (
            <div className="space-y-3.5">
              {filteredJobs.map((job) => {
                const isSaved = savedJobIds.includes(job.id);
                return (
                  <article
                    key={job.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-blue-400 hover:shadow-md transition-all group relative"
                  >
                    {/* Top row: Job title & Save button */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <button
                          onClick={() => onSelectJob(job)}
                          className="text-left font-bold text-base sm:text-lg text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2"
                        >
                          {job.title}
                        </button>
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                          <span>{job.company}</span>
                          {job.isVerified && (
                            <span 
                              className="text-emerald-700 flex items-center gap-0.5 text-xs" 
                              title="Doanh nghiệp đã xác thực trực tiếp - Không qua trung gian"
                            >
                              <ShieldCheck className="w-4 h-4 text-emerald-600" />
                              <span className="hidden sm:inline">Xác thực trực tiếp</span>
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => onToggleSaveJob(job.id)}
                        className={`p-2 rounded-lg transition-colors shrink-0 ${
                          isSaved
                            ? 'text-amber-600 bg-amber-50'
                            : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                        }`}
                        title={isSaved ? 'Bỏ lưu việc làm' : 'Lưu lại để ứng tuyển sau'}
                        aria-label={isSaved ? 'Bỏ lưu việc làm' : 'Lưu lại'}
                      >
                        {isSaved ? (
                          <BookmarkCheck className="w-5 h-5 fill-amber-500 text-amber-500" />
                        ) : (
                          <Bookmark className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    {/* Clean unboxed metadata with typographic separators (anti-slop standard) */}
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-600 mt-3 pt-2.5 border-t border-slate-100">
                      <span className="font-bold text-blue-700 tabular-nums">
                        {job.salaryMin} – {job.salaryMax} triệu VNĐ
                      </span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{job.location}</span>
                      </span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{job.type}</span>
                      </span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="flex items-center gap-1 text-slate-700 font-medium">
                        <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                        <span>{job.experience}</span>
                      </span>
                    </div>

                    {/* Brief description teaser */}
                    <p className="text-xs text-slate-500 mt-2.5 line-clamp-2 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Bottom highlights & direct apply CTA */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-100">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                        {job.noFeeCommitment && (
                          <span className="text-emerald-700 font-medium flex items-center gap-1">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Cam kết 0đ phí đặt cọc</span>
                          </span>
                        )}
                        {job.trainingProvided && (
                          <>
                            <span aria-hidden="true" className="text-slate-300">·</span>
                            <span className="text-blue-700 font-medium">
                              Có đào tạo từ đầu
                            </span>
                          </>
                        )}
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-slate-400">
                          Hạn nộp: {job.deadline}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectJob(job)}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
                        >
                          Xem & Ứng tuyển trực tiếp
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
