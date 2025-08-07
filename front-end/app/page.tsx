export const dynamic = "force-static";
import { AppGrid } from "@/components/app-grid";
import { loadApps } from "@/lib/code-examples";
import { Github, ExternalLink } from "lucide-react";

export default async function Home() {
  const apps = await loadApps();

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-gray-50 to-blue-100">
      <main className="mx-auto w-full py-6">
        <h1 className="text-3xl font-bold font-mono text-center mb-2">
          GPT-5 coding examples
        </h1>
        <div className="flex items-center justify-center gap-4 mb-4">
          <a
            href="https://github.com/openai/gpt-5-coding-examples"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Source Code</span>
          </a>
          <a
            href="https://openai.com/index/introducing-gpt-5/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>GPT-5 Announcement</span>
          </a>
        </div>
        <AppGrid apps={apps} />
      </main>
    </div>
  );
}
