import { Dispatch, SetStateAction, useCallback, useState } from "react"

interface Action {
  setValue: Dispatch<SetStateAction<boolean>>
  setTrue: () => void
  setFalse: () => void
  toggle: () => void
}

const useBoolean = (defaultValue: boolean = false): { value: boolean } & Action => {
  const [value, setValue] = useState<boolean>(defaultValue)

  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])
  const toggle = useCallback(() => setValue(b => !b), [])

  return {
    value,
    setValue,
    setTrue,
    setFalse,
    toggle
  }
}

export default useBoolean