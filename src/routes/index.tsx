import { createFileRoute } from "@tanstack/react-router";
import collegeBuilding from "@/assets/college-building.jpg";
import classroom from "@/assets/classroom.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import sports from "@/assets/sports.jpg";
import annualFunction from "@/assets/annual-function.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BLM Inter College — Virat Nagar, Ahirwan, Kanpur (U.P.)" },
      { name: "description", content: "BLM Inter College, Virat Nagar, Ahirwan, Kanpur — A Temple of Learning Dedicated to Discipline, Education and Excellence. Admissions Open 2025-26." },
      { property: "og:title", content: "BLM Inter College" },
      { property: "og:description", content: "A Temple of Learning Dedicated to Discipline, Education and Excellence." },
    ],
  }),
  component: Index,
});

const NAV = ["HOME", "ABOUT US", "ACADEMICS", "ADMISSIONS", "FACILITIES", "GALLERY", "NOTICE BOARD", "CONTACT US"];

const FEATURES = [
  { icon: "🎓", title: "Quality Education", desc: "Committed to providing quality education." },
  { icon: "👥", title: "Experienced Faculty", desc: "Well qualified & dedicated teaching faculty." },
  { icon: "🏆", title: "Overall Development", desc: "Focus on academics, sports, culture & values." },
  { icon: "📖", title: "Discipline & Values", desc: "Building strong character and leadership." },
];

const CHECKS = [
  "Affiliated to Uttar Pradesh Board",
  "High School & Intermediate Education",
  "Hindi & English Medium",
  "Excellent Infrastructure & Learning Environment",
  "Focus on Sports, Cultural & Co-curricular Activities",
];

const STATS = [
  { icon: "👥", num: "1000+", label: "Happy Students", color: "text-white" },
  { icon: "👨‍🏫", num: "40+", label: "Experienced Faculty", color: "text-white" },
  { icon: "📚", num: "25+", label: "Years of Excellence", color: "text-[#FFC107]" },
  { icon: "🏆", num: "100+", label: "Awards & Achievements", color: "text-white" },
];

const ACTIVITIES = [
  { img: collegeBuilding, label: "College Building" },
  { img: scienceLab, label: "Science Laboratory" },
  { img: sports, label: "Sports Activities" },
  { img: annualFunction, label: "Annual Function" },
];

const NOTICES = [
  { title: "Admission Open for Class 11th (2025-26)", date: "20 May 2025" },
  { title: "Important Notice Regarding Summer Vacation", date: "18 May 2025" },
  { title: "UP Board Result 2025 Declared", date: "25 Apr 2025" },
  { title: "Half Yearly Examination Time Table", date: "15 Apr 2025" },
  { title: "Annual Sports Day Celebration", date: "05 Apr 2025" },
];

