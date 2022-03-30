import React, { Component } from 'react'
import './Bday.css'
export class Bday extends Component {
    state = {
        clear:false,
        datas: [
            {
                id: 1,
                name: 'Bertie Yates',
                age: 29,
                image:
                    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
            },
            {
                id: 2,
                name: 'Hester Hogan',
                age: 32,
                image:
                    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
            },
            {
                id: 3,
                name: 'Larry Little',
                age: 36,
                image:
                    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
            },
            {
                id: 4,
                name: 'Sean Walsh',
                age: 34,
                image:
                    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
            },
            {
                id: 5,
                name: 'Lola Gardner',
                age: 29,
                image:
                    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
            },
        ]


    }
    handleClear=(e)=>{this.setState({clear:true})
this.setState({id:'',name:'',age:'',image:''})
}
    render() {
        
        return (
            <div>
            {!this.state.clear&&(
            <div className='a'>
              
               <h1>{this.state.datas.length} Birthdays Today </h1>
                {this.state.datas.map(data => <div key={data.id}>
                    <div className='d'><img src={data.image} height='100' width={100} />

                        <span>
                            <h3> {data.name}</h3>

                            <h5>{data.age} Years</h5></span>




                    </div>
                </div>
                )}
                <br />
                <div >
                   <button  className='e' onClick={this.handleClear}>Clear All</button>
                </div>
                
                
            </div>)}
            </div>
        )
    }
}

export default Bday