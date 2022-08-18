import React from "react";
import { useCallback, useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
//更新 useRef 是 side Effect 的行為，所以記得寫在 useEffect 或 event handler 裡面
export default function TextEditor() {
	const wrapperRef = useCallback((wrapper) => {
		if (wrapper == null) return;
		wrapper.innerHTML = "";
		const editor = document.createElement("div");
		wrapper.append(editor);
		new Quill(editor, { theme: "snow" });
	}, []);
	return <div id="container" ref={wrapperRef}></div>;
}
