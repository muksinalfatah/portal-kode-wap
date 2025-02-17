/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_AREA_SERVICE_BASE_URL: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }