import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

/**
 * ui-ux-pro-max-skill react.csv #44 (High): move focus into the modal
 * container on open and restore it to the previously focused element
 * on close. Attach the returned ref + tabIndex={-1} to the dialog node.
 */
export function useModalFocus<T extends HTMLElement>(isOpen: boolean): RefObject<T | null> {
  const containerRef = useRef<T | null>(null);
  const restoreRef = useRef<Element | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    restoreRef.current = document.activeElement;
    const node = containerRef.current;
    const raf = requestAnimationFrame(() => node?.focus({ preventScroll: true }));
    return () => {
      cancelAnimationFrame(raf);
      const restore = restoreRef.current;
      if (restore instanceof HTMLElement) restore.focus({ preventScroll: true });
    };
  }, [isOpen]);

  return containerRef;
}
