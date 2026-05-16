// Vercel Web Analytics injection script
// This script imports and injects the Vercel Analytics tracking code
import { inject } from '@vercel/analytics';

// Inject the analytics script when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    inject({ mode: 'auto' });
  });
} else {
  inject({ mode: 'auto' });
}
