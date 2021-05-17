import React from 'react'
import { TextCount } from './style'


export const Text = ({ text, size, mini, small, color, width, padding, textAlign }) => {
    const s = !!size? size: "20px"
    const m = !!mini? mini: "16px"
    const sm = !!small? small: "14px"
    const c = !!color? color: "#666666"
    const w = !!width? width: "900px"
    const p = !!padding? padding: "10px 0px"
    const t = !!textAlign? textAlign: "center"

    return (
        <TextCount
            size={s}
            mini={m}
            small={sm}
            color={c}
            width={w}
            padding={p}
            textAlign={t}
        >
                {text}
        </TextCount>
    )
}