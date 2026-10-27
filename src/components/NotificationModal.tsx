import React from 'react';
import { 
  X, 
  Bell, 
  CheckCheck, 
  Briefcase, 
  ShieldAlert, 
  Info, 
  FileCheck 
} from 'lucide-react';
import { AppNotification } from '../types';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: AppNotification[];
  onMarkAllAsRead: () => void;
  onMarkOneAsRead: (id: string) => void;
}

export const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAllAsRead,
  onMarkOneAsRead,
}) => {
  if (!isOpen) return null;

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-slate-900 text-base">
              Thông báo hệ thống ({notifications.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-2.5 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-600">
            {unreadCount > 0 ? `${unreadCount} thông báo mới chưa đọc` : 'Bạn đã đọc hết thông báo'}
          </span>
          {unreadCount > 0 && (
            <button
              onClick={onMarkAllAsRead}
              className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
            >
              <CheckCheck className="w-3.5 h-3.5" />
              <span>Đánh dấu tất cả đã đọc</span>
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {notifications.map((n) => {
            let Icon = Info;
            let iconColor = 'text-blue-600 bg-blue-50';
            if (n.type === 'job_alert') {
              Icon = Briefcase;
              iconColor = 'text-blue-600 bg-blue-50';
            } else if (n.type === 'security_warning') {
              Icon = ShieldAlert;
              iconColor = 'text-rose-600 bg-rose-50';
            } else if (n.type === 'application_update') {
              Icon = FileCheck;
              iconColor = 'text-emerald-600 bg-emerald-50';
            }

            return (
              <div
                key={n.id}
                onClick={() => onMarkOneAsRead(n.id)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                  n.isRead
                    ? 'bg-white border-slate-200 text-slate-600'
                    : 'bg-blue-50/40 border-blue-200 text-slate-900 shadow-2xs'
                }`}
              >
                <div className={`p-2 rounded-lg shrink-0 ${iconColor}`}>
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className={`text-xs ${n.isRead ? 'font-semibold' : 'font-bold'}`}>
                      {n.title}
                    </p>
                    <span className="text-[10px] text-slate-400 whitespace-nowrap">
                      {n.timestamp}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {n.message}
                  </p>
                </div>
              </div>
            );
          })}
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
