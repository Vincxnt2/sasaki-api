declare module "sasaki-api" {
  export class ImageClient {
    public getImage(imageTag: String): string
    public getTags(): string[]
  }
}