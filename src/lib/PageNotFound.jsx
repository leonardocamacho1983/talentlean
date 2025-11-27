import { useLocation, Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { createPageUrl } from "@/utils";


export default function PageNotFound({}) {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    const { data: authData, isFetched } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const user = await base44.auth.me();
                return { user, isAuthenticated: true };
            } catch (error) {
                return { user: null, isAuthenticated: false };
            }
        }
    });
    
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Navigation Header */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100" role="navigation" aria-label="Main navigation">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link to={createPageUrl("Home")} className="text-2xl font-bold text-gray-900">
                            Talent<span className="text-teal-600">Lean</span>
                        </Link>
                        <div className="hidden md:flex space-x-8">
                            <Link to={createPageUrl("Home")} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                                Home
                            </Link>
                            <Link to={createPageUrl("Pricing")} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                                Pricing
                            </Link>
                            <Link to={createPageUrl("FAQ")} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                                FAQ
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* 404 Content */}
            <div className="flex items-center justify-center p-6 min-h-[calc(100vh-64px)]">
                <div className="max-w-md w-full">
                <div className="text-center space-y-6">
                    {/* Main Title */}
                    <div className="space-y-2">
                        <h1 className="text-2xl font-medium text-slate-800">
                            Page Not Found - TalentLean
                        </h1>
                        <div className="text-7xl font-light text-slate-300 mt-4">404</div>
                        <div className="h-0.5 w-16 bg-slate-200 mx-auto mt-2"></div>
                    </div>

                    {/* Main Message */}
                    <div className="space-y-3">
                        <p className="text-slate-600 leading-relaxed">
                            The page <span className="font-medium text-slate-700">"{pageName}"</span> could not be found in this application.
                        </p>

                        {/* Helpful Suggestions */}
                        <div className="mt-6 space-y-4 text-left">
                            <p className="text-sm text-slate-600">
                                You might be looking for:
                            </p>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <li className="flex items-start">
                                    <span className="text-teal-600 mr-2">•</span>
                                    <Link to={createPageUrl("Home")} className="hover:text-teal-600 transition-colors">
                                        <strong>Home</strong> - Learn about TalentLean's AI-powered LatAm staff augmentation services
                                    </Link>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-600 mr-2">•</span>
                                    <Link to={createPageUrl("Pricing")} className="hover:text-teal-600 transition-colors">
                                        <strong>Pricing</strong> - Explore our transparent pricing calculator and service plans
                                    </Link>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-600 mr-2">•</span>
                                    <Link to={createPageUrl("FAQ")} className="hover:text-teal-600 transition-colors">
                                        <strong>FAQ</strong> - Find answers to common questions about our services and process
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Admin Note */}
                    {isFetched && authData.isAuthenticated && authData.user?.role === 'admin' && (
                        <div className="mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200">
                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                                </div>
                                <div className="text-left space-y-1">
                                    <p className="text-sm font-medium text-slate-700">Admin Note</p>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* Action Buttons */}
                    <div className="pt-6 flex gap-3 justify-center">
                        <Link
                            to={createPageUrl("Home")}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Go to Homepage
                        </Link>
                        <Link
                            to={createPageUrl("FAQ")}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                        >
                            Get Help
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}