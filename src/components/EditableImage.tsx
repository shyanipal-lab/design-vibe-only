import React, { useState, useRef } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface EditableImageProps {
  id: string;
  label: string;
  aspectRatio?: string;
  className?: string;
  defaultIllustration?: React.ReactNode;
}

export default function EditableImage({ 
  id, 
  label, 
  aspectRatio = "aspect-video", 
  className = "",
  defaultIllustration 
}: EditableImageProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className={`group relative rounded-[32px] overflow-hidden border-2 border-dashed border-zinc-200 hover:border-brand-primary transition-colors bg-zinc-50 ${aspectRatio} ${className}`}>
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        className="hidden" 
      />

      <AnimatePresence mode="wait">
        {preview ? (
          <motion.div 
            key="preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full relative"
          >
            <img 
              src={preview} 
              alt={label} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 bg-white text-zinc-900 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2"
              >
                <Upload className="w-3 h-3" />
                Replace
              </button>
              <button 
                onClick={clearImage}
                className="p-2 bg-red-500 text-white rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => fileInputRef.current?.click()}
            className="w-full h-full flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="w-16 h-16 rounded-3xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ImageIcon className="w-8 h-8 text-zinc-300 group-hover:text-brand-primary transition-colors" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">{label}</p>
              <p className="text-[8px] font-bold text-zinc-300 uppercase tracking-widest">Click to upload illustration</p>
            </div>
            {defaultIllustration && (
              <div className="absolute inset-0 -z-10 opacity-30 group-hover:opacity-10 transition-opacity">
                {defaultIllustration}
              </div>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
