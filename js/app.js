// CareerCompass - React Application Logic
const { useState, useEffect, useMemo } = React;

// Simple inline SVG icons for crisp UI without external dependencies
const Icons = {
  Compass: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  ),
  User: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Briefcase: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Target: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Map: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  ),
  CheckCircle: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Sparkles: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  ),
  ArrowRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  ArrowLeft: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  ),
  TrendingUp: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  Award: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  Plus: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  Printer: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  )
};

// Main CareerCompass App
function CareerCompassApp() {
  const metadata = window.CAREER_COMPASS_METADATA;
  const careers = window.CAREER_COMPASS_CAREERS;
  const roadmaps = window.CAREER_COMPASS_ROADMAPS;

  // Local storage initial state
  const loadInitialState = () => {
    try {
      const saved = localStorage.getItem("careercompass_state_v1");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn("Could not read local storage:", e);
    }
    return {
      currentPage: "landing",
      student: {
        name: "",
        branch: metadata.branches[0],
        year: metadata.years[2], // 3rd year default
        interests: [],
        currentSkills: [],
        careerGoal: metadata.defaultGoals[0]
      },
      selectedCareerId: "ai-ml",
      completedWeeks: [1] // 1 week completed for realistic sample
    };
  };

  const [state, setState] = useState(loadInitialState);
  const [showExportModal, setShowExportModal] = useState(false);
  const [notification, setNotification] = useState(null);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem("careercompass_state_v1", JSON.stringify(state));
    } catch (e) {
      console.warn("Could not save to local storage:", e);
    }
  }, [state]);

  const showToast = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const setPage = (pageName) => {
    setState(prev => ({ ...prev, currentPage: pageName }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateStudent = (fields) => {
    setState(prev => ({
      ...prev,
      student: { ...prev.student, ...fields }
    }));
  };

  const selectCareer = (careerId) => {
    setState(prev => ({
      ...prev,
      selectedCareerId: careerId,
      currentPage: "skillgap"
    }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleWeekCompletion = (weekNum) => {
    setState(prev => {
      const exists = prev.completedWeeks.includes(weekNum);
      const updated = exists
        ? prev.completedWeeks.filter(w => w !== weekNum)
        : [...prev.completedWeeks, weekNum].sort((a, b) => a - b);
      return { ...prev, completedWeeks: updated };
    });
  };

  const markSkillAsLearned = (skillName) => {
    if (!state.student.currentSkills.includes(skillName)) {
      const updatedSkills = [...state.student.currentSkills, skillName];
      setState(prev => ({
        ...prev,
        student: { ...prev.student, currentSkills: updatedSkills }
      }));
      showToast(`Added "${skillName}" to your skills! Your readiness score increased.`);
    }
  };

  const loadDemoData = () => {
    setState({
      currentPage: "discovery",
      student: { ...metadata.sampleStudent },
      selectedCareerId: "ai-ml",
      completedWeeks: [1, 2]
    });
    showToast("Loaded Alex Chen's sample student profile!");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetAll = () => {
    if (window.confirm("Reset all profile data and roadmap progress?")) {
      const freshState = {
        currentPage: "landing",
        student: {
          name: "",
          branch: metadata.branches[0],
          year: metadata.years[2],
          interests: [],
          currentSkills: [],
          careerGoal: metadata.defaultGoals[0]
        },
        selectedCareerId: "ai-ml",
        completedWeeks: []
      };
      setState(freshState);
      localStorage.removeItem("careercompass_state_v1");
      showToast("App reset to fresh start.");
    }
  };

  // Helper calculations
  const calculateMatch = (career) => {
    const studentSkills = state.student.currentSkills || [];
    const required = career.requiredSkills.map(s => s.name);
    
    // Matched skills count (supporting altName like C++ / Java)
    const matchedCount = career.requiredSkills.filter(req => {
      const mainMatch = studentSkills.some(s => s.toLowerCase() === req.name.toLowerCase());
      const altMatch = req.altName && studentSkills.some(s => s.toLowerCase() === req.altName.toLowerCase());
      return mainMatch || altMatch;
    }).length;

    // Skill score weight: 70%
    const skillScore = required.length > 0 ? (matchedCount / required.length) * 70 : 0;

    // Interest bonus weight: 30%
    const studentInterests = state.student.interests || [];
    const interestOverlap = career.primaryInterests.filter(pi => studentInterests.includes(pi)).length;
    const interestScore = career.primaryInterests.length > 0 
      ? Math.min(30, (interestOverlap / career.primaryInterests.length) * 30) 
      : 15;

    const total = Math.round(skillScore + interestScore);
    return Math.min(100, Math.max(15, total));
  };

  // Active selected career object
  const activeCareer = careers.find(c => c.id === state.selectedCareerId) || careers[0];
  const activeRoadmap = roadmaps[activeCareer.id] || roadmaps["ai-ml"];

  // Skill gap calculation for active career
  const skillGapAnalysis = useMemo(() => {
    const studentSkills = state.student.currentSkills || [];
    const matched = [];
    const missing = [];

    activeCareer.requiredSkills.forEach(req => {
      const mainMatch = studentSkills.some(s => s.toLowerCase() === req.name.toLowerCase());
      const altMatch = req.altName && studentSkills.some(s => s.toLowerCase() === req.altName.toLowerCase());
      if (mainMatch || altMatch) {
        matched.push(req);
      } else {
        missing.push(req);
      }
    });

    const readinessPercent = Math.round((matched.length / activeCareer.requiredSkills.length) * 100);
    return { matched, missing, readinessPercent };
  }, [activeCareer, state.student.currentSkills]);

  // Overall readiness score combining skills + completed roadmap weeks
  const overallMetrics = useMemo(() => {
    const skillReadiness = skillGapAnalysis.readinessPercent;
    const weeksDone = state.completedWeeks.length;
    const roadmapPercent = Math.round((weeksDone / 12) * 100);
    const overallScore = Math.round((skillReadiness * 0.5) + (roadmapPercent * 0.5));

    // Next recommended week
    const nextWeekNum = [1,2,3,4,5,6,7,8,9,10,11,12].find(w => !state.completedWeeks.includes(w)) || 12;
    const nextWeekData = activeRoadmap.weeks.find(w => w.week === nextWeekNum) || activeRoadmap.weeks[0];

    // Current active stage
    const currentStageId = nextWeekData.stage;
    const currentStageData = activeRoadmap.stages.find(s => s.id === currentStageId) || activeRoadmap.stages[0];

    return {
      overallScore,
      skillReadiness,
      roadmapPercent,
      weeksDone,
      nextWeekData,
      currentStageData
    };
  }, [skillGapAnalysis, state.completedWeeks, activeRoadmap]);

  return (
    <div className="app-container">
      {/* Toast Notification */}
      {notification && (
        <div style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          background: "#1e1b4b",
          color: "#ffffff",
          padding: "12px 20px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "0.9rem",
          fontWeight: 600,
          border: "1px solid #4338ca"
        }}>
          <Icons.CheckCircle />
          <span>{notification}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <header className="navbar">
        <div className="nav-inner">
          <div className="brand" onClick={() => setPage("landing")}>
            <div className="brand-icon">
              <Icons.Compass />
            </div>
            <div>
              <span className="brand-name">CareerCompass</span>
              <span className="brand-badge">Student MVP</span>
            </div>
          </div>

          {/* Stepper Tabs */}
          <nav className="nav-steps">
            <button 
              className={`step-btn ${state.currentPage === "profile" ? "active" : ""}`}
              onClick={() => setPage("profile")}
            >
              <span className="step-num">1</span>
              <span>Profile</span>
            </button>
            <button 
              className={`step-btn ${state.currentPage === "discovery" ? "active" : ""}`}
              onClick={() => setPage("discovery")}
            >
              <span className="step-num">2</span>
              <span>Careers</span>
            </button>
            <button 
              className={`step-btn ${state.currentPage === "skillgap" ? "active" : ""}`}
              onClick={() => setPage("skillgap")}
            >
              <span className="step-num">3</span>
              <span>Skill Gap</span>
            </button>
            <button 
              className={`step-btn ${state.currentPage === "roadmap" ? "active" : ""}`}
              onClick={() => setPage("roadmap")}
            >
              <span className="step-num">4</span>
              <span>12-Wk Roadmap</span>
            </button>
            <button 
              className={`step-btn ${state.currentPage === "dashboard" ? "active" : ""}`}
              onClick={() => setPage("dashboard")}
            >
              <span className="step-num">5</span>
              <span>Dashboard</span>
            </button>
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            {state.student.name ? (
              <div className="student-tag" title={`${state.student.branch} • ${state.student.year}`}>
                <div className="student-avatar">{state.student.name.charAt(0).toUpperCase()}</div>
                <span>{state.student.name.split(" ")[0]}</span>
              </div>
            ) : (
              <button className="btn btn-outline btn-sm" onClick={loadDemoData}>
                <Icons.Sparkles />
                <span>Demo Student</span>
              </button>
            )}
            <button className="btn btn-secondary btn-sm" onClick={resetAll} title="Reset Progress">
              Reset
            </button>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="main-content">
        {state.currentPage === "landing" && (
          <LandingView 
            onStart={() => setPage("profile")} 
            onLoadDemo={loadDemoData} 
          />
        )}

        {state.currentPage === "profile" && (
          <ProfileView 
            student={state.student} 
            metadata={metadata} 
            onChange={updateStudent} 
            onProceed={() => setPage("discovery")}
            onLoadDemo={loadDemoData}
          />
        )}

        {state.currentPage === "discovery" && (
          <DiscoveryView 
            careers={careers}
            student={state.student}
            selectedId={state.selectedCareerId}
            onSelect={selectCareer}
            calculateMatch={calculateMatch}
            onBack={() => setPage("profile")}
          />
        )}

        {state.currentPage === "skillgap" && (
          <SkillGapView 
            career={activeCareer}
            student={state.student}
            analysis={skillGapAnalysis}
            onMarkLearned={markSkillAsLearned}
            onProceed={() => setPage("roadmap")}
            onBack={() => setPage("discovery")}
          />
        )}

        {state.currentPage === "roadmap" && (
          <RoadmapView 
            career={activeCareer}
            roadmap={activeRoadmap}
            completedWeeks={state.completedWeeks}
            onToggleWeek={toggleWeekCompletion}
            onProceed={() => setPage("dashboard")}
            onBack={() => setPage("skillgap")}
          />
        )}

        {state.currentPage === "dashboard" && (
          <DashboardView 
            student={state.student}
            career={activeCareer}
            metrics={overallMetrics}
            skillAnalysis={skillGapAnalysis}
            onGoToRoadmap={() => setPage("roadmap")}
            onGoToSkillGap={() => setPage("skillgap")}
            onSwitchCareer={() => setPage("discovery")}
            onEditProfile={() => setPage("profile")}
            onOpenExport={() => setShowExportModal(true)}
          />
        )}
      </main>

      {/* Export / Print Modal */}
      {showExportModal && (
        <ExportPlanModal 
          student={state.student}
          career={activeCareer}
          metrics={overallMetrics}
          skillAnalysis={skillGapAnalysis}
          onClose={() => setShowExportModal(false)}
        />
      )}

      {/* Footer */}
      <footer style={{
        textAlign: "center",
        padding: "1.75rem",
        color: "var(--text-muted)",
        fontSize: "0.85rem",
        borderTop: "1px solid var(--border-color)",
        background: "white"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <strong>CareerCompass</strong> • Built for University Students & Hackathon MVP
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <span style={{ cursor: "pointer", color: "var(--primary)" }} onClick={() => setPage("profile")}>Profile</span>
            <span style={{ cursor: "pointer", color: "var(--primary)" }} onClick={() => setPage("discovery")}>Careers</span>
            <span style={{ cursor: "pointer", color: "var(--primary)" }} onClick={() => setPage("roadmap")}>Roadmap</span>
            <span style={{ cursor: "pointer", color: "var(--primary)" }} onClick={() => setPage("dashboard")}>Dashboard</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==========================================================
// 1. LANDING PAGE COMPONENT
// ==========================================================
function LandingView({ onStart, onLoadDemo }) {
  return (
    <div className="animate-fade-in">
      <section className="hero-section">
        <div className="hero-pill">
          <Icons.Sparkles />
          <span>Intelligent Career Guidance for Engineering Students</span>
        </div>
        <h1 className="hero-title">
          From University Syllabus to <span className="hero-highlight">Industry-Ready Tech Roles</span>
        </h1>
        <p className="hero-desc">
          CareerCompass diagnoses your exact skill gaps, matches you to 4 high-growth tech paths, and provides a clear 12-week roadmap with weekly deliverables.
        </p>

        <div className="hero-cta-group">
          <button className="btn btn-primary btn-lg" onClick={onStart}>
            <span>Build Your Profile</span>
            <Icons.ArrowRight />
          </button>
          <button className="btn btn-secondary btn-lg" onClick={onLoadDemo}>
            <Icons.Sparkles />
            <span>Load Demo (Alex Chen, 3rd Yr)</span>
          </button>
        </div>

        {/* Feature Grid */}
        <div className="hero-features">
          <div className="feature-box">
            <div className="feature-icon-wrapper">
              <Icons.Target />
            </div>
            <h3 className="feature-title">1. Career Discovery</h3>
            <p className="feature-desc">
              Evaluate real-world roles in AI/ML, Software Development, Data Analytics, and Web Engineering with dynamic match scores.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrapper" style={{ background: "var(--success-light)", color: "var(--success)" }}>
              <Icons.CheckCircle />
            </div>
            <h3 className="feature-title">2. Skill Gap Diagnostics</h3>
            <p className="feature-desc">
              Compare your current skills directly against job requirements. See what you already possess and what to learn next.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrapper" style={{ background: "var(--secondary-light)", color: "var(--secondary)" }}>
              <Icons.Map />
            </div>
            <h3 className="feature-title">3. 12-Week Guided Roadmap</h3>
            <p className="feature-desc">
              Follow 4 progressive stages with concrete weekly project deliverables, tracked completion, and actionable guidance.
            </p>
          </div>
        </div>

        {/* Problem Statement Card */}
        <div className="problem-banner">
          <div className="problem-content">
            <h3>Why CareerCompass?</h3>
            <p>
              University curriculums often lag behind modern industry requirements. Students know they need to code, but get paralyzed by tutorial hell and scattered roadmaps. CareerCompass gives structured clarity in under 5 minutes.
            </p>
          </div>
          <div>
            <button className="btn btn-primary" onClick={onStart} style={{ background: "white", color: "var(--primary)" }}>
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ==========================================================
// 2. STUDENT PROFILE FORM COMPONENT
// ==========================================================
function ProfileView({ student, metadata, onChange, onProceed, onLoadDemo }) {
  const [skillSearch, setSkillSearch] = useState("");
  const [customSkillInput, setCustomSkillInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const toggleInterest = (interest) => {
    const list = student.interests || [];
    const updated = list.includes(interest)
      ? list.filter(i => i !== interest)
      : [...list, interest];
    onChange({ interests: updated });
  };

  const toggleSkill = (skill) => {
    const list = student.currentSkills || [];
    const updated = list.includes(skill)
      ? list.filter(s => s !== skill)
      : [...list, skill];
    onChange({ currentSkills: updated });
  };

  const handleAddCustomSkill = (e) => {
    e.preventDefault();
    const clean = customSkillInput.trim();
    if (!clean) return;
    if (!student.currentSkills.includes(clean)) {
      onChange({ currentSkills: [...student.currentSkills, clean] });
    }
    setCustomSkillInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!student.name.trim()) {
      setErrorMsg("Please enter your name to personalize your career report.");
      return;
    }
    setErrorMsg("");
    onProceed();
  };

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h2 className="page-title">Student Profile Assessment</h2>
        <p className="page-subtitle">
          Tell us about your branch, year, interests, and current tech skills. We will analyze your baseline and match your best career paths.
        </p>
      </div>

      <div className="profile-card">
        {errorMsg && (
          <div style={{
            background: "var(--danger-light)",
            border: "1px solid #fecaca",
            color: "var(--danger)",
            padding: "0.75rem 1rem",
            borderRadius: "var(--radius-md)",
            marginBottom: "1.5rem",
            fontSize: "0.9rem",
            fontWeight: 600
          }}>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name & Academic Year Grid */}
          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="e.g. Alex Chen" 
                value={student.name}
                onChange={e => onChange({ name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Current Academic Year</label>
              <select 
                className="form-select"
                value={student.year}
                onChange={e => onChange({ year: e.target.value })}
              >
                {metadata.years.map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Branch & Career Goal */}
          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Branch of Study</label>
              <select 
                className="form-select"
                value={student.branch}
                onChange={e => onChange({ branch: e.target.value })}
              >
                {metadata.branches.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Primary Career Goal</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="e.g. Secure a top tier internship" 
                value={student.careerGoal}
                onChange={e => onChange({ careerGoal: e.target.value })}
                list="goals-list"
              />
              <datalist id="goals-list">
                {metadata.defaultGoals.map(g => (
                  <option key={g} value={g} />
                ))}
              </datalist>
            </div>
          </div>

          {/* Interests Chips */}
          <div className="form-group">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <label className="form-label">Areas of Interest</label>
              <span className="form-hint">{(student.interests || []).length} selected</span>
            </div>
            <div className="tag-container">
              {metadata.interests.map(interest => {
                const isSelected = (student.interests || []).includes(interest);
                return (
                  <span 
                    key={interest} 
                    className={`tag-chip ${isSelected ? "selected" : ""}`}
                    onClick={() => toggleInterest(interest)}
                  >
                    {isSelected && <span className="check-icon">✓</span>}
                    {interest}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Current Skills Selector */}
          <div className="form-group" style={{ marginTop: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <label className="form-label">Current Skills & Technologies</label>
              <span className="form-hint">{(student.currentSkills || []).length} skills selected</span>
            </div>
            <p className="form-hint" style={{ marginBottom: "0.75rem" }}>
              Click on all languages, frameworks, and tools you have worked with or studied:
            </p>

            {/* Quick Filter */}
            <div className="skill-search-box">
              <input 
                type="text" 
                className="form-input" 
                placeholder="🔍 Search skills (e.g. Python, React, SQL)..."
                value={skillSearch}
                onChange={e => setSkillSearch(e.target.value)}
              />
            </div>

            {/* Categorized Skills */}
            <div style={{ background: "var(--bg-main)", padding: "1.25rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
              {metadata.skillCategories.map(cat => {
                const filtered = cat.skills.filter(s => 
                  s.toLowerCase().includes(skillSearch.toLowerCase())
                );
                if (filtered.length === 0) return null;

                return (
                  <div key={cat.category} className="skill-category-block">
                    <div className="skill-cat-title">{cat.category}</div>
                    <div className="tag-container">
                      {filtered.map(skill => {
                        const isChecked = (student.currentSkills || []).includes(skill);
                        return (
                          <span 
                            key={skill} 
                            className={`tag-chip ${isChecked ? "selected" : ""}`}
                            onClick={() => toggleSkill(skill)}
                          >
                            {isChecked && <span className="check-icon">✓</span>}
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {/* Add Custom Skill */}
              <div className="add-custom-skill">
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Can't find a skill? Add custom skill (e.g. Rust, Go, Figma)..."
                  value={customSkillInput}
                  onChange={e => setCustomSkillInput(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter") handleAddCustomSkill(e); }}
                />
                <button 
                  type="button" 
                  className="btn btn-secondary btn-sm"
                  onClick={handleAddCustomSkill}
                >
                  <Icons.Plus />
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <button 
              type="button" 
              className="btn btn-outline"
              onClick={onLoadDemo}
            >
              <Icons.Sparkles />
              <span>Fill with Alex Chen Demo Data</span>
            </button>
            <button type="submit" className="btn btn-primary btn-lg">
              <span>Analyze Matching Careers</span>
              <Icons.ArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ==========================================================
// 3. CAREER DISCOVERY PAGE COMPONENT
// ==========================================================
function DiscoveryView({ careers, student, selectedId, onSelect, calculateMatch, onBack }) {
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
          <span className="badge badge-indigo">
            {student.name ? `Student: ${student.name}` : "Student Profile"}
          </span>
          <span className="badge badge-gray">{student.branch}</span>
        </div>
        <h2 className="page-title">Explore Tech Career Paths</h2>
        <p className="page-subtitle">
          Based on your current skills ({student.currentSkills.length}) and interests, here are the 4 core technology tracks analyzed for industry readiness.
        </p>
      </div>

      <div className="career-grid">
        {careers.map(career => {
          const matchPercent = calculateMatch(career);
          const isSelected = career.id === selectedId;
          const studentSkills = student.currentSkills || [];

          return (
            <div 
              key={career.id} 
              className={`career-card ${isSelected ? "selected-active" : ""}`}
            >
              <div>
                {/* Header */}
                <div className="career-card-header">
                  <div className="career-icon-title">
                    <div className="career-icon" style={{ background: career.color }}>
                      {career.id === "ai-ml" && <Icons.Sparkles />}
                      {career.id === "software-dev" && <Icons.Briefcase />}
                      {career.id === "data-analyst" && <Icons.TrendingUp />}
                      {career.id === "web-dev" && <Icons.Compass />}
                    </div>
                    <div>
                      <h3 className="career-name">{career.title}</h3>
                      <span className="badge badge-sky" style={{ marginTop: "4px" }}>
                        {career.badge}
                      </span>
                    </div>
                  </div>

                  {/* Match Score Badge */}
                  <div className="match-score-badge">
                    <span className="match-percent" style={{ color: matchPercent >= 60 ? "var(--success)" : "var(--primary)" }}>
                      {matchPercent}%
                    </span>
                    <span className="match-label">Fit Score</span>
                  </div>
                </div>

                {/* Tagline */}
                <p className="career-tagline">{career.description}</p>

                {/* Meta stats */}
                <div className="career-meta-row">
                  <div className="career-meta-item">
                    <span className="meta-label">Avg Entry Salary</span>
                    <span className="meta-value">{career.avgSalary}</span>
                  </div>
                  <div className="career-meta-item">
                    <span className="meta-label">Market Demand</span>
                    <span className="meta-value" style={{ color: "var(--success)" }}>{career.growthRate}</span>
                  </div>
                  <div className="career-meta-item">
                    <span className="meta-label">Curve</span>
                    <span className="meta-value">{career.difficulty}</span>
                  </div>
                </div>

                {/* Match Progress Bar */}
                <div className="progress-container" style={{ marginBottom: "1.25rem" }}>
                  <div className="progress-header">
                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Skill Readiness</span>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700 }}>{matchPercent}%</span>
                  </div>
                  <div className="progress-track">
                    <div 
                      className={`progress-fill ${matchPercent >= 60 ? "progress-fill-success" : ""}`}
                      style={{ width: `${matchPercent}%` }}
                    />
                  </div>
                </div>

                {/* Skills overview pills */}
                <div className="career-skills-overview">
                  <div className="skills-overview-title">Required Core Skills:</div>
                  <div className="career-skill-pills">
                    {career.requiredSkills.slice(0, 5).map(skill => {
                      const hasSkill = studentSkills.some(s => s.toLowerCase() === skill.name.toLowerCase());
                      return (
                        <span 
                          key={skill.name} 
                          className={`skill-pill ${hasSkill ? "matched" : "missing"}`}
                          title={hasSkill ? "You have this skill!" : "Skill gap to acquire"}
                        >
                          {hasSkill ? "✓ " : "+ "}{skill.name}
                        </span>
                      );
                    })}
                    {career.requiredSkills.length > 5 && (
                      <span className="skill-pill missing">
                        +{career.requiredSkills.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div style={{ marginTop: "1rem" }}>
                <button 
                  className={`btn ${isSelected ? "btn-primary" : "btn-secondary"}`}
                  style={{ width: "100%" }}
                  onClick={() => onSelect(career.id)}
                >
                  <span>Select & View Skill Gap</span>
                  <Icons.ArrowRight />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Back Button */}
      <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "flex-start" }}>
        <button className="btn btn-secondary" onClick={onBack}>
          <Icons.ArrowLeft />
          <span>Back to Profile</span>
        </button>
      </div>
    </div>
  );
}

// ==========================================================
// 4. SKILL GAP PAGE COMPONENT
// ==========================================================
function SkillGapView({ career, student, analysis, onMarkLearned, onProceed, onBack }) {
  const { matched, missing, readinessPercent } = analysis;

  return (
    <div className="animate-fade-in">
      {/* Header Banner */}
      <div className="skill-gap-header-card">
        <div>
          <span className="badge badge-amber" style={{ marginBottom: "0.75rem" }}>
            Target Career Track
          </span>
          <h2 style={{ fontSize: "1.85rem", fontWeight: 800, marginBottom: "0.5rem" }}>
            {career.title} Skill Gap Analysis
          </h2>
          <p style={{ color: "#c7d2fe", fontSize: "0.95rem", maxWidth: "600px" }}>
            Comparing your existing skillset against essential industry benchmarks. You already master {matched.length} of {career.requiredSkills.length} core technical requirements.
          </p>

          <div style={{ marginTop: "1.25rem", maxWidth: "450px" }}>
            <div className="progress-container">
              <div className="progress-header" style={{ color: "#e0e7ff" }}>
                <span>Readiness Progress</span>
                <span style={{ fontWeight: 800 }}>{readinessPercent}%</span>
              </div>
              <div className="progress-track progress-track-lg" style={{ background: "rgba(255,255,255,0.2)" }}>
                <div 
                  className="progress-fill progress-fill-success" 
                  style={{ width: `${readinessPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="gap-score-box">
          <div className="gap-score-num">{readinessPercent}%</div>
          <div className="gap-score-text">Career Ready</div>
          <div style={{ fontSize: "0.75rem", color: "#a5b4fc", marginTop: "4px" }}>
            {missing.length} Gaps to Close
          </div>
        </div>
      </div>

      {/* Two Column Breakdown */}
      <div className="gap-columns">
        {/* Matched Column */}
        <div className="gap-column-card">
          <div className="gap-col-header">
            <div className="gap-col-title" style={{ color: "var(--success)" }}>
              <Icons.CheckCircle />
              <span>Skills You Have ({matched.length})</span>
            </div>
            <span className="badge badge-green">Foundation Strong</span>
          </div>

          {matched.length === 0 ? (
            <div style={{ padding: "2rem", textAlign: "center", color: "var(--text-muted)" }}>
              No direct matches yet. Select skills in your profile or check off skills you have learned.
            </div>
          ) : (
            matched.map(skill => (
              <div key={skill.name} className="skill-item-card" style={{ borderColor: "var(--success-border)" }}>
                <div className="skill-item-info">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span className="skill-item-name">{skill.name}</span>
                    <span className="badge badge-green" style={{ fontSize: "0.7rem" }}>Matched</span>
                  </div>
                  <p className="skill-item-desc">{skill.description}</p>
                </div>
                <div style={{ color: "var(--success)", display: "flex", alignItems: "center" }}>
                  <Icons.CheckCircle />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Missing Column */}
        <div className="gap-column-card">
          <div className="gap-col-header">
            <div className="gap-col-title" style={{ color: "var(--primary)" }}>
              <Icons.Target />
              <span>Skills to Acquire ({missing.length})</span>
            </div>
            <span className="badge badge-indigo">Priority Roadmap</span>
          </div>

          {missing.length === 0 ? (
            <div style={{ padding: "2rem", textAlign: "center", color: "var(--success)", fontWeight: 700 }}>
              🎉 Incredible! You meet 100% of the core skill prerequisites for this role!
            </div>
          ) : (
            missing.map(skill => (
              <div key={skill.name} className="skill-item-card">
                <div className="skill-item-info">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.2rem" }}>
                    <span className="skill-item-name">{skill.name}</span>
                    <span className={`badge ${skill.priority === "Critical" ? "badge-amber" : "badge-gray"}`} style={{ fontSize: "0.7rem" }}>
                      {skill.priority} Priority
                    </span>
                  </div>
                  <p className="skill-item-desc">{skill.description}</p>
                </div>

                <div>
                  <button 
                    className="btn btn-secondary btn-sm"
                    style={{ whiteSpace: "nowrap" }}
                    onClick={() => onMarkLearned(skill.name)}
                    title="Click if you've already learned this skill"
                  >
                    <Icons.CheckCircle />
                    <span>Mark as Learned</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Next Actions */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <button className="btn btn-secondary" onClick={onBack}>
          <Icons.ArrowLeft />
          <span>Switch Career Track</span>
        </button>
        <button className="btn btn-primary btn-lg" onClick={onProceed}>
          <span>View 12-Week Roadmap</span>
          <Icons.ArrowRight />
        </button>
      </div>
    </div>
  );
}

// ==========================================================
// 5. CAREER ROADMAP COMPONENT
// ==========================================================
function RoadmapView({ career, roadmap, completedWeeks, onToggleWeek, onProceed, onBack }) {
  const totalWeeks = 12;
  const completedCount = completedWeeks.length;
  const completionPercent = Math.round((completedCount / totalWeeks) * 100);

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
          <span className="badge badge-indigo">{career.title} Track</span>
          <span className="badge badge-green">{completedCount} of 12 Weeks Done</span>
        </div>
        <h2 className="page-title">12-Week Guided Curriculum</h2>
        <p className="page-subtitle">
          Divided into 4 milestone stages. Check off each week as you build deliverables to update your placement readiness in real time.
        </p>

        {/* Global Progress Bar */}
        <div style={{ maxWidth: "600px", margin: "1.5rem auto 0" }}>
          <div className="progress-container">
            <div className="progress-header">
              <span>Overall Roadmap Completion</span>
              <span style={{ fontWeight: 800 }}>{completionPercent}%</span>
            </div>
            <div className="progress-track progress-track-lg">
              <div 
                className="progress-fill progress-fill-success"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4 Stages Layout */}
      <div className="roadmap-container">
        {roadmap.stages.map(stage => {
          const stageWeeks = roadmap.weeks.filter(w => w.stage === stage.id);
          const stageCompleted = stageWeeks.filter(w => completedWeeks.includes(w.week)).length;
          const isStageFinished = stageCompleted === stageWeeks.length;

          return (
            <div key={stage.id} className="stage-wrapper">
              <div className="stage-header">
                <div className="stage-title-group">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <h3>{stage.name}</h3>
                    <span className="badge badge-sky">{stage.weeks}</span>
                    {isStageFinished && (
                      <span className="badge badge-green">✓ Stage Complete</span>
                    )}
                  </div>
                  <p>{stage.description}</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)" }}>
                    {stageCompleted} / {stageWeeks.length} Completed
                  </span>
                </div>
              </div>

              {/* Weeks Grid */}
              <div className="weeks-grid">
                {stageWeeks.map(w => {
                  const isChecked = completedWeeks.includes(w.week);
                  return (
                    <div 
                      key={w.week} 
                      className={`week-card ${isChecked ? "completed" : ""}`}
                    >
                      <div>
                        <div className="week-badge-row">
                          <span className="week-num-badge">Week {w.week}</span>
                          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>8-10 hrs</span>
                        </div>
                        <h4 className="week-title">{w.title}</h4>
                        <p className="week-focus">{w.focus}</p>

                        <div style={{ marginBottom: "0.75rem" }}>
                          <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.25rem" }}>
                            Key Tasks:
                          </span>
                          <ul style={{ paddingLeft: "1.2rem", fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.4 }}>
                            {w.tasks.map((t, idx) => (
                              <li key={idx} style={{ marginBottom: "0.2rem" }}>{t}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <div className="week-deliverable">
                          <span className="deliverable-label">Target Deliverable:</span>
                          <span style={{ color: "var(--text-main)", fontWeight: 600 }}>{w.deliverable}</span>
                        </div>

                        <label className="week-checkbox-row">
                          <input 
                            type="checkbox"
                            className="week-checkbox"
                            checked={isChecked}
                            onChange={() => onToggleWeek(w.week)}
                          />
                          <span style={{ color: isChecked ? "var(--success)" : "var(--text-main)" }}>
                            {isChecked ? "Completed ✓" : "Mark as Completed"}
                          </span>
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
        <button className="btn btn-secondary" onClick={onBack}>
          <Icons.ArrowLeft />
          <span>Back to Skill Gap</span>
        </button>
        <button className="btn btn-primary btn-lg" onClick={onProceed}>
          <span>View Progress Dashboard</span>
          <Icons.ArrowRight />
        </button>
      </div>
    </div>
  );
}

// ==========================================================
// 6. PROGRESS DASHBOARD COMPONENT
// ==========================================================
function DashboardView({ 
  student, 
  career, 
  metrics, 
  skillAnalysis, 
  onGoToRoadmap, 
  onGoToSkillGap, 
  onSwitchCareer, 
  onEditProfile,
  onOpenExport 
}) {
  const { overallScore, skillReadiness, roadmapPercent, weeksDone, nextWeekData, currentStageData } = metrics;
  const { matched, missing } = skillAnalysis;

  // Readiness status badge label
  let readinessLabel = "Foundational Stage";
  if (overallScore >= 75) readinessLabel = "Job & Placement Ready 🚀";
  else if (overallScore >= 50) readinessLabel = "Intermediate Builder ⚡";
  else if (overallScore >= 25) readinessLabel = "Active Learner 📚";

  return (
    <div className="animate-fade-in">
      {/* Student Welcome Summary Banner */}
      <div className="summary-banner">
        <div>
          <div className="student-greeting">
            <h2>{student.name ? `${student.name}'s Career Dashboard` : "Student Career Dashboard"}</h2>
            <p>Target Track: <strong>{career.title}</strong> • {student.branch || "Engineering"} ({student.year || "3rd Year"})</p>
          </div>
          <div className="stat-pills">
            <span className="stat-pill">{readinessLabel}</span>
            <span className="stat-pill">{matched.length} Skills Acquired</span>
            <span className="stat-pill">{weeksDone} / 12 Weeks Completed</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <button className="btn btn-secondary btn-sm" onClick={onOpenExport}>
            <Icons.Printer />
            <span>Export Summary</span>
          </button>
          <button className="btn btn-outline btn-sm" onClick={onSwitchCareer} style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>
            Switch Path
          </button>
        </div>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="dashboard-grid">
        {/* Left Column: Recommended Next Step & Skills */}
        <div>
          {/* Actionable Next Step Callout */}
          <div className="next-step-card">
            <div className="next-step-header">
              <Icons.Sparkles />
              <span>Recommended Next Action (Immediate Focus)</span>
            </div>
            <h3 className="next-step-title">
              Week {nextWeekData.week}: {nextWeekData.title}
            </h3>
            <p className="next-step-desc">
              <strong>Focus:</strong> {nextWeekData.focus}
            </p>

            <div style={{ background: "rgba(255,255,255,0.7)", padding: "0.85rem 1rem", borderRadius: "var(--radius-md)", marginBottom: "1.25rem", border: "1px solid #fde68a" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#92400e", display: "block" }}>
                Deliverable to Build:
              </span>
              <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#78350f" }}>
                {nextWeekData.deliverable}
              </span>
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button className="btn btn-primary" onClick={onGoToRoadmap}>
                <span>Open in 12-Week Roadmap</span>
                <Icons.ArrowRight />
              </button>
              <button className="btn btn-secondary" onClick={onGoToSkillGap}>
                <span>Review Missing Skills ({missing.length})</span>
              </button>
            </div>
          </div>

          {/* Current Skills Completed List */}
          <div className="card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <div>
                <h3 className="card-title">Completed Skills ({matched.length})</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  Verified skills for {career.title}
                </p>
              </div>
              <button className="btn btn-outline btn-sm" onClick={onEditProfile}>
                Add More Skills
              </button>
            </div>

            <div className="tag-container">
              {matched.map(s => (
                <span key={s.name} className="tag-chip selected" style={{ background: "var(--success-light)", color: "#047857", borderColor: "var(--success-border)" }}>
                  <span className="check-icon">✓</span>
                  {s.name}
                </span>
              ))}
              {matched.length === 0 && (
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  No skills completed yet for this career. Visit the Skill Gap page to mark skills you know.
                </p>
              )}
            </div>

            {/* Missing Skills alert */}
            {missing.length > 0 && (
              <div style={{ marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px dashed var(--border-color)" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.5rem" }}>
                  Top Skills Still Needed:
                </span>
                <div className="tag-container">
                  {missing.slice(0, 4).map(m => (
                    <span key={m.name} className="tag-chip" style={{ fontSize: "0.8rem" }}>
                      + {m.name} ({m.priority})
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Key Progress Metrics */}
        <div>
          {/* Overall Progress Card */}
          <div className="card" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)" }}>
              Overall Readiness Score
            </span>
            <div style={{ fontSize: "3.5rem", fontWeight: 900, color: "var(--primary)", lineHeight: 1.1, margin: "0.5rem 0" }}>
              {overallScore}%
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
              Combined score based on skill match ({skillReadiness}%) and roadmap progress ({roadmapPercent}%).
            </p>

            <div className="progress-container">
              <div className="progress-track progress-track-lg">
                <div 
                  className={`progress-fill ${overallScore >= 60 ? "progress-fill-success" : ""}`}
                  style={{ width: `${overallScore}%` }}
                />
              </div>
            </div>
          </div>

          {/* Current Stage Card */}
          <div className="card" style={{ marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)" }}>
              Current Milestone
            </span>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginTop: "0.25rem", marginBottom: "0.35rem" }}>
              {currentStageData.name}
            </h4>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
              {currentStageData.description}
            </p>

            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.35rem" }}>
              <span>Roadmap Weeks</span>
              <span>{weeksDone} of 12</span>
            </div>
            <div className="progress-track">
              <div 
                className="progress-fill"
                style={{ width: `${roadmapPercent}%` }}
              />
            </div>
          </div>

          {/* Career Target Card */}
          <div className="card">
            <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              Target Role Benchmarks
            </h4>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              <div><strong>Role:</strong> {career.title}</div>
              <div><strong>Entry Benchmark:</strong> {career.avgSalary}</div>
              <div><strong>Hiring Trend:</strong> {career.growthRate}</div>
              <div><strong>Student Goal:</strong> {student.careerGoal || "Entry level role"}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem", flexWrap: "wrap", gap: "1rem" }}>
        <button className="btn btn-secondary" onClick={onGoToRoadmap}>
          <Icons.ArrowLeft />
          <span>Back to Roadmap</span>
        </button>
        <button className="btn btn-primary" onClick={onOpenExport}>
          <Icons.Printer />
          <span>Print / Export My Plan</span>
        </button>
      </div>
    </div>
  );
}

// ==========================================================
// 7. EXPORT / PRINT MODAL COMPONENT
// ==========================================================
function ExportPlanModal({ student, career, metrics, skillAnalysis, onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>
          <div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800 }}>CareerCompass Summary</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Personalized Career Diagnostic & 12-Week Plan
            </p>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={onClose}>✕</button>
        </div>

        <div style={{ marginBottom: "1.5rem", fontSize: "0.9rem", lineHeight: 1.6 }}>
          <p><strong>Student:</strong> {student.name || "Alex Chen"}</p>
          <p><strong>Branch & Year:</strong> {student.branch || "Computer Science"} • {student.year || "3rd Year"}</p>
          <p><strong>Chosen Path:</strong> {career.title}</p>
          <p><strong>Goal:</strong> {student.careerGoal || "Secure top product internship"}</p>
          <p><strong>Overall Readiness:</strong> {metrics.overallScore}% ({metrics.weeksDone} of 12 weeks complete)</p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>Skills Verified ({skillAnalysis.matched.length})</h4>
          <div className="tag-container">
            {skillAnalysis.matched.map(s => (
              <span key={s.name} className="badge badge-green">{s.name}</span>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>Remaining Skill Gaps ({skillAnalysis.missing.length})</h4>
          <div className="tag-container">
            {skillAnalysis.missing.map(s => (
              <span key={s.name} className="badge badge-amber">{s.name} ({s.priority})</span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "2rem" }}>
          <button className="btn btn-secondary" onClick={onClose}>Close</button>
          <button className="btn btn-primary" onClick={handlePrint}>
            <Icons.Printer />
            <span>Print or Save as PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Render the application once DOM is loaded
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<CareerCompassApp />);
