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
    <div className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-0">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
        <Sidebar />

        <main id="resume" className="min-w-0 lg:py-14">
          <div className="space-y-16">
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
