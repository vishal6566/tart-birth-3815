import {Input,Stack,Button} from "@chakra-ui/react"

function Login(){
    return (
        <div>
       <Stack spacing={3}>
        <Input placeholder="enter name" />
        <Input placeholder="enter email" />
        <Input placeholder="enter password" />
        <Button>Login</Button>
       </Stack>
        </div>
    ) 
}
export default Login