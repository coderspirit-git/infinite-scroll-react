


function Comment({item: { guid, title, description, permaLink, StoryImage }}) {
    return (
        <div className="col-sm-4 my-2" >
      <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
        <div className="card-body">
          <h5 className="card-title text-left h4"> 
          <a href={permaLink.web} className="title" target="_blank"> {title}</a>
          </h5>
        
         <img className="imgfit" src={StoryImage}/>
          <p className="card-text">{description}</p>
          <hr/>
          <p className="card-text text-center">Id No: {guid}</p>
         
        </div>
      </div>
    </div>
    )
}

export default Comment
