import React from 'react';

export default function Skeleton() {
  return (
    <div className="w-full p-5 rounded-xl bg-neutral-100 dark:bg-neutral-800">
      <h2 className="w-20 h-10 rounded bg-neutral-200 dark:bg-neutral-700 mb-4 animate-pulse"></h2>
      <ul>
        <div className="w-full h-12 rounded bg-neutral-200 dark:bg-neutral-700 mb-4 animate-pulse"></div>
        <div className="w-full h-12 rounded bg-neutral-200 dark:bg-neutral-700 mb-4 animate-pulse"></div>
        <div className="w-full h-12 rounded bg-neutral-200 dark:bg-neutral-700 animate-pulse"></div>
      </ul>
    </div>
  );
}
