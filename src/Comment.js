import UserInfo from "./UserInfo";
// const comment = {
//     date : new Date(),
//     text : 'I hope you enjoy learning react!',
//     author : {
//         name : 'hello kitty',
//         avatarUrl : 'http://placekitten.com/g/64/64'
//     }
// };
function formatDate(date) {
    return date.toLocaleDateString();
}

// function Comment(props) {
//     return (
//         <div className="Comment">
//         <div className="UserInfo">
//           <img className="Avatar"
//             src={props.author.avatarUrl}
//             alt={props.author.name}
//           />
//           <div className="UserInfo-name">
//             {props.author.name}
//           </div>
//         </div>
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
// }

function Comment(props) {
    return (
        <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
}

export default Comment;
