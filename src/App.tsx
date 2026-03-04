import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ArrowLeft, MailOpen, Mail } from 'lucide-react';
import { LETTERS, Letter } from './constants';

export default function App() {
  const [viewState, setViewState] = useState<'closed' | 'opening' | 'list' | 'detail'>('closed');
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);

  const handleOpenEnvelope = () => {
    setViewState('opening');
    // Sequence: 
    // 1. Flap opens (handled by CSS/Motion)
    // 2. Paper slides out
    // 3. Zoom in to list
    setTimeout(() => {
      setViewState('list');
    }, 1200); // Wait for flap and slide out animation
  };

  const handleSelectLetter = (letter: Letter) => {
    setSelectedLetter(letter);
    setViewState('detail');
  };

  const handleBackToList = () => {
    setSelectedLetter(null);
    setViewState('list');
  };

  const handleCloseAll = () => {
    setViewState('closed');
    setSelectedLetter(null);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden bg-[#f5f2ed]">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />

      <AnimatePresence mode="wait">
        {(viewState === 'closed' || viewState === 'opening') && (
          <motion.div
            key="envelope-container"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 2, opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="relative flex items-center justify-center"
          >
            {/* The Envelope */}
            <div 
              className="relative w-72 h-48 md:w-96 md:h-64 bg-[#fdfcf8] shadow-2xl rounded-sm border border-black/5 cursor-pointer group"
              onClick={viewState === 'closed' ? handleOpenEnvelope : undefined}
            >
              {/* Back Flap (Inside) */}
              <div className="absolute inset-0 bg-[#f0ede8] rounded-sm" />

              {/* The Paper sliding out */}
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={viewState === 'opening' ? { 
                  y: -120, 
                  opacity: 1,
                  transition: { delay: 0.4, duration: 0.6, ease: "easeOut" } 
                } : { y: 0, opacity: 0 }}
                className="absolute left-4 right-4 top-4 bottom-4 bg-white shadow-sm border border-black/5 z-10 flex flex-col items-center justify-center p-4"
              >
                <div className="w-full h-2 bg-black/5 rounded-full mb-2" />
                <div className="w-3/4 h-2 bg-black/5 rounded-full mb-2" />
                <div className="w-1/2 h-2 bg-black/5 rounded-full" />
              </motion.div>

              {/* Front Flaps */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {/* Left Flap */}
                <div className="absolute inset-0 border-l-[144px] md:border-l-[192px] border-l-[#fdfcf8] border-t-[96px] md:border-t-[128px] border-t-transparent border-b-[96px] md:border-b-[128px] border-b-transparent" />
                {/* Right Flap */}
                <div className="absolute inset-0 border-r-[144px] md:border-r-[192px] border-r-[#fdfcf8] border-t-[96px] md:border-t-[128px] border-t-transparent border-b-[96px] md:border-b-[128px] border-b-transparent" />
                {/* Bottom Flap */}
                <div className="absolute inset-0 border-b-[96px] md:border-b-[128px] border-b-[#fdfcf8] border-l-[144px] md:border-l-[192px] border-l-transparent border-r-[144px] md:border-r-[192px] border-r-transparent" />
              </div>

              {/* Top Flap (Animated) */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-1/2 bg-[#fdfcf8] z-30 origin-top border-b border-black/5"
                initial={{ rotateX: 0 }}
                animate={viewState === 'opening' ? { rotateX: -180 } : { rotateX: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 border-t-[96px] md:border-t-[128px] border-t-[#fdfcf8] border-l-[144px] md:border-l-[192px] border-l-transparent border-r-[144px] md:border-r-[192px] border-r-transparent" />
              </motion.div>

              {/* Heart Stamp (Only visible when closed) */}
              {viewState === 'closed' && (
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-white p-3 rounded-full shadow-md border border-red-100 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Heart className="w-8 h-8 text-[#d44b4b] fill-[#d44b4b]" />
                </motion.div>
              )}

              {viewState === 'closed' && (
                <div className="absolute bottom-4 text-center w-full z-40">
                  <p className="serif italic text-sm opacity-40">Click to open</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {viewState === 'list' && (
          <motion.div
            key="list-view"
            initial={{ opacity: 0, scale: 0.2, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1], // Custom ease-out-expo
            }}
            className="w-full max-w-2xl z-20"
          >
            <div className="bg-paper shadow-xl rounded-lg p-6 md:p-12 border border-black/5 min-h-[600px] flex flex-col">
<header className="mb-12 text-center flex flex-col items-center gap-4">
  <div className="bg-white p-3 rounded-full shadow-sm border border-black/5">
    <Mail size={32} strokeWidth={1.5} className="text-black/70" />
  </div>
  <div>
    <h1 className="serif text-4xl md:text-5xl font-light mb-2">Letters I Never Sent</h1>
    <p className="text-sm uppercase tracking-[0.2em] opacity-50">A collection of echoes preserved in ink</p>
  </div>
</header>

              <div className="space-y-6 flex-1">
                {LETTERS.map((letter) => (
                  <motion.div
                    key={letter.id}
                    whileHover={{ x: 10 }}
                    onClick={() => handleSelectLetter(letter)}
                    className="group cursor-pointer border-b border-black/5 pb-4 flex items-center justify-between"
                  >
                    <div>
                      <h2 className="serif text-xl md:text-2xl group-hover:text-heart transition-colors">
                        {letter.title}
                      </h2>
                      <p className="text-xs opacity-40 uppercase tracking-wider mt-1">
                        To: {letter.recipient} • {letter.date}
                      </p>
                    </div>
                    <Mail className="w-4 h-4 opacity-0 group-hover:opacity-30 transition-opacity" />
                  </motion.div>
                ))}
              </div>

              <footer className="mt-12 pt-8 border-t border-black/5 text-center">
                <button 
                  onClick={handleCloseAll}
                  className="text-xs uppercase tracking-widest opacity-30 hover:opacity-100 transition-opacity"
                >
                  Close Envelope
                </button>
              </footer>
            </div>
          </motion.div>
        )}

        {viewState === 'detail' && (
          <motion.div
            key="detail-view"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl z-20"
          >
            <div className="bg-paper shadow-2xl rounded-lg p-8 md:p-16 border border-black/5 min-h-[600px] relative">
              <button
                onClick={handleBackToList}
                className="absolute top-8 left-8 flex items-center gap-2 text-sm opacity-40 hover:opacity-100 transition-opacity group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back</span>
              </button>

              <div className="mt-12">
                <div className="mb-12">
                  <p className="text-xs uppercase tracking-[0.3em] opacity-30 mb-2">Recipient</p>
                  <h3 className="serif text-2xl italic">{selectedLetter?.recipient}</h3>
                </div>

                <h2 className="serif text-3xl md:text-4xl mb-8 leading-tight">
                  {selectedLetter?.title}
                </h2>

                <div className="serif text-lg md:text-xl leading-relaxed opacity-80 whitespace-pre-wrap">
                  {selectedLetter?.content}
                </div>

                <div className="mt-16 pt-8 border-t border-black/5 flex justify-between items-end">
                  <div className="opacity-30">
                    <p className="text-[10px] uppercase tracking-widest">Date Written</p>
                    <p className="text-sm">{selectedLetter?.date}</p>
                  </div>
                  <MailOpen className="w-6 h-6 opacity-10" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Atmospheric Elements */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f5f2ed] to-transparent pointer-events-none z-10" />
    </main>
  );
}
