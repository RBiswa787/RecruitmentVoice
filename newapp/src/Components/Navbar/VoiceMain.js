import React from 'react'
import { VoiceButtonInner } from './VoiceBoxInner'
import { VoiceButtonMiddle } from './VoiceBoxMiddle'
import { VoiceButtonOuter } from './VoiceButton'

const VoiceMain = () => {
    return (
        <VoiceButtonOuter>
            <VoiceButtonMiddle>
                <VoiceButtonInner>
                </VoiceButtonInner>
            </VoiceButtonMiddle>
        </VoiceButtonOuter>
    )
}

export default VoiceMain
