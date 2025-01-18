import { FileObject } from "./FileExplorerMain";
import "./FileExplorerMain.css";

export default function FileList({ fileList, level }) {
  const directories = fileList.filter((fileItem) => fileItem.children);
  directories.sort((a, b) => a.name.localeCompare(b.name));

  console.log("directories", directories);

  const nonDirectories = fileList.filter((fileItem) => !fileItem.children);
  nonDirectories.sort((a, b) => a.name.localeCompare(b.name));

  console.log("nonDirectories", nonDirectories);

  const items = [...directories, ...nonDirectories];

  return (
    <ul className="file-list">
      {items.map((file) => (
        <FileObject key={file.id} file={file} level={level} />
      ))}
    </ul>
  );
}
