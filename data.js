// =====================================================
//  DIMAGI NAXAL NETWORK - DATA FILE
//  Easy to edit on GitHub. Just add new objects below.
// =====================================================

const categories = [
  { id: "youtubers",   name: "Youtubers",    icon: "▶️", desc: "Online creators & commentary channels" },
  { id: "media",       name: "Media",        icon: "📺", desc: "Journalists, anchors & media houses" },
  { id: "actors",      name: "Actors",       icon: "🎬", desc: "Film & television personalities" },
  { id: "advocates",   name: "Advocates",    icon: "⚖️", desc: "Lawyers & legal activists" },
  { id: "politicians", name: "Politicians",  icon: "🏛️", desc: "Political figures & party voices" },
  { id: "ngos",        name: "NGOs",         icon: "🌐", desc: "Non-profits & civil society groups" },
  { id: "academics",   name: "Academics",    icon: "📚", desc: "Professors, writers & intellectuals" },
  { id: "activists",   name: "Activists",    icon: "📢", desc: "Street & online activists" }
];

// =====================================================
//  PEOPLE DATA
//  Add new person → copy one block and fill the fields
//  photo: put image URL or relative path like "images/name.jpg"
// =====================================================

const people = [
  {
    id: "yt-001",
    category: "youtubers",
    name: "Youtuber Name 1",
    role: "Content Creator",
    photo: "",                          // e.g. "images/youtuber1.jpg" or full URL
    about: "Placeholder. Add short description of their public stance.",
    history: [
      { date: "2025", text: "Placeholder: Opposed X development project" },
      { date: "2024", text: "Placeholder: Campaign against Y policy" }
    ],
    comments: [
      // { date: "2025-08", text: "Exact quote or comment they made", source: "YouTube / X / etc" }
    ],
    media: [
      // { type: "image", url: "images/post1.jpg", caption: "Screenshot of post" }
      // { type: "video", url: "https://...", caption: "Video title" }
    ]
  },
  {
    id: "yt-002",
    category: "youtubers",
    name: "Youtuber Name 2",
    role: "Commentator",
    photo: "",
    about: "Placeholder bio.",
    history: [
      { date: "2026", text: "Placeholder public statement" }
    ],
    comments: [],
    media: []
  },
  {
    id: "media-001",
    category: "media",
    name: "Media Person 1",
    role: "Journalist",
    photo: "",
    about: "Placeholder.",
    history: [
      { date: "2025", text: "Placeholder record" }
    ],
    comments: [],
    media: []
  },
  {
    id: "actor-001",
    category: "actors",
    name: "Actor Name 1",
    role: "Actor",
    photo: "",
    about: "Placeholder.",
    history: [
      { date: "2024", text: "Placeholder statement" }
    ],
    comments: [],
    media: []
  },
  {
    id: "adv-001",
    category: "advocates",
    name: "Advocate Name 1",
    role: "Advocate",
    photo: "",
    about: "Placeholder.",
    history: [
      { date: "2025", text: "Placeholder case / statement" }
    ],
    comments: [],
    media: []
  },
  {
    id: "pol-001",
    category: "politicians",
    name: "Politician Name 1",
    role: "Politician",
    photo: "",
    about: "Placeholder.",
    history: [
      { date: "2026", text: "Placeholder opposition to project" }
    ],
    comments: [],
    media: []
  },
  {
    id: "ngo-001",
    category: "ngos",
    name: "NGO Name 1",
    role: "Organisation",
    photo: "",
    about: "Placeholder.",
    history: [
      { date: "2023", text: "Placeholder campaign" }
    ],
    comments: [],
    media: []
  },
  {
    id: "acad-001",
    category: "academics",
    name: "Academic Name 1",
    role: "Professor",
    photo: "",
    about: "Placeholder.",
    history: [
      { date: "2025", text: "Placeholder article / speech" }
    ],
    comments: [],
    media: []
  },
  {
    id: "act-001",
    category: "activists",
    name: "Activist Name 1",
    role: "Activist",
    photo: "",
    about: "Placeholder.",
    history: [
      { date: "2026", text: "Placeholder protest / post" }
    ],
    comments: [],
    media: []
  }
];
