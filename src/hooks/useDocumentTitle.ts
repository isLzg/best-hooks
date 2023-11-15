import { useEffect, useRef } from "react";

export interface Options {
  restoreOnUnmount?: boolean
  restoreToDefaultTitle?: boolean
}

const DEFAULT_OPTIONS: Options = {
  restoreOnUnmount: true,
  restoreToDefaultTitle: false
}

const DEFAULT_TITLE = 'Best Hooks'

const useDocumentTitle = (newTitle: string, options: Options = DEFAULT_OPTIONS) => {
  const prevTitleRef = useRef<string>(document?.title);

  useEffect(() => {
    const originalTitle = prevTitleRef.current;

    if (originalTitle !== newTitle) {
      document.title = newTitle
    }

    return () => {
      if (options.restoreOnUnmount) {
        if (options.restoreToDefaultTitle) {
          document.title = DEFAULT_TITLE
        } else {
          document.title = originalTitle
        }
      }
    }
  }, [newTitle, options])
}

export default useDocumentTitle