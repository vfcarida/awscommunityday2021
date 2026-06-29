import { describe, it, expect, beforeEach, vi } from 'vitest';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('Site Logic Tests', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    // Re-initialize scripts or dispatch DOMContentLoaded
  });

  it('should toggle nav-bar active class when toggle button is clicked', async () => {
    // Dynamic import to execute site.js after DOM is ready
    await import('../js/site.js?t=' + Date.now()); // cache busting for vitest
    
    // Dispatch DOMContentLoaded to trigger our scripts
    document.dispatchEvent(new Event('DOMContentLoaded'));

    const toggleBtn = document.getElementById('toggle');
    const navBar = document.getElementById('nav-bar');

    expect(toggleBtn).not.toBeNull();
    expect(navBar).not.toBeNull();

    // Click toggle
    toggleBtn.click();
    
    expect(toggleBtn.classList.contains('on')).toBe(true);
    expect(navBar.classList.contains('active')).toBe(true);

    // Click again
    toggleBtn.click();
    expect(toggleBtn.classList.contains('on')).toBe(false);
    expect(navBar.classList.contains('active')).toBe(false);
  });
});
