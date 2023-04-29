import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface IDetails {
  type: string;
  serial: string;
  name: string;
  date: string;
  phone: string;
  expert: string;
  seller: string;
  address: string;
}

export interface IPackage {
  id: string;
  name: string | undefined;
  receive: string | number;
  returned: string | number;
}

interface IDevice {
  device: {
    type: string;
    serial: string;
    name: string;
    date: string;
    phone: string;
    expert: string;
    seller: string;
    address: string;
    packages: IPackage[];
  };
  setSerial: (serial: string) => void;
  setDetails: (details: IDetails) => void;
  addPackage: () => void;
  removePackage: (id: string) => void;
  changePackageHandler: (p: IPackage) => void;
}

export const useDeviceStore = create<IDevice>((set, get) => ({
  device: {
    type: "KA-831A",
    serial: "12345",
    name: "",
    phone: "",
    expert: "",
    seller: "",
    address: "",
    date: "",
    packages: [],
  },
  setSerial: (serial) => {
    if (serial.length < 5) return
    set(state => ({ device: { ...state.device , serial: serial }}))
  },
  setDetails: (details) =>
    set((state) => ({
      device: { packages: state.device.packages, ...details },
    })),
  addPackage: () =>
    set((state) => ({
      device: {
        ...state.device,
        packages: [
          ...state.device.packages,
          { id: uuidv4(), name: "", receive: "", returned: "" },
        ],
      },
    })),
  removePackage: (id: string) => {
    const list = get().device.packages.filter((p) => p.id !== id);
    return set((state) => ({ device: { ...state.device, packages: list } }));
  },
  changePackageHandler: (p) => {
    const index = get().device.packages.findIndex((item) => item.id === p.id);
    if (index > -1) {
      get().device.packages[index] = p;
      set((state) => ({
        device: { ...state.device, packages: [...get().device.packages] },
      }));
    }
  },
}));
