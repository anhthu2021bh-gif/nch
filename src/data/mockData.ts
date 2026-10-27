import { Job, CompanyReview, SalaryDataPoint, AppNotification, CandidateProfile } from '../types';

export const INITIAL_JOBS: Job[] = [
  {
    id: 'job-1',
    title: 'Thực Tập Sinh Lập Trình Frontend (React/TypeScript) - Đào Tạo Từ Đầu',
    company: 'Công ty Cổ phần Công nghệ An Khang Soft',
    category: 'Công nghệ thông tin và kỹ thuật số',
    location: 'Hà Nội',
    address: 'Tầng 8, Tòa nhà Keangnam Landmark 72, Nam Từ Liêm, Hà Nội',
    salaryMin: 6,
    salaryMax: 9,
    type: 'Thực tập',
    experience: 'Không yêu cầu kinh nghiệm',
    suitableForFreshGrads: true,
    trainingProvided: true,
    noFeeCommitment: true,
    isVerified: true,
    postedDate: '2026-10-18',
    deadline: '2026-11-20',
    contactEmail: 'tuyendung@ankhangsoft.vn',
    contactPhone: '024 3829 1102',
    description: 'Chương trình tuyển dụng ươm mầm tài năng trẻ dành riêng cho sinh viên năm cuối hoặc mới tốt nghiệp ngành CNTT/Toán tin. Được hướng dẫn trực tiếp 1-1 bởi Senior Engineer trong các dự án thực tế.',
    responsibilities: [
      'Tham gia phát triển giao diện người dùng web bằng ReactJS, Tailwind CSS và TypeScript',
      'Học tập quy trình Agile/Scrum và chuẩn code công nghiệp dưới sự kèm cặp của mentor',
      'Phối hợp với đội ngũ Backend và Designer để hoàn thiện các module tính năng',
      'Viết tài liệu kỹ thuật và tham gia báo cáo tiến độ tuần'
    ],
    requirements: [
      'Sinh viên năm cuối hoặc mới tốt nghiệp Đại học/Cao đẳng chuyên ngành CNTT, Khoa học máy tính hoặc tương đương',
      'Nắm chắc kiến thức nền tảng về HTML, CSS, JavaScript cơ bản',
      'Tinh thần ham học hỏi, chủ động, có tư duy logic tốt',
      'Không yêu cầu kinh nghiệm làm việc thực tế, ưu tiên ứng viên có sản phẩm đồ án hoặc bài tập lớn'
    ],
    benefits: [
      'Trợ cấp thực tập từ 6.000.000đ - 9.000.000đ/tháng ngay trong thời gian đào tạo',
      'Hỗ trợ dấu mộc và số liệu làm khóa luận/đồ án tốt nghiệp',
      'Cơ hội ký hợp đồng lao động chính thức sau 3 tháng thực tập',
      'Miễn phí trà, cafe, bữa phụ chiều và tham gia các hoạt động teambuilding'
    ]
  },
  {
    id: 'job-2',
    title: 'Nhân Viên Chứng Từ Xuất Nhập Khẩu & Điều Phối Logistics Junior',
    company: 'Tập đoàn Vận tải & Logistics Sao Biển (StarOcean Logistics)',
    category: 'Dịch vụ vận tải, Logistics và kho vận',
    location: 'TP. Hồ Chí Minh',
    address: 'Số 42 Ung Văn Khiêm, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh',
    salaryMin: 8,
    salaryMax: 12,
    type: 'Toàn thời gian',
    experience: 'Không yêu cầu kinh nghiệm',
    suitableForFreshGrads: true,
    trainingProvided: true,
    noFeeCommitment: true,
    isVerified: true,
    postedDate: '2026-10-19',
    deadline: '2026-11-25',
    contactEmail: 'hr@staroceanlogistics.com.vn',
    contactPhone: '028 6290 8899',
    description: 'Do nhu cầu mở rộng dịch vụ vận tải đường biển quốc tế, chúng tôi tìm kiếm các bạn trẻ tốt nghiệp ngành Kinh tế đối ngoại, Thương mại quốc tế hoặc Logistics có nhiệt huyết, chịu khó để đào tạo thành chuyên viên nghiệp vụ chứng từ.',
    responsibilities: [
      'Tiếp nhận đơn hàng và lập các bộ chứng từ: B/L, Invoice, Packing List, C/O',
      'Giao dịch và cập nhật lịch trình tàu với các hãng tàu quốc tế và khách hàng',
      'Theo dõi tiến độ giao hàng và giải quyết các phát sinh thủ tục kho vận',
      'Lưu trữ hồ sơ chứng từ điện tử theo quy chuẩn ISO của tập đoàn'
    ],
    requirements: [
      'Tốt nghiệp Cao đẳng/Đại học các khối ngành Kinh tế, Ngoại thương, Logistics',
      'Tiếng Anh đọc hiểu văn bản thương mại cơ bản (TOEIC từ 500 hoặc tương đương)',
      'Thành thạo tin học văn phòng (đặc biệt là Microsoft Excel)',
      'Cẩn thận, tỉ mỉ trong xử lý số liệu chứng từ'
    ],
    benefits: [
      'Lương khởi điểm 8.000.000đ - 12.000.000đ/tháng + thưởng doanh số quý',
      'Được cầm tay chỉ việc bởi Trưởng phòng chứng từ có 12 năm kinh nghiệm',
      'Đóng đầy đủ BHXH, BHYT, BHTN theo quy định pháp luật Việt Nam',
      'Khám sức khỏe định kỳ hàng năm tại bệnh viện quốc tế'
    ]
  },
  {
    id: 'job-3',
    title: 'Chuyên Viên Tư Vấn Tài Chính - Bán Lẻ Khách Hàng Cá Nhân',
    company: 'Ngân hàng TMCP Phương Nam Xanh',
    category: 'Kinh tế, tài chính, thương mại và bán lẻ',
    location: 'Đà Nẵng',
    address: '158 Nguyễn Văn Linh, Quận Thanh Khê, TP. Đà Nẵng',
    salaryMin: 9,
    salaryMax: 16,
    type: 'Toàn thời gian',
    experience: 'Dưới 1 năm / Mới tốt nghiệp',
    suitableForFreshGrads: true,
    trainingProvided: true,
    noFeeCommitment: true,
    isVerified: true,
    postedDate: '2026-10-15',
    deadline: '2026-11-15',
    contactEmail: 'career@phuongnambank.vn',
    contactPhone: '0236 388 9123',
    description: 'Ngân hàng Phương Nam Xanh chiêu mộ thế hệ nhân tài trẻ ngành tài chính ngân hàng tại miền Trung. Chúng tôi cam kết môi trường làm việc minh bạch, không ép chỉ tiêu quá tải trong 6 tháng đầu hội nhập.',
    responsibilities: [
      'Tư vấn các gói tài khoản số, thẻ thanh toán và tiết kiệm thông minh cho khách hàng',
      'Chăm sóc và giải đáp thắc mắc tài chính của khách hàng tại quầy giao dịch',
      'Hỗ trợ khách hàng hoàn thiện hồ sơ đăng ký dịch vụ số của ngân hàng',
      'Tham gia các buổi hội thảo chia sẻ sản phẩm tài chính đến các trường Đại học'
    ],
    requirements: [
      'Tốt nghiệp khối ngành Kinh tế, Tài chính - Ngân hàng, Quản trị kinh doanh',
      'Giao tiếp lưu loát, giọng nói dễ nghe, ngoại hình ưa nhìn là một lợi thế',
      'Có thái độ tận tâm phục vụ và tôn trọng đạo đức nghề nghiệp',
      'Chấp nhận sinh viên vừa bảo vệ khóa luận đang chờ bằng'
    ],
    benefits: [
      'Lương cứng 9.000.000đ + Phụ cấp ăn trưa 1.200.000đ + Thưởng năng suất',
      'Được tham gia khóa đào tạo chuyên sâu về nghiệp vụ ngân hàng bán lẻ chuẩn quốc tế',
      'Lộ trình thăng tiến rõ ràng lên Trưởng nhóm sau 1.5 năm',
      'Du lịch thường niên cùng toàn chi nhánh'
    ]
  },
  {
    id: 'job-4',
    title: 'Thực Tập Sinh Nhân Sự & Tuyển Dụng (HR Recruiter Trainee)',
    company: 'Tổ hợp Y tế & Dược phẩm An Sinh Phúc',
    category: 'Y tế, chăm sóc sức khỏe, hành chính và nhân sự',
    location: 'Hà Nội',
    address: 'Số 15 Phố Thái Hà, Quận Đống Đa, Hà Nội',
    salaryMin: 5,
    salaryMax: 8,
    type: 'Bán thời gian',
    experience: 'Không yêu cầu kinh nghiệm',
    suitableForFreshGrads: true,
    trainingProvided: true,
    noFeeCommitment: true,
    isVerified: true,
    postedDate: '2026-10-20',
    deadline: '2026-11-30',
    contactEmail: 'nhansu@ansinhphuc.vn',
    contactPhone: '024 3991 4455',
    description: 'Cơ hội tuyệt vời cho các bạn trẻ muốn theo đuổi ngành Nhân sự (HR). Bạn sẽ được tham gia trực tiếp vào quy trình lọc hồ sơ, liên hệ ứng viên, tổ chức phỏng vấn và quản lý dữ liệu nhân sự thực tế.',
    responsibilities: [
      'Hỗ trợ đăng tin tuyển dụng trên các kênh chính thống của tập đoàn',
      'Sàng lọc hồ sơ ứng viên ban đầu theo tiêu chuẩn từng vị trí',
      'Gọi điện hẹn lịch phỏng vấn và gửi thư xác nhận cho ứng viên',
      'Hỗ trợ công tác đón tiếp ứng viên và nhập liệu hồ sơ nhân sự'
    ],
    requirements: [
      'Sinh viên năm 3, năm 4 hoặc mới tốt nghiệp các ngành Quản trị nhân lực, Luật, Xã hội học...',
      'Yêu thích làm việc với con người, kỹ năng lắng nghe và giao tiếp tốt',
      'Có thể làm việc tối thiểu 4 buổi/tuần (có thể linh hoạt ca sáng/chiều)',
      'Thành thạo Google Docs, Google Sheets'
    ],
    benefits: [
      'Phụ cấp hỗ trợ 5.000.000đ - 8.000.000đ/tháng',
      'Được hướng dẫn viết CV, cách đánh giá nhân sự và kỹ năng phỏng vấn chuyên nghiệp',
      'Cấp chứng nhận hoàn thành thực tập và thư giới thiệu từ Giám đốc Nhân sự',
      'Ưu đãi khám bệnh và mua dược phẩm cho bản thân và gia đình'
    ]
  },
  {
    id: 'job-5',
    title: 'Trợ Giảng Tiếng Anh & Điều Phối Lớp Học (Part-time / Full-time)',
    company: 'Hệ thống Anh ngữ Quốc tế Bright Future',
    category: 'Giáo dục, giảng dạy và đào tạo',
    location: 'Cần Thơ',
    address: 'Đường 30/4, Phường Hưng Lợi, Quận Ninh Kiều, Cần Thơ',
    salaryMin: 5,
    salaryMax: 10,
    type: 'Bán thời gian',
    experience: 'Không yêu cầu kinh nghiệm',
    suitableForFreshGrads: true,
    trainingProvided: true,
    noFeeCommitment: true,
    isVerified: true,
    postedDate: '2026-10-17',
    deadline: '2026-11-28',
    contactEmail: 'recruitment@brightfuture.edu.vn',
    contactPhone: '0292 388 7766',
    description: 'Vị trí lý tưởng cho các bạn sinh viên muốn cải thiện năng lực ngoại ngữ và rèn luyện kỹ năng sư phạm. Bạn sẽ đồng hành cùng giáo viên bản ngữ trong các lớp học tương tác cao.',
    responsibilities: [
      'Hỗ trợ giáo viên nước ngoài quản lý lớp học và tương tác cùng học viên nhí',
      'Kèm cặp các bạn học viên cần củng cố thêm phát âm và từ vựng',
      'Gửi thông báo tình hình học tập hàng tuần đến phụ huynh',
      'Chuẩn bị giáo cụ học tập trực quan và các hoạt động mini-game'
    ],
    requirements: [
      'Tiếng Anh giao tiếp tốt (IELTS từ 6.0 hoặc chứng chỉ tương đương)',
      'Yêu quý trẻ em, vui vẻ, kiên nhẫn và có tinh thần trách nhiệm',
      'Thời gian làm việc linh hoạt theo ca buổi tối hoặc cuối tuần',
      'Không yêu cầu chứng chỉ sư phạm trước khi nhận việc'
    ],
    benefits: [
      'Thu nhập tính theo giờ: 70.000đ - 110.000đ/giờ (tương đương 5.000.000đ - 10.000.000đ/tháng)',
      'Môi trường 100% tiếng Anh giúp nâng cao kỹ năng nghe nói phản xạ',
      'Được tham gia các khóa đào tạo phương pháp giảng dạy TESOL miễn phí',
      'Thưởng các dịp lễ tết và thưởng chuyên cần hàng tháng'
    ]
  },
  {
    id: 'job-6',
    title: 'Cộng Tác Viên Sáng Tạo Nội Dung & Quản Trị Mạng Xã Hội (Content Creator)',
    company: 'Studio Truyền Thông Sáng Tạo Helios',
    category: 'Marketing, truyền thông và sáng tạo nội dung',
    location: 'TP. Hồ Chí Minh',
    address: '12 Đường D2, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh',
    salaryMin: 7,
    salaryMax: 11,
    type: 'Toàn thời gian',
    experience: 'Không yêu cầu kinh nghiệm',
    suitableForFreshGrads: true,
    trainingProvided: true,
    noFeeCommitment: true,
    isVerified: true,
    postedDate: '2026-10-21',
    deadline: '2026-11-30',
    contactEmail: 'hello@helioscreatives.vn',
    contactPhone: '0903 112 849',
    description: 'Helios chào đón các bạn trẻ đam mê viết lách, bắt trend mạng xã hội và muốn học hỏi kỹ năng sản xuất nội dung đa nền tảng (TikTok, Facebook Reels, Blog).',
    responsibilities: [
      'Lên ý tưởng kịch bản video ngắn cho TikTok và Facebook Reels',
      'Viết bài viết truyền thông ngắn gọn, sáng tạo theo định hướng thương hiệu',
      'Phối hợp cùng designer để chọn hình ảnh và bố cục bắt mắt',
      'Theo dõi tương tác và phản hồi bình luận thân thiện với người dùng'
    ],
    requirements: [
      'Tốt nghiệp hoặc sinh viên năm cuối ngành Báo chí, Ngữ văn, Marketing, Truyền thông',
      'Thường xuyên theo dõi xu hướng trên các nền tảng mạng xã hội',
      'Có khả năng diễn đạt câu chữ trôi chảy, đúng chính tả, góc nhìn tươi mới',
      'Biết sử dụng cơ bản CapCut hoặc Canva là một điểm cộng lớn'
    ],
    benefits: [
      'Thu nhập từ 7.000.000đ - 11.000.000đ/tháng tùy theo năng suất nội dung',
      'Được đào tạo bài bản về Storytelling, SEO cơ bản và phân tích số liệu mạng xã hội',
      'Môi trường trẻ trung (Gen Z năng động), không gian làm việc mở, giờ giấc linh hoạt',
      'Trang bị máy tính và thiết bị quay dựng cơ bản'
    ]
  },
  {
    id: 'job-7',
    title: 'Nhân Viên Pha Chế Barista & Phục Vụ Quán Cà Phê (Ca Linh Hoạt)',
    company: 'Chuỗi Cà phê Di Sản Heritage Coffee',
    category: 'Nhà hàng, khách sạn, ẩm thực và du lịch',
    location: 'Hải Phòng',
    address: '68 Đường Trần Phú, Quận Ngô Quyền, TP. Hải Phòng',
    salaryMin: 5,
    salaryMax: 9,
    type: 'Bán thời gian',
    experience: 'Không yêu cầu kinh nghiệm',
    suitableForFreshGrads: true,
    trainingProvided: true,
    noFeeCommitment: true,
    isVerified: true,
    postedDate: '2026-10-16',
    deadline: '2026-11-22',
    contactEmail: 'tuyendung@heritagecoffee.vn',
    contactPhone: '0225 383 9922',
    description: 'Heritage Coffee mở đợt tuyển dụng nhân viên phục vụ và pha chế tập sự. Quán hỗ trợ sắp xếp ca làm linh hoạt theo lịch học của sinh viên, cam kết không thu bất kỳ khoản tiền đồng phục hay cọc thử việc.',
    responsibilities: [
      'Học và thực hành pha chế các món nước theo công thức chuẩn của chuỗi',
      'Đón tiếp khách hàng, nhận order tại quầy với thái độ niềm nở',
      'Bưng bê đồ uống và giữ gìn vệ sinh khu vực quầy bar sạch sẽ',
      'Kiểm kê nguyên vật liệu cuối ca theo biểu mẫu'
    ],
    requirements: [
      'Từ 18 tuổi trở lên, trung thực, nhanh nhẹn, hòa đồng',
      'Không yêu cầu kinh nghiệm pha chế trước đó, được đào tạo từ bước căn bản',
      'Có thể đăng ký làm theo ca 4h - 6h - 8h tùy theo lịch biểu',
      'Ưu tiên ứng viên có thể làm việc vào dịp cuối tuần hoặc lễ tết (hưởng lương x3)'
    ],
    benefits: [
      'Thu nhập từ 28.000đ - 45.000đ/giờ (trung bình 5.000.000đ - 9.000.000đ/tháng)',
      'Miễn phí 1 phần đồ uống trong mỗi ca làm việc',
      'Hỗ trợ 100% chi phí may đồng phục và tài liệu pha chế',
      'Cơ hội thăng tiến lên Trưởng ca / Quản lý cửa hàng sau 6 tháng'
    ]
  },
  {
    id: 'job-8',
    title: 'Kỹ Thuật Viên Vận Hành Kho Bãi & Quản Lý Đơn Hàng Thương Mại Điện Tử',
    company: 'Trung tâm Kho vận Thông minh V-Logix',
    category: 'Dịch vụ vận tải, Logistics và kho vận',
    location: 'Bình Dương',
    address: 'KCN VSIP 1, TP. Thuận An, Tỉnh Bình Dương',
    salaryMin: 8,
    salaryMax: 13,
    type: 'Toàn thời gian',
    experience: 'Không yêu cầu kinh nghiệm',
    suitableForFreshGrads: true,
    trainingProvided: true,
    noFeeCommitment: true,
    isVerified: true,
    postedDate: '2026-10-19',
    deadline: '2026-11-20',
    contactEmail: 'jobs@vlogix.vn',
    contactPhone: '0274 378 1234',
    description: 'V-Logix cung cấp giải pháp kho vận tự động cho các sàn thương mại điện tử lớn. Công việc ổn định, ứng dụng công nghệ quét mã vạch hiện đại, phù hợp cho lao động trẻ muốn gắn bó lâu dài.',
    responsibilities: [
      'Sử dụng máy quét mã vạch (PDA) để kiểm đếm và phân loại hàng hóa vào kệ',
      'Hỗ trợ đóng gói kiện hàng theo đơn xuất kho đảm bảo an toàn',
      'Cập nhật dữ liệu hàng hóa trên phần mềm quản lý kho nội bộ',
      'Tuân thủ quy định an toàn lao động và 5S tại khu vực kho'
    ],
    requirements: [
      'Tốt nghiệp THPT, Trung cấp hoặc Cao đẳng trở lên',
      'Sức khỏe tốt, chịu khó, có tinh thần phối hợp làm việc nhóm',
      'Biết sử dụng điện thoại thông minh và thao tác máy tính cơ bản',
      'Không tiền án tiền sự, có lý lịch tư pháp trong sạch'
    ],
    benefits: [
      'Thu nhập 8.000.000đ - 13.000.000đ/tháng (gồm lương cơ bản + phụ cấp ca đêm + chuyên cần)',
      'Xe đưa đón nhân viên từ TP. Hồ Chí Minh và Thủ Dầu Một',
      'Bao cơm giữa ca tại căn tin công ty',
      'Thưởng tháng 13 và chế độ bảo hiểm đầy đủ'
    ]
  }
];

