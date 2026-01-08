// ============================================
// Posts content
// Use ## for headings, **text** for bold, - for lists
// ============================================

export interface Post {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "empathy-post",
    title: "The Impact of Empathy",
    subtitle: "Is empathy optional in any context?",
    description: "Empathy as a skill, its absence in modern interactions, and why it remains essential for growth and understanding.",
    category: "Reflections",
    date: "2026-01-08",
    readTime: "2 min read",
    content: `
As a reader, at least from books I have read so far, I noticed a common word or noun that recurs in every book: "**empathy**." If we define it, it will be the "**ability to understand and share the feelings of another**." How to be in someone else's shoes and understand their position on their thoughts, or at least that's how I define it.

Internalizing why this word repeats so much, whether explicitly or through empathetic actions in the stories, has to be to the point that this type of engagement, unfortunately, and, to not sound pessimistic, has been scarce nowadays. So much so that one has a predefined sense of catching those actions as uncommon or new to observe.

In real life, we've all seen how interactions have become so polarized, before understanding what the person has been through to reach their intent, to the point that the only thing that matters is your opinion, nothing else. So, where is the space to grow if a lack of empathy prevents helping or achieving a common goal? If you put it in those words, empathy or the lack of it can even plug the resolution of problems that avoid helping us or others.

Based on my experience, empathy has become a skill that, when applied intentionally, opens doors not only to knowledge but to better problem-solving and collaboration.

In the end, it does not come down to agreeing on everything or excusing actions that go beyond personal boundaries, but to understanding the very core of where intention arises, giving space to express and, most importantly, to listen. I genuinely believe that with these three elements present, a problem is already half solved. If not, it was never a problem to begin with.

In times where opinion outweighs understanding, choosing empathy feels countercultural. Even if it's not the ultimate resolution, truth, it is a necessary step toward understanding the problem itself.

Possibly, the real challenge **is not learning what empathy is, but practicing it consistently in a world that rarely slows down enough to encourage it as a skill**, until it becomes common sense. Perhaps that is what books are genuinely trying to convey.





    `,
  },
  // Add more posts here...
];

// Helper to get a post by slug
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}

// Helper to get all unique categories
export function getCategories(): string[] {
  return ["All", ...new Set(posts.map(p => p.category))];
}
