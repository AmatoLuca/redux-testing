export interface CounterState {
  counter: number;
}

interface User {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

interface InfoUser {
  name: string;
  surname: string;
  age: number;
  employee: string;
}

export interface Info {
  user: InfoUser;
  stack: string[];
}