export const SALARY_BENCHMARKS: SalaryDataPoint[] = [
  {
    category: 'Công nghệ thông tin và kỹ thuật số',
    role: 'Lập trình viên / Tester mới tốt nghiệp',
    freshGradMin: 7,
    freshGradMax: 14,
    freshGradAvg: 9.5,
    experiencedAvg: 22,
    popularDemand: 'Rất cao',
    notes: 'Doanh nghiệp đánh giá cao tư duy tự học, tiếng Anh kỹ thuật và các dự án cá nhân/mã nguồn mở.'
  },
  {
    category: 'Dịch vụ vận tải, Logistics và kho vận',
    role: 'Chứng từ XNK / Điều phối kho bãi',
    freshGradMin: 7.5,
    freshGradMax: 12,
    freshGradAvg: 8.8,
    experiencedAvg: 18,
    popularDemand: 'Cao',
    notes: 'Nhu cầu nhân lực Logistics tăng mạnh cùng sự phát triển của thương mại xuyên biên giới.'
  },
  {
    category: 'Kinh tế, tài chính, thương mại và bán lẻ',
    role: 'Kế toán sơ cấp / Chuyên viên kinh doanh',
    freshGradMin: 6.5,
    freshGradMax: 14,
    freshGradAvg: 8.5,
    experiencedAvg: 19,
    popularDemand: 'Rất cao',
    notes: 'Kinh doanh thường có lương cứng kèm hoa hồng không giới hạn theo doanh thu.'
  },
  {
    category: 'Y tế, chăm sóc sức khỏe, hành chính và nhân sự',
    role: 'Chuyên viên Nhân sự (HR) / Hành chính',
    freshGradMin: 6.5,
    freshGradMax: 11,
    freshGradAvg: 8.0,
    experiencedAvg: 16.5,
    popularDemand: 'Ổn định',
    notes: 'Cần sự chỉn chu, am hiểu luật lao động và kỹ năng giao tiếp ứng xử khéo léo.'
  },
  {
    category: 'Giáo dục, giảng dạy và đào tạo',
    role: 'Trợ giảng ngoại ngữ / Điều phối lớp học',
    freshGradMin: 6.0,
    freshGradMax: 12,
    freshGradAvg: 8.2,
    experiencedAvg: 17,
    popularDemand: 'Cao',
    notes: 'Rất nhiều vị trí bán thời gian cho phép tích lũy kinh nghiệm khi vẫn còn trên ghế giảng đường.'
  },
  {
    category: 'Marketing, truyền thông và sáng tạo nội dung',
    role: 'Content Creator / Trợ lý Marketing',
    freshGradMin: 6.5,
    freshGradMax: 12,
    freshGradAvg: 8.6,
    experiencedAvg: 18.5,
    popularDemand: 'Rất cao',
    notes: 'Nhà tuyển dụng ưu tiên xem Portfolio sản phẩm thực tế hơn là bảng điểm đại học.'
  },
  {
    category: 'Nhà hàng, khách sạn, ẩm thực và du lịch',
    role: 'Barista / Lễ tân / Phục vụ',
    freshGradMin: 5.5,
    freshGradMax: 10,
    freshGradAvg: 7.2,
    experiencedAvg: 14,
    popularDemand: 'Cao',
    notes: 'Phù hợp khởi đầu nhanh, rèn luyện kỹ năng mềm và khả năng xử lý áp lực khách hàng.'
  }
];

