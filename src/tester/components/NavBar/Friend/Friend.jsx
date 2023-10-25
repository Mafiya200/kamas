import styleFriend from './styleFriend.module.css';

let Friend = function(props){
  return(<div className={styleFriend.item}>
    <div className={styleFriend.name}>
      {props.name}
    </div>
    <div className={styleFriend.avatar}>
      <div className={styleFriend.image}>
        <img src={props.photo} alt={props.name} />
      </div>
    </div>
  </div>);
}



export default Friend;