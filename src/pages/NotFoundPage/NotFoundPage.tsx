import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Seite nicht gefunden</h2>
      <p className="text-gray-600 mb-6">
        Die Seite, die du suchst, existiert nicht oder wurde verschoben.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-primary text-white rounded hover:bg-blue-700 transition"
      >
        Zur Startseite
      </Link>
    </div>
  );
};

export default NotFoundPage;
