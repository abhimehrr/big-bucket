import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

// Components
import { closeModal } from "../../../utils/closeModal";
import { Toast } from "../../tiny/Dialog";

export default function Share({ shareUrl, close }) {
  const [showAlert, setShowAlert] = useState(false);
  const title =
    "I have created a list that I would like to share with you. Please click on the link below to view the details.";
  const size = 35;

  // Close Modal
  const documentRef = useRef(null);
  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");
    closeModal(documentRef, close);
  }, []);

  return createPortal(
    <div
      ref={documentRef}
      className="flex items-center justify-center fixed top-0 left-0 min-h-screen w-full bg-secondary/70"
    >
      <div className="relative min-w-96 max-w-[450px] p-6 rounded-lg bg-background">
        <div className="absolute right-4 top-3">
          <button
            onClick={() => {
              document.documentElement.classList.remove("overflow-hidden");
              close(false);
            }}
            className="size-8 bg-slate-800 text-slate-200 hover:text-red-500 rounded-full"
          >
            <span className="sr-only">close</span>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <h1 className="font-semibold tracking-wide text-xl sm:text-2xl">
          Share
        </h1>
        <div className="my-6">
          <div className="flex items-center justify-between gap-4">
            <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
              <WhatsappIcon size={size} round />
            </WhatsappShareButton>
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={size} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={title}>
              <XIcon size={size} round />
            </TwitterShareButton>
            <TelegramShareButton url={shareUrl} title={title}>
              <TelegramIcon size={size} round />
            </TelegramShareButton>
            <LinkedinShareButton url={shareUrl}>
              <LinkedinIcon size={size} round />
            </LinkedinShareButton>
            <EmailShareButton url={shareUrl} subject={title} body="body">
              <EmailIcon size={size} round />
            </EmailShareButton>
          </div>
        </div>
        <div className="my-4 py-2 pl-3 pr-10 relative border border-secondary hover:ring hover:ring-primary rounded-md transition-all">
          <input
            type="text"
            onChange={() => {}}
            value={shareUrl}
            readOnly={true}
            className="bg-transparent w-full text-lg text-text/75 border-none outline-none"
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(shareUrl);
              setShowAlert(true);
              setTimeout(() => {
                setShowAlert(false);
              }, 3000);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-lg group"
          >
            <i className="sr-only">copy link</i>
            <i className="fa-regular fa-copy group-hover:scale-110"></i>
          </button>
        </div>
      </div>
      {/* Alert */}
      {showAlert && (
        <Toast title={"Link Copied!"}>
          The shareable link has been successfully copied to the clipboard.
        </Toast>
      )}
    </div>,
    document.getElementById("big-portal")
  );
}
