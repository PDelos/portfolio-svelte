import { onNavigate } from '$app/navigation';
import { page } from '$app/state';

export interface TransitionDefinition {
  name: string;
  css: string;
}

export const transitions: Record<string, string> = {
  fade: `
        ::view-transition-old(root) { animation: fade-out 0.8s ease-in-out both; }
        ::view-transition-new(root) { animation: fade-in 0.8s ease-in-out both; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
    `,
  slideUp: `
        ::view-transition-old(root) { animation: slide-up-out 0.5s ease-in-out both; }
        ::view-transition-new(root) { animation: slide-up-in 0.5s ease-in-out both; }
        @keyframes slide-up-in { from { transform: translateY(100%); } to { transform: translateY(0); } }
        @keyframes slide-up-out { from { transform: translateY(0); } to { transform: translateY(-100%); } }
    `,
  slideDown: `
        ::view-transition-old(root) { animation: slide-down-out 0.5s ease-in-out both; }
        ::view-transition-new(root) { animation: slide-down-in 0.5s ease-in-out both; }
        @keyframes slide-down-in { from { transform: translateY(-100%); } to { transform: translateY(0); } }
        @keyframes slide-down-out { from { transform: translateY(0); } to { transform: translateY(100%); } }
    `,
  zoom: `
        ::view-transition-old(root) { animation: zoom-out 0.5s ease-in-out both; z-index: 1; }
        ::view-transition-new(root) { animation: zoom-in 0.5s ease-in-out both; z-index: 2; }
        @keyframes zoom-in { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes zoom-out { from { transform: scale(1); opacity: 1; } to { transform: scale(1.2); opacity: 0; } }
    `
};

export interface TransitionRule {
  from: string | RegExp;
  to: string | RegExp;
  type: keyof typeof transitions;
}

// Define your transition rules here
export const transitionRules: TransitionRule[] = [
  {
    from: '/work',
    to: /^\/work\/.*$/,
    type: 'zoom'
  },
  {
    from: /^\/work\/.*$/,
    to: '/work',
    type: 'zoom'
  },
  {
    from: '/',
    to: /.*/,
    type: 'slideUp'
  },
  {
    from: /.*/,
    to: '/',
    type: 'slideDown'
  }
];

export const defaultTransition = 'zoom';

export function getTransitionStyle(from: string, to: string): string {
  const rule = transitionRules.find((r) => {
    const fromMatch =
      typeof r.from === 'string' ? r.from === from : r.from.test(from);
    const toMatch = typeof r.to === 'string' ? r.to === to : r.to.test(to);
    return fromMatch && toMatch;
  });

  const type = rule ? rule.type : defaultTransition;
  return transitions[type] || transitions['fade'];
}

export function setupViewTransitions() {
  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      const from = page.url.pathname;
      const to = navigation.to?.url.pathname ?? from;

      const css = getTransitionStyle(from, to);

      const style = document.createElement('style');
      style.innerHTML = css;
      document.head.appendChild(style);

      document
        .startViewTransition(async () => {
          resolve();
          await navigation.complete;
        })
        .finished.finally(() => {
          document.head.removeChild(style);
        });
    });
  });
}
