import './globals.css'
export const metadata = { title: 'Prompt Builder (jp → English)', description: 'Generate English natural-language prompts from Japanese selections' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="ja"><body>{children}</body></html>);
}
