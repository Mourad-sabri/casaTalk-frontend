export type PostedIn = "profile" | "page" | "group";

export interface PostHeaderProps {
  avatar_url?: string;
  first_name: string;
  last_name: string;
  isAdmin: boolean;
  created_at: string;
  isSponored: boolean;
  isfollowed: boolean;
}
