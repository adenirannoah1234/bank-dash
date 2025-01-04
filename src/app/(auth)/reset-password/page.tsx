import { Suspense } from 'react';
import ResetPassword from './components/ResetPasswordPage';

const ResetPasswordPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white" />
        </div>
      }
    >
      <ResetPassword />
    </Suspense>
  );
};

export default ResetPasswordPage;
