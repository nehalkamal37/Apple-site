import { HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <Section className="flex items-center justify-center min-h-[80vh]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-600 mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          We're sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          variant="primary" 
          size="lg" 
          as={Link} 
          to="/"
          icon={<HomeIcon className="h-5 w-5" />}
          iconPosition="left"
        >
          Return to Home
        </Button>
      </div>
    </Section>
  );
};

export default NotFoundPage;