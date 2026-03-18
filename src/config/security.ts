export const ENABLE_PASSWORD_PROTECTION = true;

// Password is read from .env.local (not committed to git)
export const SITE_PASSWORD = import.meta.env.SITE_PASSWORD || "letmein";

// Session key used in browser storage to remember unlocked state.
export const PASSWORD_SESSION_KEY = "mig-site-password-ok";
