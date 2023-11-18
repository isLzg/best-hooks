import { Dispatch, SetStateAction, useCallback, useState } from "react"

interface Action {
  setValue: Dispatch<SetStateAction<boolean>>
  toggle: () => void
}

const useToggle = (defaultValue: boolean): { value: boolean } & Action => {
  const [value, setValue] = useState<boolean>(defaultValue)

  const toggle = useCallback(() => setValue(b => !b), [])

  return {
    value,
    toggle,
    setValue
  }
}

export default useToggle