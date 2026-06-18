"use client";

import React, { useState, useEffect, useRef } from "react";

// ==========================================
// Custom SVG Fruit Icons
// ==========================================

const AppleIcon = ({ size = "w-14 h-14" }: { size?: string }) => (
  <svg viewBox="0 0 64 64" className={`${size} drop-shadow-md`}>
    <path d="M32 54 C16 54, 8 40, 8 26 C8 12, 20 8, 32 14 C44 8, 56 12, 56 26 C56 40, 48 54, 32 54 Z" fill="#EF4444" />
    <path d="M18 20 C18 16, 24 14, 28 15" stroke="#FCA5A5" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M32 14 C32 8, 38 4, 38 4" stroke="#78350F" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M32 10 C36 10, 42 6, 42 2 C36 2, 32 6, 32 10 Z" fill="#22C55E" />
  </svg>
);

const BananaIcon = ({ size = "w-14 h-14" }: { size?: string }) => (
  <svg viewBox="0 0 64 64" className={`${size} drop-shadow-md`}>
    <path d="M12 16 C24 16, 48 24, 48 52 C48 52, 52 48, 52 44 C52 16, 28 8, 12 8 C10 8, 8 10, 10 12 Z" fill="#FBBF24" />
    <path d="M12 12 C24 12, 45 20, 45 44" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M10 10 L6 8" stroke="#451A03" strokeWidth="4" strokeLinecap="round" />
    <path d="M48 52 L50 54" stroke="#451A03" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const GrapeIcon = ({ size = "w-14 h-14" }: { size?: string }) => (
  <svg viewBox="0 0 64 64" className={`${size} drop-shadow-md`}>
    <circle cx="24" cy="22" r="6" fill="#8B5CF6" />
    <circle cx="40" cy="22" r="6" fill="#8B5CF6" />
    <circle cx="32" cy="22" r="6" fill="#A78BFA" />
    <circle cx="18" cy="31" r="6" fill="#7C3AED" />
    <circle cx="46" cy="31" r="6" fill="#7C3AED" />
    <circle cx="32" cy="31" r="6" fill="#8B5CF6" />
    <circle cx="25" cy="40" r="6" fill="#6D28D9" />
    <circle cx="39" cy="40" r="6" fill="#6D28D9" />
    <circle cx="32" cy="48" r="6" fill="#4C1D95" />
    <path d="M32 16 L32 8" stroke="#047857" strokeWidth="4" strokeLinecap="round" />
    <path d="M32 8 C36 8, 42 12, 44 12" stroke="#047857" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M32 14 C28 10, 24 10, 20 12 C24 16, 28 16, 32 14 Z" fill="#10B981" />
  </svg>
);

const StrawberryIcon = ({ size = "w-14 h-14" }: { size?: string }) => (
  <svg viewBox="0 0 64 64" className={`${size} drop-shadow-md`}>
    <path d="M32 58 C32 58, 14 38, 12 26 C10 14, 20 10, 32 14 C44 10, 54 14, 52 26 C50 38, 32 58, 32 58 Z" fill="#EF4444" />
    <circle cx="22" cy="24" r="1.5" fill="#FDE047" />
    <circle cx="42" cy="24" r="1.5" fill="#FDE047" />
    <circle cx="32" cy="28" r="1.5" fill="#FDE047" />
    <circle cx="26" cy="36" r="1.5" fill="#FDE047" />
    <circle cx="38" cy="36" r="1.5" fill="#FDE047" />
    <circle cx="32" cy="44" r="1.5" fill="#FDE047" />
    <circle cx="20" cy="30" r="1.5" fill="#FDE047" />
    <circle cx="44" cy="30" r="1.5" fill="#FDE047" />
    <path d="M32 14 C32 14, 28 6, 20 8 C24 12, 28 14, 32 14 Z" fill="#22C55E" />
    <path d="M32 14 C32 14, 36 6, 44 8 C40 12, 36 14, 32 14 Z" fill="#22C55E" />
  </svg>
);

const CherryIcon = ({ size = "w-14 h-14" }: { size?: string }) => (
  <svg viewBox="0 0 64 64" className={`${size} drop-shadow-md`}>
    <path d="M32 16 C24 16, 18 28, 18 40" stroke="#15803D" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M32 16 C38 16, 46 28, 46 40" stroke="#15803D" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M32 16 L32 8" stroke="#15803D" strokeWidth="4" strokeLinecap="round" />
    <path d="M32 12 C36 8, 44 8, 46 12 C40 12, 36 14, 32 12 Z" fill="#22C55E" />
    <circle cx="18" cy="44" r="10" fill="#DC2626" />
    <circle cx="15" cy="40" r="3" fill="#FECACA" />
    <circle cx="46" cy="44" r="10" fill="#B91C1C" />
    <circle cx="43" cy="40" r="3" fill="#FECACA" />
  </svg>
);

const WatermelonIcon = ({ size = "w-14 h-14" }: { size?: string }) => (
  <svg viewBox="0 0 64 64" className={`${size} drop-shadow-md`}>
    <path d="M8 28 C8 44, 18 54, 32 54 C46 54, 56 44, 56 28 Z" fill="#15803D" />
    <path d="M12 28 C12 41, 20 50, 32 50 C44 50, 52 41, 52 28 Z" fill="#BBF7D0" />
    <path d="M15 28 C15 38, 22 47, 32 47 C42 47, 49 38, 49 28 Z" fill="#EF4444" />
    <ellipse cx="24" cy="34" rx="1.5" ry="2.5" fill="#111827" transform="rotate(-15 24 34)" />
    <ellipse cx="40" cy="34" rx="1.5" ry="2.5" fill="#111827" transform="rotate(15 40 34)" />
    <ellipse cx="32" cy="40" rx="1.5" ry="2.5" fill="#111827" />
  </svg>
);

const OrangeIcon = ({ size = "w-14 h-14" }: { size?: string }) => (
  <svg viewBox="0 0 64 64" className={`${size} drop-shadow-md`}>
    <circle cx="32" cy="34" r="21" fill="#F97316" />
    <circle cx="22" cy="24" r="1" fill="#EA580C" />
    <circle cx="42" cy="24" r="1" fill="#EA580C" />
    <circle cx="28" cy="36" r="1" fill="#EA580C" />
    <circle cx="36" cy="44" r="1" fill="#EA580C" />
    <circle cx="24" cy="46" r="1" fill="#EA580C" />
    <circle cx="32" cy="22" r="1" fill="#EA580C" />
    <path d="M32 13 C32 13, 31 7, 32 7" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
    <path d="M32 13 C36 13, 44 9, 44 5 C38 5, 34 9, 32 13 Z" fill="#22C55E" />
  </svg>
);

const PineappleIcon = ({ size = "w-14 h-14" }: { size?: string }) => (
  <svg viewBox="0 0 64 64" className={`${size} drop-shadow-md`}>
    <path d="M32 20 C28 16, 24 8, 26 2 C30 8, 31 16, 32 20 Z" fill="#15803D" />
    <path d="M32 20 C36 16, 40 8, 38 2 C34 8, 33 16, 32 20 Z" fill="#15803D" />
    <path d="M32 20 C24 18, 16 12, 14 8 C18 12, 26 16, 32 20 Z" fill="#166534" />
    <path d="M32 20 C40 18, 48 12, 50 8 C46 12, 38 16, 32 20 Z" fill="#166534" />
    <path d="M32 58 C20 58, 16 48, 16 38 C16 28, 22 20, 32 20 C42 20, 48 28, 48 38 C48 48, 44 58, 32 58 Z" fill="#EAB308" />
    <path d="M22 24 L42 52" stroke="#CA8A04" strokeWidth="2" />
    <path d="M16 32 L38 56" stroke="#CA8A04" strokeWidth="2" />
    <path d="M42 24 L22 52" stroke="#CA8A04" strokeWidth="2" />
    <path d="M48 32 L26 56" stroke="#CA8A04" strokeWidth="2" />
    <circle cx="32" cy="27" r="1.5" fill="#854D0E" />
    <circle cx="25" cy="34" r="1.5" fill="#854D0E" />
    <circle cx="39" cy="34" r="1.5" fill="#854D0E" />
    <circle cx="32" cy="41" r="1.5" fill="#854D0E" />
    <circle cx="27" cy="49" r="1.5" fill="#854D0E" />
    <circle cx="37" cy="49" r="1.5" fill="#854D0E" />
  </svg>
);

// ==========================================
// Types & Game Assets Config
// ==========================================

interface Fruit {
  id: number;
  name: string;
  component: React.ComponentType<{ size?: string }>;
  bgColor: string;
  cardColor: string;
}

const FRUITS: Fruit[] = [
  { id: 1, name: "Apple", component: AppleIcon, bgColor: "bg-red-50 border-red-200", cardColor: "#FEE2E2" },
  { id: 2, name: "Banana", component: BananaIcon, bgColor: "bg-yellow-50 border-yellow-200", cardColor: "#FEF9C3" },
  { id: 3, name: "Grape", component: GrapeIcon, bgColor: "bg-purple-50 border-purple-200", cardColor: "#F3E8FF" },
  { id: 4, name: "Strawberry", component: StrawberryIcon, bgColor: "bg-rose-50 border-rose-200", cardColor: "#FFE4E6" },
  { id: 5, name: "Cherry", component: CherryIcon, bgColor: "bg-red-50 border-red-200", cardColor: "#FEE2E2" },
  { id: 6, name: "Watermelon", component: WatermelonIcon, bgColor: "bg-emerald-50 border-emerald-200", cardColor: "#D1FAE5" },
  { id: 7, name: "Orange", component: OrangeIcon, bgColor: "bg-orange-50 border-orange-200", cardColor: "#FFF7ED" },
  { id: 8, name: "Pineapple", component: PineappleIcon, bgColor: "bg-amber-50 border-amber-200", cardColor: "#FEF3C7" },
];

interface Card {
  id: string;
  fruitId: number;
  isFlipped: boolean;
  isMatched: boolean;
}

interface RecordItem {
  name: string;
  time: number;
  moves: number;
  date: string;
}

type GamePhase = "LOBBY" | "READY" | "PLAYING" | "PAUSED" | "COMPLETED";

// ==========================================
// Navbar Component
// ==========================================

const Navbar = ({ phase, onGoHome }: { phase: GamePhase; onGoHome: () => void }) => (
  <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-stone-200/60 px-6 py-3">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      {/* Logo */}
      <button onClick={onGoHome} className="flex items-center gap-2 group">
        <svg viewBox="0 0 32 32" className="w-7 h-7">
          <circle cx="16" cy="18" r="11" fill="#F97316" />
          <path d="M16 7 C16 7, 15 3, 16 3" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M16 7 C18 7, 22 5, 22 3 C20 3, 17 5, 16 7 Z" fill="#22C55E" />
        </svg>
        <span className="text-xl font-extrabold text-orange-500 tracking-tight group-hover:text-orange-600 transition-colors">
          FruitMatch
        </span>
      </button>

      {/* Nav Links */}
      <div className="flex items-center gap-4">
        {phase !== "LOBBY" && (
          <button
            onClick={onGoHome}
            className="text-sm font-semibold text-stone-500 hover:text-orange-500 transition-colors"
          >
            Home
          </button>
        )}

        {/* Help Icon */}
        <button className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-orange-500 hover:border-orange-300 transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M12 18h.01" />
          </svg>
        </button>

        {/* Settings Icon */}
        <button className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-orange-500 hover:border-orange-300 transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>
  </header>
);

// ==========================================
// Confetti Component
// ==========================================

interface ConfettiPiece {
  id: number;
  left: string;
  delay: string;
  duration: string;
  color: string;
  borderRadius: string;
  width: string;
  height: string;
  rotation: string;
}

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = [
      "#F97316", "#EF4444", "#22C55E", "#FBBF24",
      "#8B5CF6", "#EC4899", "#06B6D4", "#EA580C"
    ];
    const newPieces = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2.5 + Math.random() * 2.5}s`,
      color: colors[Math.floor(Math.random() * colors.length)],
      borderRadius: Math.random() > 0.5 ? "50%" : "2px",
      width: `${8 + Math.random() * 8}px`,
      height: `${12 + Math.random() * 8}px`,
      rotation: `${Math.random() * 360}deg`
    }));

    const timer = setTimeout(() => {
      setPieces(newPieces);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute -top-8 animate-confetti"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            backgroundColor: p.color,
            borderRadius: p.borderRadius,
            width: p.width,
            height: p.height,
            transform: `rotate(${p.rotation})`,
          }}
        />
      ))}
    </div>
  );
};

// ==========================================
// Footer Component
// ==========================================

const Footer = () => (
  <footer className="w-full border-t border-stone-200/60 bg-white/50 py-6 px-6 mt-auto">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <div className="text-xs font-bold text-orange-500 uppercase tracking-wider">FruitMatch</div>
        <div className="text-xs text-stone-400 mt-0.5">© 2025 FruitMatch Studios. Play Smart, Stay Sweet.</div>
      </div>
      <div className="flex items-center gap-6 text-xs text-stone-400">
        <span className="hover:text-orange-500 cursor-pointer transition-colors">Privacy</span>
        <span className="hover:text-orange-500 cursor-pointer transition-colors">Terms</span>
        <span className="hover:text-orange-500 cursor-pointer transition-colors">Support</span>
      </div>
    </div>
  </footer>
);

// ==========================================
// Main Component
// ==========================================

export default function Home() {
  const [name, setName] = useState<string>("");
  const [phase, setPhase] = useState<GamePhase>("LOBBY");
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [isBoardLocked, setIsBoardLocked] = useState<boolean>(false);

  const [mismatchedIndices, setMismatchedIndices] = useState<number[]>([]);
  const [matchedIndices, setMatchedIndices] = useState<number[]>([]);
  const [leaderboard, setLeaderboard] = useState<RecordItem[]>([]);

  const [sheetApiUrl, setSheetApiUrl] = useState<string>("");
  const [isSubmittingScore, setIsSubmittingScore] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [googleLeaderboard, setGoogleLeaderboard] = useState<{ timestamp?: string; finishtime: string; name: string }[]>([]);
  const [isLoadingGoogleLeaderboard, setIsLoadingGoogleLeaderboard] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const elapsedTimeRef = useRef<number>(0);

  useEffect(() => {
    elapsedTimeRef.current = elapsedTime;
  }, [elapsedTime]);

  useEffect(() => {
    const saved = localStorage.getItem("fruit_card_leaderboard");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const timer = setTimeout(() => {
          setLeaderboard(parsed);
        }, 0);
        return () => clearTimeout(timer);
      } catch (e) {
        console.error("Failed to parse leaderboard", e);
      }
    }
  }, []);

  useEffect(() => {
    const defaultUrl = "https://script.google.com/macros/s/AKfycbzrlcAAgNgTqxbNEllHsqVME28YEJSge6op5v08wuO9cNQejgxW76tR8Rpg06NHX3s/exec";
    const envUrl = process.env.NEXT_PUBLIC_SHEET_API_URL || defaultUrl;
    const savedUrl = localStorage.getItem("fruit_card_sheet_api_url") || envUrl;
    const timer = setTimeout(() => {
      setSheetApiUrl(savedUrl);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase === "PLAYING") {
      startTimeRef.current = Date.now() - elapsedTimeRef.current;
      timerRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [phase]);

  const setupNewGame = () => {
    const cardList: Card[] = [];
    FRUITS.forEach((fruit) => {
      cardList.push({ id: `${fruit.id}-a`, fruitId: fruit.id, isFlipped: false, isMatched: false });
      cardList.push({ id: `${fruit.id}-b`, fruitId: fruit.id, isFlipped: false, isMatched: false });
    });
    for (let i = cardList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardList[i], cardList[j]] = [cardList[j], cardList[i]];
    }
    setCards(cardList);
    setSelectedIndices([]);
    setElapsedTime(0);
    setMoves(0);
    setIsBoardLocked(false);
    setMismatchedIndices([]);
    setMatchedIndices([]);
  };

  const handleStartLobby = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setupNewGame();
    setPhase("READY");
  };

  const handleStartGame = () => setPhase("PLAYING");
  const handlePauseGame = () => setPhase("PAUSED");
  const handleResumeGame = () => setPhase("PLAYING");

  const handleRestart = () => {
    setupNewGame();
    setPhase("READY");
  };

  const handleGoHome = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setName("");
    setCards([]);
    setSelectedIndices([]);
    setElapsedTime(0);
    setMoves(0);
    setPhase("LOBBY");
  };

  const handleCardClick = (index: number) => {
    if (phase !== "PLAYING" || isBoardLocked) return;
    if (cards[index].isFlipped || cards[index].isMatched) return;
    if (selectedIndices.includes(index)) return;

    const updatedCards = [...cards];
    updatedCards[index].isFlipped = true;
    setCards(updatedCards);

    const nextSelection = [...selectedIndices, index];
    setSelectedIndices(nextSelection);

    if (nextSelection.length === 2) {
      setMoves((prev) => prev + 1);
      const [idx1, idx2] = nextSelection;
      const card1 = cards[idx1];
      const card2 = cards[idx2];

      if (card1.fruitId === card2.fruitId) {
        setIsBoardLocked(true);
        setTimeout(() => {
          const matchedCards = [...updatedCards];
          matchedCards[idx1].isMatched = true;
          matchedCards[idx2].isMatched = true;
          setCards(matchedCards);
          setMatchedIndices([idx1, idx2]);
          setSelectedIndices([]);
          setIsBoardLocked(false);
          setTimeout(() => setMatchedIndices([]), 600);
          const isAllMatched = matchedCards.every((c) => c.isMatched);
          if (isAllMatched) {
            setPhase("COMPLETED");
            const finalTime = elapsedTime;
            const newRecord: RecordItem = {
              name: name.trim(),
              time: finalTime,
              moves: moves + 1,
              date: new Date().toLocaleDateString("ko-KR", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
            };
            const updatedLeaderboard = [...leaderboard, newRecord].sort((a, b) => a.time - b.time).slice(0, 5);
            setLeaderboard(updatedLeaderboard);
            localStorage.setItem("fruit_card_leaderboard", JSON.stringify(updatedLeaderboard));

            if (sheetApiUrl.trim()) {
              sendScoreToGoogleSheet(name.trim(), finalTime);
            }
          }
        }, 300);
      } else {
        setIsBoardLocked(true);
        setMismatchedIndices([idx1, idx2]);
        setTimeout(() => {
          const resetCards = [...updatedCards];
          resetCards[idx1].isFlipped = false;
          resetCards[idx2].isFlipped = false;
          setCards(resetCards);
          setSelectedIndices([]);
          setMismatchedIndices([]);
          setIsBoardLocked(false);
        }, 1000);
      }
    }
  };

  const formatTime = (ms: number) => {
    const totalSeconds = ms / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const centiseconds = Math.floor((ms % 1000) / 10);
    const pad = (num: number) => num.toString().padStart(2, "0");
    return `${pad(minutes)}:${pad(seconds)}.${pad(centiseconds)}`;
  };

  const sendScoreToGoogleSheet = async (playerName: string, timeMs: number) => {
    const url = sheetApiUrl.trim() || process.env.NEXT_PUBLIC_SHEET_API_URL;
    if (!url) return;

    setIsSubmittingScore(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          timestamp: new Date().toLocaleString("ko-KR"),
          finishtime: formatTime(timeMs),
          name: playerName.trim(),
        }),
      });
      
      const text = await response.text();
      try {
        const resJson = JSON.parse(text);
        if (resJson.status === "success") {
          setSubmitStatus("success");
          fetchGoogleLeaderboard();
        } else {
          setSubmitStatus("error");
        }
      } catch {
        if (response.ok) {
          setSubmitStatus("success");
          fetchGoogleLeaderboard();
        } else {
          setSubmitStatus("error");
        }
      }
    } catch (error) {
      console.error("Failed to submit score to Google Sheet", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmittingScore(false);
    }
  };

  const fetchGoogleLeaderboard = async () => {
    const url = sheetApiUrl.trim() || process.env.NEXT_PUBLIC_SHEET_API_URL;
    if (!url) return;

    setIsLoadingGoogleLeaderboard(true);
    try {
      const response = await fetch(url);
      const text = await response.text();
      try {
        const resJson = JSON.parse(text);
        if (resJson.status === "success") {
          setGoogleLeaderboard(resJson.data || []);
        }
      } catch (err) {
        console.error("Failed to parse Google Sheet response", err);
      }
    } catch (error) {
      console.error("Failed to fetch leaderboard from Google Sheet", error);
    } finally {
      setIsLoadingGoogleLeaderboard(false);
    }
  };

  const matchedCount = cards.filter((c) => c.isMatched).length / 2;
  const accuracy = moves > 0 ? Math.round((matchedCount / moves) * 100) : 0;

  return (
    <div className="flex min-h-screen flex-col select-none">
      {/* Global Navbar */}
      <Navbar phase={phase} onGoHome={handleGoHome} />

      {/* ============== LOBBY VIEW ============== */}
      {phase === "LOBBY" && (
        <main className="flex-1 flex flex-col">
          <div className="flex-1 max-w-6xl mx-auto w-full px-6 py-12 md:py-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left - Text & Form */}
            <div className="flex-1 max-w-lg animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-black text-orange-500 leading-tight mb-4 tracking-tight">
                Welcome to<br />FruitMatch!
              </h1>
              <p className="text-stone-500 text-base md:text-lg leading-relaxed mb-8">
                기억력을 키우고 가장 신선한 과일을 맞춰보세요!<br className="hidden md:block" />
                카드를 뒤집어 짝을 맞추는 재미있는 도전입니다.
              </p>

              <form onSubmit={handleStartLobby} className="space-y-4">
                <div>
                  <label htmlFor="playerName" className="block text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">
                    Enter your name
                  </label>
                  <input
                    id="playerName"
                    type="text"
                    autoFocus
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={12}
                    className="w-full px-5 py-3.5 bg-white border border-stone-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 rounded-xl transition-all duration-200 outline-none font-medium text-stone-800 placeholder-stone-400 text-base"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="sheetUrl" className="block text-xs font-bold text-stone-500 uppercase tracking-wider">
                      Google Sheets API URL (선택)
                    </label>
                    <a
                      href="https://docs.google.com/spreadsheets/d/1lQ_uzrvjADejsXde4PorqXkP03F93dEUcwNNa3Rn14w/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      스프레드시트 열기
                    </a>
                  </div>
                  <input
                    id="sheetUrl"
                    type="text"
                    placeholder="https://script.google.com/macros/s/.../exec"
                    value={sheetApiUrl}
                    onChange={(e) => {
                      setSheetApiUrl(e.target.value);
                      localStorage.setItem("fruit_card_sheet_api_url", e.target.value);
                    }}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 rounded-xl transition-all duration-200 outline-none font-medium text-stone-700 placeholder-stone-400 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!name.trim()}
                  className="w-full py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-lg rounded-2xl shadow-lg shadow-orange-200 hover:shadow-orange-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40 disabled:pointer-events-none disabled:shadow-none transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Let&apos;s Play!
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </form>

              {/* Rules section */}
              <div className="mt-12">
                <h2 className="text-xl font-extrabold text-green-700 mb-4">The Rules of the Grove</h2>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { step: "1.", text: "이름을 입력하고 기록을 추적하세요." },
                    { step: "2.", text: "동일한 과일 카드를 짝지어 매칭하세요." },
                    { step: "3.", text: "모든 카드를 맞추면 보상을 받습니다!" },
                  ].map((rule) => (
                    <div key={rule.step} className="bg-white rounded-xl p-4 border-l-4 border-orange-400 shadow-sm">
                      <div className="text-2xl font-black text-orange-400 mb-1">{rule.step}</div>
                      <div className="text-xs text-stone-500 leading-relaxed">{rule.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Decorative Cards */}
            <div className="flex-1 relative h-[400px] md:h-[480px] hidden md:flex items-center justify-center animate-scale-in">
              {/* High Score Badge */}
              {leaderboard.length > 0 && (
                <div className="absolute -top-2 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1 z-10">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  High Score: {formatTime(leaderboard[0].time)}
                </div>
              )}

              {/* Decorative floating fruit cards */}
              <div className="absolute top-6 left-4 w-36 h-36 bg-green-300 rounded-3xl shadow-lg transform -rotate-6 animate-float flex items-center justify-center" style={{ "--rotate": "-6deg" } as React.CSSProperties}>
                <AppleIcon size="w-16 h-16" />
              </div>
              <div className="absolute top-0 right-8 w-36 h-36 bg-orange-200 rounded-3xl shadow-lg transform rotate-6 animate-float flex items-center justify-center" style={{ "--rotate": "6deg", animationDelay: "0.5s" } as React.CSSProperties}>
                <OrangeIcon size="w-16 h-16" />
              </div>
              <div className="absolute bottom-16 left-12 w-36 h-36 bg-yellow-200 rounded-3xl shadow-lg transform rotate-3 animate-float flex items-center justify-center" style={{ "--rotate": "3deg", animationDelay: "1s" } as React.CSSProperties}>
                <BananaIcon size="w-16 h-16" />
              </div>
              <div className="absolute bottom-4 right-2 w-44 h-44 bg-teal-200 rounded-3xl shadow-lg transform -rotate-3 animate-float flex items-center justify-center" style={{ "--rotate": "-3deg", animationDelay: "1.5s" } as React.CSSProperties}>
                <div className="flex flex-wrap gap-1 p-3">
                  <WatermelonIcon size="w-9 h-9" />
                  <CherryIcon size="w-9 h-9" />
                  <StrawberryIcon size="w-9 h-9" />
                  <GrapeIcon size="w-9 h-9" />
                </div>
              </div>

              {/* Record badge */}
              {leaderboard.length > 0 && (
                <div className="absolute bottom-24 left-0 bg-white text-stone-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1 z-10 border border-stone-200">
                  <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Record: {formatTime(leaderboard[0].time)}
                </div>
              )}
            </div>
          </div>

          {/* Active Players Indicator */}
          <div className="flex items-center justify-center gap-3 pb-8">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-green-300 border-2 border-white" />
              <div className="w-6 h-6 rounded-full bg-yellow-300 border-2 border-white" />
              <div className="w-6 h-6 rounded-full bg-orange-200 border-2 border-white" />
            </div>
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">1.2K Players Active</span>
          </div>

          <Footer />
        </main>
      )}

      {/* ============== GAME BOARD VIEW (READY, PLAYING, PAUSED) ============== */}
      {(phase === "READY" || phase === "PLAYING" || phase === "PAUSED") && (
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-6 md:py-8">
          {/* Top Control Bar */}
          <div className="bg-white rounded-2xl border border-stone-200/60 shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4 animate-fade-in-up">
            {/* Left: Player & Stats */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-stone-800 text-sm">{name}</div>
                <div className="text-xs text-stone-400">{matchedCount}/8 쌍 매칭됨 · {moves} 시도</div>
              </div>
            </div>

            {/* Center: Timer */}
            <div className="flex items-center gap-2 bg-stone-50 border border-stone-200 px-5 py-2.5 rounded-xl">
              <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-mono text-xl font-black tracking-tight text-stone-800">
                {formatTime(elapsedTime)}
              </span>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center gap-2">
              {phase === "READY" && (
                <button onClick={handleStartGame} className="py-2.5 px-5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl transition-all flex items-center gap-2 shadow-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  게임 시작
                </button>
              )}
              {phase === "PLAYING" && (
                <button onClick={handlePauseGame} className="py-2.5 px-5 bg-red-500 hover:bg-red-600 text-white font-bold text-sm rounded-xl transition-all flex items-center gap-2 shadow-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                  멈춤
                </button>
              )}
              {phase === "PAUSED" && (
                <button onClick={handleResumeGame} className="py-2.5 px-5 bg-green-600 hover:bg-green-700 text-white font-bold text-sm rounded-xl transition-all flex items-center gap-2 shadow-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  재개
                </button>
              )}
              <button onClick={handleRestart} className="py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-600 font-bold text-sm rounded-xl transition-all flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                다시 시작
              </button>
              <button onClick={handleGoHome} className="py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-600 font-bold text-sm rounded-xl transition-all flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21.75h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21.75h8.25" />
                </svg>
                처음으로
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex justify-between text-xs font-bold mb-1.5">
              <span className="text-stone-400">Progress</span>
              <span className="text-orange-500">{matchedCount} / 8 쌍 · 정확도 {accuracy}%</span>
            </div>
            <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-orange-400 to-orange-500 h-full transition-all duration-500 rounded-full"
                style={{ width: `${(matchedCount / 8) * 100}%` }}
              />
            </div>
          </div>

          {/* 4x4 Card Grid */}
          <div className="relative bg-white rounded-3xl border border-stone-200/60 shadow-sm p-5 md:p-8 max-w-xl mx-auto animate-scale-in overflow-hidden">
            <div className="grid grid-cols-4 gap-3 md:gap-4">
              {cards.map((card, index) => {
                const fruit = FRUITS.find((f) => f.id === card.fruitId);
                const FruitComponent = fruit ? fruit.component : () => null;
                const isFlipped = card.isFlipped || card.isMatched;
                const isMismatched = mismatchedIndices.includes(index);
                const isJustMatched = matchedIndices.includes(index);

                let animClass = "";
                if (isMismatched) animClass = "animate-shake";
                else if (isJustMatched) animClass = "animate-success";

                return (
                  <div
                    key={card.id}
                    onClick={() => handleCardClick(index)}
                    className="perspective-1000 aspect-square cursor-pointer"
                  >
                    <div className={`relative w-full h-full duration-500 preserve-3d transition-transform ${isFlipped ? "rotate-y-180" : ""} ${animClass}`}>
                      {/* Card Back */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-500 border border-orange-300 shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-200">
                        <div className="w-[85%] h-[85%] border-2 border-dashed border-white/25 rounded-xl flex items-center justify-center">
                          <svg viewBox="0 0 32 32" className="w-8 h-8 opacity-50">
                            <circle cx="16" cy="18" r="11" fill="white" />
                            <path d="M16 7 C16 7, 15 3, 16 3" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M16 7 C18 7, 22 5, 22 3 C20 3, 17 5, 16 7 Z" fill="#F97316" />
                          </svg>
                        </div>
                      </div>

                      {/* Card Front */}
                      <div
                        className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl flex items-center justify-center border-2 shadow-inner ${fruit ? fruit.bgColor : "bg-stone-100 border-stone-200"}`}
                        style={card.isMatched && fruit ? { backgroundColor: fruit.cardColor, borderColor: 'transparent' } : {}}
                      >
                        {card.isMatched && (
                          <div className="absolute top-1.5 right-1.5">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        )}
                        <FruitComponent />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pause Overlay */}
            {phase === "PAUSED" && (
              <div className="absolute inset-0 z-20 backdrop-blur-xl bg-stone-900/50 flex flex-col items-center justify-center text-center p-6 rounded-3xl">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">게임 일시 정지됨</h3>
                <p className="text-sm text-white/60 mb-6">카드 유출 방지를 위해 화면이 흐려집니다.</p>
                <button onClick={handleResumeGame} className="py-3 px-8 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl transition-all flex items-center gap-2 shadow-lg transform hover:-translate-y-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  게임 재개하기
                </button>
              </div>
            )}

            {/* Ready Overlay */}
            {phase === "READY" && (
              <div className="absolute inset-0 z-20 bg-stone-900/30 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 rounded-3xl">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-orange-300/40">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">게임 준비 완료!</h3>
                <p className="text-xs text-white/70 mb-6 max-w-xs">
                  시작 버튼을 누르면 타이머가 작동하고 보드가 활성화됩니다.
                </p>
                <button onClick={handleStartGame} className="py-3.5 px-10 bg-orange-500 hover:bg-orange-600 text-white font-extrabold rounded-2xl transition-all flex items-center gap-2 shadow-lg shadow-orange-400/40 transform hover:-translate-y-0.5">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  게임 시작하기
                </button>
              </div>
            )}
          </div>
        </main>
      )}

      {/* ============== COMPLETED VIEW ============== */}
      {phase === "COMPLETED" && (
        <>
          <Confetti />
          <main className="flex-1 flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-white border border-stone-200/60 p-8 rounded-3xl shadow-xl relative overflow-hidden z-40 text-center animate-scale-in">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400" />

              {/* Trophy */}
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-orange-200 animate-bounce">
                <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
                  <path d="M16 8h16v4a8 8 0 01-16 0V8z" fill="#F97316" />
                  <path d="M14 8h-4a4 4 0 000 8h2a6 6 0 002-4V8z" fill="#FBBF24" />
                  <path d="M34 8h4a4 4 0 010 8h-2a6 6 0 01-2-4V8z" fill="#FBBF24" />
                  <path d="M24 24v6" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
                  <rect x="18" y="30" width="12" height="4" rx="2" fill="#F97316" />
                  <rect x="16" y="34" width="16" height="4" rx="2" fill="#EA580C" />
                </svg>
              </div>

              <h2 className="text-3xl font-black text-stone-800 mb-1">축하합니다! 🎉</h2>
              <p className="text-sm text-stone-500 mb-6 font-semibold">{name}님이 모든 매치를 완료했습니다!</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 bg-stone-50 border border-stone-100 p-4 rounded-2xl mb-6">
                <div>
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">소요 시간</div>
                  <div className="text-lg font-black text-orange-500">{formatTime(elapsedTime)}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">시도 횟수</div>
                  <div className="text-lg font-black text-stone-700">{moves}회</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">정확도</div>
                  <div className="text-lg font-black text-green-600">{accuracy}%</div>
                </div>
              </div>

              {/* Google Sheets Submission Status */}
              {sheetApiUrl.trim() && (
                <div className="mb-6 py-3 px-4 bg-stone-50 border border-stone-200/60 rounded-2xl text-xs">
                  {isSubmittingScore && (
                    <span className="text-stone-500 flex items-center justify-center gap-1.5 font-semibold">
                      <svg className="animate-spin h-3.5 w-3.5 text-orange-500" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Google Sheet에 기록 저장 중...
                    </span>
                  )}
                  {!isSubmittingScore && submitStatus === "success" && (
                    <span className="text-green-600 font-bold flex items-center justify-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Google Sheet에 성공적으로 기록됨!
                    </span>
                  )}
                  {!isSubmittingScore && submitStatus === "error" && (
                    <span className="text-red-500 font-bold flex items-center justify-center gap-1.5 flex-wrap">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>기록 저장 실패.</span>
                      <button onClick={() => sendScoreToGoogleSheet(name, elapsedTime)} className="text-orange-500 hover:text-orange-600 hover:underline font-extrabold ml-1.5">
                        재시도
                      </button>
                    </span>
                  )}
                </div>
              )}

              {/* Google Sheets Leaderboard (Top 3) */}
              {sheetApiUrl.trim() && (
                <div className="text-left mb-6">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-green-600 mb-3 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    실시간 월드 랭킹 (Google Sheet Top 3)
                  </h3>

                  <div className="bg-stone-50 rounded-xl divide-y divide-stone-100 overflow-hidden border border-stone-100">
                    {isLoadingGoogleLeaderboard ? (
                      <div className="p-4 text-xs text-center text-stone-400 flex items-center justify-center gap-1.5 font-semibold">
                        <svg className="animate-spin h-3.5 w-3.5 text-green-600" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        월드 랭킹 불러오는 중...
                      </div>
                    ) : googleLeaderboard.length === 0 ? (
                      <div className="p-4 text-xs text-center text-stone-400">등록된 월드 랭킹 기록이 없습니다.</div>
                    ) : (
                      googleLeaderboard.map((record, index) => {
                        const isCurrent = record.name === name.trim();
                        return (
                          <div
                            key={index}
                            className={`flex items-center justify-between px-4 py-3 text-xs ${isCurrent ? "bg-green-50 font-bold" : ""}`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                                index === 0 ? "bg-yellow-100 text-yellow-700" :
                                index === 1 ? "bg-stone-200 text-stone-600" :
                                index === 2 ? "bg-amber-100 text-amber-700" :
                                "bg-stone-100 text-stone-400"
                              }`}>
                                {index + 1}
                              </span>
                              <span className="text-stone-700 max-w-[120px] truncate">{record.name}</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-stone-400 text-[10px]">{record.timestamp && record.timestamp.split(" ")[0]}</span>
                              <span className="font-mono text-green-600 font-bold">{record.finishtime}</span>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              )}

              {/* Leaderboard */}
              <div className="text-left mb-8">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-stone-400 mb-3 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  명예의 전당 (Top 5)
                </h3>

                <div className="bg-stone-50 rounded-xl divide-y divide-stone-100 overflow-hidden border border-stone-100">
                  {leaderboard.length === 0 ? (
                    <div className="p-4 text-xs text-center text-stone-400">아직 등록된 기록이 없습니다.</div>
                  ) : (
                    leaderboard.map((record, index) => {
                      const isCurrent = record.time === elapsedTime && record.name === name.trim();
                      return (
                        <div
                          key={index}
                          className={`flex items-center justify-between px-4 py-3 text-xs ${isCurrent ? "bg-orange-50 font-bold" : ""}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                              index === 0 ? "bg-yellow-100 text-yellow-700" :
                              index === 1 ? "bg-stone-200 text-stone-600" :
                              index === 2 ? "bg-orange-100 text-orange-600" :
                              "bg-stone-100 text-stone-400"
                            }`}>
                              {index + 1}
                            </span>
                            <span className="text-stone-700 max-w-[80px] truncate">{record.name}</span>
                            {isCurrent && (
                              <span className="px-1.5 py-0.5 bg-orange-500 text-white rounded text-[8px] uppercase tracking-wide">NEW</span>
                            )}
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-semibold text-stone-400">{record.moves}회</span>
                            <span className="font-mono text-orange-600 font-bold">{formatTime(record.time)}</span>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button onClick={handleRestart} className="flex-1 py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-0.5">
                  다시 도전하기
                </button>
                <button onClick={handleGoHome} className="flex-1 py-4 px-6 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold rounded-2xl transition-all">
                  처음으로
                </button>
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}
