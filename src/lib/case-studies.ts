import {
  type Metric,
  type Chapter,
  type PortfolioItem,
  getStoredPortfolioItems,
  usePortfolioItems,
} from "./portfolio-store";

export type { Metric, Chapter };

export type CaseStudy = PortfolioItem;

export const caseStudies: CaseStudy[] = getStoredPortfolioItems();

export const getCaseStudy = (slug: string): CaseStudy | undefined => {
  const items = getStoredPortfolioItems();
  return items.find((c) => c.slug === slug);
};

export const useCaseStudies = (): CaseStudy[] => {
  return usePortfolioItems();
};
