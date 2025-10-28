declare module "image-size" {
  import { Buffer } from "node:buffer";

  export type ImageInfo = {
    width?: number;
    height?: number;
    type?: string;
  };

  export interface ImageSizeOptions {
    cache?: boolean;
  }

  type Callback = (error: Error | null, result: ImageInfo) => void;

  function imageSize(input: string | Buffer, callback: Callback): void;
  function imageSize(input: string | Buffer): ImageInfo;

  export default imageSize;
}
