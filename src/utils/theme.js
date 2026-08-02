export function countryCSSVars(theme) {
  if (!theme) return {};
  return {
    '--color-primary': theme.primary,
    '--color-secondary': theme.secondary,
    '--color-accent': theme.accent,
    '--color-surface': theme.surface,
    // theme.surface treibt auch den Seitenhintergrund — jedes Land bekommt so einen eigenen
    // Grundton statt eines fixen neutralen Hintergrunds für alle Länder.
    '--color-bg': theme.surface,
    '--gradient-hero': `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
    ...(theme.fontHeading ? { '--font-heading': theme.fontHeading } : {}),
    ...(theme.fontBody ? { '--font-body': theme.fontBody } : {}),
  };
}
