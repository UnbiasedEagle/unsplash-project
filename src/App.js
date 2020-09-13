import React,{useState} from 'react';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Collection1 from './components/Collection1'
import Collection2 from './components/Collection2'
import './App.css';

function App() {

  const [collection1,setCollection1]=useState(false)
  const [collection2,setCollection2]=useState(false)

  const onCollection1Click=()=>{
    setCollection1(true);
    setCollection2(false)
  }

  const onCollection2Click = () => {
    setCollection1(false);
    setCollection2(true)
  }

  const getBorderCollection1=()=>{
    if(collection1){
      return {
        borderBottom:'4px solid lightgrey'
      }
    }
    return {}
  }

    const getBorderCollection2=()=>{
    if(collection2){
      return {
        borderBottom:'4px solid lightgrey'
      }
    }
    return {}
  }
  

  return (
    <div className="app">
      <Navbar></Navbar>
        <Banner/>
        <div className="container">
            <div className='app__imagesContainer'>
              <div className="app__imagesCollections">
                <span style={getBorderCollection1()} onClick={onCollection1Click}>Collection 1</span>
                <span style={getBorderCollection2()}  onClick={onCollection2Click}>Collection 2</span>
              </div>
              <div className="app__images">
                  {
                    collection1 &&(
                      <Collection1></Collection1>
                    )
                  }
                  {
                    collection2 && (
                      <Collection2></Collection2>
                    )
                  }
              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
