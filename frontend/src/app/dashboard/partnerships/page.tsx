// src/app/dashboard/partnerships/page.tsx
import DashboardLayout from '@/components/layout/DashboardLayout';
import PartnerList from '@/components/partnerships/PartnerList';
import PartnershipForm from '@/components/partnerships/PartnershipForm';

export default function PartnershipsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Partnerships Management</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Add New Partner
          </button>
        </div>
        <PartnerList />
      </div>
    </DashboardLayout>
  );
}