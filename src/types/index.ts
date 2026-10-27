export type UserRole = 'candidate' | 'employer';

export type JobType = 'Toàn thời gian' | 'Bán thời gian' | 'Thực tập' | 'Linh hoạt / Remote';

export type ExperienceLevel = 
  | 'Không yêu cầu kinh nghiệm' 
  | 'Dưới 1 năm / Mới tốt nghiệp' 
  | '1 - 2 năm' 
  | 'Trên 3 năm';

export type IndustryCategory = 
  | 'Công nghệ thông tin và kỹ thuật số'
  | 'Dịch vụ vận tải, Logistics và kho vận'
  | 'Kinh tế, tài chính, thương mại và bán lẻ'
  | 'Y tế, chăm sóc sức khỏe, hành chính và nhân sự'
  | 'Giáo dục, giảng dạy và đào tạo'
  | 'Marketing, truyền thông và sáng tạo nội dung'
  | 'Nhà hàng, khách sạn, ẩm thực và du lịch';

export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  category: IndustryCategory;
  location: string;
  salaryMin: number; // In millions VND
  salaryMax: number; // In millions VND
  salaryNegotiable?: boolean;
  type: JobType;
  experience: ExperienceLevel;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  isVerified: boolean;
  noFeeCommitment: boolean; // Cam kết không thu phí đặt cọc
  suitableForFreshGrads: boolean; // Phù hợp sinh viên mới ra trường
  trainingProvided: boolean; // Có đào tạo từ đầu
  postedDate: string;
  deadline: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
}

export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  companyName: string;
  candidateName: string;
  candidateEmail: string;
  candidatePhone: string;
  portfolioUrl?: string;
  introNote: string;
  cvFileName?: string;
  status: 'Đã nộp' | 'Đang xem xét' | 'Mời phỏng vấn' | 'Đã trúng tuyển' | 'Chưa phù hợp';
  appliedAt: string;
}

export interface CandidateProfile {
  fullName: string;
  birthDate: string;
  gender: 'Nam' | 'Nữ' | 'Khác';
  email: string;
  phone: string;
  address: string;
  education: string;
  major: string;
  gradYear: string;
  employmentStatus: 'Đang tìm việc gấp' | 'Mới tốt nghiệp / Sinh viên năm cuối' | 'Đang có việc nhưng muốn đổi mới' | 'Chưa có kinh nghiệm';
  bio: string;
  portfolioUrl: string; // Link Google Sites / Portfolio
  skills: string[];
}

export interface CompanyReview {
  id: string;
  companyName: string;
  jobRole: string;
  rating: number; // 1 to 5
  transparencyRating: number; // Minh bạch về lương & quyền lợi
  interviewExperienceRating: number; // Thái độ & quy trình phỏng vấn
  comment: string;
  pros: string;
  cons: string;
  isVerifiedApplicant: boolean;
  date: string;
  authorAlias: string;
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  type: 'job_alert' | 'application_update' | 'security_warning' | 'system';
  timestamp: string;
  isRead: boolean;
  actionUrl?: string;
}

export interface SalaryDataPoint {
  category: IndustryCategory;
  role: string;
  freshGradAvg: number; // Millions VND
  freshGradMin: number;
  freshGradMax: number;
  experiencedAvg: number;
  popularDemand: 'Rất cao' | 'Cao' | 'Ổn định';
  notes: string;
}
