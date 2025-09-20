import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CertificateItem {
  title: string;
  issuer: string;
  certificateImage: string;
  credentialUrl: string;
}

const CertificatesPage = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1">
        <PageHeader className="mb-10">
          <PageHeaderHeading>Licenses & Certificates</PageHeaderHeading>
          <PageHeaderHeading className="mt-2 text-muted-foreground">
            A commitment to continuous learning and growth.
          </PageHeaderHeading>
          <PageHeaderDescription>
            I believe that learning never stops. To stay sharp and validate my
            skills, I actively pursue certifications from industry leaders. Each
            one represents not just a new skill, but a dedication to mastering
            my craft and delivering high-quality, modern solutions.
          </PageHeaderDescription>
        </PageHeader>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.certificates.map((certificate) => (
            <CertificateCard key={certificate.title} {...certificate} />
          ))}
        </div>
      </div>

      <Pager
        prevHref="/experience"
        nextHref="/projects"
        prevTitle="Experience"
        nextTitle="Projects"
      />
    </div>
  );
};

// A new, cleaner, more direct CertificateCard component
const CertificateCard = ({
  issuer,
  title,
  certificateImage,
  credentialUrl,
}: CertificateItem) => {
  return (
    <article
      className={cn(
        "flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground",
        "transition-transform duration-300 hover:-translate-y-1 hover:shadow-md",
      )}
    >
      {/* 1. Clickable Image Area */}
      <Link
        href={credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-video"
      >
        <Image
          src={certificateImage}
          alt={`Certificate for ${title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      {/* 2. Main Content Area */}
      <div className="flex flex-col flex-1 p-4">
        <div className="flex-1">
          <h3 className="font-semibold dark:text-white text-black">{title}</h3>
        </div>

        {/* 3. Card Footer with Issuer and a Clear Button */}
        <div className="flex items-center justify-between pt-4 mt-auto">
          <p className="text-sm text-muted-foreground">{issuer}</p>
          <Button asChild size="sm" variant="ghost">
            <Link
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View
              <ExternalLink className="ml-1.5 size-3" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default CertificatesPage;