export const INITIAL_REVIEWS: CompanyReview[] = [
  {
    id: 'rev-1',
    companyName: 'Công ty Cổ phần Công nghệ An Khang Soft',
    jobRole: 'Thực tập sinh Frontend',
    rating: 5,
    transparencyRating: 5,
    interviewExperienceRating: 5,
    comment: 'Quy trình phỏng vấn rất thân thiện, hỏi sâu về tư duy và các bài tập nhỏ chứ không đánh đố. Trợ cấp thực tập chuyển đúng ngày mùng 5 hàng tháng, không bị giữ cọc gì cả.',
    pros: 'Mentor tận tâm, máy móc xịn, đồ ăn vặt miễn phí.',
    cons: 'Dự án gấp thì thỉnh thoảng phải hỗ trợ thêm ngoài giờ.',
    isVerifiedApplicant: true,
    date: '2026-10-12',
    authorAlias: 'Minh Tuấn (K20 Bách Khoa)'
  },
  {
    id: 'rev-2',
    companyName: 'Tập đoàn Vận tải & Logistics Sao Biển (StarOcean Logistics)',
    jobRole: 'Nhân viên chứng từ Junior',
    rating: 4.5,
    transparencyRating: 5,
    interviewExperienceRating: 4.5,
    comment: 'Công ty có cam kết bằng văn bản không thu tiền đồng phục hay cọc thẻ. Khi phỏng vấn được chị Trưởng phòng hướng dẫn rất chi tiết về công việc thực tế.',
    pros: 'Được học hỏi khối lượng kiến thức thực tế khổng lồ về xuất nhập khẩu.',
    cons: 'Mùa cao điểm đơn hàng khá nhiều chứng từ cần xử lý tập trung.',
    isVerifiedApplicant: true,
    date: '2026-10-08',
    authorAlias: 'Phương Linh (ĐH Kinh Tế)'
  },
  {
    id: 'rev-3',
    companyName: 'Studio Truyền Thông Sáng Tạo Helios',
    jobRole: 'Cộng tác viên Nội dung TikTok',
    rating: 5,
    transparencyRating: 5,
    interviewExperienceRating: 5,
    comment: 'Môi trường toàn các bạn trẻ sinh năm 2002-2005 cực kỳ thoải mái và năng động. Thù lao minh bạch theo từng video được duyệt.',
    pros: 'Được tự do sáng tạo, khuyến khích thử nghiệm ý tưởng mới.',
    cons: 'Phải thường xuyên lướt mạng để bắt kịp trend hot.',
    isVerifiedApplicant: true,
    date: '2026-09-28',
    authorAlias: 'Thanh Thảo'
  }
];

