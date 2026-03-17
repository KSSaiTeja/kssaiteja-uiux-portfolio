import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectNav from "@/components/ProjectNav";
import SavartCaseStudy from "@/components/SavartCaseStudy";
import { getNextProject, WORK_SLUGS } from "@/data/works";

const DEFAULT_COVER = {
  src: "https://framerusercontent.com/images/mw8yD9Znq3Y7eMlEljXwi5g196c.png?scale-down-to=1024&width=2464&height=1856",
  alt: "Project cover",
  width: 2464,
  height: 1856,
};

async function getProjectData(slug: string) {
  const nextProject = getNextProject(slug);

  if (slug === "savart-investment-platform") {
    return {
      caseStudy: true as const,
      title: "Savart Investment Platform",
      summary: "Redesigning a SEBI-registered advisory platform for clarity, trust & product-led growth.",
      category: "Fintech",
      coverImage: DEFAULT_COVER,
      content: null,
      nextProject,
    };
  }

  const work = WORK_SLUGS.find((w) => w.slug === slug);
  if (!work) {
    return {
      caseStudy: false as const,
      title: "Project Title",
      summary: "Project summary goes here.",
      category: "Category",
      coverImage: DEFAULT_COVER,
      content: `<p>Content for ${slug}.</p>`,
      nextProject,
    };
  }

  return {
    caseStudy: false as const,
    title: work.title,
    summary: "Project summary.",
    category: "Category",
    coverImage: DEFAULT_COVER,
    content: `<p>Content for this project.</p>`,
    nextProject,
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectData(slug);

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#FAFCFD] font-sans">
      <header className="w-full flex justify-center py-6">
        <Header />
      </header>
      <main className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center pt-20 pb-10">
          {project.caseStudy ? (
            <SavartCaseStudy />
          ) : (
            <ProjectDetails
              title={project.title}
              summary={project.summary}
              category={project.category}
              coverImage={project.coverImage}
              content={project.content ?? undefined}
            />
          )}
        </div>
        <div className="w-full flex flex-col items-center pb-20">
          <ProjectNav nextProject={project.nextProject ?? undefined} />
        </div>
      </main>
      <footer className="w-full flex justify-center py-8">
        <Footer />
      </footer>
    </div>
  );
}
