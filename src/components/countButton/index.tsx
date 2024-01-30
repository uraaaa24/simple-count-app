import { Button } from "@mui/material"
import { MouseEventHandler } from "react"

export const CountButton = (onClick: MouseEventHandler<HTMLButtonElement> | undefined, label: string) => {
    return <Button onClick={onClick}>{label}</Button>
}

export default CountButton
