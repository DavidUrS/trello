import styled from 'styled-components';

import bg1 from '../../assets/bg-1.jpg';
import bg2 from '../../assets/bg-2.jpg';
import bg3 from '../../assets/bg-3.jpg';
import bg4 from '../../assets/bg-4.jpg';
import bg5 from '../../assets/bg-5.jpg';

const pictureArray = [bg1, bg2, bg3, bg4, bg5];
const randomIndex = Math.floor(Math.random() * pictureArray.length);
const selectedPicture = pictureArray[randomIndex];

const ContainerBg = styled.div`
  top: 0px;
  left: 0px;
  right: 0px;
  margin: 0px;
  bottom: 0px;
  height: 100vh;
  position: absolute;
  display: flex;
  justifycontent: center;
  alignitems: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${selectedPicture});
`;

export default ContainerBg;
