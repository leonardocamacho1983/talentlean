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
        className="md:hidden p-2 text-[#2B2E32] hover:text-[#006F64] transition-colors focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
        aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
      >
        {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
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
        id="mobile-menu-panel"
        className={`fixed top-0 right-0 bottom-0 w-full bg-white shadow-xl z-[60] transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-white">
          <span className="text-2xl font-bold text-[#2B2E32]">
            Talent<span className="text-[#006F64]">Lean</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#2B2E32] hover:text-[#006F64] focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
            aria-label="Close mobile menu"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <nav className="flex flex-col p-6 space-y-4 bg-white" role="navigation">
          <button
            onClick={() => handleNavigate('hero')}
            className="text-left text-[#2B2E32] hover:text-[#006F64] font-medium py-2 transition-colors focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigate('augmentation')}
            className="text-left text-[#2B2E32] hover:text-[#006F64] font-medium py-2 transition-colors focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
          >
            Staff Augmentation
          </button>
          <button
            onClick={() => handleNavigate('byot')}
            className="text-left text-[#2B2E32] hover:text-[#006F64] font-medium py-2 transition-colors focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
          >
            Migrate Your Team
          </button>
          <Link
            to={createPageUrl("Pricing")}
            className="text-left text-[#2B2E32] hover:text-[#006F64] font-medium py-2 transition-colors focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to={createPageUrl("FAQ")}
            className="text-left text-[#2B2E32] hover:text-[#006F64] font-medium py-2 transition-colors focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          <Link
            to={createPageUrl("Ambassadors")}
            className="text-left text-[#2B2E32] hover:text-[#006F64] font-medium py-2 transition-colors focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
            onClick={() => setIsOpen(false)}
          >
            Ambassadors
          </Link>
          <button
            onClick={() => handleNavigate('why-different')}
            className="text-left text-[#2B2E32] hover:text-[#006F64] font-medium py-2 transition-colors focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
          >
            About
          </button>
          <div className="pt-4 border-t border-gray-200">
            <Button
              onClick={() => {
                setIsOpen(false);
                window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2tn_Tmo9Pacv8oMb1kWQcBb8V3MJ3Qo3gGsR9m0T4RpO5LMrM3dNW7iWYVweYJBeoof7J_rtC-', '_blank');
              }}
              className="w-full bg-[#006F64] hover:bg-[#014D44] text-white rounded-full focus:outline-2 focus:outline-[#006F64] focus:outline-offset-2"
            >
              Meet an Expert
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}