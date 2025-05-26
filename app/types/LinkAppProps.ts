export default interface LinkAppProps {
  link: string;          // Required string type for URL
  name: string;          // Required string type for display text
  target?: '_self' | '_blank'; // Optional with specific allowed values
  rel?: string;          // Optional string type
}