import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
 
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '4ebd89aa-6614-48f2-821b-949b83f823d0', 
        props.user.username, 
        props.user.secret
        );
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100%'}} />
        </div>
    )
}

export default ChatsPage