import React,{useState,useEffect} from 'react';
import tw from "twin.macro";
import axios from 'axios';
import styled from "styled-components";

const HomeContainer = styled.div`
  ${tw`
    w-auto
    h-full
    flex
    items-center
    p-2
    pt-12
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `};
`;
// boxContainer
const BoxContainer = styled.div`
  ${tw`
    bg-white
    p-8
    rounded
    shadow-2xl
  `};
`;

// title 
const Ptitle = styled.h1`
  ${tw`
    text-black
    text-xl
    md:text-3xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;
// IpADD text Pragraph
const IpAdd = styled.p`
  ${tw`
    text-xl
    lg:text-2xl
    xl:text-3xl
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
  `};
`;
//detail Info text Pragraph
const Description = styled.p`
  ${tw`
    text-lg
    lg:text-xl
    xl:text-2xl
    sm:max-h-full
    overflow-hidden
    text-gray-800
  `};
`;

const HomePage = () =>{
    const [ip,setIP] = useState('');
    const [ipInfo,setIPInfo] = useState('')
    // create function to load ip address from the public API or use public-ip library 
    const getData = async() =>{
      try{
        const res = await axios.get('https://geolocation-db.com/json/')
        // simple console.log debugger
        console.log (res.status)
        console.log(res.data);
        if(res.status === 200){
          setIP(res.data.IPv4);
          setIPInfo(JSON.stringify(res.data,null,2));  
        }else{
          setIP("Fetching Failed,Please refresh the page")
          setIPInfo('')
        }
      }catch(e){
        setIP("Not a Public IP")
      }
    }
  
    useEffect(() => {
      // passing getData method to the lifecylce
      getData();
    },[])
  
    return (
        <HomeContainer>
          <BoxContainer>
              <Ptitle>Your IP address is:</Ptitle>
              <IpAdd>{ip}</IpAdd>
              <Ptitle>Your IP Location Info</Ptitle>
              <Description>{ipInfo}</Description>
          </BoxContainer>
        </HomeContainer>
    );

}

export default HomePage;