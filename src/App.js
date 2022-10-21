import React from "react";

const title = "blog post";
const body = "this is my blog post";
const comments = [
  { id: 1, text: "comment one" },
  { id: 2, text: "comment two" },
  { id: 3, text: "comment three" },
];

const showComments = true;
const loding = false;
function App() {
  // return React.createElement('div',
  // {className:'container'},
  //     React.createElement('h1',{},'My app'))
  // if(!loding){
    const comments_box=(<div className="comments">
    <h3> comments ({comments.length})</h3>
    <ul>
      {comments.map((comments, index) => (
        <li key={index}>{comments.text}</li>
      ))}
    </ul>
  </div>)



  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {showComments && comments_box}
    </div>
  );
}

// return(
// <div className="container">
//      <h1>{title.toUpperCase()}</h1>
//         <p>{body}</p>

//     <div className="comments">
//         <h3> comments ({comments.length})</h3>
//         <ul>{
//                 comments.map((comments,index)=>(
//                     <li key={index}>{comments.text}</li>
//                 ))
//             }
//         </ul>
//     </div>
//  </div>
// )}

// }

export default App;
