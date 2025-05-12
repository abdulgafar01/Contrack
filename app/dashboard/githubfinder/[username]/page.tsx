
import { GitHubUser } from '@/types';

async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });
    if (!res.ok) {
      console.error(`API Error: ${res.status} - ${res.statusText}`);
      throw new Error(`Failed to fetch user data: ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error('Network error or API is unavailable');
  }
}

export default async function GitHubFinderPage({ params }: { params: { username: string } }) {
  const { username } = params;
  let user: GitHubUser;
  try {
    user = await fetchGitHubUser(username);
  } catch (error) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">GitHub Finder</h1>
        <div className="bg-red-100 p-4 rounded-lg text-red-700">
          <p>Error: {(error as Error).message}</p>
          <p>Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Finder</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.login}</p>
            <p className="text-gray-600">{user.bio}</p>
          </div>
        </div>
        <div className="mt-4">
          <p>
            <strong>Followers:</strong> {user.followers}
          </p>
          <p>
            <strong>Following:</strong> {user.following}
          </p>
          <p>
            <strong>Public Repos:</strong> {user.public_repos}
          </p>
        </div>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View Profile on GitHub
        </a>
      </div>
    </div>
  );
}