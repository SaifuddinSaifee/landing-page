'use client';

import { useRef } from 'react';
import { HeroSection } from './components/HeroSection';
import { ScholarshipCard } from './components/ScholarshipCard';
import { EligibilitySection } from './components/EligibilitySection';
import { ContactSection } from './components/ContactSection';
import { motion } from 'framer-motion';
import { Award, Layers, Users } from 'lucide-react';

const scholarshipData = [
  {
    title: "Performance Excellence Scholarship",
    description: "Rewards outstanding academic achievement in certification exams during the program.",
    benefits: [
      "Full program fee reimbursement (Premium: $2,499, Advanced: $3,499, Expert: $4,499)",
      "Recognition in EliteClass Alumni Network",
      "Special mention during program ceremonies",
      "Priority access to networking events",
      "Featured profile on EliteClass success stories",
      "Scholarship discount for future programs",
      "Extended one-on-one mentoring sessions",
      "Special access to future EliteClass programs"
    ],
    requirements: [
      "Score 90% or above in all six certification exams",
      "100% attendance in all sessions",
      "Active participation in all program components",
      "Professional conduct throughout the program",
      "Positive feedback from trainers and mentors"
    ],
    terms: [
      "Complete all six certifications within program duration",
      "Premium Package: 2 weeks",
      "Advanced Package: 3 weeks",
      "Expert Package: 4 weeks",
      "Scholarship is non-transferable",
      "All decisions are final by scholarship committee"
    ]
  },
  {
    title: "Multi-Certification Achievement",
    description: "Recognizes successful completion of all six Microsoft certifications.",
    benefits: [
      "Full reimbursement for all additional certification costs",
      "Recognition in EliteClass Alumni Network",
      "Professional development support",
      "Career advancement opportunities"
    ],
    requirements: [
      "Successfully complete all six Microsoft certifications",
      "100% attendance in all sessions",
      "Active participation in program components",
      "Professional conduct throughout",
      "Positive contribution to program community"
    ],
    terms: [
      "All certifications must be completed during program duration",
      "Benefits must be utilized within two weeks of program start",
      "Scholarship is non-transferable",
      "Regular progress updates required",
      "Vouchers must be purchased from EliteClass"
    ]
  },
  {
    title: "Elite 50 Referral Excellence",
    description: "Prestigious program rewarding exceptional community building and leadership. Choose between this program or the standard referral rewards at your first referral.",
    benefits: [
      "₹2 Lakh cash scholarship upon reaching 50 referrals",
      "Guaranteed 3-month paid remote internship",
      "Personalized Letters of Recommendation for masters",
      "Recognition as Elite 50 Member",
      "Priority access to future programs",
      "Exclusive Silicon Valley networking",
      "Mentorship opportunities"
    ],
    requirements: [
      "Refer 50 students within 2 years post-program",
      "Referred students must complete program",
      "Maintain professional communication",
      "Complete EliteClass program with 100% attendance",
      "Must choose between Elite 50 or standard referral program"
    ],
    terms: [
      "24-month referral period from first referral",
      "Internship must be utilized within 18 months",
      "LORs valid for 3 years after Elite 50 status",
      "Must opt-in at first referral: Choose between Elite 50 (₹2 Lakh on 50 referrals) OR standard referral (₹2,500 Amazon voucher per referral)",
      "Cannot switch programs after first choice",
      "All referred students receive ₹5,000 Amazon voucher regardless of referrer's program choice"
    ]
  }
];

export default function ScholarshipsPage() {
  const performanceRef = useRef<HTMLDivElement>(null);
  const multiCertRef = useRef<HTMLDivElement>(null);
  const elite50Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (element: HTMLDivElement | null) => {
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="min-h-screen py-12 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        
        {/* Navigation Pills */}
        <motion.div 
          className="flex flex-col md:flex-row justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={() => scrollToSection(performanceRef.current)}
            className="w-[200px] px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 via-blue-500/20 to-blue-500/10 hover:from-blue-500/20 hover:via-blue-500/30 hover:to-blue-500/20 text-white transition-all duration-300 flex items-center justify-center gap-2 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]"
          >
            <Award className="w-4 h-4 text-blue-400" />
            <span>Performance</span>
          </button>
          <button
            onClick={() => scrollToSection(multiCertRef.current)}
            className="w-[200px] px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 via-emerald-500/20 to-emerald-500/10 hover:from-emerald-500/20 hover:via-emerald-500/30 hover:to-emerald-500/20 text-white transition-all duration-300 flex items-center justify-center gap-2 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]"
          >
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Multi-Cert</span>
          </button>
          <button
            onClick={() => scrollToSection(elite50Ref.current)}
            className="w-[200px] px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 via-purple-500/20 to-purple-500/10 hover:from-purple-500/20 hover:via-purple-500/30 hover:to-purple-500/20 text-white transition-all duration-300 flex items-center justify-center gap-2 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
          >
            <Users className="w-4 h-4 text-purple-400" />
            <span>Elite 50</span>
          </button>
        </motion.div>

        {/* Performance Excellence Section */}
        <motion.section
          ref={performanceRef}
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/5 via-blue-500/10 to-blue-500/5 border border-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <h2 className="text-3xl font-serif text-white mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-blue-400" />
              Performance Excellence Scholarship
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <ScholarshipCard
                title="Benefits"
                description="What you'll receive"
                items={scholarshipData[0].benefits}
                variant="blue"
              />
              <ScholarshipCard
                title="Requirements"
                description="What you need to qualify"
                items={scholarshipData[0].requirements}
                variant="blue"
              />
              <ScholarshipCard
                title="Terms"
                description="Important conditions"
                items={scholarshipData[0].terms}
                variant="blue"
              />
            </div>
          </div>
        </motion.section>

        {/* Multi-Certification Section */}
        <motion.section
          ref={multiCertRef}
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-500/5 via-emerald-500/10 to-emerald-500/5 border border-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <h2 className="text-3xl font-serif text-white mb-8 flex items-center gap-3">
              <Layers className="w-8 h-8 text-emerald-400" />
              Multi-Certification Achievement
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <ScholarshipCard
                title="Benefits"
                description="What you'll receive"
                items={scholarshipData[1].benefits}
                variant="emerald"
              />
              <ScholarshipCard
                title="Requirements"
                description="What you need to qualify"
                items={scholarshipData[1].requirements}
                variant="emerald"
              />
              <ScholarshipCard
                title="Terms"
                description="Important conditions"
                items={scholarshipData[1].terms}
                variant="emerald"
              />
            </div>
          </div>
        </motion.section>

        {/* Elite 50 Section */}
        <motion.section
          ref={elite50Ref}
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/5 via-purple-500/10 to-purple-500/5 border border-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
            <h2 className="text-3xl font-serif text-white mb-8 flex items-center gap-3">
              <Users className="w-8 h-8 text-purple-400" />
              Elite 50 Referral Excellence
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <ScholarshipCard
                title="Benefits"
                description="What you'll receive"
                items={scholarshipData[2].benefits}
                variant="purple"
              />
              <ScholarshipCard
                title="Requirements"
                description="What you need to qualify"
                items={scholarshipData[2].requirements}
                variant="purple"
              />
              <ScholarshipCard
                title="Terms"
                description="Important conditions"
                items={scholarshipData[2].terms}
                variant="purple"
              />
            </div>
          </div>
        </motion.section>

        <div className="mt-16 space-y-12">
          <EligibilitySection />
        </div>

        <ContactSection />
      </div>
    </main>
  );
} 