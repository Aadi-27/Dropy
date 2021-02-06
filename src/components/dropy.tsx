import { useEffect, useState } from "react";

export default function Dropy() {
  const [dropzone, setDropzone] = useState<HTMLElement>();
  const [droparea, setDroparea] = useState<HTMLElement>();

  useEffect(() => {
    const dropZone = document.getElementById("drop-zone");
    const dropArea = document.getElementById("drop-area");
    if (dropZone && dropArea) {
      setDropzone(dropZone);
      setDroparea(dropArea);
    }
  }, []);

  const dropHandler = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    if (dropzone?.contains(event.target)) {
      dropzone.style.visibility = "hidden";
      dropzone.style.border = "unset";
      dropzone.style.backgroundColor = "unset";
    }
    console.log(event.dataTransfer.files);
  };

  if (droparea) {
    droparea.ondrop = dropHandler;
  }

  const dragOverHandler = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    if (dropzone) {
      dropzone.style.visibility = "visible";
      dropzone.style.border = "4px dashed #a9a9a9";
      dropzone.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    }
  };

  if (droparea) {
    droparea.ondragover = dragOverHandler;
  }

  const onClick = (event: any) => {
    console.log(`click`);
  };

  if (droparea) {
    droparea.onclick = onClick;
  }

  const handleDragLeave = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    if (dropzone?.contains(event.target)) {
      dropzone.style.visibility = "hidden";
      dropzone.style.border = "unset";
      dropzone.style.backgroundColor = "unset";
    }
  };

  if (droparea) {
    droparea.ondragleave = handleDragLeave;
  }
  return <div id="drop-zone" />;
}
