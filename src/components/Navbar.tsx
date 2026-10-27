import React from 'react';
import { 
  Briefcase, 
  ShieldCheck, 
  TrendingUp, 
  FileText, 
  Star, 
  Bookmark, 
  Bell, 
  User, 
  Building2, 
  Menu, 
  X 
} from 'lucide-react';
import { UserRole } from '../types';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  savedJobsCount: number;
  unreadNotifsCount: number;
  onOpenProfile: () => void;
  onOpenNotifications: () => void;
  onOpenSavedJobs: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  userRole,
  setUserRole,
  savedJobsCount,
  unreadNotifsCount,
  onOpenProfile,
  onOpenNotifications,
  onOpenSavedJobs,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { id: 'jobs', label: 'Tìm việc làm', icon: Briefcase },
    { id: 'safe-hub', label: 'Cẩm nang an toàn', icon: ShieldCheck },
    { id: 'salary', label: 'So sánh mức lương', icon: TrendingUp },
    { id: 'cv-builder', label: 'Tạo CV sinh viên', icon: FileText },
    { id: 'reviews', label: 'Đánh giá tuyển dụng', icon: Star },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract */}
        <div className="flex items-center justify-between gap-6 h-16">
          {/* Zone 1: Brand wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => setCurrentTab('jobs')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-blue-700 transition-colors">
                N
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors whitespace-nowrap">
                  Nối cơ hội – Đổi cuộc đời
                </span>
                <span className="text-[10px] text-slate-500 hidden sm:block whitespace-nowrap">
                  Kết nối việc làm trực tiếp & an toàn
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setCurrentTab(link.id)}
                  className={`flex items-center gap-1.5 py-1 whitespace-nowrap transition-colors border-b-2 text-sm ${
                    isActive
                      ? 'text-blue-600 border-blue-600 font-semibold'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4 opacity-75" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions & Role Switcher */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Role switch toggle */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                onClick={() => setUserRole('candidate')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  userRole === 'candidate'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Dành cho ứng viên tìm việc"
              >
                <User className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Ứng viên</span>
              </button>
              <button
                onClick={() => setUserRole('employer')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  userRole === 'employer'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Dành cho nhà tuyển dụng đăng tin"
              >
                <Building2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Nhà tuyển dụng</span>
              </button>
            </div>

            {/* Saved Jobs button */}
            {userRole === 'candidate' && (
              <button
                onClick={onOpenSavedJobs}
                className="relative p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
                title="Việc làm đã lưu"
                aria-label="Việc làm đã lưu"
              >
                <Bookmark className="w-5 h-5" />
                {savedJobsCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {savedJobsCount}
                  </span>
                )}
              </button>
            )}

            {/* Notification button */}
            <button
              onClick={onOpenNotifications}
              className="relative p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              title="Thông báo mới"
              aria-label="Thông báo mới"
            >
              <Bell className="w-5 h-5" />
              {unreadNotifsCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {unreadNotifsCount}
                </span>
              )}
            </button>

            {/* Profile modal trigger */}
            {userRole === 'candidate' ? (
              <button
                onClick={onOpenProfile}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <User className="w-4 h-4 text-blue-600" />
                <span className="hidden md:inline">Hồ sơ của tôi</span>
              </button>
            ) : (
              <button
                onClick={() => setCurrentTab('employer-portal')}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap shadow-xs"
              >
                <Building2 className="w-4 h-4" />
                <span>Quản lý tin tuyển dụng</span>
              </button>
            )}

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-slate-200 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setCurrentTab(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-left ${
                    isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
