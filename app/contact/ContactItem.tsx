"use client";
import { Button } from "@/components/ui/button";
import {
  Check,
  Copy,
  ExternalLink,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";

const iconMap = {
  user: UserIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  mapPin: MapPinIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
};

interface ContactDetail {
  label: string;
  value: string;
  icon?: keyof typeof iconMap;
  href?: string;
  copyable?: boolean;
}

const ContactItem = ({ label, value, icon, href, copyable }: ContactDetail) => {
  const IconComponent = icon ? iconMap[icon] : undefined;
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const handleCopy = (valueToCopy: string) => {
    navigator.clipboard.writeText(valueToCopy);
    setCopiedValue(valueToCopy);
    setTimeout(() => {
      setCopiedValue(null);
    }, 2000); // Reset after 2 seconds
  };

  return (
    <div
      key={label}
      className="relative rounded-lg border bg-background p-4 pr-12 transition-shadow hover:shadow-md"
    >
      {copyable && (
        <Button
          size="icon"
          variant="ghost"
          onClick={() => handleCopy(value)}
          className="absolute top-2 right-2 h-7 w-7"
        >
          {copiedValue === value ? (
            <Check className="h-4 w-4 text-emerald-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          <span className="sr-only">Copy {label}</span>
        </Button>
      )}
      <div className="flex items-start gap-4">
        <div className="h-5 w-5 text-muted-foreground">
          {IconComponent && <IconComponent className="h-5 w-5" />}
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold leading-tight text-foreground">
            {label}
          </p>
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm text-primary transition-colors hover:underline"
            >
              <span className="break-all">{value}</span>
              <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />
            </a>
          ) : (
            <p className="text-sm text-muted-foreground break-all">{value}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
