import { Link } from '@/components/common';
import { MainLayout } from '@/components/layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-start md:h-[80vh] max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl  mb-1 text-black dark:text-white font-cal">
              Nafees Nazik
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              A self taught developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Hey, I am Nafees Nazik, a software developer from sri lanka. i
              work Mostly with React and javascript ecosystem, which are open
              source and publicly available on{' '}
              <Link href="https://github.com/G3root" isExternal>
                GitHub
              </Link>
              .
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              You can find me on{' '}
              <Link href="https://github.com/G3root" isExternal>
                GitHub
              </Link>
              ,{' '}
              <Link href="https://twitter.com/nfs__21" isExternal>
                Twitter
              </Link>
              ,{' '}
              <Link
                href="https://www.instagram.com/nafees_nazik.21/"
                isExternal
              >
                Instagram
              </Link>{' '}
              or mail me at{' '}
              <Link href="mailto:nafeesnazik21@gmail.com" isExternal>
                nafeesnazik21@gmail.com
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
