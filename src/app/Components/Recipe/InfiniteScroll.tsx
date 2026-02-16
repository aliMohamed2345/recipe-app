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
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Latest values refs (prevent stale closure problems)
  const loadingRef = useRef(loading);
  const hasMoreRef = useRef(hasMore);
  const loadMoreRef = useRef(onLoadMore);

  // Sync refs
  useEffect(() => {
    loadingRef.current = loading;
  }, [loading]);

  useEffect(() => {
    hasMoreRef.current = hasMore;
  }, [hasMore]);

  useEffect(() => {
    loadMoreRef.current = onLoadMore;
  }, [onLoadMore]);

  // Create observer ONCE
  useEffect(() => {
    if (!triggerRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting) return;

        if (loadingRef.current) return;
        if (!hasMoreRef.current) return;

        // Stop observing until fetch finishes
        if (triggerRef.current) {
          observerRef.current?.unobserve(triggerRef.current);
        }

        loadMoreRef.current();
      },
      {
        rootMargin,
        threshold: 0.1,
      },
    );

    observerRef.current.observe(triggerRef.current);

    return () => observerRef.current?.disconnect();
  }, [rootMargin]);

  // Re-observe AFTER loading finishes
  useEffect(() => {
    if (!loading && hasMore && triggerRef.current) {
      observerRef.current?.observe(triggerRef.current);
    }
  }, [loading, hasMore]);

  return (
    <>
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
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center gap-2"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "linear",
                }}
                className="w-8 h-8 border-2 border-muted-foreground border-t-transparent rounded-full"
              />

              <span className="text-xs text-muted-foreground">
                Loading more recipes...
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {!hasMore && !loading && (
          <motion.div
            key="end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
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
