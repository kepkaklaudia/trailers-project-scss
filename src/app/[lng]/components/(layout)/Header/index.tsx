"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Background } from "@/app/[lng]/components/(layout)/Header/Background";
import { NavigationContent } from "@/app/[lng]/components/(layout)/Header/NavigationContent";
import { handleScroll } from "@/app/[lng]/components/(layout)/Header/functions";
import styles from "@/app/[lng]/components/(layout)/Header/header.module.scss";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollHandler = () => {
      handleScroll({
        backgroundRef,
        headerRef,
        setIsScrolled,
      });
    };

    scrollHandler();

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isScrolled]);

  return (
    <>
      <Navbar
        variant="dark"
        expand="md"
        fixed="top"
        collapseOnSelect
        ref={headerRef}
        className={`${isScrolled ? styles.navbar__scrolled : ""} ${
          styles.navbar
        }`}
      >
        <NavigationContent />
      </Navbar>
      <Background />
    </>
  );
};

export const MainHeader = () => {

  return (
    <>
      <Navbar
        variant="dark"
        expand="md"
        fixed="top"
        collapseOnSelect
        className={`${styles.navbar__scrolled} ${
          styles.navbar
        }`}
      >
        <NavigationContent />
      </Navbar>
      <Background />
    </>
  );
};

export const SolidHeader = () => (
  <>
    <Navbar
      variant="dark"
      expand="md"
      fixed="top"
      collapseOnSelect
      className={`${styles.navbar__scrolled} ${styles.navbar}`}
    >
      <NavigationContent />
    </Navbar>
  </>
);
