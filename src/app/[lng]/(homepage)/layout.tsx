import { ReactNode } from "react";
import styles from "@/app/[lng]/(homepage)/layout.module.scss";
import { MainHeader } from "@/app/[lng]/components/(layout)/Header";
import Footer from "@/app/[lng]/components/(layout)/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <>
      <MainHeader />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
