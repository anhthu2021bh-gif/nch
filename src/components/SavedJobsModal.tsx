import React from 'react';
import { 
  X, 
  Bookmark, 
  MapPin, 
  DollarSign, 
  Clock, 
  GraduationCap, 
  Trash2, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';
import { Job } from '../types';

interface SavedJobsModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedJobs: Job[];
  onRemoveSavedJob: (jobId: string) => void;
  onSelectJob: (job: Job) => void;
}

export const SavedJobsModal: React.FC<SavedJobsModalProps> = ({
  isOpen,
  onClose,
  savedJobs,
  onRemoveSavedJob,
  onSelectJob,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[88vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-500 fill-amber-500" />
            <h3 className="font-bold text-slate-900 text-base">
              Việc làm đã lưu ({savedJobs.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {savedJobs.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 mx-auto flex items-center justify-center">
                <Bookmark className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-slate-900">
                Danh sách việc làm đã lưu hiện đang trống
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Khi lướt danh sách công việc, bạn hãy nhấn vào biểu tượng dấu trang để lưu lại những vị trí ưng ý và so sánh trước khi nộp hồ sơ.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {savedJobs.map((job) => (
                <div
                  key={job.id}
                  className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white"
                >
                  <div className="space-y-1.5">
                    <button
                      onClick={() => {
                        onSelectJob(job);
                        onClose();
                      }}
                      className="text-left font-bold text-sm text-slate-900 hover:text-blue-600 transition-colors line-clamp-1"
                    >
                      {job.title}
                    </button>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <span>{job.company}</span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="font-bold text-blue-700">{job.salaryMin} - {job.salaryMax} triệu</span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        onSelectJob(job);
                        onClose();
                      }}
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1"
                    >
                      <span>Ứng tuyển</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onRemoveSavedJob(job.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100 transition-colors"
                      title="Bỏ lưu"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
