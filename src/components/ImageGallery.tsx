import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface LightboxProps {
  images: string[];
  alt: string;
}

export function ImageGallery({ images, alt }: LightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const open = (i: number) => setSelectedIndex(i);
  const close = () => setSelectedIndex(null);
  const prev = () =>
    setSelectedIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () =>
    setSelectedIndex((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <>
      {/* Grid */}
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => open(index)}
            className="rounded-2xl overflow-hidden shadow-card border border-border cursor-zoom-in hover:shadow-xl hover:scale-[1.02] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <img
              src={img}
              alt={`${alt} — ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={close}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            {images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 z-10 p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              src={images[selectedIndex]}
              alt={`${alt} — ${selectedIndex + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            {images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 z-10 p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Counter */}
            <span className="absolute bottom-4 text-white/70 text-sm">
              {selectedIndex + 1} / {images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
