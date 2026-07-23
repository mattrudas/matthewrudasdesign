import Sidebar from "@/components/Sidebar";
import ProjectItem from "@/components/ProjectItem";
import AboutHashRedirect from "@/components/AboutHashRedirect";
import SiteHeader from "@/components/SiteHeader";
import { projects, site } from "@/lib/content";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    worksFor: { "@type": "Organization", name: site.company },
    email: `mailto:${site.email}`,
  };

  return (
    <div className="pb-10 lg:pb-0">
      <AboutHashRedirect />

      <div className="grid gap-12 px-6 lg:grid-cols-2 lg:gap-10 lg:px-0">
        {/* Nav in the left column so the work feed can start flush at the top */}
        <div className="lg:pl-6">
          <SiteHeader pathname="/" />
          <Sidebar />
        </div>

        <main id="resume" className="min-w-0 lg:pb-[72px]">
          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectItem key={project.slug} project={project} />
            ))}
          </div>
        </main>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
