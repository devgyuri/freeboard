import { useMutation } from "@apollo/client";
import { useRef } from "react";
import type { ChangeEvent } from "react";
import { checkValidationImage } from "./Uploads.validation";
import UploadsUI from "./Uploads.presenter";
import type { IUploadsProps } from "./Uploads.types";
import { UPLOAD_FILE } from "./Uploads.queries";
import { Modal } from "antd";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";

export default function Uploads(props: IUploadsProps): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0];
    const isValid = checkValidationImage(file);
    if (!isValid) {
      return;
    }

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data?.uploadFile.url ?? "", props.index);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <UploadsUI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
