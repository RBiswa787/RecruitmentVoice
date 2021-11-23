import React from 'react'
import SpeechSynthesisExample from './useSpeechSynthesis';
import SpeechRecognitionExample from './useSpeechRecognition';
import { GlobalStyles, Row} from './shared.js';


const VoiceSupport = () => {
    return (
        <div>
    <GlobalStyles />
    <Row>
      <SpeechSynthesisExample />
      <SpeechRecognitionExample />
    </Row>
  </div>
    )
}

export default VoiceSupport

