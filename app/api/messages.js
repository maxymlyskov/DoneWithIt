import client from './client'

const endpoint = '/messages'

const getMessages = () => client.get(endpoint)

const send = (message)=>{
    const data = new FormData();

    data.append('content', message.content);
    data.append('listingId', message.listingId)

    return client.post(endpoint,data)
}
export default {
    send,
    getMessages
}