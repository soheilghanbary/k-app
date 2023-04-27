import { useState } from "react";
import styles from "~/styles/table.module.scss";
import projectData from "~/utils/project.json";

export default function DetailTable() {
  const [project, setProject] = useState(projectData);
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>نوع دستگاه</th>
            <th>تاریخ</th>
            <th>نام مشتری</th>
            <th>کارشناس</th>
            <th>فروشنده</th>
            <th>شماره</th>
            <th>آدرس</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td contentEditable onBlur={e => setProject({ ...project, type: e.currentTarget.innerHTML })}>{project.type}</td>
            <td contentEditable>{project.date}</td>
            <td contentEditable>{project.name}</td>
            <td contentEditable>{project.expert}</td>
            <td contentEditable>{project.seller}</td>
            <td contentEditable>{project.phone}</td>
            <td contentEditable>{project.address}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
