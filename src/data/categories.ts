import { IndustryCategory } from '../types';

export interface CategoryInfo {
  id: IndustryCategory;
  name: string;
  shortName: string;
  iconName: string;
  description: string;
  entryRoles: string[];
  startingSalaryRange: string;
  highlight: string;
}

export const CATEGORIES_LIST: CategoryInfo[] = [
  {
    id: 'Công nghệ thông tin và kỹ thuật số',
    name: 'Công nghệ thông tin và kỹ thuật số',
    shortName: 'CNTT & Kỹ thuật số',
    iconName: 'Laptop',
    description: 'Lập trình web/app, kiểm thử phần mềm, kỹ thuật hỗ trợ IT, quản trị mạng và dữ liệu số.',
    entryRoles: ['Thực tập sinh Lập trình', 'Junior Web Developer', 'Tester/QA mới tốt nghiệp', 'Kỹ thuật viên IT Support', 'Nhân viên nhập liệu & số hóa'],
    startingSalaryRange: '7 - 14 triệu VNĐ',
    highlight: 'Nhiều doanh nghiệp nhận đào tạo On-the-job cho sinh viên chưa có kinh nghiệm thực chiến.'
  },
  {
    id: 'Dịch vụ vận tải, Logistics và kho vận',
    name: 'Dịch vụ vận tải, Logistics và kho vận',
    shortName: 'Vận tải & Logistics',
    iconName: 'Truck',
    description: 'Điều phối hàng hóa, chứng từ xuất nhập khẩu, quản lý kho bãi, chăm sóc khách hàng vận tải.',
    entryRoles: ['Nhân viên chứng từ Logistics', 'Điều phối viên vận tải', 'Quản lý kho tập sự', 'Nhân viên khai báo Hải quan Junior'],
    startingSalaryRange: '7.5 - 13 triệu VNĐ',
    highlight: 'Tốc độ tăng trưởng thương mại điện tử lớn, cơ hội việc làm rộng mở cho mọi chuyên ngành.'
  },
  {
    id: 'Kinh tế, tài chính, thương mại và bán lẻ',
    name: 'Kinh tế, tài chính, thương mại và bán lẻ',
    shortName: 'Kinh tế & Bán lẻ',
    iconName: 'Coins',
    description: 'Kế toán nội bộ, tư vấn tài chính, đại diện bán hàng B2B/B2C, quản lý cửa hàng bán lẻ.',
    entryRoles: ['Kế toán viên sơ cấp', 'Chuyên viên tư vấn khách hàng', 'Quản lý cửa hàng tập sự', 'Nhân viên kinh doanh B2B/B2C'],
    startingSalaryRange: '6.5 - 15 triệu VNĐ (+ thưởng KPI)',
    highlight: 'Phù hợp người năng động, mong muốn thu nhập theo năng lực và thăng tiến nhanh.'
  },
  {
    id: 'Y tế, chăm sóc sức khỏe, hành chính và nhân sự',
    name: 'Y tế, chăm sóc sức khỏe, hành chính và nhân sự',
    shortName: 'Y tế, Hành chính & HR',
    iconName: 'HeartPulse',
    description: 'Chăm sóc sức khỏe cộng đồng, điều dưỡng, lễ tân y tế, hành chính văn phòng và tuyển dụng nhân sự.',
    entryRoles: ['Thực tập sinh Tuyển dụng (HR)', 'Nhân viên Hành chính - Lễ tân', 'Trợ lý Y khoa / Tiếp đón bệnh nhân', 'Chuyên viên hồ sơ nhân sự'],
    startingSalaryRange: '6.5 - 12 triệu VNĐ',
    highlight: 'Môi trường làm việc ổn định, phúc lợi đầy đủ và cơ hội cống hiến cho cộng đồng.'
  },
  {
    id: 'Giáo dục, giảng dạy và đào tạo',
    name: 'Giáo dục, giảng dạy và đào tạo',
    shortName: 'Giáo dục & Đào tạo',
    iconName: 'GraduationCap',
    description: 'Trợ giảng tiếng Anh, giáo viên mầm non/tiểu học, điều phối viên khóa học, tư vấn tuyển sinh.',
    entryRoles: ['Trợ giảng ngoại ngữ', 'Điều phối lớp học', 'Tư vấn khóa học / Tuyển sinh', 'Giáo viên thực tập kỹ năng sống'],
    startingSalaryRange: '6 - 13 triệu VNĐ',
    highlight: 'Rất linh hoạt, có nhiều ca bán thời gian (Part-time) cực kỳ phù hợp với sinh viên đang đi học.'
  },
  {
    id: 'Marketing, truyền thông và sáng tạo nội dung',
    name: 'Marketing, truyền thông và sáng tạo nội dung',
    shortName: 'Marketing & Sáng tạo',
    iconName: 'Megaphone',
    description: 'Sáng tạo nội dung (Content Writer), quản trị Fanpage/TikTok, thiết kế đồ họa cơ bản, trợ lý sự kiện.',
    entryRoles: ['Content Creator Junior', 'Cộng tác viên Social Media', 'Trợ lý Marketing & Sự kiện', 'Thiết kế đồ họa thực tập'],
    startingSalaryRange: '6 - 12 triệu VNĐ',
    highlight: 'Đánh giá cao sự sáng tạo, nhiệt huyết và tính thẩm mỹ; không gò bó số năm kinh nghiệm.'
  },
  {
    id: 'Nhà hàng, khách sạn, ẩm thực và du lịch',
    name: 'Nhà hàng, khách sạn, ẩm thực và du lịch',
    shortName: 'Nhà hàng, Khách sạn & Du lịch',
    iconName: 'Utensils',
    description: 'Phục vụ bàn, pha chế (Barista), lễ tân khách sạn, phụ bếp, hướng dẫn viên tour tập sự.',
    entryRoles: ['Nhân viên Phục vụ bàn (Full/Part-time)', 'Pha chế Barista sơ cấp', 'Lễ tân khách sạn ca linh hoạt', 'Phụ bếp / Bếp bánh tập sự'],
    startingSalaryRange: '5.5 - 11 triệu VNĐ (có bao ăn & tip)',
    highlight: 'Thuận tiện vừa học vừa làm, rèn luyện kỹ năng giao tiếp và xử lý tình huống thực tế.'
  }
];
