import React, { useState } from 'react';
import { 
  FileText, 
  Printer, 
  Sparkles, 
  HelpCircle, 
  CheckCircle, 
  ExternalLink, 
  Globe, 
  GraduationCap, 
  Briefcase, 
  Award, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Lightbulb, 
  Plus, 
  Trash2,
  Download
} from 'lucide-react';
import { CandidateProfile } from '../types';

interface CvBuilderProps {
  initialProfile: CandidateProfile;
  onUpdateProfile: (profile: CandidateProfile) => void;
}

interface CvProject {
  title: string;
  role: string;
  description: string;
  skills: string;
}

export const CvBuilder: React.FC<CvBuilderProps> = ({
  initialProfile,
  onUpdateProfile,
}) => {
  // Candidate form state
  const [fullName, setFullName] = useState(initialProfile.fullName);
  const [targetRole, setTargetRole] = useState('Thực tập sinh Lập trình / Chuyên viên Junior');
  const [email, setEmail] = useState(initialProfile.email);
  const [phone, setPhone] = useState(initialProfile.phone);
  const [address, setAddress] = useState(initialProfile.address);
  const [education, setEducation] = useState(initialProfile.education);
  const [major, setMajor] = useState(initialProfile.major);
  const [gpa, setGpa] = useState('3.4/4.0');
  const [gradYear, setGradYear] = useState(initialProfile.gradYear);
  const [portfolioUrl, setPortfolioUrl] = useState(initialProfile.portfolioUrl);
  
  // Objective for zero-experience candidate
  const [careerObjective, setCareerObjective] = useState(
    'Là sinh viên mới tốt nghiệp nhiệt huyết, có nền tảng lý thuyết vững vàng và tư duy giải quyết vấn đề chủ động. Mong muốn áp dụng kiến thức được đào tạo để cống hiến cho công ty, không ngừng rèn luyện kỹ năng thực chiến và đồng hành cùng sự phát triển bền vững của doanh nghiệp.'
  );

  // Skills
  const [skillsList, setSkillsList] = useState<string[]>([
    'Kỹ năng tự nghiên cứu và giải quyết vấn đề',
    'Làm việc nhóm và lắng nghe chủ động',
    'Tin học văn phòng & Công cụ số',
    'Giao tiếp tiếng Anh cơ bản'
  ]);
  const [newSkill, setNewSkill] = useState('');

  // Academic Projects & Extracurriculars (the core replacement for formal work experience!)
  const [projects, setProjects] = useState<CvProject[]>([
    {
      title: 'Đồ án tốt nghiệp / Dự án môn học: Xây dựng Website Thương Mại Số',
      role: 'Trưởng nhóm phát triển (3 thành viên)',
      description: 'Phân tích yêu cầu, thiết kế giao diện thân thiện với người dùng và viết tài liệu kỹ thuật. Đạt điểm A trong kỳ bảo vệ.',
      skills: 'React, Git, Quản lý tiến độ'
    },
    {
      title: 'Hoạt động Câu lạc bộ Tình nguyện & Sự kiện Sinh viên',
      role: 'Phó Ban Truyền thông & Hậu cần',
      description: 'Điều phối hoạt động gây quỹ sách vở cho học sinh vùng khó khăn, viết bài truyền thông tiếp cận hơn 5.000 lượt xem.',
      skills: 'Giao tiếp, Tổ chức sự kiện, Làm việc nhóm'
    }
  ]);

  const [activeGuideTab, setActiveGuideTab] = useState<'tips' | 'google-sites'>('tips');

  const addSkill = () => {
    if (newSkill.trim() && !skillsList.includes(newSkill.trim())) {
      setSkillsList([...skillsList, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (index: number) => {
    setSkillsList(skillsList.filter((_, i) => i !== index));
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        title: 'Dự án môn học / Hoạt động ngoại khóa mới',
        role: 'Thành viên đóng góp',
        description: 'Mô tả đóng góp của bạn, bài học rút ra và kết quả đạt được...',
        skills: 'Kỹ năng áp dụng'
      }
    ]);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const updateProject = (index: number, field: keyof CvProject, val: string) => {
    const updated = [...projects];
    updated[index][field] = val;
    setProjects(updated);
  };

  const handlePrint = () => {
    window.print();
  };

  // Sync to candidate profile
  const handleSaveToProfile = () => {
    onUpdateProfile({
      ...initialProfile,
      fullName,
      email,
      phone,
      address,
      education,
      major,
      gradYear,
      portfolioUrl,
      bio: careerObjective,
      skills: skillsList,
    });
    alert('Đã cập nhật thông tin CV vào hồ sơ cá nhân của bạn thành công!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Intro Header with Career Mentorship Photo */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8 p-6 sm:p-8 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-100/70 px-3 py-1 rounded-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chuyên mục hỗ trợ sinh viên & người chưa có kinh nghiệm</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Tạo & Gợi ý CV Chuẩn Hóa Dành Cho Người Mới Bắt Đầu
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
              Bạn lo lắng vì CV chưa có 2-3 năm kinh nghiệm làm việc? Hãy biến đồ án môn học, hoạt động ngoại khóa, câu lạc bộ và các kỹ năng số thành điểm tựa vững chắc để gây ấn tượng với nhà tuyển dụng.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                Tự động tối ưu bố cục 1 trang
              </span>
              <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                Tích hợp liên kết Google Sites
              </span>
              <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                Xuất file in PDF miễn phí
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 h-48 lg:h-full relative overflow-hidden bg-slate-100">
            <img
              src="/src/assets/images/career_mentorship_guide_1792587978971.jpg"
              alt="Cố vấn nghề nghiệp hướng dẫn ứng viên trẻ hoàn thiện hồ sơ"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white/90 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Guidance Section: Tips for Zero-Experience & Google Sites Guide */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveGuideTab('tips')}
              className={`text-xs sm:text-sm font-bold pb-2 border-b-2 transition-colors ${
                activeGuideTab === 'tips'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Cẩm nang viết CV khi chưa có kinh nghiệm
            </button>
            <button
              onClick={() => setActiveGuideTab('google-sites')}
              className={`text-xs sm:text-sm font-bold pb-2 border-b-2 transition-colors flex items-center gap-1.5 ${
                activeGuideTab === 'google-sites'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Globe className="w-4 h-4 text-blue-600" />
              <span>Hướng dẫn tạo Portfolio trên Google Sites</span>
            </button>
          </div>
        </div>

        <div className="pt-4">
          {activeGuideTab === 'tips' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5">
                <p className="font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1. Nêu bật Đồ án & Bài tập lớn</span>
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Thay vì để trống mục kinh nghiệm, hãy liệt kê 1-2 đồ án tốt nghiệp, bài tập nhóm hoặc nghiên cứu mà bạn tham gia. Ghi rõ vai trò của bạn và kết quả đạt được.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5">
                <p className="font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>2. Hoạt động ngoại khóa & Kỹ năng</span>
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Câu lạc bộ tình nguyện, ban văn nghệ, bí thư chi đoàn hay việc làm thêm bán thời gian thể hiện bạn là người chủ động, có kỹ năng giao tiếp và chịu được áp lực tốt.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5">
                <p className="font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>3. Mục tiêu nghề nghiệp chân thành</span>
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Tránh sao chép sáo rỗng. Hãy nêu rõ mong muốn được học việc nghiêm túc, sẵn sàng nhận đào tạo từ đầu và gắn bó cống hiến thực tế cùng doanh nghiệp.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                <h4 className="text-sm font-bold text-slate-900">
                  Tại sao sinh viên nên có Portfolio trực tuyến trên Google Sites?
                </h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Google Sites là công cụ hoàn toàn <strong>miễn phí</strong>, không cần biết lập trình, cho phép bạn tạo một trang web cá nhân chuyên nghiệp trong 15 phút. Nhà tuyển dụng rất thích nhấp vào link Google Sites để xem hình ảnh đồ án, báo cáo môn học hoặc chứng chỉ của bạn!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="font-bold text-blue-600 block mb-1">Bước 1:</span>
                  <span>Truy cập <strong>sites.google.com</strong> bằng tài khoản Gmail của bạn.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="font-bold text-blue-600 block mb-1">Bước 2:</span>
                  <span>Chọn mẫu <strong>"Hồ sơ năng lực" (Portfolio)</strong> có sẵn.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="font-bold text-blue-600 block mb-1">Bước 3:</span>
                  <span>Thêm hình ảnh hoạt động, bài thuyết trình, link Google Drive đồ án.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="font-bold text-blue-600 block mb-1">Bước 4:</span>
                  <span>Nhấn <strong>Xuất bản (Publish)</strong> và dán đường link vào ô bên dưới!</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Editor & Live Preview Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: CV Input Form */}
        <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span>Nhập thông tin hồ sơ</span>
            </h3>
            <button
              onClick={handleSaveToProfile}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              Lưu vào tài khoản
            </button>
          </div>

          <div className="space-y-4 text-xs">
            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Họ và tên</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Vị trí mong muốn</label>
                <input
                  type="text"
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Số điện thoại</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Khu vực / Địa chỉ</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Google Sites / Portfolio Link */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  <span>Đường link Google Sites / Portfolio cá nhân</span>
                </span>
                <span className="text-[11px] text-blue-600 font-normal">Tăng cơ hội trúng tuyển</span>
              </label>
              <input
                type="url"
                value={portfolioUrl}
                onChange={(e) => setPortfolioUrl(e.target.value)}
                placeholder="https://sites.google.com/view/..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Education */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-100">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Trường ĐH / Cao đẳng / THPT</label>
                <input
                  type="text"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Chuyên ngành đào tạo</label>
                <input
                  type="text"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Năm tốt nghiệp / GPA</label>
                <input
                  type="text"
                  value={gradYear}
                  onChange={(e) => setGradYear(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Career Objective */}
            <div className="pt-2 border-t border-slate-100">
              <label className="block font-semibold text-slate-700 mb-1">
                Mục tiêu nghề nghiệp (Được tối ưu cho người mới đi làm)
              </label>
              <textarea
                rows={3}
                value={careerObjective}
                onChange={(e) => setCareerObjective(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none leading-relaxed"
              />
            </div>

            {/* Skills */}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <label className="block font-semibold text-slate-700">
                Kỹ năng chuyên môn & Kỹ năng mềm
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Nhập kỹ năng mới (ví dụ: Giao tiếp, Excel, Photoshop...)"
                  className="flex-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                />
                <button
                  type="button"
                  onClick={addSkill}
                  className="px-3 py-1.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 text-xs"
                >
                  Thêm
                </button>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {skillsList.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md text-xs font-medium"
                  >
                    <span>{skill}</span>
                    <button
                      type="button"
                      onClick={() => removeSkill(index)}
                      className="text-slate-400 hover:text-rose-600"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Projects & Extracurricular Activities */}
            <div className="pt-2 border-t border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <label className="font-semibold text-slate-700">
                  Đồ án học tập & Hoạt động thực tế (Thay thế kinh nghiệm làm việc)
                </label>
                <button
                  type="button"
                  onClick={addProject}
                  className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Thêm dự án / hoạt động</span>
                </button>
              </div>

              {projects.map((proj, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2 relative">
                  <button
                    type="button"
                    onClick={() => removeProject(idx)}
                    className="absolute top-2.5 right-2.5 text-slate-400 hover:text-rose-600"
                    title="Xóa mục này"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <input
                    type="text"
                    value={proj.title}
                    onChange={(e) => updateProject(idx, 'title', e.target.value)}
                    placeholder="Tên đồ án / Tên câu lạc bộ"
                    className="w-full font-bold px-2.5 py-1 text-xs border border-slate-300 rounded bg-white"
                  />
                  <input
                    type="text"
                    value={proj.role}
                    onChange={(e) => updateProject(idx, 'role', e.target.value)}
                    placeholder="Vai trò của bạn (ví dụ: Thành viên, Nhóm trưởng)"
                    className="w-full text-xs px-2.5 py-1 border border-slate-300 rounded bg-white text-slate-700"
                  />
                  <textarea
                    rows={2}
                    value={proj.description}
                    onChange={(e) => updateProject(idx, 'description', e.target.value)}
                    placeholder="Mô tả công việc và kết quả đạt được..."
                    className="w-full text-xs px-2.5 py-1 border border-slate-300 rounded bg-white text-slate-600"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Live Printable CV Preview */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Bản xem trước CV chuẩn hóa
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>In / Xuất PDF</span>
              </button>
            </div>
          </div>

          {/* Printable CV Paper Component */}
          <div 
            id="printable-cv"
            className="bg-white p-8 rounded-2xl border border-slate-300 shadow-md min-h-[750px] font-sans text-slate-900 space-y-6"
          >
            {/* Header: Name & Contact */}
            <div className="border-b-2 border-slate-900 pb-4">
              <h1 className="text-2xl font-black tracking-tight text-slate-900">
                {fullName || 'NGUYỄN VĂN HÙNG'}
              </h1>
              <p className="text-sm font-semibold text-blue-700 mt-0.5">
                {targetRole}
              </p>

              {/* Clean unboxed contact info */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 mt-3">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{email}</span>
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{phone}</span>
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{address}</span>
                </span>
              </div>

              {portfolioUrl && (
                <div className="mt-2 text-xs text-blue-700 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  <span className="font-semibold">Portfolio:</span>
                  <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="underline font-mono">
                    {portfolioUrl}
                  </a>
                </div>
              )}
            </div>

            {/* Career Objective */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Mục tiêu nghề nghiệp
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed">
                {careerObjective}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Học vấn & Bằng cấp
              </h2>
              <div className="flex justify-between items-start text-xs">
                <div>
                  <p className="font-bold text-slate-900">{education}</p>
                  <p className="text-slate-700">Chuyên ngành: {major}</p>
                </div>
                <div className="text-right text-slate-500 font-medium">
                  <p>Tốt nghiệp: {gradYear}</p>
                  <p>GPA: {gpa}</p>
                </div>
              </div>
            </div>

            {/* Key Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Kỹ năng nổi bật
              </h2>
              <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-700">
                {skillsList.map((skill, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Projects & Activities */}
            <div className="space-y-3">
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Đồ án tiêu biểu & Hoạt động thực tế
              </h2>
              <div className="space-y-3">
                {projects.map((proj, i) => (
                  <div key={i} className="space-y-1 text-xs">
                    <div className="flex justify-between items-baseline">
                      <p className="font-bold text-slate-900">{proj.title}</p>
                      <span className="text-[11px] text-blue-700 font-medium">{proj.role}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{proj.description}</p>
                    <p className="text-[11px] text-slate-500 font-mono">
                      Kỹ năng áp dụng: {proj.skills}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Safe candidate declaration */}
            <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400 italic text-center">
              * Hồ sơ được xác thực qua nền tảng Nối cơ hội – Đổi cuộc đời. Cam kết thông tin trung thực và chính xác.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
