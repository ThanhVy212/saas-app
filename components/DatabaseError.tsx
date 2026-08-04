'use client'

import React from 'react';

const DatabaseError = () => {
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div className="w-full flex items-center justify-center py-16 px-4">
            <div className="relative overflow-hidden bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-12 max-w-xl w-full text-center flex flex-col items-center gap-6 transition-all duration-300 hover:shadow-orange-500/5">
                
                {/* Decorative background gradients */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />

                {/* Animated Database Icon */}
                <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-orange-50 dark:bg-neutral-800/50 text-primary p-4 shadow-inner">
                    <svg
                        className="w-12 h-12 text-primary animate-pulse"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V10.125M3.75 10.125v3.75m16.5-3.75v3.75m-16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75m16.5 0v3.75m-16.5 0v3.75C3.75 19.903 7.444 21.75 12 21.75s8.25-1.847 8.25-4.125v-3.75"
                        />
                    </svg>
                    {/* Error warning badge */}
                    <span className="absolute top-2 right-2 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                </div>

                {/* Text content */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-100 animate-fade-in">
                        Không Thể Kết Nối Dữ Liệu
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 max-w-md mx-auto text-sm md:text-base">
                        Hệ thống đã gặp lỗi khi thiết lập kết nối với cơ sở dữ liệu. Vui lòng kiểm tra lại đường truyền internet hoặc thử tải lại trang.
                    </p>
                </div>

                {/* Actions */}
                <div className="w-full flex flex-col sm:flex-row gap-3 justify-center items-center mt-2">
                    <button
                        onClick={handleReload}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-white font-medium shadow-lg shadow-orange-500/20 hover:bg-primary/95 hover:shadow-orange-500/30 transition-all duration-200 active:scale-[0.98] cursor-pointer"
                    >
                        Thử kết nối lại
                    </button>
                </div>

                {/* Diagnostics details */}
                <details className="w-full text-left bg-neutral-50 dark:bg-neutral-800/30 border border-neutral-100 dark:border-neutral-800 rounded-xl p-3 cursor-pointer group mt-4">
                    <summary className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 select-none outline-none flex items-center justify-between">
                        <span>Thông tin chẩn đoán kỹ thuật</span>
                        <svg
                            className="w-4 h-4 transform transition-transform duration-200 group-open:rotate-180"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>
                    <div className="mt-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 overflow-x-auto whitespace-pre bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-lg p-3">
                        {`Status: CONNECTION_FAILURE
Database Provider: Supabase
Current Time: ${new Date().toLocaleString('vi-VN')}
Checklist:
- Check environment variable credentials
- Verify Supabase service status
- Check internet firewall configuration`}
                    </div>
                </details>

            </div>
        </div>
    );
};

export default DatabaseError;
