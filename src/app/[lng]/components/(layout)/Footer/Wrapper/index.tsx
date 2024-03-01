import styles from "@/app/[lng]/components/(layout)/Footer/Wrapper/wrapper.module.scss";
import Link from "next/link";

interface WrapperProps {
  icon?: any;
  href?: string;
  linkText?: string;
  children?: string;
  rel?: string;
  target?: string;
  isMail?: boolean;
}

export const Wrapper: React.FC<WrapperProps> = ({
  icon,
  children,
  href,
  linkText,
  rel,
  target,
  isMail,
}) => (
  <div className={styles.wrapper}>
    {icon && icon}
    {href &&
      (isMail ? (
        <a className={styles.wrapper__link} href={href}>
          {" "}
          {linkText}
        </a>
      ) : (
        <Link
          className={styles.wrapper__link}
          href={href}
          rel={rel}
          target={target}
          prefetch={false}
        >
          {linkText}
        </Link>
      ))}
    {children}
  </div>
);
