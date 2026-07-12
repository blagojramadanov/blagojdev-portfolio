const STORAGE_KEY = "site-lang";

const translations = {
  en: {
    "meta.title": "Blagoj Ramadanov — Full Stack Developer",
    "meta.description": "Blagoj Ramadanov — Junior Full Stack Developer. React, TypeScript, Node.js and REST APIs.",

    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.greeting": "Hi, I'm",
    "hero.junior": "Junior",
    "hero.role": "Full Stack Developer",
    "hero.paragraph": "I'm a Junior Full Stack Developer based in Germany, building modern web applications with React, TypeScript, Node.js and REST APIs. I care about clean code, readable UIs, and shipping things that actually work — and I'm always learning something new.",
    "hero.btnProjects": "View Projects",
    "hero.btnContact": "Contact Me",
    "hero.selectDestination": "SELECT DESTINATION",

    "about.title": "About Me",
    "about.paragraph": "I'm a Junior Full Stack Developer with a genuine passion for programming. My journey into web development started with small personal projects and grew into a real interest in understanding how software works end to end — from the interface a user sees to the data behind it. Outside of the browser, I'm also into Arduino and small hardware/electronics projects — there's something satisfying about code controlling something physical.",
    "about.card1.title": "Building real projects",
    "about.card1.desc": "Every app I ship, from a football score tracker to a notes app, teaches me something new about writing better code.",
    "about.card2.title": "Problem solving mindset",
    "about.card2.desc": "I like breaking down a messy problem into small, testable pieces and building it back up into something reliable. Much of what I know comes from trial and error — I treat mistakes as a way to improve and understand concepts better.",
    "about.card3.title": "Continuous learning",
    "about.card3.desc": "I revisit old code often and I'm not afraid to refactor when I know a better way.",
    "about.card4.title": "Exploring new tech",
    "about.card4.desc": "From modern frontend tooling to AI-assisted development, I stay curious about the tools that make developers more effective.",

    "skills.title": "Skills & Stack",
    "skills.subtitle": "Technologies I use regularly, and the ones I'm actively leveling up.",
    "skills.frontend": "FRONTEND",
    "skills.backend": "BACKEND",
    "skills.tools": "TOOLS",
    "skills.other": "OTHER",

    "projects.title": "My Projects",
    "projects.subtitle": "Here are a few real projects, so you can get a sense of my skills and experience.",
    "projects.live": "LIVE",
    "projects.viewCode": "View Code",
    "projects.p1.title": "B-Score — Football App",
    "projects.p1.desc": "Live football scores pulled from a real sports API. Browse leagues, teams, standings and fixtures from a single, fast interface covering Europe's top 5 leagues.",
    "projects.p2.title": "User Management",
    "projects.p2.desc": "A user management dashboard with full create, read, update and delete functionality, built with React and TypeScript on top of a typed component structure.",
    "projects.p3.title": "Weather App",
    "projects.p3.desc": "Live weather data for any city in the world, with a clean, single-view layout for current conditions and a simple city search.",
    "projects.p4.title": "Notes App",
    "projects.p4.desc": "A simple, fast notes application with full create, read, update and delete functionality — create a note, give it a title, and save it instantly.",

    "experience.title": "Experience & Learning",
    "experience.subtitle": "Where my full stack journey has taken me so far.",
    "experience.present": "Present",
    "common.fullStackDev": "Full Stack Development",
    "experience.e1.desc": "devkarriere, via Attek Services — full stack development program, modern frameworks and backend.",
    "experience.e2.desc": "Ongoing course on using AI tools effectively inside a real development workflow, from code assistance to integrating AI features into applications — via freeCodeCamp and DeepLearning.AI.",
    "common.fachinformatiker": "Fachinformatiker — Anwendungsentwicklung",
    "experience.e3.desc": "FIT AG — internship in application development, working on C++ projects.",
    "experience.e4.desc": "Labor Kneißler GmbH & Co. KG — two-year internship developing real-world applications and learning industry-standard workflows, supported by courses in JavaScript, HTML and CSS.",

    "moreExp.title": "More Experience",
    "moreExp.desc": "You'll find more projects on my GitHub profile, built over time as I keep learning. Take a look and see the code for yourself.",
    "moreExp.btn": "View GitHub",

    "contact.title": "Any Questions?",
    "contact.desc": "Don't hesitate to reach out. Use the email address below, or find me on my social profiles.",
    "contact.labelName": "NAME",
    "contact.labelEmail": "EMAIL",
    "contact.labelMessage": "MESSAGE",
    "contact.placeholderName": "Jane Doe",
    "contact.placeholderEmail": "jane@example.com",
    "contact.placeholderMessage": "Type your message...",
    "contact.btnSend": "Send Message",

    "footer.impressum": "Impressum",

    "impressum.meta.title": "Impressum — Blagoj Ramadanov",
    "impressum.back": "Back",
    "impressum.addressNote": "(full address available on request)",
    "impressum.contact": "Contact",
    "impressum.emailLabel": "E-Mail:",
  },
  de: {
    "meta.title": "Blagoj Ramadanov — Full Stack Entwickler",
    "meta.description": "Blagoj Ramadanov — Junior Full Stack Entwickler. React, TypeScript, Node.js und REST APIs.",

    "nav.about": "Über mich",
    "nav.skills": "Fähigkeiten",
    "nav.projects": "Projekte",
    "nav.experience": "Erfahrung",
    "nav.contact": "Kontakt",

    "hero.greeting": "Hallo, ich bin",
    "hero.junior": "Junior",
    "hero.role": "Full Stack Entwickler",
    "hero.paragraph": "Ich bin Junior Full Stack Entwickler aus Deutschland und entwickle moderne Webanwendungen mit React, TypeScript, Node.js und REST APIs. Mir sind sauberer Code, verständliche Benutzeroberflächen und funktionierende Ergebnisse wichtig — und ich lerne stetig dazu.",
    "hero.btnProjects": "Projekte ansehen",
    "hero.btnContact": "Kontaktiere mich",
    "hero.selectDestination": "ZIEL AUSWÄHLEN",

    "about.title": "Über mich",
    "about.paragraph": "Ich bin Junior Full Stack Entwickler mit echter Leidenschaft fürs Programmieren. Mein Weg in die Webentwicklung begann mit kleinen privaten Projekten und wuchs zu einem echten Interesse daran, Software von A bis Z zu verstehen — von der Oberfläche, die man sieht, bis zu den Daten dahinter. Außerhalb des Browsers interessiere ich mich auch für Arduino und kleine Hardware-/Elektronikprojekte — es macht einfach Spaß, wenn Code etwas Physisches steuert.",
    "about.card1.title": "Echte Projekte umsetzen",
    "about.card1.desc": "Jede App, die ich baue — vom Fußball-Live-Ticker bis zur Notiz-App — lehrt mich etwas Neues über besseren Code.",
    "about.card2.title": "Lösungsorientiertes Denken",
    "about.card2.desc": "Ich zerlege komplizierte Probleme gerne in kleine, testbare Teile und baue daraus etwas Zuverlässiges. Vieles davon habe ich durch Ausprobieren gelernt — Fehler sind für mich eine Chance, Konzepte besser zu verstehen und mich weiterzuentwickeln.",
    "about.card3.title": "Ständiges Lernen",
    "about.card3.desc": "Ich schaue mir alten Code oft erneut an und scheue mich nicht, ihn zu verbessern, wenn ich einen besseren Weg kenne.",
    "about.card4.title": "Neue Technologien entdecken",
    "about.card4.desc": "Von modernen Frontend-Tools bis zu KI-gestützter Entwicklung — ich bleibe neugierig auf Werkzeuge, die Entwickler effektiver machen.",

    "skills.title": "Fähigkeiten & Stack",
    "skills.subtitle": "Technologien, die ich regelmäßig nutze, und solche, die ich gerade vertiefe.",
    "skills.frontend": "FRONTEND",
    "skills.backend": "BACKEND",
    "skills.tools": "TOOLS",
    "skills.other": "SONSTIGES",

    "projects.title": "Meine Projekte",
    "projects.subtitle": "Hier sind ein paar echte Projekte, damit du dir ein Bild von meinen Fähigkeiten und Erfahrungen machen kannst.",
    "projects.live": "LIVE",
    "projects.viewCode": "Code ansehen",
    "projects.p1.title": "B-Score — Fußball-App",
    "projects.p1.desc": "Live-Fußballergebnisse aus einer echten Sport-API. Ligen, Teams, Tabellen und Spielpläne der Top-5-Ligen Europas in einer einzigen, schnellen Oberfläche.",
    "projects.p2.title": "Benutzerverwaltung",
    "projects.p2.desc": "Ein Benutzerverwaltungs-Dashboard mit vollständigem Erstellen, Lesen, Aktualisieren und Löschen, gebaut mit React und TypeScript auf einer typisierten Komponentenstruktur.",
    "projects.p3.title": "Wetter-App",
    "projects.p3.desc": "Live-Wetterdaten für jede Stadt der Welt, mit übersichtlicher Ein-Seiten-Ansicht für aktuelle Bedingungen und einfacher Städtesuche.",
    "projects.p4.title": "Notiz-App",
    "projects.p4.desc": "Eine einfache, schnelle Notiz-App mit vollständigem Erstellen, Lesen, Aktualisieren und Löschen — Notiz anlegen, Titel vergeben und sofort speichern.",

    "experience.title": "Erfahrung & Werdegang",
    "experience.subtitle": "Der bisherige Weg meiner Full-Stack-Laufbahn.",
    "experience.present": "Heute",
    "common.fullStackDev": "Full Stack Entwicklung",
    "experience.e1.desc": "devkarriere, über Attek Services — Full-Stack-Entwicklungsprogramm, moderne Frameworks und Backend.",
    "experience.e2.desc": "Laufender Kurs zur effektiven Nutzung von KI-Tools im echten Entwicklungsalltag, von Code-Unterstützung bis zur Integration von KI-Funktionen in Anwendungen — über freeCodeCamp und DeepLearning.AI.",
    "common.fachinformatiker": "Fachinformatiker — Anwendungsentwicklung",
    "experience.e3.desc": "FIT AG — Praktikum in der Anwendungsentwicklung, Arbeit an C++-Projekten.",
    "experience.e4.desc": "Labor Kneißler GmbH & Co. KG — zweijähriges Praktikum mit Entwicklung realer Anwendungen und branchenüblicher Arbeitsweisen, begleitet von Kursen in JavaScript, HTML und CSS.",

    "moreExp.title": "Mehr Erfahrung",
    "moreExp.desc": "Weitere Projekte findest du auf meinem GitHub-Profil, entstanden im Laufe meines Lernwegs. Schau gerne selbst in den Code.",
    "moreExp.btn": "GitHub ansehen",

    "contact.title": "Fragen?",
    "contact.desc": "Melde dich gerne. Nutze die E-Mail-Adresse unten oder finde mich auf meinen Social-Profilen.",
    "contact.labelName": "NAME",
    "contact.labelEmail": "E-MAIL",
    "contact.labelMessage": "NACHRICHT",
    "contact.placeholderName": "Max Mustermann",
    "contact.placeholderEmail": "max@beispiel.de",
    "contact.placeholderMessage": "Deine Nachricht...",
    "contact.btnSend": "Nachricht senden",

    "footer.impressum": "Impressum",

    "impressum.meta.title": "Impressum — Blagoj Ramadanov",
    "impressum.back": "Zurück",
    "impressum.addressNote": "(vollständige Adresse auf Anfrage)",
    "impressum.contact": "Kontakt",
    "impressum.emailLabel": "E-Mail:",
  },
};

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = translations[lang][el.getAttribute("data-i18n")];
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value = translations[lang][el.getAttribute("data-i18n-placeholder")];
    if (value !== undefined) el.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    const value = translations[lang][el.getAttribute("data-i18n-content")];
    if (value !== undefined) el.setAttribute("content", value);
  });

  document.querySelectorAll("[data-lang-en]").forEach((el) => {
    el.classList.toggle("text-crt-green", lang === "en");
    el.classList.toggle("text-crt-ink/40", lang !== "en");
  });

  document.querySelectorAll("[data-lang-de]").forEach((el) => {
    el.classList.toggle("text-crt-green", lang === "de");
    el.classList.toggle("text-crt-ink/40", lang !== "de");
  });

  document.querySelectorAll("#lang-toggle, #lang-toggle-mobile").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(lang === "de"));
  });

  localStorage.setItem(STORAGE_KEY, lang);
}

function initLangToggle() {
  const stored = localStorage.getItem(STORAGE_KEY);
  applyLanguage(stored === "de" ? "de" : "en");

  document.querySelectorAll("#lang-toggle, #lang-toggle-mobile").forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = document.documentElement.lang === "de" ? "de" : "en";
      applyLanguage(current === "en" ? "de" : "en");
    });
  });
}

initLangToggle();
