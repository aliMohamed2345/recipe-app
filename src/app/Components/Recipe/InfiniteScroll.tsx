"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InfiniteScrollProps } from "@/app/utils/types";

const InfiniteScroll = ({
  onLoadMore,
  hasMore,
  loading,
  rootMargin = "200px",
}: InfiniteScrollProps) => {
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && !loading) {
          onLoadMore();
        }
      },
      { rootMargin },
    );

    const current = triggerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [hasMore, loading, onLoadMore, rootMargin]);

  return (
    <>
      {/* Trigger Element */}
      <div
        ref={triggerRef}
        className="w-full h-16 flex justify-center items-center"
      >
        <AnimatePresence>
          {loading && (
            <motion.div
              key="loader"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col items-center gap-2"
            >
              {/* Animated Spinner */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "linear",
                }}
                className="w-8 h-8 border-2 border-muted-foreground border-t-transparent rounded-full"
              />

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xs text-muted-foreground"
              >
                Loading more recipes...
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* End State */}
      <AnimatePresence>
        {!hasMore && !loading && (
          <motion.div
            key="end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center text-sm text-muted-foreground py-6"
          >
            🍽️ No more recipes found
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InfiniteScroll;
