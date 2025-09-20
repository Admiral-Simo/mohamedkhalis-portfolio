import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { siteConfig } from "@/config/site";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  isLatest: boolean;
}

const ExperiencePage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Experience</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          You need it to get the job, but the job’s what gives it!
        </PageHeaderHeading>
        <PageHeaderDescription>
          My journey as a developer has been a deep dive into both the clean
          logic of algorithms and the beautiful chaos of production code. My
          internship at GM-SOFT was the perfect training ground for this; one
          day, I'd be carefully optimizing a legacy ERP system, hunting down
          performance bottlenecks in code older than my career. The next, I'd be
          architecting a greenfield OCR scanner from scratch with Golang and
          Angular.
        </PageHeaderDescription>
        <PageHeaderDescription>
          This experience taught me the most valuable lesson: a great engineer
          isn't just someone who can solve a LeetCode problem, but someone who
          can debug a cryptic legacy function and build the elegant solution
          that replaces it. It's about having the patience to fix what's broken
          and the vision to build what comes next.
        </PageHeaderDescription>
      </PageHeader>

      <ol className="relative mb-10 border-gray-200 border-s dark:border-gray-700">
        {siteConfig.experiences.map(
          ({
            period,
            role,
            company,
            isLatest,
            description,
          }: ExperienceItem) => (
            <li className="mb-10 ms-6" key={period}>
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {role} · {company}
                {isLatest && (
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
                    Latest
                  </span>
                )}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {period}
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {description}
              </p>
            </li>
          ),
        )}
      </ol>

      <Pager
        prevHref="/education"
        nextHref="/certificates"
        prevTitle="Education"
        nextTitle="Certificates"
      />
    </>
  );
};
export default ExperiencePage;
