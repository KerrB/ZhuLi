module.exports = {
    No_English: (message, badUser) => {
        message.delete();
        message.channel.send(badUser.username + " 네놈! 어디서 감히 영어 사용 금지령을 어기는것이냐! 나는 이곳의 운영자로서 한국어를 제외한 모든 언어의 사용을 금한다!").then(msg => {msg.delete({timeout: 40000})}).catch(console.error);



        }
};