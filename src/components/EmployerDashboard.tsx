import React, { useState } from 'react';
import { 
  Building2, 
  PlusCircle, 
  Users, 
  FileCheck, 
  Clock, 
  MapPin, 
  DollarSign, 
  ShieldCheck, 
  CheckCircle, 
  ExternalLink, 
  Globe, 
  Phone, 
  Mail, 
  Trash2, 
  Eye,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { Job, Application, IndustryCategory, JobType, ExperienceLevel } from '../types';
import { CATEGORIES_LIST } from '../data/categories';

interface EmployerDashboardProps {
  jobs: Job[];
  applications: Application[];
  onAddNewJob: (job: Job) => void;
  onDeleteJob: (jobId: string) => void;
  onUpdateApplicationStatus: (appId: string, status: Application['status']) => void;
}

export const EmployerDashboard: React.FC<EmployerDashboardProps> = ({
  jobs,
  applications,
  onAddNewJob,
  onDeleteJob,
  onUpdateApplicationStatus,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'jobs' | 'new-job' | 'applicants' | 'company'>('jobs');
  const [selectedAppDetail, setSelectedAppDetail] = useState<Application | null>(null);

  // New Job Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCompany, setNewCompany] = useState('Công ty Cổ phần Công nghệ An Khang Soft');
  const [newCategory, setNewCategory] = useState<IndustryCategory>('Công nghệ thông tin và kỹ thuật số');
  const [newLocation, setNewLocation] = useState('Hà Nội');
  const [newAddress, setNewAddress] = useState('Tầng 8, Tòa nhà Keangnam, Cầu Giấy, Hà Nội');
  const [newSalaryMin, setNewSalaryMin] = useState(7);
  const [newSalaryMax, setNewSalaryMax] = useState(12);
  const [newType, setNewType] = useState<JobType>('Toàn thời gian');
  const [newExperience, setNewExperience] = useState<ExperienceLevel>('Không yêu cầu kinh nghiệm');
  const [newTrainingProvided, setNewTrainingProvided] = useState(true);
  const [newNoFeeCommitment, setNewNoFeeCommitment] = useState(true);
  const [newSuitableForFreshGrads, setNewSuitableForFreshGrads] = useState(true);
  const [newDescription, setNewDescription] = useState('');
  const [newResponsibilities, setNewResponsibilities] = useState('Tham gia phát triển module hệ thống\nBáo cáo tiến độ tuần\nHọc tập quy trình chuẩn theo hướng dẫn');
  const [newRequirements, setNewRequirements] = useState('Sinh viên mới tốt nghiệp hoặc người mới bắt đầu\nChăm chỉ, trung thực, tinh thần ham học hỏi');
  const [newBenefits, setNewBenefits] = useState('Lương cơ bản + Phụ cấp ăn trưa\nĐược đào tạo 1-1 từ Senior\nĐóng bảo hiểm đầy đủ');
  const [newEmail, setNewEmail] = useState('hr@ankhangsoft.vn');
  const [newPhone, setNewPhone] = useState('024 3829 1102');
  const [newDeadline, setNewDeadline] = useState('2026-12-31');

  // Company Profile State
  const [companyName, setCompanyName] = useState('Công ty Cổ phần Công nghệ An Khang Soft');
  const [taxId, setTaxId] = useState('0108923456');
  const [companyWebsite, setCompanyWebsite] = useState('https://ankhangsoft.vn');
  const [companyAddress, setCompanyAddress] = useState('Tầng 8, Tòa nhà Keangnam Landmark 72, Nam Từ Liêm, Hà Nội');
  const [companyDesc, setCompanyDesc] = useState('Doanh nghiệp công nghệ chuyên cung cấp giải pháp chuyển đổi số và phát triển phần mềm doanh nghiệp.');

  const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) {
      alert('Vui lòng nhập chức danh tuyển dụng!');
      return;
    }

    const createdJob: Job = {
      id: `job-${Date.now()}`,
      title: newTitle,
      company: newCompany,
      category: newCategory,
      location: newLocation,
      address: newAddress,
      salaryMin: Number(newSalaryMin),
      salaryMax: Number(newSalaryMax),
      type: newType,
      experience: newExperience,
      suitableForFreshGrads: newSuitableForFreshGrads,
      trainingProvided: newTrainingProvided,
      noFeeCommitment: newNoFeeCommitment,
      isVerified: true,
      postedDate: new Date().toISOString().split('T')[0],
      deadline: newDeadline,
      contactEmail: newEmail,
      contactPhone: newPhone,
      description: newDescription || `Tuyển dụng vị trí ${newTitle} trực tiếp, không qua trung gian, đào tạo bài bản cho người mới.`,
      responsibilities: newResponsibilities.split('\n').filter(s => s.trim()),
      requirements: newRequirements.split('\n').filter(s => s.trim()),
      benefits: newBenefits.split('\n').filter(s => s.trim()),
    };

    onAddNewJob(createdJob);
    alert('Đăng tin tuyển dụng thành công! Tin đã xuất hiện trực tiếp trên bảng việc làm.');
    setNewTitle('');
    setActiveSubTab('jobs');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Portal Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-100/70 px-3 py-1 rounded-md mb-1.5">
            <Building2 className="w-3.5 h-3.5" />
            <span>Cổng thông tin Doanh nghiệp Tuyển dụng</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Quản Lý Tuyển Dụng & Tiếp Nhận Ứng Viên
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Đăng tin minh bạch, trực tiếp tiếp cận nguồn nhân lực trẻ nhiệt huyết và theo dõi hồ sơ ứng tuyển.
          </p>
        </div>

        <button
          onClick={() => setActiveSubTab('new-job')}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 shrink-0"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Đăng tin tuyển dụng mới</span>
        </button>
      </div>

      {/* Sub-nav Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200">
        <button
          onClick={() => setActiveSubTab('jobs')}
          className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
            activeSubTab === 'jobs'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>Tin tuyển dụng đã đăng ({jobs.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('applicants')}
          className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-2 relative ${
            activeSubTab === 'applicants'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Hồ sơ ứng viên nộp ({applications.length})</span>
          {applications.length > 0 && (
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          )}
        </button>

        <button
          onClick={() => setActiveSubTab('new-job')}
          className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
            activeSubTab === 'new-job'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <PlusCircle className="w-4 h-4" />
          <span>Tạo tin mới</span>
        </button>

        <button
          onClick={() => setActiveSubTab('company')}
          className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
            activeSubTab === 'company'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>Thông tin doanh nghiệp</span>
        </button>
      </div>

      {/* Tab 1: Posted Jobs List */}
      {activeSubTab === 'jobs' && (
        <div className="space-y-4">
          {jobs.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
              <p className="text-slate-600 text-sm font-medium">Chưa có tin tuyển dụng nào được đăng.</p>
              <button
                onClick={() => setActiveSubTab('new-job')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold"
              >
                Đăng tin đầu tiên ngay
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {jobs.map((job) => {
                const appCount = applications.filter(a => a.jobId === job.id).length;
                return (
                  <div
                    key={job.id}
                    className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3 hover:border-slate-300 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-bold text-slate-900 text-base leading-snug">
                          {job.title}
                        </h3>
                        <button
                          onClick={() => {
                            if (confirm('Bạn có chắc chắn muốn gỡ tin tuyển dụng này không?')) {
                              onDeleteJob(job.id);
                            }
                          }}
                          className="text-slate-400 hover:text-rose-600 p-1"
                          title="Gỡ tin"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600">
                        <span className="font-bold text-blue-700">{job.salaryMin} - {job.salaryMax} tr</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span>{job.location}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span>{job.experience}</span>
                      </div>

                      <p className="text-xs text-slate-500 line-clamp-2">
                        {job.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-blue-700 font-bold">
                        {appCount} hồ sơ đã nộp
                      </span>
                      <button
                        onClick={() => setActiveSubTab('applicants')}
                        className="text-slate-600 hover:text-slate-900 font-semibold"
                      >
                        Xem ứng viên →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Create New Job Post */}
      {activeSubTab === 'new-job' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs max-w-3xl">
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            Đăng tin tuyển dụng mới
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Mọi tin đăng trên hệ thống đều được kiểm duyệt nhằm đảm bảo tính minh bạch, không qua trung gian và không thu phí đặt cọc.
          </p>

          <form onSubmit={handleCreateJob} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Tiêu đề công việc / Vị trí tuyển dụng *
              </label>
              <input
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Ví dụ: Nhân viên điều phối kho bãi Logistics Junior..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-xs"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Nhóm ngành nghề *
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as IndustryCategory)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                >
                  {CATEGORIES_LIST.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Tỉnh / Thành phố *
                </label>
                <select
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                >
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="Cần Thơ">Cần Thơ</option>
                  <option value="Hải Phòng">Hải Phòng</option>
                  <option value="Bình Dương">Bình Dương</option>
                  <option value="Toàn quốc / Remote">Toàn quốc / Remote</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Địa chỉ làm việc cụ thể
              </label>
              <input
                type="text"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                placeholder="Số nhà, đường, phường, quận..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Lương tối thiểu (triệu VNĐ)
                </label>
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={newSalaryMin}
                  onChange={(e) => setNewSalaryMin(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Lương tối đa (triệu VNĐ)
                </label>
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={newSalaryMax}
                  onChange={(e) => setNewSalaryMax(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Hình thức làm việc
                </label>
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value as JobType)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                >
                  <option value="Toàn thời gian">Toàn thời gian (Full-time)</option>
                  <option value="Bán thời gian">Bán thời gian (Part-time)</option>
                  <option value="Thực tập">Thực tập (Internship)</option>
                  <option value="Linh hoạt / Remote">Linh hoạt / Remote</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Yêu cầu kinh nghiệm
                </label>
                <select
                  value={newExperience}
                  onChange={(e) => setNewExperience(e.target.value as ExperienceLevel)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-semibold"
                >
                  <option value="Không yêu cầu kinh nghiệm">Không yêu cầu kinh nghiệm (Đào tạo từ đầu)</option>
                  <option value="Dưới 1 năm / Mới tốt nghiệp">Dưới 1 năm / Mới tốt nghiệp</option>
                  <option value="1 - 2 năm">1 - 2 năm kinh nghiệm</option>
                  <option value="Trên 3 năm">Trên 3 năm kinh nghiệm</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Hạn chót nhận hồ sơ
                </label>
                <input
                  type="date"
                  value={newDeadline}
                  onChange={(e) => setNewDeadline(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>
            </div>

            {/* Checkbox commitments */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-800">
                <input
                  type="checkbox"
                  checked={newNoFeeCommitment}
                  onChange={(e) => setNewNoFeeCommitment(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span>Doanh nghiệp cam kết <strong>100% không thu phí đặt cọc, phí hồ sơ</strong> từ ứng viên</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-800">
                <input
                  type="checkbox"
                  checked={newTrainingProvided}
                  onChange={(e) => setNewTrainingProvided(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span>Có chính sách <strong>đào tạo chỉ việc (On-the-job training)</strong> cho người chưa có kinh nghiệm</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-800">
                <input
                  type="checkbox"
                  checked={newSuitableForFreshGrads}
                  onChange={(e) => setNewSuitableForFreshGrads(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span>Ưu tiên tuyển dụng sinh viên mới tốt nghiệp hoặc chuẩn bị ra trường</span>
              </label>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Mô tả tổng quan công việc
              </label>
              <textarea
                rows={3}
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Giới thiệu về vị trí, cơ hội phát triển..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Trách nhiệm (mỗi dòng 1 ý)</label>
                <textarea
                  rows={4}
                  value={newResponsibilities}
                  onChange={(e) => setNewResponsibilities(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Yêu cầu (mỗi dòng 1 ý)</label>
                <textarea
                  rows={4}
                  value={newRequirements}
                  onChange={(e) => setNewRequirements(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Quyền lợi (mỗi dòng 1 ý)</label>
                <textarea
                  rows={4}
                  value={newBenefits}
                  onChange={(e) => setNewBenefits(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-slate-300 rounded-lg text-xs"
                />
              </div>
            </div>

            <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setActiveSubTab('jobs')}
                className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 font-medium"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-sm"
              >
                Đăng tin công khai ngay
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Tab 3: Applicant Submissions Management */}
      {activeSubTab === 'applicants' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">
              Danh sách ứng viên nộp hồ sơ trực tiếp
            </h3>
            <span className="text-xs text-slate-500">
              Tổng số: <strong>{applications.length}</strong> ứng viên
            </span>
          </div>

          {applications.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-2">
              <p className="text-sm font-semibold text-slate-800">Chưa có ứng viên nào nộp hồ sơ.</p>
              <p className="text-xs text-slate-500">Các hồ sơ gửi qua nút "Ứng tuyển trực tiếp" sẽ xuất hiện tại đây ngay tức thì.</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="px-5 py-3">Ứng viên</th>
                      <th className="px-5 py-3">Vị trí ứng tuyển</th>
                      <th className="px-5 py-3">Liên hệ</th>
                      <th className="px-5 py-3">Hồ sơ / Portfolio</th>
                      <th className="px-5 py-3">Trạng thái duyệt</th>
                      <th className="px-5 py-3 text-right">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {applications.map((app) => (
                      <tr key={app.id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="px-5 py-4 font-bold text-slate-900">
                          {app.candidateName}
                          <p className="text-[11px] font-normal text-slate-400 mt-0.5">
                            Nộp ngày: {app.appliedAt}
                          </p>
                        </td>
                        <td className="px-5 py-4 font-medium text-slate-800">
                          {app.jobTitle}
                        </td>
                        <td className="px-5 py-4 space-y-0.5">
                          <p>{app.candidatePhone}</p>
                          <p className="text-slate-400">{app.candidateEmail}</p>
                        </td>
                        <td className="px-5 py-4 space-y-1">
                          <div className="flex items-center gap-1.5 text-blue-700 font-medium">
                            <FileCheck className="w-3.5 h-3.5" />
                            <span>{app.cvFileName || 'CV_UngVien.pdf'}</span>
                          </div>
                          {app.portfolioUrl && (
                            <a
                              href={app.portfolioUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] text-blue-600 underline flex items-center gap-1"
                            >
                              <Globe className="w-3 h-3" />
                              <span>Google Sites Portfolio</span>
                            </a>
                          )}
                        </td>
                        <td className="px-5 py-4">
                          <select
                            value={app.status}
                            onChange={(e) => onUpdateApplicationStatus(app.id, e.target.value as Application['status'])}
                            className={`px-2 py-1 rounded text-xs font-semibold border ${
                              app.status === 'Mời phỏng vấn'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                : app.status === 'Đang xem xét'
                                ? 'bg-amber-50 text-amber-800 border-amber-300'
                                : app.status === 'Đã trúng tuyển'
                                ? 'bg-blue-50 text-blue-800 border-blue-300'
                                : 'bg-slate-50 text-slate-700 border-slate-300'
                            }`}
                          >
                            <option value="Đã nộp">Đã nộp</option>
                            <option value="Đang xem xét">Đang xem xét</option>
                            <option value="Mời phỏng vấn">Mời phỏng vấn</option>
                            <option value="Đã trúng tuyển">Đã trúng tuyển</option>
                            <option value="Chưa phù hợp">Chưa phù hợp</option>
                          </select>
                        </td>
                        <td className="px-5 py-4 text-right">
                          <button
                            onClick={() => setSelectedAppDetail(app)}
                            className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-semibold text-xs"
                          >
                            Xem thư giới thiệu
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 4: Company Profile Form */}
      {activeSubTab === 'company' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs max-w-2xl space-y-5 text-xs">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900">
              Thông tin pháp lý doanh nghiệp
            </h3>
            <p className="text-slate-500 mt-0.5">
              Thông tin này giúp ứng viên đối chiếu Mã số thuế và sự minh bạch trước khi ứng tuyển.
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Tên công ty / Doanh nghiệp</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Mã số thuế (MST) *</label>
                <input
                  type="text"
                  value={taxId}
                  onChange={(e) => setTaxId(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Website công ty</label>
                <input
                  type="url"
                  value={companyWebsite}
                  onChange={(e) => setCompanyWebsite(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Địa chỉ trụ sở chính</label>
              <input
                type="text"
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Giới thiệu ngắn về doanh nghiệp</label>
              <textarea
                rows={3}
                value={companyDesc}
                onChange={(e) => setCompanyDesc(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
              />
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => alert('Đã lưu thông tin doanh nghiệp thành công!')}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700"
              >
                Cập nhật thông tin doanh nghiệp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Candidate Note Modal */}
      {selectedAppDetail && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4 text-xs">
            <h3 className="text-base font-bold text-slate-900">
              Chi tiết hồ sơ ứng viên: {selectedAppDetail.candidateName}
            </h3>

            <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-200 text-slate-700">
              <p><strong>Vị trí:</strong> {selectedAppDetail.jobTitle}</p>
              <p><strong>Số điện thoại:</strong> {selectedAppDetail.candidatePhone}</p>
              <p><strong>Email:</strong> {selectedAppDetail.candidateEmail}</p>
              {selectedAppDetail.portfolioUrl && (
                <p>
                  <strong>Portfolio:</strong>{' '}
                  <a href={selectedAppDetail.portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    {selectedAppDetail.portfolioUrl}
                  </a>
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-800">Thư giới thiệu của ứng viên:</label>
              <p className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 leading-relaxed italic">
                "{selectedAppDetail.introNote}"
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedAppDetail(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
