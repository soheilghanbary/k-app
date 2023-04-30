import styles from "~/styles/table.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { api } from "~/utils/api";

export default function DetailTable() {
  const router = useRouter();
  const serial_number = router.query.serial as string;
  const { data } = api.device.get.useQuery(serial_number || "");
  const [editableData, setEditableData] = useState<any>({});
  const utils = api.useContext()
  const { mutate: mutateSerialNumber } = api.device.setSerial.useMutation({
    onSuccess(res) {
      utils.device.invalidate()
      router.push(res.serial)
    }
  });

  const { mutateAsync } = api.device.update.useMutation({
    onSuccess(res) {
      console.log(res)
    }
  });

  const handleContentChange = (e: any) => {
    setEditableData((prevState: any) => ({
      ...prevState,
      [e.target.dataset.key]: e.target.innerText,
    }));
  };

  useEffect(() => {
    if (data !== null && data !== undefined) {
      setEditableData(data)
    }
  },[data])

  if (!data) return

  const handleBlur = async () => await mutateAsync({ id: data?.id , ...editableData })

  return (
    <>
      <h1 className="mb-8 text-2xl text-foreground-secondary">
        سریال :{" "}
        <span
          onBlur={(e) => mutateSerialNumber({ id: data.id , serial: e.currentTarget.innerText })}
          contentEditable
          onKeyDown={e => {
            e.keyCode === 13 && mutateSerialNumber({ id: data.id , serial: e.currentTarget.innerText })
            e.keyCode === 13 && e.preventDefault()
          }}
          suppressContentEditableWarning={true}
        >
          {data.serial}
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
              onKeyDown={e => {
                e.keyCode === 13 && mutateAsync({ id: data.id , ...editableData })
                e.keyCode === 13 && e.preventDefault()
              }}
            >
              {data.type}
            </td>
            <td
              contentEditable
              suppressContentEditableWarning={true}
              data-key="date"
              onInput={handleContentChange}
            >
              {data.date}
            </td>
            <td
              contentEditable
              suppressContentEditableWarning={true}
              data-key="name"
              onInput={handleContentChange}
            >
              {data.name}
            </td>
            <td
              contentEditable
              suppressContentEditableWarning={true}
              data-key="expert"
              onInput={handleContentChange}
            >
              {data.expert}
            </td>
            <td
              contentEditable
              suppressContentEditableWarning={true}
              data-key="seller"
              onInput={handleContentChange}
            >
              {data.seller}
            </td>
            <td
              contentEditable
              suppressContentEditableWarning={true}
              data-key="phone"
              onInput={handleContentChange}
            >
              {data.phone}
            </td>
            <td
              contentEditable
              suppressContentEditableWarning={true}
              data-key="address"
              onInput={handleContentChange}
            >
              {data.address}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