function Index() {
  return (
    <div className="min-h-screen bg-white text-[#222222]" style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif" }}>
      {/* Top Bar */}
      <div className="bg-[#0A2C78] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 h-[35px] flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-5">
            <span>📞 8081552552 / 8299298216</span>
            <span>✉ info@blmintercollege.in</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Student Login</a>
            <span>|</span>
            <a href="#" className="hover:underline">Staff Login</a>
            <a href="#" aria-label="Facebook" className="ml-2">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-[80px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="BLM Inter College" className="h-14 w-14" />
            <div>
              <div className="text-[#0A2C78] font-bold text-lg leading-tight">BLM INTER COLLEGE</div>
              <div className="text-xs text-gray-600">Virat Nagar, Ahirwan, Kanpur (U.P.)</div>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-6 text-[12px] font-semibold text-[#222]">
            {NAV.map((item) => (
              <a key={item} href="#" className="hover:text-[#0A2C78] whitespace-nowrap">
                {item}{(item === "ABOUT US" || item === "ACADEMICS") && " ▾"}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E6F0FB] to-[#D9E8F5]">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[#0A2C78] text-lg mb-2">Welcome to</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A2C78] leading-tight">BLM INTER COLLEGE</h1>
            <p className="mt-3 text-[#0A2C78] font-semibold">Virat Nagar, Ahirwan, Kanpur (U.P.)</p>
            <p className="mt-4 text-[#333] max-w-md">
              A Temple of Learning Dedicated to<br/>Discipline, Education and Excellence.
            </p>
            <button className="mt-6 bg-[#0A2C78] hover:bg-[#123E9A] text-white font-semibold text-sm px-6 py-3 rounded inline-flex items-center gap-2">
              ADMISSIONS OPEN 2025-26 <span>→</span>
            </button>
          </div>
          <div>
            <img src={collegeBuilding} alt="BLM Inter College building" width={1024} height={640} className="w-full rounded shadow" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0A2C78] text-white flex items-center justify-center text-xl shrink-0">{f.icon}</div>
              <div>
                <div className="font-bold text-[#222] text-sm">{f.title}</div>
                <div className="text-xs text-gray-600 mt-1">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
          <img src={classroom} alt="Classroom" width={800} height={640} loading="lazy" className="w-full rounded shadow" />
          <div>
            <p className="text-[#0A2C78] font-semibold text-sm tracking-wide">ABOUT OUR SCHOOL</p>
            <h2 className="text-3xl font-bold text-[#222] mt-2">Shaping Future, Building Nation</h2>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              BLM Inter College, Virat Nagar, Ahirwan, Kanpur is a reputed institution committed to academic excellence and holistic development. Our mission is to nurture young minds with knowledge, values and discipline to prepare them for a successful future.
            </p>
            <ul className="mt-5 space-y-2">
              {CHECKS.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-[#222]">
                  <span className="w-5 h-5 rounded-full bg-[#34A853] text-white flex items-center justify-center text-xs">✓</span>
                  {c}
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-[#0A2C78] hover:bg-[#123E9A] text-white font-semibold text-xs px-5 py-3 rounded inline-flex items-center gap-2">
              KNOW MORE ABOUT US <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0A2C78] text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className={`text-3xl font-extrabold ${s.color}`}>{s.num}</div>
              <div className="text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Activities */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <p className="text-[#0A2C78] font-semibold text-sm tracking-wide">OUR ACTIVITIES</p>
          <h2 className="text-3xl font-bold text-[#222] mt-2">Glimpses of Our College Life</h2>
          <div className="flex items-center justify-center gap-2 mt-3 mb-8">
            <span className="h-[2px] w-10 bg-[#0A2C78]/30" />
            <span className="text-[#0A2C78]">🎓</span>
            <span className="h-[2px] w-10 bg-[#0A2C78]/30" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {ACTIVITIES.map((a) => (
              <div key={a.label}>
                <img src={a.img} alt={a.label} loading="lazy" className="w-full h-44 object-cover rounded shadow" />
                <p className="mt-3 text-sm font-semibold text-[#222]">{a.label}</p>
              </div>
            ))}
          </div>
          <button className="mt-8 bg-[#0A2C78] hover:bg-[#123E9A] text-white font-semibold text-xs px-5 py-3 rounded inline-flex items-center gap-2">
            VIEW GALLERY 🖼
          </button>
        </div>
      </section>

      {/* Notice + Achievements */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 pb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-[#F5F6F8] rounded shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#0A2C78] font-bold flex items-center gap-2">📢 NOTICE BOARD</h3>
              <a href="#" className="text-xs text-[#0A2C78] hover:underline">View All Notices</a>
            </div>
            <ul className="bg-white rounded divide-y">
              {NOTICES.map((n) => (
                <li key={n.title} className="flex items-center justify-between gap-3 px-4 py-3 text-sm">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="bg-[#E53935] text-white text-[10px] font-bold px-2 py-0.5 rounded shrink-0">New</span>
                    <span className="truncate">{n.title}</span>
                  </div>
                  <span className="text-xs text-gray-500 shrink-0">{n.date}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F5F6F8] rounded shadow-sm p-5">
            <h3 className="text-[#0A2C78] font-bold flex items-center gap-2 mb-4">🏆 ACHIEVEMENTS</h3>
            <div className="bg-[#0A2C78] text-white rounded p-8 text-center">
              <div className="text-5xl">🏆</div>
              <h4 className="text-2xl font-bold mt-3"><span className="text-[#FFC107]">Excellence in Education</span></h4>
              <p className="text-xl font-semibold">Pride in Achievement</p>
              <p className="text-sm mt-3 opacity-90">Our students consistently excel in academics, sports and co-curricular activities.</p>
              <button className="mt-5 border border-white/40 text-white text-xs px-4 py-2 rounded inline-flex items-center gap-2 hover:bg-white/10">
                🖼 OUR TOPPERS →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="bg-[#0A2C78] text-white text-center py-12 relative">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm">Give Your Child the Best Education</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">ADMISSIONS OPEN 2025-26</h2>
          <button className="mt-5 bg-white text-[#0A2C78] font-semibold text-xs px-5 py-3 rounded inline-flex items-center gap-2">
            ENQUIRE NOW →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#082563] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="" className="h-10 w-10" />
              <div className="font-bold">BLM INTER COLLEGE</div>
            </div>
            <p className="flex items-start gap-2 text-xs opacity-90">📍 Dal Mil Gali, Virat Nagar,<br/>Ahirwan, Kanpur, U.P. - 208007</p>
            <p className="mt-3 text-xs opacity-90">📞 8081552552 / 8299289218</p>
            <p className="mt-2 text-xs opacity-90">✉ info@blmintercollege.in</p>
            <div className="flex gap-2 mt-4">
              <a href="#" className="w-8 h-8 rounded bg-[#3b5998] flex items-center justify-center">f</a>
              <a href="#" className="w-8 h-8 rounded bg-gradient-to-tr from-pink-500 to-yellow-400 flex items-center justify-center">📷</a>
              <a href="#" className="w-8 h-8 rounded bg-red-600 flex items-center justify-center">▶</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3">QUICK LINKS</h4>
            <ul className="space-y-2 text-xs opacity-90">
              {["Home","About Us","Academics","Admissions","Facilities","Gallery","Notice Board","Contact Us"].map(l => <li key={l}><a href="#" className="hover:underline">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">ACADEMICS</h4>
            <ul className="space-y-2 text-xs opacity-90">
              {["High School (9th & 10th)","Intermediate (11th & 12th)","Subjects","Faculty","Academic Calendar","Results"].map(l => <li key={l}><a href="#" className="hover:underline">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">CONTACT US</h4>
            <p className="text-xs opacity-90 flex items-start gap-2">📍 Dal Mil Gali, Virat Nagar,<br/>Ahirwan, Kanpur, U.P. - 208007</p>
            <p className="mt-2 text-xs opacity-90">📞 8081552552 / 8299289218</p>
            <p className="mt-2 text-xs opacity-90">✉ info@blmintercollege.in</p>
            <div className="mt-3 bg-white rounded overflow-hidden">
              <iframe title="map" src="https://maps.google.com/maps?q=Kanpur&z=13&output=embed" className="w-full h-24 border-0" />
            </div>
          </div>
        </div>
        <div className="border-t border-white/15">
          <div className="max-w-7xl mx-auto px-4 py-3 text-xs flex flex-wrap justify-between gap-2 opacity-90">
            <span>© 2025 BLM Inter College. All Rights Reserved.</span>
            <span>Designed with ❤ for Education</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
