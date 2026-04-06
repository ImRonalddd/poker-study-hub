# Study Material Templates

Skeleton HTML files for creating new course study materials.
Each template has the complete CSS, KaTeX setup, and structural placeholders.

## Files

| Template | Purpose | Key Features |
|----------|---------|--------------|
| `hub.html` | Course index/landing page | Stats bar, material cards, episode guide |
| `crash-course.html` | Concise topic overview | All 4 box types, table of contents |
| `revision-guide.html` | Deep-dive reference | Full-context examples, EV calculations |
| `drills.html` | Interactive quiz | One-at-a-time JS pattern, keyboard shortcuts |
| `quick-reference.html` | Printable cheat sheet | Tables, formulas, print styles |

## Usage

When creating study materials for a new course:
1. Agent reads the relevant template
2. Replaces `{{PLACEHOLDERS}}` with actual content
3. Writes to `study-materials/COURSE-SLUG/FILENAME.html`

## Splitting Large Courses

For courses with 40+ transcripts (>100K words), split into sections:
- `crash-course-preflop.html` + `crash-course-postflop.html`
- `revision-guide-preflop.html` + `revision-guide-postflop.html`  
- `drills-preflop.html` + `drills-postflop.html`

Each agent reads only its section's transcripts (~25-30 files max).

## Design System Quick Reference

- Fonts: Playfair Display (headings), Source Serif 4 (body), JetBrains Mono (code/labels)
- Colors: #000 text, #525252 dim, #2563EB blue, #7C3AED purple, #EA580C orange, #DC2626 red
- 0px border-radius everywhere, no shadows
- KaTeX: `\(` `\)` inline, `\[` `\]` display, NEVER use `$`
- Dollar amounts ($100) must be plain text, never LaTeX
