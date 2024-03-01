"use client";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { NavDropdown } from "react-bootstrap";
import { LanguageSelector } from "@/app/[lng]/components/(layout)/LanguageSelector";
import { MenuContent } from "@/app/[lng]/components/(layout)/Header/NavigationContent/MenuContent";
import styles from "@/app/[lng]/components/(layout)/Header/NavigationContent/navigationContent.module.scss";

export const NavigationContent = () => {
  const t = useTranslations("layout.header");
  const locale = useLocale();
  const router = useRouter();
  const [show, setShow] = useState(false);

  const showDropdown = () => {
    setShow(true);
  };

  const hideDropdown = () => {
    setShow(false);
  };

  const toggleDropdown = () => {
    router.push(`/${locale}/products/all`);
    setShow(!show);
  };
  const linksContent = [
    { href: `/${locale}/about-us`, text: t("About us") },
    { href: `/${locale}/partners`, text: t("Partners") },
    { href: `/${locale}/downloads`, text: t("Downloads") },
    { href: `/${locale}/contact`, text: t("Contact") },
  ];

  return (
    <div className={styles.wrapper}>
      <Navbar.Brand href={`/${locale}/`}>
        <Image
          src={"/assets/layout/Balhanger_LOGO.svg"}
          height={25}
          width={180}
          className={styles.navbar__logo}
          alt="Logo"
          priority={true}
        />
      </Navbar.Brand>
      <Navbar.Toggle className={styles.navbar__toggle} />
      <Navbar.Collapse className={styles.navbar__collapse}>
        <NavDropdown
          show={show}
          onMouseEnter={showDropdown}
          onMouseLeave={hideDropdown}
          onClick={toggleDropdown}
          className={styles.dropdown}
          title={t("Trailers")}
          id="basic-nav-dropdown"
        >
          <MenuContent />
        </NavDropdown>
        <Nav className={styles.nav}>
          {linksContent.map((linkContent, index) => (
            <Nav.Link
              key={index}
              href={linkContent.href}
              as={Link}
              className={styles.nav__link}
            >
              {linkContent.text}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
      <LanguageSelector />
    </div>
  );
};
