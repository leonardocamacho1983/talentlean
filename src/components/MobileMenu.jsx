import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function MobileMenu({ onNavigate }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNavigate = (sectionId) => {
    setIsOpen(false);
    onNavigate(sectionId);
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-16 right-0 bottom-0 w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <nav className="flex flex-col p-6 space-y-4">
          <button
            onClick={() => handleNavigate('hero')}
            className="text-left text-gray-700 hover:text-teal-600 font-medium py-2 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigate('augmentation')}
            className="text-left text-gray-700 hover:text-teal-600 font-medium py-2 transition-colors"
          >
            Staff Augmentation
          </button>
          <button
            onClick={() => handleNavigate('byot')}
            className="text-left text-gray-700 hover:text-teal-600 font-medium py-2 transition-colors"
          >
            Migrate Your Team
          </button>
          <Link
            to={createPageUrl("Pricing")}
            className="text-left text-gray-700 hover:text-teal-600 font-medium py-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <button
            onClick={() => handleNavigate('why-different')}
            className="text-left text-gray-700 hover:text-teal-600 font-medium py-2 transition-colors"
          >
            About
          </button>
          <div className="pt-4 border-t border-gray-200">
            <Button
              onClick={() => handleNavigate('cta')}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full"
            >
              Meet an Expert
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}