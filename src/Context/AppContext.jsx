import { createContext, useRef, useState, useEffect } from 'react';

export const NationContext = createContext();
export const NationContextComponent = ({ children }) => {
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

  const NationTitle = useRef('NATION');

  return (
    <NationContext.Provider
      value={{ NationTitle, nationLeftData, nationMiddleData, nationRightData }}
    >
      {children}
    </NationContext.Provider>
  );
};

export const SouthContext = createContext();
export const SouthContextComponent = ({ children }) => {
  const SouthTitle = useRef('SOUTH');
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
  return (
    <SouthContext.Provider
      value={{ southLeftData, southMiddleData, southRightData, SouthTitle }}
    >
      {children}
    </SouthContext.Provider>
  );
};

// <---------------------------Top Section End-------------------------------------------------------->
// <------------------------------------------Mid Section Start------------------------------------------>

export const TelanganaNewsBigBoxContext = createContext();
export const TelanganaNewsBigBoxContextComponent = ({ children }) => {
  const [telanganaBigNewss, setTelanganaBigNewss] = useState([]);
  const telanganaTitle = useRef('TELANGANA');

  const telanganaBigNews = async () => {
    try {
      let res = await fetch(`http://localhost:9090/telanganaNewsBigBox`);
      res = await res.json();
      setTelanganaBigNewss(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    telanganaBigNews();
  }, []);
  return (
    <TelanganaNewsBigBoxContext.Provider
      value={{ telanganaBigNewss, telanganaTitle }}
    >
      {children}
    </TelanganaNewsBigBoxContext.Provider>
  );
};

export const TelanganaNewsSmallBoxContext = createContext();
export const TelanganaNewsSmallBoxContextComponent = ({ children }) => {
  const [telanganaSmallNewss, setTelanganaSmallNewss] = useState([]);

  const telanganaSmallNews = async () => {
    try {
      let res = await fetch(`http://localhost:9090/telanganaNewsSmallBox`);
      res = await res.json();
      setTelanganaSmallNewss(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    telanganaSmallNews();
  }, []);
  return (
    <TelanganaNewsSmallBoxContext.Provider value={telanganaSmallNewss}>
      {children}
    </TelanganaNewsSmallBoxContext.Provider>
  );
};

export const PoliticsBigBoxContext = createContext();
export const PoliticsNewsBigBoxContextComponent = ({ children }) => {
  const [politicsBigNewss, setPoliticsBigNewss] = useState([]);
  const politicsTitle = useRef('POLITICS');

  const politicsBigNews = async () => {
    try {
      let res = await fetch(`http://localhost:9090/politicsNewsBigBox`);
      res = await res.json();
      setPoliticsBigNewss(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    politicsBigNews();
  }, []);
  return (
    <PoliticsBigBoxContext.Provider value={{ politicsBigNewss, politicsTitle }}>
      {children}
    </PoliticsBigBoxContext.Provider>
  );
};

export const PoliticsNewsSmallBoxContext = createContext();
export const PoliticsNewsSmallBoxContextComponent = ({ children }) => {
  const [politicsSmallNewss, setPoliticsSmallNewss] = useState([]);

  const politicsSmallNews = async () => {
    try {
      let res = await fetch(`http://localhost:9090/politicsNewsSmallBox`);
      res = await res.json();
      setPoliticsSmallNewss(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    politicsSmallNews();
  }, []);
  return (
    <PoliticsNewsSmallBoxContext.Provider value={politicsSmallNewss}>
      {children}
    </PoliticsNewsSmallBoxContext.Provider>
  );
};

export const CurrentAffBigBoxContext = createContext();
export const CurrentAffNewsBigBoxContextComponent = ({ children }) => {
  const [currentAffBigNewss, setCurrentAffBigNewss] = useState([]);
  const currentAffTitle = useRef('CURRENT AFFAIRS');

  const currentAffBigNews = async () => {
    try {
      let res = await fetch(`http://localhost:9090/curretnAffairNewsBigBox`);
      res = await res.json();
      setCurrentAffBigNewss(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    currentAffBigNews();
  }, []);
  return (
    <CurrentAffBigBoxContext.Provider
      value={{ currentAffBigNewss, currentAffTitle }}
    >
      {children}
    </CurrentAffBigBoxContext.Provider>
  );
};

export const CurrentAffNewsSmallBoxContext = createContext();
export const CurrentAffNewsSmallBoxContextComponent = ({ children }) => {
  const [currentAffSmallNewss, setCurrentAffSmallNewss] = useState([]);

  const currentAffSmallNews = async () => {
    try {
      let res = await fetch(`http://localhost:9090/curretnAffairNewsSmallBox`);
      res = await res.json();
      setCurrentAffSmallNewss(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    currentAffSmallNews();
  }, []);
  return (
    <CurrentAffNewsSmallBoxContext.Provider value={currentAffSmallNewss}>
      {children}
    </CurrentAffNewsSmallBoxContext.Provider>
  );
};

export const CrimeBigBoxContext = createContext();
export const CrimeNewsBigBoxContextComponent = ({ children }) => {
  const [crimeBigNewss, setCrimeBigNewss] = useState([]);
  const crimeTitle = useRef('CRIME');

  const crimeBigNews = async () => {
    try {
      let res = await fetch(`http://localhost:9090/crimeNewsBigBox`);
      res = await res.json();
      setCrimeBigNewss(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    crimeBigNews();
  }, []);
  return (
    <CrimeBigBoxContext.Provider value={{ crimeBigNewss, crimeTitle }}>
      {children}
    </CrimeBigBoxContext.Provider>
  );
};

export const CrimeNewsSmallBoxContext = createContext();
export const CrimeNewsSmallBoxContextComponent = ({ children }) => {
  const [crimeSmallNewss, setCrimeSmallNewss] = useState([]);

  const crimeSmallNews = async () => {
    try {
      let res = await fetch(`http://localhost:9090/crimeNewsSmallBox`);
      res = await res.json();
      setCrimeSmallNewss(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    crimeSmallNews();
  }, []);
  return (
    <CrimeNewsSmallBoxContext.Provider value={crimeSmallNewss}>
      {children}
    </CrimeNewsSmallBoxContext.Provider>
  );
};

export const OtherBigBoxContext = createContext();
export const OtherNewsBigBoxContextComponent = ({ children }) => {
  const [otherBigNewss, setOtherBigNewss] = useState([]);
  const otherTitle = useRef('IN OTHER NEWS');

  const otherBigNews = async () => {
    try {
      let res = await fetch(`http://localhost:9090/otherNationNewsBigBox`);
      res = await res.json();
      setOtherBigNewss(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    otherBigNews();
  }, []);
  return (
    <OtherBigBoxContext.Provider value={{ otherBigNewss, otherTitle }}>
      {children}
    </OtherBigBoxContext.Provider>
  );
};

export const OtherNewsSmallBoxContext = createContext();
export const OtherNewsSmallBoxContextComponent = ({ children }) => {
  const [otherSmallNewss, setOtherSmallNewss] = useState([]);

  const otherSmallNews = async () => {
    try {
      let res = await fetch(`http://localhost:9090/otherNationNewsSmallBox`);
      res = await res.json();
      setOtherSmallNewss(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    otherSmallNews();
  }, []);
  return (
    <OtherNewsSmallBoxContext.Provider value={otherSmallNewss}>
      {children}
    </OtherNewsSmallBoxContext.Provider>
  );
};

// <-----------------------------------fekfce--------->



export const TamilBigBoxContext = createContext();
export const TamilNewsBigBoxContextComponent = ({ children }) => {
  const [tamilBigNewss, setTamilBigNewss] = useState([]);
  const tamilTitle = useRef('TAMIL NADU');

  const tamilBigNews = async () => {
    try {
      let res = await fetch(`http://localhost:9090/tamilNewsBigBox`);
      res = await res.json();
      setTamilBigNewss(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    tamilBigNews();
  }, []);
  return (
    <TamilBigBoxContext.Provider value={{ tamilBigNewss, tamilTitle }}>
      {children}
    </TamilBigBoxContext.Provider>
  );
};

export const TamilNewsSmallBoxContext = createContext();
export const TamilNewsSmallBoxContextComponent = ({ children }) => {
  const [tamilSmallNewss, setTamilSmallNewss] = useState([]);

  const tamilSmallNews = async () => {
    try {
      let res = await fetch(`http://localhost:9090/tamilNewsSmallBox`);
      res = await res.json();
      setTamilSmallNewss(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    tamilSmallNews();
  }, []);
  return (
    <TamilNewsSmallBoxContext.Provider value={tamilSmallNewss}>
      {children}
    </TamilNewsSmallBoxContext.Provider>
  );
};

export const AndhraBigBoxContext = createContext();
export const AndhraNewsBigBoxContextComponent = ({ children }) => {
  const [andhraBigNewss, setAndhraBigNewss] = useState([]);
  const andhraTitle = useRef('ANDHRA PRADESH');

  const andhraBigNews = async () => {
    try {
      let res = await fetch(`http://localhost:9090/andhraNewsBigBox`);
      res = await res.json();
      setAndhraBigNewss(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    andhraBigNews();
  }, []);
  return (
    <AndhraBigBoxContext.Provider
      value={{ andhraBigNewss, andhraTitle }}
    >
      {children}
    </AndhraBigBoxContext.Provider>
  );
};

export const AndhraNewsSmallBoxContext = createContext();
export const AndhraNewsSmallBoxContextComponent = ({ children }) => {
  const [andhraSmallNewss, setAndhraSmallNewss] = useState([]);

  const andhraSmallNews = async () => {
    try {
      let res = await fetch(`http://localhost:9090/andhraNewsSmallBox`);
      res = await res.json();
      setAndhraSmallNewss(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    andhraSmallNews();
  }, []);
  return (
    <AndhraNewsSmallBoxContext.Provider value={andhraSmallNewss}>
      {children}
    </AndhraNewsSmallBoxContext.Provider>
  );
};

export const KeralaBigBoxContext = createContext();
export const KeralaNewsBigBoxContextComponent = ({ children }) => {
  const [keralaBigNewss, setKeralaBigNewss] = useState([]);
  const keralaTitle = useRef('KERALA');

  const keralaBigNews = async () => {
    try {
      let res = await fetch(`http://localhost:9090/keralaNewsBigBox`);
      res = await res.json();
      setKeralaBigNewss(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    keralaBigNews();
  }, []);
  return (
    <KeralaBigBoxContext.Provider value={{ keralaBigNewss, keralaTitle }}>
      {children}
    </KeralaBigBoxContext.Provider>
  );
};

export const KeralaNewsSmallBoxContext = createContext();
export const KeralaNewsSmallBoxContextComponent = ({ children }) => {
  const [keralaSmallNewss, setKeralaSmallNewss] = useState([]);

  const keralaSmallNews = async () => {
    try {
      let res = await fetch(`http://localhost:9090/keralaNewsSmallBox`);
      res = await res.json();
      setKeralaSmallNewss(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    keralaSmallNews();
  }, []);
  return (
    <KeralaNewsSmallBoxContext.Provider value={keralaSmallNewss}>
      {children}
    </KeralaNewsSmallBoxContext.Provider>
  );
};

export const KarnatkBigBoxContext = createContext();
export const KarnatkNewsBigBoxContextComponent = ({ children }) => {
  const [karnatkBigNewss, setKarnatkBigNewss] = useState([]);
  const karnatkTitle = useRef('KARNATAKA');

  const karnatkBigNews = async () => {
    try {
      let res = await fetch(`http://localhost:9090/karnatkNewsBigBox`);
      res = await res.json();
      setKarnatkBigNewss(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    karnatkBigNews();
  }, []);
  return (
    <KarnatkBigBoxContext.Provider value={{ karnatkBigNewss, karnatkTitle }}>
      {children}
    </KarnatkBigBoxContext.Provider>
  );
};

export const KarnatkNewsSmallBoxContext = createContext();
export const KarnatkNewsSmallBoxContextComponent = ({ children }) => {
  const [karnatkSmallNewss, setKarnatkSmallNewss] = useState([]);

  const karnatkSmallNews = async () => {
    try {
      let res = await fetch(`http://localhost:9090/karnatkNewsSmallBox`);
      res = await res.json();
      setKarnatkSmallNewss(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    karnatkSmallNews();
  }, []);
  return (
    <KarnatkNewsSmallBoxContext.Provider value={karnatkSmallNewss}>
      {children}
    </KarnatkNewsSmallBoxContext.Provider>
  );
};

export const GalleryRightContext = createContext();
export const GalleryRightContextComponent = ({children})=>{
  const [gallery, setGallery] = useState([])
  const galleryRight = async () => {
    try {
      let res = await fetch(`http://localhost:9090/galleryRight`);
      res = await res.json();
      setGallery(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    galleryRight();
  }, []);
return (
  <GalleryRightContext.Provider value={gallery}>
{children}
  </GalleryRightContext.Provider>
)
}
