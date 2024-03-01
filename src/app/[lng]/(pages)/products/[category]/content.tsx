"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

import {
  SortByType,
  SortByDirection,
} from "@/app/[lng]/(pages)/products/[category]/types";

import { Stroke } from "@/app/[lng]/components/(common)/Stroke";
import { SortModal } from "@/app/[lng]/components/(products)/SortModal";
import CategoriesButtons from "@/app/[lng]/components/(products)/CategoriesButtons";
import { Tags } from "@/app/[lng]/components/(products)/Tags";
import { SortSection } from "@/app/[lng]/components/(products)/SortSection";
import { Heading } from "@/app/[lng]/components/(products)/Heading";
import { ViewSelector } from "@/app/[lng]/components/(products)/ViewSelector";
import { TrailerDetailList } from "@/app/[lng]/components/(products)/TrailerDetail/List";
import { TrailerDetailGrid } from "@/app/[lng]/components/(products)/TrailerDetail/Grid";

import { sortAndFilter } from "@/app/[lng]/(pages)/products/[category]/sortAndFilter";

import useProductsData from "@/app/[lng]/(pages)/products/[category]/hooks/useProductsData";
import { useSortSelect } from "@/app/[lng]/(pages)/products/[category]/hooks/useSortSelect";
import { useTagSelect } from "@/app/[lng]/(pages)/products/[category]/hooks/useTagSelect";
import { useViewPreference } from "@/app/[lng]/(pages)/products/[category]/hooks/useViewPreference";
import { useScrollToElement } from "@/app/[lng]/(pages)/products/[category]/hooks/useScrollToElement";

import styles from "@/app/[lng]/(pages)/products/[category]/products.module.scss";
import { Loader } from "@/app/[lng]/components/(common)/Loader";

export const Content = ({ category }: { category: string }) => {
  const t = useTranslations("products");
  const router = useRouter();
  const searchParams = useSearchParams();

  const sortType = searchParams.get("sortType");
  const sortDirection = searchParams.get("sortDirection");
  const [sortBy, setSortBy] = useState<{
    type: SortByType;
    direction: SortByDirection;
  }>({
    type: (sortType as SortByType) || "",
    direction: (sortDirection as SortByDirection) || "",
  });
  const searchTags = searchParams.getAll("tag");

  const [selectedTags, setSelectedTags] = useState<string[]>(
    searchTags && searchTags.length > 0 ? (searchTags as string[]) : []
  );

  const [showModal, setShowModal] = useState(false);
  const scrollHereRef = useRef<HTMLDivElement>(null);

  const { handleSort } = useSortSelect({
    selectedTags,
    sortBy,
    setSortBy,
    category,
    router,
  });
  const { handleTagClick } = useTagSelect({
    sortBy,
    selectedTags,
    setSelectedTags,
    category,
    router,
  });

  const { view, handleViewChange } = useViewPreference();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        localStorage.setItem("scrollState", "manual");
      }, 600);
    }
  }, []);

  useScrollToElement(scrollHereRef, category, view);

  const { data, isLoading, error, isPaused } = useProductsData();

  if (isPaused) {
    return (
      <p>
        {t("Data couldn't be downloaded")}
        <br />
        {t("Check your internet connection")}
      </p>
    );
  }

  if (isLoading && !data) {
    return <Loader />;
  }

  if (error) {
    return (
      <p>
        {t("Data couldn't be downloaded")}
        <br />
        {t("Please try again later")}
      </p>
    );
  }

  const productsArray = data?.products || [];

  const searchedProducts = sortAndFilter({
    productsArray,
    sortBy,
    selectedTags,
    category,
  });

  const tagsData = data ? data.tags : [];

  return (
    <>
      <CategoriesButtons category={category} />
      <div>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <Tags
              handleTagClick={handleTagClick}
              tags={tagsData}
              selectedTags={selectedTags}
            />
            <ViewSelector handleViewChange={handleViewChange} view={view} />
          </div>
          <SortSection
            sortBy={sortBy}
            setSortBy={setSortBy}
            handleSort={handleSort}
            selectedTags={selectedTags}
            setShowModal={setShowModal}
          />
        </div>
        <SortModal
          showModal={showModal}
          setShowModal={setShowModal}
          sortBy={sortBy}
          setSortBy={setSortBy}
          setSelectedTags={setSelectedTags}
          handleSort={handleSort}
        />
      </div>
      <div ref={scrollHereRef}></div>
      <Stroke
        src={"/assets/strokes/stroke.svg"}
        additionalClass={styles.stroke}
      />
      <Heading category={category as keyof Messages["products"]["heading"]} />
      {view === "grid" ? (
        <TrailerDetailGrid products={searchedProducts} />
      ) : (
        <TrailerDetailList products={searchedProducts} />
      )}
    </>
  );
};
