// components/DownloadNoticeModal.tsx
import { Dialog } from '@headlessui/react';
import { Fragment } from 'react';

export function DownloadNoticeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Dialog open={isOpen} onClose={onClose} as={Fragment}>
      <div className="fixed inset-0 z-50 bg-black/10 flex items-center justify-center px-4">
        <Dialog.Panel className="bg-white rounded-lg max-w-sm w-full p-6 shadow-lg">
          <Dialog.Title className="text-lg font-bold text-gray-800 mb-2">Coming Soon</Dialog.Title>
          <Dialog.Description className="text-sm text-gray-600 mb-4">
            This document will be available for download shortly. Please check back soon.
          </Dialog.Description>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
            >
              OK
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
