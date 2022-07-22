import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

const Backdrop = (props: any) => {
  return (
    <div
      className="bg-black opacity-75 min-h-screen w-screen fixed"
      onClick={props.onClose}
    ></div>
  );
};
const ModalOverlay = (props: PropsWithChildren) => {
  return (
    <div className="fixed z-20 px-4 w-full top-1/4 ">
      <div className=" mx-auto justify-center bg-white p-8 rounded-lg max-w-3xl w-full top-1/4">
        {props.children}
      </div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props: PropsWithChildren & { onClose: any }) => {
  return (
    <>
      {createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement as HTMLDivElement
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement as HTMLDivElement
      )}
    </>
  );
};
export { Modal };
