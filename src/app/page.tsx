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
    <div className="mx-auto max-w-[1512px] px-6 pt-6 pb-10 lg:py-0 lg:pl-10 lg:pr-0">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,788px)] lg:gap-10">
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
