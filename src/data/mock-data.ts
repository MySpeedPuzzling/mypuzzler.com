export const profile = {
  name: "Simona Mikešová",
  avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Simona&backgroundColor=fde8e7",
  country: "Czech Republic",
  countryFlag: "🇨🇿",
  bio: "Speed puzzler & puzzle collector. Love Ravensburger 1000pc challenges!",
  memberSince: "March 2023",
  socials: {
    instagram: "https://instagram.com/simona.puzzles",
    facebook: "https://facebook.com/simona.puzzles",
  },
  profileUrl: "https://myspeedpuzzling.com/player/simona-mikesova",
};

export const stats = [
  { icon: "puzzle", label: "Puzzles Solved", value: "247" },
  { icon: "pieces", label: "Total Pieces", value: "186K" },
  { icon: "speed", label: "Best PPM", value: "2.43" },
  { icon: "streak", label: "Longest Streak", value: "31d" },
];

export interface ResultEntry {
  pieces: number;
  time: string;
  ppm: number;
  puzzleName: string;
}

export const topResults: Record<string, ResultEntry[]> = {
  solo: [
    { pieces: 500, time: "00:38:12", ppm: 2.18, puzzleName: "Underwater Paradise" },
    { pieces: 1000, time: "01:23:45", ppm: 1.92, puzzleName: "Starry Night" },
    { pieces: 1500, time: "02:45:30", ppm: 1.36, puzzleName: "World Map Antique" },
  ],
  duo: [
    { pieces: 500, time: "00:22:05", ppm: 3.78, puzzleName: "Tropical Sunset" },
    { pieces: 1000, time: "00:58:33", ppm: 2.84, puzzleName: "Prague Panorama" },
    { pieces: 1500, time: "01:52:10", ppm: 2.14, puzzleName: "Garden of Earthly Delights" },
  ],
  team: [
    { pieces: 1000, time: "00:31:22", ppm: 5.32, puzzleName: "Ocean Life" },
    { pieces: 2000, time: "01:15:48", ppm: 4.41, puzzleName: "Colorful Cupcakes" },
    { pieces: 3000, time: "02:33:05", ppm: 3.92, puzzleName: "New York Skyline" },
  ],
};

export interface ActivityEntry {
  puzzleName: string;
  brand: string;
  time: string;
  pieces: number;
  ppm: number;
  category: "Solo" | "Duo" | "Team";
  gradient: string;
  daysAgo: number;
}

export const recentActivity: ActivityEntry[] = [
  {
    puzzleName: "Ravensburger Sunset",
    brand: "Ravensburger",
    time: "01:12:34",
    pieces: 1000,
    ppm: 2.19,
    category: "Solo",
    gradient: "from-orange-400 to-rose-500",
    daysAgo: 1,
  },
  {
    puzzleName: "Clementoni Venice",
    brand: "Clementoni",
    time: "00:45:18",
    pieces: 500,
    ppm: 1.84,
    category: "Duo",
    gradient: "from-blue-400 to-indigo-500",
    daysAgo: 3,
  },
  {
    puzzleName: "Trefl Mountain Lake",
    brand: "Trefl",
    time: "02:05:42",
    pieces: 1500,
    ppm: 1.44,
    category: "Solo",
    gradient: "from-emerald-400 to-teal-500",
    daysAgo: 5,
  },
  {
    puzzleName: "Schmidt Fairy Garden",
    brand: "Schmidt",
    time: "00:52:11",
    pieces: 500,
    ppm: 1.60,
    category: "Team",
    gradient: "from-purple-400 to-pink-500",
    daysAgo: 7,
  },
];

export interface RankingEntry {
  rank: number;
  total: number;
  puzzleName: string;
  brand: string;
  pieces: number;
  time: string;
  category: "Solo" | "Duo" | "Team";
}

export const topRankings: RankingEntry[] = [
  { rank: 1, total: 120, puzzleName: "Underwater Paradise", brand: "Ravensburger", pieces: 500, time: "00:38:12", category: "Solo" },
  { rank: 3, total: 84, puzzleName: "Starry Night", brand: "Clementoni", pieces: 1000, time: "01:23:45", category: "Solo" },
  { rank: 7, total: 203, puzzleName: "World Map Antique", brand: "Trefl", pieces: 1500, time: "02:45:30", category: "Duo" },
  { rank: 12, total: 156, puzzleName: "Prague Panorama", brand: "Ravensburger", pieces: 1000, time: "00:58:33", category: "Team" },
];

