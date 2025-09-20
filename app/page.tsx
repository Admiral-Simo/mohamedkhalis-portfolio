import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { siteConfig } from "@/config/site";

const IntroductionPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About {siteConfig.name}</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          More than just a title—let’s dive deeper!
        </PageHeaderHeading>
        <PageHeaderDescription>
          As a Full-Stack Software Engineer, my passion lies in the architecture
          of building scalable, reliable applications and creating truly magical
          web experiences. My core expertise is in developing powerful backend
          systems with Java and Spring Boot, complemented by dynamic,
          user-centric frontends built with React.js.
        </PageHeaderDescription>

        <PageHeaderDescription>
          My journey is built on a solid foundation of structured learning,
          evidenced by professional certificates from industry leaders like IBM
          (Java) and Meta (React). I quickly translated this knowledge into
          practice during my internship at GM-SOFT , where I co-developed a
          production-level OCR passport scanner using Golang and Angular and
          helped optimize a critical ERP system. This experience solidified my
          ability to work collaboratively and ship reliable software under
          real-world constraints.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Beyond my professional work, I am driven by the challenge of
          engineering elegant solutions to complex problems. This is reflected
          in my personal projects, from architecting a high-performance link
          shortener with a focus on speed and caching to creating a technical
          blog to document and share my learnings. I am eager to join a
          forward-thinking team where I can contribute to building robust
          systems and leave a lasting impact on users' lives.
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/education"
        prevTitle="Introduction"
        nextTitle="Education"
      />
    </>
  );
};
export default IntroductionPage;
