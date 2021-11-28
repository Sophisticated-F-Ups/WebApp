import { Button, ChakraProvider } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import MyUploader from './components/record';

function AudioPanel() {
    return (
        <div >

            <Heading as="h2" size="lg" color="gray.500">Recorded Audio</Heading>
            <MyUploader />

        </div>
    )
}

export default AudioPanel;