export interface CollectionItem {
  puzzleName: string;
  brand: string;
  pieces: number;
  gradient: string;
  price?: string;
  swapOnly?: boolean;
}

// Chart data - Personal best times (500pc solo) improving over months
export interface PBDataPoint {
  month: string;
  minutes: number; // total minutes for the solve
  label: string;   // formatted time
}

export const personalBestProgress: PBDataPoint[] = [
  { month: "Mar '23", minutes: 58, label: "00:58:03" },
  { month: "May '23", minutes: 52, label: "00:52:17" },
  { month: "Jul '23", minutes: 49, label: "00:49:45" },
  { month: "Sep '23", minutes: 46, label: "00:46:11" },
  { month: "Nov '23", minutes: 44, label: "00:44:30" },
  { month: "Jan '24", minutes: 42, label: "00:42:08" },
  { month: "Apr '24", minutes: 41, label: "00:41:22" },
  { month: "Jul '24", minutes: 40, label: "00:40:55" },
  { month: "Oct '24", minutes: 39, label: "00:39:10" },
  { month: "Jan '25", minutes: 38, label: "00:38:12" },
];

// Chart data - Monthly puzzling activity
export interface MonthlyActivity {
  month: string;
  puzzles: number;
  hours: number;
}

export const monthlyActivity: MonthlyActivity[] = [
  { month: "Apr", puzzles: 8,  hours: 12 },
  { month: "May", puzzles: 12, hours: 18 },
  { month: "Jun", puzzles: 10, hours: 15 },
  { month: "Jul", puzzles: 15, hours: 22 },
  { month: "Aug", puzzles: 18, hours: 26 },
  { month: "Sep", puzzles: 14, hours: 20 },
  { month: "Oct", puzzles: 20, hours: 30 },
  { month: "Nov", puzzles: 22, hours: 32 },
  { month: "Dec", puzzles: 16, hours: 24 },
  { month: "Jan", puzzles: 25, hours: 36 },
  { month: "Feb", puzzles: 19, hours: 28 },
];

// Chart data - PPM trend over time (average PPM per month)
export interface PPMDataPoint {
  month: string;
  ppm: number;
}

export const ppmTrend: PPMDataPoint[] = [
  { month: "Mar '23", ppm: 1.44 },
  { month: "May '23", ppm: 1.60 },
  { month: "Jul '23", ppm: 1.68 },
  { month: "Sep '23", ppm: 1.81 },
  { month: "Nov '23", ppm: 1.88 },
  { month: "Jan '24", ppm: 1.98 },
  { month: "Apr '24", ppm: 2.02 },
  { month: "Jul '24", ppm: 2.10 },
  { month: "Oct '24", ppm: 2.20 },
  { month: "Jan '25", ppm: 2.43 },
];

export const collection: Record<string, CollectionItem[]> = {
  sell: [
    { puzzleName: "Cottage in the Woods", brand: "Ravensburger", pieces: 1000, gradient: "from-amber-300 to-orange-400", price: "€12" },
    { puzzleName: "Tropical Fish", brand: "Clementoni", pieces: 500, gradient: "from-cyan-300 to-blue-400", swapOnly: true },
    { puzzleName: "London Bus", brand: "Trefl", pieces: 1000, gradient: "from-red-300 to-rose-400", price: "€8" },
  ],
  wishlist: [
    { puzzleName: "Neuschwanstein Castle", brand: "Ravensburger", pieces: 2000, gradient: "from-violet-300 to-purple-400" },
    { puzzleName: "Japanese Garden", brand: "Schmidt", pieces: 1000, gradient: "from-emerald-300 to-green-400" },
    { puzzleName: "Vintage World Map", brand: "Clementoni", pieces: 3000, gradient: "from-amber-300 to-yellow-400" },
  ],
  collection: [
    { puzzleName: "Starry Night", brand: "Clementoni", pieces: 1000, gradient: "from-indigo-300 to-blue-400" },
    { puzzleName: "Underwater Paradise", brand: "Ravensburger", pieces: 500, gradient: "from-teal-300 to-cyan-400" },
    { puzzleName: "Mountain Sunrise", brand: "Trefl", pieces: 1500, gradient: "from-orange-300 to-red-400" },
    { puzzleName: "Prague Old Town", brand: "Schmidt", pieces: 1000, gradient: "from-stone-300 to-slate-400" },
  ],
};
