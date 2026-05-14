import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSPORT_CHALLENGES } from './transportData';
import { Check, X, Trophy, RefreshCw, User, Star, ArrowRight } from 'lucide-react';

export default function TransportGame() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'finished'>('start');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scores, setScores] = useState({ gor: 0, gayane: 0 });
  const [turn, setTurn] = useState<'gor' | 'gayane'>('gor');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const currentChallenge = TRANSPORT_CHALLENGES[currentIdx];

  const handleAnswer = (optionIdx: number) => {
    if (showResult) return;
    setSelectedOption(optionIdx);
    setShowResult(true);

    if (currentChallenge.options[optionIdx].correct) {
      setScores(prev => ({ ...prev, [turn]: prev[turn] + 1 }));
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setShowResult(false);
    if (currentIdx < TRANSPORT_CHALLENGES.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setTurn(prev => prev === 'gor' ? 'gayane' : 'gor');
    } else {
      setGameState('finished');
    }
  };

  const resetGame = () => {
    setCurrentIdx(0);
    setScores({ gor: 0, gayane: 0 });
    setTurn('gor');
    setGameState('playing');
    setSelectedOption(null);
    setShowResult(false);
  };

  if (gameState === 'start') {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center space-y-12">
        <div className="space-y-6">
           <motion.div 
             initial={{ scale: 0 }} 
             animate={{ scale: 1 }} 
             className="w-32 h-32 bg-orange-500 rounded-full mx-auto flex items-center justify-center text-white shadow-2xl"
           >
              <Star size={64} />
           </motion.div>
           <h2 className="text-5xl sm:text-7xl font-black italic uppercase tracking-tighter text-slate-900">
             Գոռ vs Գայանե
           </h2>
           <p className="text-slate-400 font-bold italic uppercase tracking-widest text-lg">
             Տրանսպորտային Մրցույթ
           </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
           <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100 space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-3xl mx-auto flex items-center justify-center text-blue-600">
                 <User size={40} />
              </div>
              <h3 className="text-2xl font-black italic uppercase tracking-tight">Գոռ</h3>
           </div>
           <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100 space-y-4">
              <div className="w-20 h-20 bg-rose-100 rounded-3xl mx-auto flex items-center justify-center text-rose-600">
                 <User size={40} />
              </div>
              <h3 className="text-2xl font-black italic uppercase tracking-tight">Գայանե</h3>
           </div>
        </div>

        <button 
          onClick={() => setGameState('playing')}
          className="bg-slate-900 text-white px-12 py-6 rounded-full font-black uppercase text-xl italic tracking-widest shadow-2xl hover:scale-105 transition-transform"
        >
          Սկսել Խաղը
        </button>
      </div>
    );
  }

  if (gameState === 'finished') {
    const winner = scores.gor > scores.gayane ? 'Գոռ' : scores.gayane > scores.gor ? 'Գայանե' : 'Ոչ-ոքի';
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center space-y-12">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="space-y-6">
           <Trophy className="mx-auto text-yellow-500" size={128} />
           <h2 className="text-5xl sm:text-7xl font-black italic uppercase tracking-tighter text-slate-900">
             {winner === 'Ոչ-ոքի' ? 'Ոչ-ոքի՜' : `Հաղթեց ${winner}ը`}
           </h2>
           <div className="flex justify-center gap-12 pt-8">
              <div className="text-center">
                 <p className="text-slate-400 font-black uppercase text-xs tracking-widest">Գոռ</p>
                 <p className="text-4xl font-black italic text-blue-600">{scores.gor}</p>
              </div>
              <div className="text-center">
                 <p className="text-slate-400 font-black uppercase text-xs tracking-widest">Գայանե</p>
                 <p className="text-4xl font-black italic text-rose-600">{scores.gayane}</p>
              </div>
           </div>
        </motion.div>
        
        <button 
          onClick={resetGame}
          className="bg-orange-600 text-white px-12 py-6 rounded-full font-black uppercase text-xl italic tracking-widest shadow-2xl flex items-center gap-4 mx-auto"
        >
          <RefreshCw /> Նորից
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Score Header */}
      <div className="flex justify-between items-center bg-slate-900 p-8 rounded-[3rem] text-white shadow-2xl">
         <div className={`flex items-center gap-4 transition-all ${turn === 'gor' ? 'scale-110 opacity-100' : 'opacity-40 scale-90'}`}>
            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
               <User />
            </div>
            <div>
               <p className="text-[10px] font-black uppercase tracking-widest opacity-50">Գոռ</p>
               <p className="text-2xl font-black italic uppercase leading-none">{scores.gor}</p>
            </div>
         </div>

         <div className="text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-1">Հարց</p>
            <p className="text-3xl font-black italic italic leading-none">{currentIdx + 1} / {TRANSPORT_CHALLENGES.length}</p>
         </div>

         <div className={`flex items-center gap-4 transition-all ${turn === 'gayane' ? 'scale-110 opacity-100' : 'opacity-40 scale-90'}`}>
            <div className="text-right">
               <p className="text-[10px] font-black uppercase tracking-widest opacity-50">Գայանե</p>
               <p className="text-2xl font-black italic uppercase leading-none">{scores.gayane}</p>
            </div>
            <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center">
               <User />
            </div>
         </div>
      </div>

      {/* Turn Indicator */}
      <div className="text-center">
         <span className={`px-8 py-3 rounded-full font-black italic uppercase text-xs tracking-widest shadow-lg ${turn === 'gor' ? 'bg-blue-100 text-blue-600' : 'bg-rose-100 text-rose-600'}`}>
            Հիմա հերթը {turn === 'gor' ? 'Գոռինն' : 'Գայանեինն'} է
         </span>
      </div>

      {/* Challenge Card */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIdx}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          className="bg-white p-10 sm:p-16 rounded-[4rem] shadow-xl border border-slate-100 space-y-12 text-center"
        >
           <div className="space-y-4">
              <h3 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tighter text-slate-900">
                {currentChallenge.question}
              </h3>
              <p className="text-xl font-bold italic text-slate-400">
                {currentChallenge.translation}
              </p>
           </div>

           <div className="grid gap-4">
              {currentChallenge.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={showResult}
                  className={`
                    w-full py-6 rounded-[2rem] font-black italic uppercase text-xl sm:text-2xl tracking-widest transition-all relative overflow-hidden
                    ${!showResult 
                      ? 'bg-slate-50 text-slate-900 border-2 border-transparent hover:border-orange-500 hover:bg-white active:scale-95' 
                      : option.correct 
                        ? 'bg-emerald-500 text-white shadow-xl shadow-emerald-100' 
                        : selectedOption === idx 
                          ? 'bg-rose-500 text-white' 
                          : 'bg-slate-50 text-slate-300'}
                  `}
                >
                  {option.text}
                  {showResult && option.correct && <Check className="absolute right-8 top-1/2 -translate-y-1/2" size={32} />}
                  {showResult && selectedOption === idx && !option.correct && <X className="absolute right-8 top-1/2 -translate-y-1/2" size={32} />}
                </button>
              ))}
           </div>

           {showResult && (
             <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 pt-8 border-t border-slate-100">
                <div className="p-6 bg-orange-50 rounded-3xl space-y-2">
                   <p className="text-[10px] font-black uppercase tracking-widest text-orange-600">Բացատրություն</p>
                   <p className="text-slate-700 font-bold italic">{currentChallenge.explanation}</p>
                </div>
                <button 
                  onClick={nextQuestion}
                  className="bg-slate-900 text-white px-10 py-5 rounded-full font-black uppercase text-sm italic tracking-widest flex items-center gap-4 mx-auto"
                >
                  Հաջորդ Հարցը <ArrowRight />
                </button>
             </motion.div>
           )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
