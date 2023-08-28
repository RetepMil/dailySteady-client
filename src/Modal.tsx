import { PropsWithChildren } from "react";

type BasicModalProps = {
  preventClose: boolean;
  visible: boolean;
  setVisible: (isClose: boolean) => void;
};

function BasicModal({
  preventClose = false,
  visible,
  setVisible,
  children,
}: PropsWithChildren<BasicModalProps>) {
  return visible ? (
    <div
      className="fixed left-0 top-0 h-screen w-full flex justify-center items-center bg-black bg-opacity-70 text-center"
      onClick={preventClose ? () => setVisible(false) : undefined}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-96 h-64 bg-slate-100 rounded-lg p-4 flex flex-col mb-6"
      >
        {children}
      </div>
    </div>
  ) : null;
}

export default BasicModal;
