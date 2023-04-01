import type {
  PageObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints"

export type Props = {
  allPosts: PageObjectResponse | PartialPageObjectResponse[]
}
