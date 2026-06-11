import { Award, Users } from 'lucide-react';

export default function Activities() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Certifications & <span className="text-primary">Activities</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h2>
            </div>
            
            <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-slate-700 rounded-xl p-6 shadow-sm flex-grow">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Financial Inclusion: Engaging and Inspiring Youth in Banking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Aptis for Teens - Preparation Course</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-gray-700 dark:text-gray-300">CSE/ECE/ETE Job Sector after Engineering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-gray-700 dark:text-gray-300">DriveSafe: Intelligent Vehicle Safety and Tracking System</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Safer Internet for Children</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Extra Co-Curricular Activities */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Extra Co-Curricular Activities</h2>
            </div>

            <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-slate-700 rounded-xl p-6 shadow-sm flex-grow">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Graphics Design Team Lead - Notre Dame College Association of RUET</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Logistics Team Lead - Notre Dame College Association of RUET</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Assistant Organizing Secretary - Notre Dame College Association of RUET</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Former IT Lead - Tarunner Proyas, Bonpara, Natore (A new Local Voluntary Organization)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Former Campus Ambassador - Trimatrik Rosikota</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Former Executive Member - Photographic Society of RUET</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Former Member - Notre Dame English Club</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
