import {
  ArrowRight,
  Code,
  Briefcase,
  BookOpen,
  User,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

type IconName =
  | "arrow-right"
  | "code"
  | "briefcase"
  | "book-open"
  | "user"
  | "github"
  | "linkedin"
  | "twitter";

interface IconProps {
  name: IconName;
  className?: string;
}

export default function Icon({ name, className = "" }: IconProps) {
  const icons = {
    "arrow-right": ArrowRight,
    code: Code,
    briefcase: Briefcase,
    "book-open": BookOpen,
    user: User,
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  };

  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={className} />;
}
