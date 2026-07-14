import Sidebar from "@/components/Sidebar";
import ProjectItem from "@/components/ProjectItem";
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
    <div className="px-6 pt-6 pb-10 lg:px-0 lg:py-0">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
        <Sidebar />

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
