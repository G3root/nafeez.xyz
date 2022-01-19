import type { NextPage } from 'next';
import { MainLayout } from '@/components/layout';
import type { InferGetStaticPropsType } from 'next';
import { prisma } from '@/lib/prisma';
import { FiExternalLink } from 'react-icons/fi';
export const getStaticProps = async () => {
  const data = await prisma.projectCategory.findMany({
    select: {
      id: true,
      title: true,
      Projects: {
        select: {
          id: true,
          title: true,
          description: true,
          link: true
        }
      }
    }
  });
  return {
    props: { data, revalidate: 60 * 60 * 1 } //revalidate every hour
  };
};

const ProjectsPage = ({
  data
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <MainLayout>
      <div className="flex flex-col items-start justify-center max-w-7xl mx-auto mb-16 w-full">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-800 md:text-5xl dark:text-white">
          Projects
        </h1>

        <p className="mb-4 text-gray-600 dark:text-gray-400 max-w-lg">
          List of projects I recently worked on and working on.
        </p>

        {data.map((items) => (
          <div key={items.id}>
            <h2 className="text-2xl mt-10  font-extrabold tracking-tight ">
              {items.title}
            </h2>
            <div className="mt-6 grid w-full grid-cols-1 gap-4 my-2  sm:grid-cols-3 ">
              {items.Projects.length > 0
                ? items.Projects.map((project) => (
                    <div
                      key={project.id}
                      className="border border-grey-200 dark:border-gray-700 rounded p-4 w-full bg-white dark:bg-gray-900"
                    >
                      <a
                        className="flex  space-x-2"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-lg font-bold text-left  text-gray-900 dark:text-gray-100">
                          {project.title}
                        </span>
                        <div className="mt-1">
                          <FiExternalLink aria-hidden />
                        </div>
                      </a>
                      <p className="mt-1 text-gray-700 dark:text-gray-400">
                        {project.description}
                      </p>
                    </div>
                  ))
                : null}
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;
