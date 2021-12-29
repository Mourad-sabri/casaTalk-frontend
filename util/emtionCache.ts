import createCache from "@emotion/cache";

export default function createEmtionCache() {
  return createCache({ key: "css" });
}
