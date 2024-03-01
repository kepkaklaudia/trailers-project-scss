import styles from "@/app/[lng]/components/(product)/ProductDetails/TechnicalSpecifications/TableRow/tableRow.module.scss";

interface TableRowProps {
  label: string | JSX.Element;
  value: string | JSX.Element;
}

export const TableRow: React.FC<TableRowProps> = ({ label, value }) => (
  <tr className={`${styles.tr}`}>
    <td className={`${styles.td} ${styles.td__first}`} scope="row">
      {label}
    </td>
    <td className={`${styles.td}`}>{value}</td>
  </tr>
);
