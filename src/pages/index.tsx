import { IconLink, Link } from '@/components/common';
import { MainLayout } from '@/components/layout';
import type { NextPage } from 'next';
import { FiGithub, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';
const Home: NextPage = () => {
  return (
    <MainLayout>
      <section id="hero" className="pt-8 md:pt-32">
        <div className="max-w-7xl mx-auto ">
          <div className="font-black grid grid-cols-12 gap-5">
            <div className="col-start-1 col-end-12 lg:col-end-10">
              <h1 className="text-5xl md:text-7xl tracking-tighter font-bold md:mb-3 text-gray-800 dark:text-white">
                Developer who loves creating interfaces and websites.
              </h1>
            </div>
          </div>
          <p className=" text-gray-600 dark:text-gray-400 max-w-3xl  mt-10">
            Hey, I’m Nafees Nazik, a Sri Lanka based software developer. I
            specialise in React and javascript ecosystem, which are mainly open
            source and publicly available on my{' '}
            <Link href="https://github.com/G3root" isExternal>
              GitHub
            </Link>
            .
          </p>
          <div className="flex items-center mt-5 space-x-4">
            <IconLink
              className="text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800"
              href="https://twitter.com/nfs__21"
            >
              <FiTwitter className="h-5 w-5" />
            </IconLink>
            <IconLink
              className="text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
              href="https://github.com/G3root"
            >
              <FiGithub className="h-5 w-5" />
            </IconLink>
            <IconLink
              className="text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-800"
              href="https://www.instagram.com/nafees_nazik.21/"
            >
              <FiInstagram className="h-5 w-5" />
            </IconLink>

            <IconLink
              className="text-yellow-600 dark:text-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800"
              href="mailto:nafeesnazik21@gmail.com"
            >
              <FiMail className="h-5 w-5" />
            </IconLink>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
