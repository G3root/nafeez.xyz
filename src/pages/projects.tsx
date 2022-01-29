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
    <MainLayout
      title="Nafees Nazik – my projects"
      description="List of projects I recently worked on and working on"
      image="https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dpaco%26title%3DNafeez.xyz%2B-%2BMy%2BProjects%26p%3D2gO1PEZsZXgKICBzeD17ewogICAgYWxpZ25JdGVtczogImZsZXgtZW5kIiwKICAgIGJnOiBxdWVyeS5iZywKICAgIGNvbG9yOiBxdWVyeS5jb2xvciwKICAgIHBhZGRpbmc6IDgwLAogIH19Cj4KICA8RmxleAogICAgc3g9e3sKICAgICAganVzdGlmeUNvbnRlbnQ6ICJzcGFjZS1iZXR3ZWVuIiwKICAgICAgYWxpZ25JdGVtczogImZsZXgtZW5kIiwKICAgIH19CiAgPgogICAgPExpbmsKICAgICAgaHJlZj0iaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDcwMCZkaXNwbGF5PWJsb2NrIgogICAgICByZWw9InN0eWxlc2hlZXQiCiAgICAvPgogICAgPFRleHQKICAgICAgc3g9e3sKICAgICAgICBmb250RmFtaWx5OiAiSW50ZXIiLAogICAgICAgIGZvbnRTaXplOiA1NSwKICAgICAgICBmb250V2VpZ2h0OiA3MDAsCiAgICAgICAgbGluZUhlaWdodDogIjEwMCUiLAogICAgICAgIGxldHRlclNwYWNpbmc6ICItNHB4IiwKICAgICAgICBmbGV4OiAiMCAxIDYwJSIsCiAgICAgIH19CiAgICA-CiAgICAgIHtxdWVyeS50aXRsZX0KICAgIDwvVGV4dD4KICAgIDxGbGV4IHN4PXt7IGdhcDogMjAsIGFsaWduSXRlbXM6ICJjZW50ZXIiIH19PgogICAgICA8Qm94CiAgICAgICAgc3g9e3sKICAgICAgICAgIGJhY2tncm91bmRJbWFnZToKICAgICAgICAgICAgImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDIzNiwgNzIsIDE1MyksIHJnYigyMzksIDY4LCA2OCksIHJnYigyNDUsIDE1OCwgMTEpKSIsCiAgICAgICAgICBoZWlnaHQ6ICI0MHB4IiwKICAgICAgICAgIHdpZHRoOiAiNDBweCIsCiAgICAgICAgICBib3JkZXJSYWRpdXM6ICI5OTk5cHgiCiAgICAgICAgfX0KICAgICAgLz4KICAgICAgPFRleHQgc3g9e3sgZm9udFdlaWdodDogNTAwIH19Pk5hZmVlcyBOYXppazwvVGV4dD4KICAgIDwvRmxleD4KICA8L0ZsZXg-CjwvRmxleD47Cg"
    >
      <div className="mx-auto mb-16 flex w-full max-w-7xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-800 dark:text-white md:text-5xl">
          Projects
        </h1>

        <p className="mb-4 max-w-lg text-gray-600 dark:text-gray-400">
          List of projects I recently worked on and working on.
        </p>

        {data.map((items) => (
          <div key={items.id}>
            <h2 className="mt-10 text-2xl  font-extrabold tracking-tight ">
              {items.title}
            </h2>
            <div className="my-2 mt-6 grid w-full grid-cols-1 gap-4  sm:grid-cols-3 ">
              {items.Projects.length > 0
                ? items.Projects.map((project) => (
                    <div
                      key={project.id}
                      className="border-grey-200 w-full rounded border bg-white p-4 dark:border-gray-700 dark:bg-gray-900"
                    >
                      <a
                        className="flex  space-x-2"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-left text-lg font-bold  text-gray-900 dark:text-gray-100">
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
