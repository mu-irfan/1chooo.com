'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import PageContent from '@/components/page-content';
import Projects from '@/components/portfolio/projects';
import { initializeCustomSelect, filterItemsByCategory } from '@/lib/utils/dom-utils';

const Portfolio = () => {
  const pathname = usePathname();

  useEffect(() => {
    initializeCustomSelect(filterItemsByCategory);
  }, []);

  return (
    <PageContent
      documentTitle='Portfolio'
      title="Hugo's Portfolio"
      page="portfolio"
      pathName={pathname}
    >
      <Projects />
    </PageContent>
  );
}

export default Portfolio;
