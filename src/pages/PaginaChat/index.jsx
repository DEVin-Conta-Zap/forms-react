
const Contacts = () => {

  return <div style={{width: '100%', height: '100%', background: 'lightblue'}} />
}

const Chat = () => {

  return <div style={{width: '100%', height: '100%', background: 'pink'}}/>
}

const SplitPane = (props) => {

  return (
    <div style={{width: '100%', height: '100vh'}}>
      <div style={{float: 'left', width: '30%', height: '100%'}}>
        {props.left}
      </div>
      <div style={{float: 'left', width: '70%', height: '100%'}}>
        {props.right}
      </div>
    </div>
  )
}


const PaginaChat = () => {
  return (
    <SplitPane 
      left={<Contacts />}
      right={<Chat />}
    />
  )
}

export default PaginaChat;