import * as React from 'react';
import {
  ActionId,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarSearch,
  KBarResults,
  useMatches,
  ActionImpl,
  KBarProvider
} from 'kbar';
import { useRouter } from 'next/router';
import {
  FiHome,
  FiEdit3,
  FiStar,
  FiBookmark,
  FiAward,
  FiGithub,
  FiInstagram,
  FiTwitter
} from 'react-icons/fi';
import { HiOutlineColorSwatch } from 'react-icons/hi';

export interface IKbarModalProps {
  children: React.ReactNode;
}

export function KbarModal({ children }: IKbarModalProps) {
  const router = useRouter();

  const actions = [
    {
      id: 'theme',
      name: 'Change theme…',
      keywords: 'interface color dark light',
      section: 'actions',
      icon: <HiOutlineColorSwatch className="h-4 w-4" />
    },
    {
      id: 'home',
      name: 'Home',
      shortcut: ['g', 'h'],
      keywords: 'go to home',
      section: 'Go To',
      perform: () => router.push('/'),
      icon: <FiHome className="h-4 w-4" />
    },
    {
      id: 'guestbook',
      name: 'Guestbook',
      shortcut: ['g', 'u'],
      keywords: 'go to guestbook',
      section: 'Go To',
      perform: () => router.push('/guestbook'),
      icon: <FiEdit3 className="h-4 w-4" />
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['g', 'p'],
      keywords: 'go to projects',
      section: 'Go To',
      perform: () => router.push('/projects'),
      icon: <FiStar className="h-4 w-4" />
    },
    {
      id: 'bookmarks',
      name: 'Bookmarks',
      shortcut: ['g', 'b'],
      keywords: 'go to bookmarks',
      section: 'Go To',
      perform: () => router.push('/bookmarks'),
      icon: <FiBookmark className="h-4 w-4" />
    },
    {
      id: 'nft-gallery',
      name: 'NFT Gallery',
      shortcut: ['g', 'n'],
      keywords: 'go to nft gallery',
      section: 'Go To',
      perform: () => router.push('/uses'),
      icon: <FiAward className="h-4 w-4" />
    },
    {
      id: 'github',
      name: 'Github',
      shortcut: ['f', 'g'],
      keywords: 'go to github',
      section: 'Follow me on',
      perform: () => window.open('https://github.com/G3root', '_blank'),
      icon: <FiGithub className="h-4 w-4" />
    },
    {
      id: 'twitter',
      name: 'Twitter',
      shortcut: ['f', 't'],
      keywords: 'go to twitter',
      section: 'Follow me on',
      perform: () => window.open('https://twitter.com/nfs__21', '_blank'),
      icon: <FiTwitter className="h-4 w-4" />
    },
    {
      id: 'instagram',
      name: 'Instagram',
      shortcut: ['f', 'i'],
      keywords: 'go to instagram',
      section: 'Follow me on',
      perform: () =>
        window.open('https://www.instagram.com/nafees_nazik.21/', '_blank'),
      icon: <FiInstagram className="h-4 w-4" />
    }
  ];
  return (
    <KBarProvider
      options={{
        enableHistory: true,
        disableScrollbarManagement: true
      }}
      actions={actions}
    >
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator className="max-w-screen-sm w-full z-[200]  rounded-lg pointer-events-auto overflow-hidden shadow-2xl bg-gray-50 dark:bg-gray-800">
            <KBarSearch
              placeholder="Type a command or search…"
              className="w-full border-0 outline-none px-4 py-6 bg-transparent "
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}

function RenderResults() {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className="text-xs py-2 px-4  text-gray-400 ">{item}</div>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId as any}
          />
        )
      }
    />
  );
}

const ResultItem = React.forwardRef(
  (
    {
      action,
      active,
      currentRootActionId
    }: {
      action: ActionImpl;
      active: boolean;
      currentRootActionId: ActionId;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const ancestors = React.useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex(
        (ancestor) => ancestor.id === currentRootActionId
      );

      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);

    return (
      <div
        ref={ref}
        className={`cursor-pointer mb-4 flex justify-between items-center px-4 py-3 mx-2 rounded-md text-sm font-medium transition-colors duration-100 ease-linear ${
          active
            ? 'bg-gray-600/5 text-gray-600 dark:text-gray-200 dark:bg-gray-100/5'
            : ' bg-transparent text-gray-400'
        }`}
      >
        <div className="flex items-center gap-2">
          {action.icon && action.icon}
          <div className="flex flex-col">
            <div>
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <React.Fragment key={ancestor.id}>
                    <span className="opacity-50 mr-2">{ancestor.name}</span>
                    <span className="mr-2">&rsaquo;</span>
                  </React.Fragment>
                ))}
              <span>{action.name}</span>
            </div>
            {action.subtitle && (
              <span className="text-sm">{action.subtitle}</span>
            )}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div aria-hidden className="grid grid-flow-col gap-1">
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                style={{
                  background: 'rgba(0 0 0 / .1)'
                }}
                className="px-2 py-1 rounded text-sm font-bold"
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
);
ResultItem.displayName = 'ResultItem';
