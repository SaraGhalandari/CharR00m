import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { Container , Stack } from "react-bootstrap";
import UserChats from "../chat/UserChat";
import { AuthContext } from "../context/AuthContext";

import.meta.hot
const Chat = () => {

    const {user}=useContext(AuthContext);
    const {userChats , isUserChatsLoading,userChatsError}=useContext(ChatContext);

    console.log("UserChats",userChats);
    return (
    <Container>
        {
            userChats?.length <1 ?null :
            <Stack direction="horizontal" gob={4} className="align-items-start">
            <Stack className="message-box flex-grow-0 pe-3" gob={3}>
                {isUserChatsLoading && <p>Loading chats ...</p>}
                {userChats?.map((chat,index)=>{
                    return(
                        <div key={index}>
                            <UserChats chat={chat}  user={user}/>
                        </div>
                    )
                })}
                </Stack>
            <p>ChatBox</p>
            </Stack>
        }
    </Container>
    )
};
 
export default Chat;