"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { NavDropdown } from "react-bootstrap";
import styles from "@/app/[lng]/components/(layout)/Header/NavigationContent/MenuContent/menuContent.module.scss";

export const MenuContent = () => {
  const t = useTranslations("layout.header");
  const locale = useLocale();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    setScreenWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (screenWidth === 0) {
    return null;
  }

  const menuItems = [
    {
      id: 1,
      href: `/${locale}/products/luggage`,
      imageSrc: "/assets/categories/luggage.webp",
      alt: "luggage",
      title: t("Luggage"),
    },
    {
      id: 2,
      href: `/${locale}/products/car-transporters`,
      imageSrc: "/assets/categories/car-transporters.webp",
      alt: "car-transporters",
      title: t("Car transporters"),
    },
    {
      id: 3,
      href: `/${locale}/products/boat`,
      imageSrc: "/assets/categories/boat.webp",
      alt: "boat",
      title: t("Boat / Motorcycle"),
    },
    {
      id: 4,
      href: `/${locale}/products/special`,
      imageSrc: "/assets/categories/special.webp",
      alt: "special",
      title: t("Special / Building"),
    },
  ];

  return (
    <>
      {screenWidth > 767.98 ? (
        <div className={styles.container}>
          <div className={styles.content}>
            {menuItems.map((item) => (
              <NavDropdown.Item
                key={item.id}
                className={styles.item}
                href={item.href}
              >
                <Image
                  className={styles.image}
                  width={235}
                  height={165}
                  alt={item.alt}
                  src={item.imageSrc}
                />
                <p className={styles.title}>{item.title}</p>
              </NavDropdown.Item>
            ))}
          </div>
        </div>
      ) : (
        <>
          {menuItems.map((item) => (
            <NavDropdown.Item key={item.id} href={item.href}>
              {item.title}
            </NavDropdown.Item>
          ))}
        </>
      )}
    </>
  );
};
