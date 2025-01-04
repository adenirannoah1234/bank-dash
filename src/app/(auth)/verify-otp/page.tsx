import VerifyOtp from './components/VerifyOtpPage';
import { Suspense } from 'react';

const VerifyOtpPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white" />
        </div>
      }
    >
      <VerifyOtp />
    </Suspense>
  );
};
export default VerifyOtpPage;
