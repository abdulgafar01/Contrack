// types/index.ts
export interface GitHubUser {
    login: string;
    avatar_url: string;
    name: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
    repos_url: string;
    followers_url: string;
    url: string;
  }
  
  export interface GitHubRepo {
    id: number;
    name: string;
    html_url: string;
  }
  
  export interface GitHubFollower {
    id: number;
    login: string;
    html_url: string;
  }