import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Spinner size="lg" className="mb-4" />
      <p className="text-lg font-medium text-gray-700">Đang tải...</p>
    </div>
  );
}
