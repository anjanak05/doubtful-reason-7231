import { createContext, useRef, useState, useEffect } from 'react';

export const NationContext = createContext();

export const NationContextComponent = ({ children }) => {
  const NationTitle = useRef("NATION")
  const [nationLeftData, setNationLeftData] = useState([]);
  const [nationMiddleData, setNationMiddleData] = useState([]);
  const [nationRightData, setNationRightData] = useState([]);

  const leftnation = async () => {
    try {
      let res = await fetch(`http://localhost:9090/nationLeftData`);
      res = await res.json();
      setNationLeftData(res);
    } catch (err) {
      console.log(err);
    }
  };

  const midnation = async () => {
    try {
      let res = await fetch(`http://localhost:9090/nationMiddleData`);
      res = await res.json();
      setNationMiddleData(res);
    } catch (err) {
      console.log(err);
    }
  };

  const rightnation = async () => {
    try {
      let res = await fetch(`http://localhost:9090/nationRightData`);
      res = await res.json();
      setNationRightData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    leftnation();
    midnation();
    rightnation();
  }, []);
  
return(
    <NationContext.Provider value={ {nationRightData,nationLeftData, nationMiddleData ,NationTitle} }>{children}</NationContext.Provider>
)
};


export const SouthContext = createContext();

export const SouthContextComponent = ({ children }) => {
  const SouthTitle = useRef("SOUTH")
  const [southLeftData, setSouthLeftData] = useState([]);
  const [southMiddleData, setSouthMiddleData] = useState([]);
  const [southRightData, setSouthRightData] = useState([]);

  const leftSouth = async () => {
    try {
      let res = await fetch(`http://localhost:9090/southLeftData`);
      res = await res.json();
      setSouthLeftData(res);
    } catch (err) {
      console.log(err);
    }
  };

  const midSouth = async () => {
    try {
      let res = await fetch(`http://localhost:9090/southMiddleData`);
      res = await res.json();
      setSouthMiddleData(res);
    } catch (err) {
      console.log(err);
    }
  };

  const rightSouth = async () => {
    try {
      let res = await fetch(`http://localhost:9090/southRightData`);
      res = await res.json();
      setSouthRightData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    leftSouth();
    midSouth();
    rightSouth();
  }, []);

    
return(
    <SouthContext.Provider value={{southLeftData, southMiddleData,southRightData, SouthTitle}}>{children}</SouthContext.Provider>
)
};

// <---------------------------title-------------------------------------------------------->



