import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          My <span className="text-primary">Education</span>
        </h1>

        <div className="max-w-2xl mx-auto">
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
            </div>
            
            <div className="relative border-l-2 border-gray-200 dark:border-slate-700 ml-3 md:ml-4 space-y-10">
              {/* University */}
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1.5 shadow-[0_0_0_4px_rgba(15,111,255,0.2)]"></div>
                <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-slate-700 rounded-xl p-5 shadow-sm">
                  <span className="text-sm font-semibold text-primary mb-1 block">Aug 2023 - Present</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    B.Sc. Engineering in Electronics & Telecommunication Engineering
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Rajshahi University of Engineering & Technology (RUET)</p>
                </div>
              </div>

              {/* HSC */}
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-gray-300 dark:bg-slate-600 rounded-full -left-[9px] top-1.5"></div>
                <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-slate-700 rounded-xl p-5 shadow-sm">
                  <span className="text-sm font-semibold text-gray-500 mb-1 block">2022</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Higher Secondary Certificate
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Notre Dame College, Dhaka</p>
                </div>
              </div>

              {/* SSC */}
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-gray-300 dark:bg-slate-600 rounded-full -left-[9px] top-1.5"></div>
                <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-slate-700 rounded-xl p-5 shadow-sm">
                  <span className="text-sm font-semibold text-gray-500 mb-1 block">2020</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Secondary School Certificate
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">St. Joseph's School & College, Natore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
