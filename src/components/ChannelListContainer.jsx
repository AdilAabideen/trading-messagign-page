import React from 'react' ;
import { ChannelList, useChatContext} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import HospitalIcon from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'

const SideBar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1_inner">
        <img src={HospitalIcon} alt="Hospital" width="33"/>
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1_inner">
        <img src={LogoutIcon} alt="Logout" width="40"  />
      </div>
    </div>
  </div>


);

const Companyheader = () => (
  <div className="channel-list__header">
    <p classname = "channel-list__header__text">Secret Society</p>
  </div>


)

const ChannelListContainer = () => {
  return (
    <>
        <SideBar />
        <div className="channel-list__list__wrapper">
          <Companyheader />

        </div>
    </>
  );
}

export default ChannelListContainer ;