import { HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <Section className="flex items-center justify-center min-h-[80vh]">
      <div className="text-center">
                <h1 className="text-6xl font-bold text-primary-600 mb-6">Coming Soon</h1>

        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
                    This Page will be available  shortly. Please check back soon.
                  </p>
        {/*
        <h1 className="text-6xl font-bold text-primary-600 mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          We're sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        */}
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded bg-primary-600 text-white hover:bg-primary-700 transition-colors"
        >
          <HomeIcon className="h-5 w-5 mr-2" />
          Return to Home
        </Link>
      </div>
    </Section>
  );
};

export default NotFoundPage;