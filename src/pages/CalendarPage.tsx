import React from 'react';
import TodayList from '@/containers/TodayList/TodayList';

export default function CalendarPage() {
  return (
    <div className="max-h-screen scrollbar-thin">
      <div className="max-w-3xl mx-auto px-10 pb-32">
        <header className="pt-10 mb-6">
          <div className="flex flex-row items-end">
            <h1 className="text-xl font-bold">
              {new Date().getMonth() + 1}월 {new Date().getDate()}일
            </h1>
          </div>
        </header>
        <div>
          <TodayList />
        </div>
      </div>
    </div>
  );
}
