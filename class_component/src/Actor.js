import React from "react"
class Actor extends React.Component{
    film_actor={
        a_name:"rajni",
        a_age:70,
        a_sal:"100cr"
    }
    render(){
        return <div>
   {JSON.stringify(this.film_actor)}     
<h1>Name:{this.film_actor.a_name}</h1>
<h1>Age:{this.film_actor.a_age}</h1>
<h1>Salary:{this.film_actor.a_sal}</h1>
        </div>
    }
}
export default Actor