import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectNav from "@/components/ProjectNav";

// This is a placeholder - replace with your actual data fetching logic
// For now, it returns default/placeholder data
async function getProjectData(slug: string) {
  // TODO: Replace this with actual CMS/data fetching
  // This could be from a database, CMS API, or static files
  
  // Placeholder data - replace with your actual data source
  const defaultProject = {
    title: "Project Title",
    summary: "Project summary goes here. This is a description of the project and what it entails.",
    category: "Category",
    coverImage: {
      src: "https://framerusercontent.com/images/mw8yD9Znq3Y7eMlEljXwi5g196c.png?scale-down-to=1024&width=2464&height=1856",
      alt: "Project cover",
      width: 2464,
      height: 1856,
    },
    content: `
      <p>This is the project content area. You can add rich text content here.</p>
      <p>Replace this with your actual project content when you upload projects.</p>
    `,
    nextProject: {
      title: "Next Project",
      slug: "next-project",
    },
  };

  // In a real implementation, you would:
  // 1. Fetch from CMS/database based on slug
  // 2. Get the next project in sequence (or based on your ordering logic)
  // 3. Return the project data with nextProject info
  // 4. Handle 404 if project not found
  // Example:
  // const project = await fetchProjectBySlug(slug);
  // const allProjects = await fetchAllProjects();
  // const currentIndex = allProjects.findIndex(p => p.slug === slug);
  // const nextProject = currentIndex < allProjects.length - 1 
  //   ? allProjects[currentIndex + 1] 
  //   : null;
  
  return defaultProject;
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const project = await getProjectData(params.slug);

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#f8f6f3] font-sans">
      <header className="w-full flex justify-center py-6">
        <Header />
      </header>
      <main className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center pt-20 pb-10">
          <ProjectDetails
            title={project.title}
            summary={project.summary}
            category={project.category}
            coverImage={project.coverImage}
            content={project.content}
          />
        </div>
        <div className="w-full flex flex-col items-center pb-20">
          <ProjectNav nextProject={project.nextProject} />
        </div>
      </main>
      <footer className="w-full flex justify-center py-8">
        <Footer />
      </footer>
    </div>
  );
}