export const INITIAL_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'notif-1',
    title: 'Việc làm mới phù hợp với bạn',
    message: 'Vị trí "Thực Tập Sinh Lập Trình Frontend - Đào Tạo Từ Đầu" vừa được đăng tuyển tại Hà Nội.',
    type: 'job_alert',
    timestamp: '15 phút trước',
    isRead: false
  },
  {
    id: 'notif-2',
    title: 'Cảnh báo an toàn tuyển dụng',
    message: 'Nền tảng nhắc nhở: Tuyệt đối không chuyển tiền cọc hoặc nộp phí hồ sơ cho bất kỳ cá nhân nào xưng là nhà tuyển dụng.',
    type: 'security_warning',
    timestamp: '2 giờ trước',
    isRead: false
  },
  {
    id: 'notif-3',
    title: 'Gợi ý xây dựng hồ sơ',
    message: 'Chưa có kinh nghiệm? Hãy sử dụng công cụ Tạo CV & đính kèm link Portfolio Google Sites để tăng 3 lần tỷ lệ gọi phỏng vấn.',
    type: 'system',
    timestamp: '1 ngày trước',
    isRead: true
  }
];

export const INITIAL_CANDIDATE_PROFILE: CandidateProfile = {
  fullName: 'Nguyễn Văn Hùng',
  birthDate: '2004-05-18',
  gender: 'Nam',
  email: 'hung.nguyen2004@gmail.com',
  phone: '0987 654 321',
  address: 'Cầu Giấy, Hà Nội',
  education: 'Đại học Quốc gia Hà Nội',
  major: 'Công nghệ Thông tin & Truyền thông',
  gradYear: '2026',
  employmentStatus: 'Mới tốt nghiệp / Sinh viên năm cuối',
  bio: 'Sinh viên năm cuối nhiệt huyết, có nền tảng vững về lập trình Web và tư duy giải quyết vấn đề. Mong muốn tìm kiếm cơ hội thực tập hoặc việc làm khởi đầu tại môi trường minh bạch, sẵn sàng cống hiến và học hỏi kiến thức thực chiến.',
  portfolioUrl: 'https://sites.google.com/view/nguyenvanhung-portfolio',
  skills: ['ReactJS', 'JavaScript', 'HTML5/CSS3', 'Git', 'Kỹ năng làm việc nhóm', 'Giao tiếp tiếng Anh cơ bản']
};
