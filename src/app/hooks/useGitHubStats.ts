import * as React from "react";

const GITHUB_USERNAME = "RuAmey27";
const GITHUB_API = "https://api.github.com";

export interface CommitEntry {
  hash: string;
  msg: string;
  time: string;
  repo: string;
}

export interface GitHubStats {
  repos: number | null;
  stars: number | null;
  followers: number | null;
  recentCommits: CommitEntry[];
  loading: boolean;
  error: string | null;
}

function timeAgo(dateStr: string): string {
  const diffMs = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diffMs / 60_000);
  const hours = Math.floor(diffMs / 3_600_000);
  const days = Math.floor(diffMs / 86_400_000);
  if (mins < 60) return `${mins} min ago`;
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (days === 1) return "1 day ago";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} week${Math.floor(days / 7) > 1 ? "s" : ""} ago`;
  return `${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? "s" : ""} ago`;
}

export function useGitHubStats(): GitHubStats {
  const [stats, setStats] = React.useState<GitHubStats>({
    repos: null,
    stars: null,
    followers: null,
    recentCommits: [],
    loading: true,
    error: null,
  });

  React.useEffect(() => {
    // Optional: set VITE_GITHUB_TOKEN in .env.local to raise rate limits
    const token = (import.meta as unknown as { env: Record<string, string> }).env
      .VITE_GITHUB_TOKEN;
    const headers: HeadersInit = token
      ? { Authorization: `Bearer ${token}` }
      : {};

    async function fetchStats() {
      try {
        const [userRes, reposRes, eventsRes] = await Promise.all([
          fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, { headers }),
          fetch(
            `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
            { headers }
          ),
          fetch(
            `${GITHUB_API}/users/${GITHUB_USERNAME}/events/public?per_page=30`,
            { headers }
          ),
        ]);

        if (!userRes.ok || !reposRes.ok || !eventsRes.ok) {
          throw new Error(
            `GitHub API error: ${!userRes.ok ? userRes.status : !reposRes.ok ? reposRes.status : eventsRes.status}`
          );
        }

        const [user, repos, events] = await Promise.all([
          userRes.json(),
          reposRes.json(),
          eventsRes.json(),
        ]);

        const totalStars = Array.isArray(repos)
          ? (repos as { stargazers_count: number }[]).reduce(
              (sum, repo) => sum + (repo.stargazers_count ?? 0),
              0
            )
          : null;

        // Extract recent commits from PushEvents
        const commits: CommitEntry[] = [];
        if (Array.isArray(events)) {
          for (const event of events as {
            type: string;
            payload: { commits?: { sha: string; message: string }[] };
            repo: { name: string };
            created_at: string;
          }[]) {
            if (event.type === "PushEvent" && event.payload?.commits?.length) {
              for (const commit of event.payload.commits) {
                commits.push({
                  hash: commit.sha.slice(0, 7),
                  msg: commit.message.split("\n")[0].slice(0, 65),
                  time: timeAgo(event.created_at),
                  repo: event.repo.name.split("/")[1] ?? event.repo.name,
                });
                if (commits.length >= 4) break;
              }
            }
            if (commits.length >= 4) break;
          }
        }

        setStats({
          repos: user.public_repos ?? null,
          stars: totalStars,
          followers: user.followers ?? null,
          recentCommits: commits,
          loading: false,
          error: null,
        });
      } catch (err) {
        setStats((prev: GitHubStats) => ({
          ...prev,
          loading: false,
          error:
            err instanceof Error ? err.message : "Failed to fetch GitHub stats",
        }));
      }
    }

    fetchStats();
  }, []);

  return stats;
}
