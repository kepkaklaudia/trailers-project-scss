import { ReactNode } from "react";

import styles from "@/app/[lng]/partners/layout.module.scss";
import { SolidHeader } from "@/app/[lng]/components/(layout)/Header";
import Footer from "@/app/[lng]/components/(layout)/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <>
      <SolidHeader />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
