"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GitPullRequest, GitCommit, GitMerge, Star, Calendar, MessageSquare, Search, Filter } from "lucide-react";
import { useState } from "react";




// Mock contribution data
const contributionsData = [
  {
    id: 1,
    title: "Fix navbar responsiveness in mobile view",
    repo: "shadcn/ui",
    type: "pull-request",
    status: "merged",
    date: "2025-04-28",
    comments: 3,
    additions: 42,
    deletions: 15,
  },
  {
    id: 2,
    title: "Add dark mode support for dialog component",
    repo: "tailwindlabs/tailwindcss",
    type: "pull-request",
    status: "open",
    date: "2025-05-02",
    comments: 2,
    additions: 64,
    deletions: 8,
  },
  {
    id: 3,
    title: "Documentation improvements for installation guide",
    repo: "facebook/react",
    type: "issue",
    status: "closed",
    date: "2025-04-20",
    comments: 5,
  },
  {
    id: 4,
    title: "Implement rate limiting for API requests",
    repo: "vercel/next.js",
    type: "pull-request",
    status: "review",
    date: "2025-05-05",
    comments: 7,
    additions: 156,
    deletions: 34,
  },
  {
    id: 5,
    title: "Bug: Form validation doesn't work on Safari",
    repo: "remix-run/remix",
    type: "issue",
    status: "open",
    date: "2025-05-08",
    comments: 2,
  },
  {
    id: 6,
    title: "Performance optimization for large data sets",
    repo: "tanstack/react-query",
    type: "pull-request",
    status: "merged",
    date: "2025-04-15",
    comments: 8,
    additions: 245,
    deletions: 178,
  },
];



const Page = () => {
    
    const [searchQuery, setSearchQuery] = useState("");
  const [contributions, setContributions] = useState(contributionsData);
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredContributions = contributions.filter((contribution) => {
    const matchesSearch = contribution.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         contribution.repo.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTab = 
      activeTab === "all" ? true :
      activeTab === "pull-requests" ? contribution.type === "pull-request" :
      activeTab === "issues" ? contribution.type === "issue" :
      activeTab === "merged" ? contribution.status === "merged" :
      activeTab === "open" ? contribution.status === "open" :
      false;
    
    return matchesSearch && matchesTab;
  });

  const paginatedContributions = filteredContributions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredContributions.length / itemsPerPage);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "merged":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "open":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "closed":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "review":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };


  return (
     <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contributions</h1>
          <p className="text-muted-foreground">
            Track and manage your open source contributions
          </p>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <CardTitle>Contribution History</CardTitle>
              <CardDescription>
                View and filter your pull requests and issues
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search contributions..."
                  className="pl-8 w-full sm:w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pull-requests">Pull Requests</TabsTrigger>
              <TabsTrigger value="issues">Issues</TabsTrigger>
              <TabsTrigger value="merged">Merged</TabsTrigger>
              <TabsTrigger value="open">Open</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeTab} className="space-y-4">
              {paginatedContributions.length > 0 ? (
                paginatedContributions.map((contribution) => (
                  <div key={contribution.id} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-3">
                        {contribution.type === "pull-request" ? (
                          <GitPullRequest className="h-5 w-5 text-contrack-blue-800 mt-1" />
                        ) : (
                          <MessageSquare className="h-5 w-5 text-contrack-blue-800 mt-1" />
                        )}
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <h3 className="font-medium">{contribution.title}</h3>
                            <Badge variant="outline" className={getStatusColor(contribution.status)}>
                              {contribution.status}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                            <span className="text-sm text-muted-foreground font-medium">
                              {contribution.repo}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {contribution.date}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <MessageSquare className="h-3.5 w-3.5" />
                              {contribution.comments} comments
                            </span>
                            {contribution.type === "pull-request" && (
                              <>
                                <span className="text-xs text-green-600 flex items-center">
                                  +{contribution.additions}
                                </span>
                                <span className="text-xs text-red-600 flex items-center">
                                  -{contribution.deletions}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <GitPullRequest className="mx-auto h-12 w-12 text-muted-foreground/50 mb-3" />
                  <h3 className="text-lg font-medium mb-1">No contributions found</h3>
                  <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
                </div>
              )}

              {filteredContributions.length > itemsPerPage && (
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                      />
                    </PaginationItem>
                    
                    {[...Array(totalPages)].map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink 
                          onClick={() => setCurrentPage(i + 1)}
                          isActive={currentPage === i + 1}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

export default Page
