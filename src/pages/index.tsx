import { IconLink, Link } from '@/components/common';
import { MainLayout } from '@/components/layout';
import type { NextPage } from 'next';
import { FiGithub, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';
const Home: NextPage = () => {
  return (
    <MainLayout>
      <section id="hero" className="pt-8 md:pt-32">
        <div className="mx-auto max-w-7xl ">
          <div className="grid grid-cols-12 gap-5 font-black">
            <div className="col-start-1 col-end-12 lg:col-end-10">
              <h1 className="text-5xl font-bold tracking-tighter text-gray-800 dark:text-white md:mb-3 md:text-7xl">
                Developer who loves creating interfaces and websites.
              </h1>
            </div>
          </div>
          <p className=" mt-10 max-w-3xl text-gray-600  dark:text-gray-400">
            Hey, I’m Nafees Nazik, a Sri Lanka based software developer. I
            specialise in React and javascript ecosystem, which are mainly open
            source and publicly available on my{' '}
            <Link href="https://github.com/G3root">GitHub</Link>.
          </p>
          <div className="mt-5 flex items-center space-x-4">
            <IconLink
              aria-label="my twitter account link"
              className="text-blue-600 hover:bg-blue-200 dark:text-blue-400 dark:hover:bg-blue-800"
              href="https://twitter.com/nfs__21"
            >
              <FiTwitter aria-hidden className="h-5 w-5" />
            </IconLink>
            <IconLink
              aria-label="my github account link"
              className="text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
              href="https://github.com/G3root"
            >
              <FiGithub aria-hidden className="h-5 w-5" />
            </IconLink>
            <IconLink
              aria-label="my instagram account link"
              className="text-red-600 hover:bg-red-200 dark:text-red-400 dark:hover:bg-red-800"
              href="https://www.instagram.com/nafees_nazik.21/"
            >
              <FiInstagram aria-hidden className="h-5 w-5" />
            </IconLink>

            <IconLink
              aria-label="my email address"
              className="text-yellow-600 hover:bg-yellow-200 dark:text-yellow-400 dark:hover:bg-yellow-800"
              href="mailto:nafeesnazik21@gmail.com"
            >
              <FiMail aria-hidden className="h-5 w-5" />
            </IconLink>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
