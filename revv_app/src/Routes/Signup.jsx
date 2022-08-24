import {Input,Stack,Button} from "@chakra-ui/react"
function Signup(){
    return (
        <div>
        <Stack spacing={3}>
         
         <Input placeholder="enter email" />
         <Input placeholder="enter password" />
         <Button>SignUp</Button>
        </Stack>
         </div>
    )
}
export default Signup