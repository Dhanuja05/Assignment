import React,{useState}from 'react'
import item1 from './Pics/butterpan.jpg';
import item2 from './Pics/double.jpg';
import item3 from './Pics/milk.jpeg';
import item4 from './Pics/country.jpg';
import item5 from './Pics/burger.jpg';
import item6 from './Pics/oreo.jpg';
import item7 from './Pics/bacon.jpeg';
import item8 from './Pics/classic.jpeg';
import item9 from './Pics/couple.jpg';


function Content() {

    const [datas,setDatas]=useState( [
        {
          id: 1,
          title: 'Buttermilk Pancakes',
          category: 'Breakfast',
          price: 15.99,
          img: item1,
          desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed" ,
        },
        {
          id: 2,
          title: 'Dinner Double',
          category: 'Lunch',
          price: 13.99,
          img: item2,
          desc: "Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",
        },
        {
          id: 3,
          title: 'Godzilla Milkshake',
          category: 'Shakes',
          price: 6.99,
          img:item3,
          desc: 'Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
        },
        {
          id: 4,
          title: 'Country Delight',
          category: 'Breakfast',
          price: 20.99,
          img: item4,
          desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut" ,
        },
        {
          id: 5,
          title: 'Egg Attack',
          category: 'Lunch',
          price: 22.99,
          img: item5,
          desc: "Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up ",
        },
        {
          id: 6,
          title: 'Oreo Dream',
          category: 'Shakes',
          price: 18.99,
          img: item6,
          desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
        },
        {
          id: 7,
          title: 'Bacon Overflow',
          category: 'Breakfast',
          price: 8.99,
          img: item7,
          desc: "Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird "},       
        {
          id: 8,
          title: 'American Classic',
          category: 'Lunch',
          price: 12.99,
          img: item8,
          desc: 'On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  '
        },
        {
          id: 9,
          title: 'Quarantine Buddy',
          category: 'Shakes',
          price: 16.99,
          img: item9,
          desc: 'Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
        }
      ]);

      const[Datanew,setDatanew]=useState(datas)
      const category = datas.map(data=>data.category)
      const uniquecategory=[...new Set(category)]
      uniquecategory.unshift('All')
      console.log(uniquecategory)
      const handleTab=(u)=>{
            console.log(u)
            if(u === 'All'){
              setDatanew(datas)
              return
            }
            const filteredData=datas.filter(data =>data.category===u)
            setDatanew(filteredData)
      }

  return (

    <div>
      <center><div className='d-flex justify-content-evenly col-md-3 color '>
        {uniquecategory.map((u,i)=><span key={i} onClick={()=>handleTab(u) } className='color1 px-2 my-3'>{u}</span>)}
        </div></center>
      <br/>
      <br/>

      
      <div className='container'>
    <div className='row'>
        
           {Datanew.map(data => <div className=' col-12 col-md-6 mb-5'> 
           <div className='row'><div className='borders col-sm-8 col-md-5 '>
             <img src={data.img} alt='food' width='100%' height='150' className='rounded'/> 
             </div>
           <div className='col-md-6' >
               <div className='d-flex justify-content-between'>
          <span className='colrs'> {data.title} </span>
          <span className='colr'>${data.price }</span> 
    
          </div>
         <div className='lines'>

         </div>

          <div className='cont'>
              {data.desc}
              </div>
          </div>
          </div>
               </div>)}
    </div>
    </div>
    </div>
  )
}

export default Content
