  function Hero(){
      let name="Stylish star AA"
     let  remuniration="200CR"
     let heroimage="https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGs7z5ctT_xAasuUBphX_n2iPT5S4SqG7iw&usqp=CAU"
      let popularity="king of industry"
      return <div className="container">
          <div className="row">
              <div className="col-md-3">
                  <div className="card">
                      <div className="card-header">
                          <img src={heroimage}/>
                      </div>
                      <div className="card-body">
                         <ul className="list-group">
                             <li className="list-group-item">{name}</li>
                             <li className="list-group-item">{remuniration}</li>
                             <li className="list-group-item">{popularity}</li>
                         </ul>
                      </div>
                  </div>
              </div>
              <div className="col-md-3">
                  <div className="card">
                      <div className="card-header">
                          <img src={heroimage}/>
                      </div>
                      <div className="card-body">
                         <ul className="list-group">
                             <li className="list-group-item">{name}</li>
                             <li className="list-group-item">{remuniration}</li>
                             <li className="list-group-item">{popularity}</li>
                         </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  }
  export default Hero
