// User Not Registered Error Component
import { AlertTriangle } from "lucide-react";

export default function UserNotRegisteredError() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="max-w-md w-full">
        <div className="text-center space-y-6">
          {/* Error Icon */}
          <div className="flex justify-center">
            <div className="p-3 bg-red-100 rounded-full">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-slate-900">Access Denied</h1>
            <p className="text-slate-600 leading-relaxed">
              You are not registered for this application. Please contact the
              administrator for access.
            </p>
          </div>

          {/* Additional Information */}
          <div className="mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200">
            <p className="text-sm text-slate-600">
              If you believe this is an error, please reach out to support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
