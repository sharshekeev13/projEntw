import { Plus } from 'lucide-react'; 



const FloatingButton = ({ onClick }: { onClick: () => void }) => {
    return (
      <button
        onClick={onClick}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-primary p-4 text-white shadow-lg hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <Plus className="w-5 h-5" />
      </button>
    );
  };
  
  export default FloatingButton;
