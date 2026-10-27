/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Job, 
  Application, 
  UserRole, 
  CandidateProfile, 
  CompanyReview, 
  AppNotification 
} from './types';
import { 
  INITIAL_JOBS, 
  INITIAL_REVIEWS, 
  INITIAL_NOTIFICATIONS, 
  INITIAL_CANDIDATE_PROFILE 
} from './data/mockData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { JobSearchAndList } from './components/JobSearchAndList';
import { JobDetailModal } from './components/JobDetailModal';
import { CvBuilder } from './components/CvBuilder';
import { SalaryComparison } from './components/SalaryComparison';
import { AntiFraudHub } from './components/AntiFraudHub';
import { RecruitmentReviews } from './components/RecruitmentReviews';
import { EmployerDashboard } from './components/EmployerDashboard';
import { CandidateProfileModal } from './components/CandidateProfileModal';
import { SavedJobsModal } from './components/SavedJobsModal';
import { NotificationModal } from './components/NotificationModal';
import { Footer } from './components/Footer';

export default function App() {
  // Navigation & Role State
  const [currentTab, setCurrentTab] = useState<string>('jobs');
  const [userRole, setUserRole] = useState<UserRole>('candidate');

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('Tất cả địa điểm');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Core Data State (stored with localStorage fallback)
  const [jobs, setJobs] = useState<Job[]>(() => {
    const saved = localStorage.getItem('app_jobs');
    return saved ? JSON.parse(saved) : INITIAL_JOBS;
  });

  const [savedJobIds, setSavedJobIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('app_saved_job_ids');
    return saved ? JSON.parse(saved) : ['job-1', 'job-4'];
  });

  const [applications, setApplications] = useState<Application[]>(() => {
    const saved = localStorage.getItem('app_applications');
    return saved ? JSON.parse(saved) : [
      {
        id: 'app-initial-1',
        jobId: 'job-1',
        jobTitle: 'Thực Tập Sinh Lập Trình Frontend (React/TypeScript) - Đào Tạo Từ Đầu',
        companyName: 'Công ty Cổ phần Công nghệ An Khang Soft',
        candidateName: 'Nguyễn Văn Hùng',
        candidateEmail: 'hung.nguyen2004@gmail.com',
        candidatePhone: '0987 654 321',
        portfolioUrl: 'https://sites.google.com/view/nguyenvanhung-portfolio',
        introNote: 'Em là sinh viên mới tốt nghiệp rất mong muốn có cơ hội được tham gia phỏng vấn thực tập và học hỏi từ các anh chị Senior.',
        cvFileName: 'CV_NguyenVanHung_ChuanHoa.pdf',
        status: 'Mời phỏng vấn',
        appliedAt: '2026-10-20'
      }
    ];
  });

  const [reviews, setReviews] = useState<CompanyReview[]>(() => {
    const saved = localStorage.getItem('app_reviews');
    return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
  });

  const [candidateProfile, setCandidateProfile] = useState<CandidateProfile>(() => {
    const saved = localStorage.getItem('app_candidate_profile');
    return saved ? JSON.parse(saved) : INITIAL_CANDIDATE_PROFILE;
  });

  const [notifications, setNotifications] = useState<AppNotification[]>(() => {
    const saved = localStorage.getItem('app_notifications');
    return saved ? JSON.parse(saved) : INITIAL_NOTIFICATIONS;
  });

  // Modal Visibility State
  const [selectedJobForModal, setSelectedJobForModal] = useState<Job | null>(null);
  const [profileModalOpen, setProfileModalOpen] = useState<boolean>(false);
  const [savedJobsModalOpen, setSavedJobsModalOpen] = useState<boolean>(false);
  const [notificationsModalOpen, setNotificationsModalOpen] = useState<boolean>(false);

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('app_jobs', JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    localStorage.setItem('app_saved_job_ids', JSON.stringify(savedJobIds));
  }, [savedJobIds]);

  useEffect(() => {
    localStorage.setItem('app_applications', JSON.stringify(applications));
  }, [applications]);

  useEffect(() => {
    localStorage.setItem('app_reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem('app_candidate_profile', JSON.stringify(candidateProfile));
  }, [candidateProfile]);

  useEffect(() => {
    localStorage.setItem('app_notifications', JSON.stringify(notifications));
  }, [notifications]);

  // Toggle Save Job
  const handleToggleSaveJob = (jobId: string) => {
    setSavedJobIds((prev) => {
      const exists = prev.includes(jobId);
      if (exists) {
        return prev.filter(id => id !== jobId);
      } else {
        return [...prev, jobId];
      }
    });
  };

  // Submit Application
  const handleSubmitApplication = (appData: {
    jobId: string;
    jobTitle: string;
    companyName: string;
    candidateName: string;
    candidateEmail: string;
    candidatePhone: string;
    portfolioUrl: string;
    introNote: string;
    cvFileName: string;
  }) => {
    const newApp: Application = {
      id: `app-${Date.now()}`,
      ...appData,
      status: 'Đã nộp',
      appliedAt: new Date().toISOString().split('T')[0],
    };

    setApplications((prev) => [newApp, ...prev]);

    // Send instant notification
    const newNotif: AppNotification = {
      id: `notif-${Date.now()}`,
      title: 'Đã gửi hồ sơ thành công',
      message: `Hồ sơ ứng tuyển vị trí "${appData.jobTitle}" đã được chuyển trực tiếp tới ${appData.companyName}.`,
      type: 'application_update',
      timestamp: 'Vừa xong',
      isRead: false,
    };
    setNotifications((prev) => [newNotif, ...prev]);
  };

  // Add Review
  const handleAddReview = (newReview: Omit<CompanyReview, 'id' | 'date'>) => {
    const created: CompanyReview = {
      id: `rev-${Date.now()}`,
      ...newReview,
      date: new Date().toISOString().split('T')[0],
    };
    setReviews((prev) => [created, ...prev]);
  };

  // Employer: Add New Job
  const handleAddNewJob = (newJob: Job) => {
    setJobs((prev) => [newJob, ...prev]);
    // Notification for candidates
    const newNotif: AppNotification = {
      id: `notif-${Date.now()}`,
      title: 'Có việc làm mới đăng tuyển',
      message: `Doanh nghiệp ${newJob.company} vừa đăng tuyển: "${newJob.title}".`,
      type: 'job_alert',
      timestamp: 'Vừa xong',
      isRead: false,
    };
    setNotifications((prev) => [newNotif, ...prev]);
  };

  // Employer: Delete Job
  const handleDeleteJob = (jobId: string) => {
    setJobs((prev) => prev.filter(j => j.id !== jobId));
  };

  // Employer: Update Application Status
  const handleUpdateApplicationStatus = (appId: string, status: Application['status']) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === appId ? { ...app, status } : app))
    );
  };

  // Quick Filter Helper from Hero Section
  const handleQuickFilter = (key: string, val: string) => {
    setCurrentTab('jobs');
    if (key === 'category') {
      setSelectedCategory(val);
    } else if (key === 'location') {
      setSelectedLocation(val);
    } else {
      // General search trigger
      setSearchQuery(val);
    }
  };

  // Notification actions
  const handleMarkAllNotifsAsRead = () => {
    setNotifications((prev) => prev.map(n => ({ ...n, isRead: true })));
  };

  const handleMarkOneNotifAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map(n => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const unreadNotifsCount = notifications.filter(n => !n.isRead).length;
  const savedJobsList = jobs.filter(j => savedJobIds.includes(j.id));

  // Determine if current user has applied to selectedJobForModal
  const hasAppliedToSelectedJob = selectedJobForModal
    ? applications.some(a => a.jobId === selectedJobForModal.id)
    : false;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Bar Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        userRole={userRole}
        setUserRole={setUserRole}
        savedJobsCount={savedJobIds.length}
        unreadNotifsCount={unreadNotifsCount}
        onOpenProfile={() => setProfileModalOpen(true)}
        onOpenNotifications={() => setNotificationsModalOpen(true)}
        onOpenSavedJobs={() => setSavedJobsModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {currentTab === 'jobs' && (
          <>
            <HeroSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              onSearchSubmit={() => {}}
              onQuickFilter={handleQuickFilter}
            />

            <JobSearchAndList
              jobs={jobs}
              savedJobIds={savedJobIds}
              onToggleSaveJob={handleToggleSaveJob}
              onSelectJob={(job) => setSelectedJobForModal(job)}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onOpenCvBuilder={() => setCurrentTab('cv-builder')}
            />
          </>
        )}

        {currentTab === 'safe-hub' && <AntiFraudHub />}

        {currentTab === 'salary' && <SalaryComparison />}

        {currentTab === 'cv-builder' && (
          <CvBuilder
            initialProfile={candidateProfile}
            onUpdateProfile={(updated) => setCandidateProfile(updated)}
          />
        )}

        {currentTab === 'reviews' && (
          <RecruitmentReviews
            reviews={reviews}
            onAddReview={handleAddReview}
          />
        )}

        {currentTab === 'employer-portal' && (
          <EmployerDashboard
            jobs={jobs}
            applications={applications}
            onAddNewJob={handleAddNewJob}
            onDeleteJob={handleDeleteJob}
            onUpdateApplicationStatus={handleUpdateApplicationStatus}
          />
        )}
      </main>

      {/* Job Details & Direct Application Modal */}
      <JobDetailModal
        job={selectedJobForModal}
        onClose={() => setSelectedJobForModal(null)}
        candidateProfile={candidateProfile}
        isSaved={selectedJobForModal ? savedJobIds.includes(selectedJobForModal.id) : false}
        onToggleSave={handleToggleSaveJob}
        onSubmitApplication={handleSubmitApplication}
        hasApplied={hasAppliedToSelectedJob}
      />

      {/* Candidate Profile Modal */}
      <CandidateProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        profile={candidateProfile}
        onSaveProfile={(p) => setCandidateProfile(p)}
      />

      {/* Saved Jobs Modal */}
      <SavedJobsModal
        isOpen={savedJobsModalOpen}
        onClose={() => setSavedJobsModalOpen(false)}
        savedJobs={savedJobsList}
        onRemoveSavedJob={handleToggleSaveJob}
        onSelectJob={(job) => setSelectedJobForModal(job)}
      />

      {/* Notification Drawer Modal */}
      <NotificationModal
        isOpen={notificationsModalOpen}
        onClose={() => setNotificationsModalOpen(false)}
        notifications={notifications}
        onMarkAllAsRead={handleMarkAllNotifsAsRead}
        onMarkOneAsRead={handleMarkOneNotifAsRead}
      />

      {/* Footer */}
      <Footer onSelectTab={(tab) => setCurrentTab(tab)} />
    </div>
  );
}
