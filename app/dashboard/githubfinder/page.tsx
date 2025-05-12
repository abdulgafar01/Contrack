import SearchBar from "@/components/ui/githubfinder/SearchBar";

export default function GitHubFinderPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Finder</h1>
      <SearchBar />
    </div>
  );
}