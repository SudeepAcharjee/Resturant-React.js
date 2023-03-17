import React from 'react'
import '../App.css'
import '../index.css'
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Image from './images.jpeg';
export default function figure() {
  return (
 <>
   <div className='container'>
    <div className='item1'>
     <img src={Image} className="App-logo" alt="logo" Hi />
    <h2 className='head2'>Item1</h2>
    <div className='bt1'>
    <Button as="input" type="button" value="Input" />{' '}
    </div>
    </div>
    <div className='item2'>
    <img src={Image} className="App-logo" alt="logo" Hi />
    </div>
    <h2 className='head3'>Item1</h2>
    <div className='bt2'>
    <Button as="input" type="button" value="Input" />{' '}
    
    </div>
    </div>

{/* <img src={Image} className="App-logo"/>  
    <img src={Image} className="App-logo"/> 
    <img src={Image} className="App-logo"/>
    <img src={Image} className="App-logo"/>
    <img src={Image} className="App-logo"/>  
    <img src={Image} className="App-logo"/>    */}
  </> 
  ); 
}
