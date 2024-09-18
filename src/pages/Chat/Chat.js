import { useEffect, useState } from 'react';
import { authAPI, userApis } from '~/utils/api';

function Chat() {
    const [viewChat, setViewChat] = useState();
    useEffect(() => {
        const fetchViewChat = async () => {
            try {
                const response = await authAPI().get(userApis.chat);
                setViewChat(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchViewChat();
    }, []);

    if (!viewChat) {
        <div>Đang tải</div>
    } 
    return <div dangerouslySetInnerHTML={{ __html: viewChat }} />;
}

export default Chat;
