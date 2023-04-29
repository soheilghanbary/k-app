import { useDeviceStore } from "~/contexts/device";
import styles from "~/styles/table.module.scss";
import { useState } from "react";

export default function DetailTable() {
  const { device, setDetails, setSerial } = useDeviceStore();
  const [editableData, setEditableData] = useState(device);

  const handleContentChange = (e: any) => {
    setEditableData((prevState) => ({
      ...prevState,
      [e.target.dataset.key]: e.target.innerText,
    }));
  };

  const handleBlur = () => {
    setDetails(editableData);
  };

  return (
    <>
      <h1 className="mb-8 text-2xl text-foreground-secondary">
        سریال :{" "}
        <span
          onInput={(e) => setSerial(e.currentTarget.innerText)}
          contentEditable
          suppressContentEditableWarning={true}
        >
          {device.serial}
        </span>
      </h1>
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
          <tr onBlur={handleBlur}>
            <td
              contentEditable
              suppressContentEditableWarning={true}
              data-key="type"
              onInput={handleContentChange}
            >
              {device.type}
            </td>
            <td
              contentEditable
              suppressContentEditableWarning={true}
              data-key="date"
              onInput={handleContentChange}
            >
              {device.date}
            </td>
            <td
              contentEditable
              suppressContentEditableWarning={true}
              data-key="name"
              onInput={handleContentChange}
            >
              {device.name}
            </td>
            <td
              contentEditable
              suppressContentEditableWarning={true}
              data-key="expert"
              onInput={handleContentChange}
            >
              {device.expert}
            </td>
            <td
              contentEditable
              suppressContentEditableWarning={true}
              data-key="seller"
              onInput={handleContentChange}
            >
              {device.seller}
            </td>
            <td
              contentEditable
              suppressContentEditableWarning={true}
              data-key="phone"
              onInput={handleContentChange}
            >
              {device.phone}
            </td>
            <td
              contentEditable
              suppressContentEditableWarning={true}
              data-key="address"
              onInput={handleContentChange}
            >
              {device.address}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
