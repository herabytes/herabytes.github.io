// -----------------------------------------------------------------------------
// EDIT ME. Single source of truth for identity + links.
// After changing `githubUser`, also update `site` in astro.config.mjs.
// -----------------------------------------------------------------------------

export const site = {
  name: 'Hera Choi',
  // Your GitHub username. Used for the avatar and the GitHub link.
  githubUser: 'herabytes',

  social: {
    github: 'https://github.com/herabytes',
    linkedin: 'https://www.linkedin.com/in/hera-choi',
    x: 'https://x.com/hijackedbyhera',
    email: 'yu.choi.25@ucl.ac.uk',
  },

  // Optional <meta description>. Kept neutral on purpose — reword when you like.
  description: 'Hera Choi — a running inference: ideas, work, and interests.',
};

// GitHub serves your avatar at https://github.com/<user>.png — no upload needed.
export const avatarUrl = (user: string = site.githubUser) =>
  `https://github.com/${user}.png`;
