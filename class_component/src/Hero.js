import React from "react"
class Hero extends React.Component{
    hero={
        name:"allu arjun",
        age:45,
        salary:"125CR",
        image:"https://www.koimoi.com/wp-content/new-galleries/2022/10/allu-arjuns-pushpa-the-rise-wins-it-big-at-a-recent-award-show-001.jpg"

    }
    render(){
        return <div className="container">
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <div className="card-header"></div>
                    <img src={this.hero.image}/>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">{this.hero.name}</li>
                                <li className="list-group-item">{this.hero.age}</li>  
                                <li className="list-group-item">{this.hero.salary}</li>  
                        </ul>
                    </div>
                </div>
            </div>
        </div>
         

        </div>
    }
}
export default Hero