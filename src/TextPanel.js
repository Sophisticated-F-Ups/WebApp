import { Button, ChakraProvider } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"

function TextPanel() {
    return (
        <div >

            <Heading as="h2" size="lg" color="gray.500">Transcribed Text</Heading>
            <Button colorScheme="blue">Download Text</Button>

        </div>

    )

}

export default TextPanel